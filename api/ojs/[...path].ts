// Vercel serverless proxy to OJS REST API.
// Hides the API token, bridges HTTPS (frontend) -> HTTP (OJS), avoids CORS.

import type { VercelRequest, VercelResponse } from "@vercel/node";

const OJS_BASE_URL = (process.env.OJS_BASE_URL || "http://204.216.215.234/ojs").replace(/\/$/, "");
const OJS_JOURNAL_PATH = process.env.OJS_JOURNAL_PATH || "iei";
// Strip whitespace and surrounding quotes that sneak in when env vars are pasted.
const OJS_API_TOKEN = (process.env.OJS_API_TOKEN || "").trim().replace(/^["']|["']$/g, "");

const CACHE_SECONDS = 300;
const DEBUG = process.env.OJS_PROXY_DEBUG === "1";

const PATH_PREFIX = "/api/ojs/";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "GET" && req.method !== "OPTIONS") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  // Parse the path directly from req.url. Don't rely on req.query.path —
  // Vercel exposes the catch-all under different keys ([...path] -> "...path")
  // and including it in the upstream URL would corrupt the request.
  const reqUrl = req.url || "";
  const queryIdx = reqUrl.indexOf("?");
  const rawPath = queryIdx >= 0 ? reqUrl.slice(0, queryIdx) : reqUrl;
  const search = queryIdx >= 0 ? reqUrl.slice(queryIdx + 1) : "";

  const apiPath = rawPath.startsWith(PATH_PREFIX)
    ? rawPath.slice(PATH_PREFIX.length).replace(/^\/+|\/+$/g, "")
    : "";

  const url = new URL(`${OJS_BASE_URL}/index.php/${OJS_JOURNAL_PATH}/api/v1/${apiPath}`);

  // Forward query params, but drop the Vercel-internal "path" param keys.
  const incoming = new URLSearchParams(search);
  incoming.forEach((value, key) => {
    if (key === "path" || key === "...path") return;
    url.searchParams.append(key, value);
  });

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
    res.setHeader("X-Debug-Raw-Path", rawPath);
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
