// Vercel serverless proxy to OJS REST API.
// Hides the API token, bridges HTTPS (frontend) -> HTTP (OJS), avoids CORS.
// Path segments are captured by a rewrite in vercel.json as ?p=segment/segment
// so a single-file serverless function reliably handles any nested path
// (workaround for catch-all [...path].ts not matching deep paths on some
// Vercel deployments).

import type { VercelRequest, VercelResponse } from "@vercel/node";

const OJS_BASE_URL = (process.env.OJS_BASE_URL || "http://204.216.215.234/ojs").replace(/\/$/, "");
const OJS_JOURNAL_PATH = process.env.OJS_JOURNAL_PATH || "iei";
// Strip whitespace and surrounding quotes that sneak in when env vars are pasted.
const OJS_API_TOKEN = (process.env.OJS_API_TOKEN || "").trim().replace(/^["']|["']$/g, "");

const CACHE_SECONDS = 300;
const DEBUG = process.env.OJS_PROXY_DEBUG === "1";

const PATH_PREFIX = "/api/ojs/";
const RESERVED_QUERY_KEYS = new Set(["p", "path", "...path"]);

function extractApiPath(req: VercelRequest): string {
  const p = req.query.p;
  if (typeof p === "string" && p) return p.replace(/^\/+|\/+$/g, "");
  if (Array.isArray(p) && p.length) return p.join("/").replace(/^\/+|\/+$/g, "");

  const rawUrl = req.url || "";
  const qi = rawUrl.indexOf("?");
  const path = qi >= 0 ? rawUrl.slice(0, qi) : rawUrl;
  if (path.startsWith(PATH_PREFIX)) return path.slice(PATH_PREFIX.length).replace(/^\/+|\/+$/g, "");
  return "";
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "GET" && req.method !== "OPTIONS") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const apiPath = extractApiPath(req);
  const url = new URL(`${OJS_BASE_URL}/index.php/${OJS_JOURNAL_PATH}/api/v1/${apiPath}`);

  for (const [key, value] of Object.entries(req.query)) {
    if (RESERVED_QUERY_KEYS.has(key)) continue;
    if (value === undefined || value === null) continue;
    if (Array.isArray(value)) value.forEach((v) => url.searchParams.append(key, String(v)));
    else url.searchParams.append(key, String(value));
  }

  const headers: Record<string, string> = { Accept: "application/json" };
  if (OJS_API_TOKEN) headers.Authorization = `Bearer ${OJS_API_TOKEN}`;

  if (DEBUG) {
    res.setHeader("X-Debug-Upstream-URL", url.toString());
    res.setHeader("X-Debug-Token-Present", OJS_API_TOKEN ? "yes" : "no");
    res.setHeader("X-Debug-Token-Length", String(OJS_API_TOKEN.length));
    res.setHeader(
      "X-Debug-Token-Preview",
      OJS_API_TOKEN ? `${OJS_API_TOKEN.slice(0, 10)}...${OJS_API_TOKEN.slice(-6)}` : "none",
    );
    res.setHeader("X-Debug-Api-Path", apiPath);
  }

  try {
    const upstream = await fetch(url.toString(), { method: "GET", headers, redirect: "follow" });
    const body = await upstream.text();
    const contentType = upstream.headers.get("content-type") || "application/json";

    if (DEBUG) {
      res.setHeader("X-Debug-Upstream-Status", String(upstream.status));
      res.setHeader("X-Debug-Upstream-Content-Type", contentType);
    }

    if (upstream.ok) {
      res.setHeader(
        "Cache-Control",
        `public, s-maxage=${CACHE_SECONDS}, stale-while-revalidate=${CACHE_SECONDS * 2}`,
      );
    }
    res.setHeader("Content-Type", contentType);
    return res.status(upstream.status).send(body);
  } catch (err) {
    return res.status(502).json({
      error: "upstream_unreachable",
      message: err instanceof Error ? err.message : String(err),
      url: url.toString(),
    });
  }
}
