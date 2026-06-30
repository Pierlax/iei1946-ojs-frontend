// Vercel serverless proxy to OJS REST API.
// Hides the API token, bridges HTTPS (frontend) -> HTTP (OJS), avoids CORS.

import type { VercelRequest, VercelResponse } from "@vercel/node";

const OJS_BASE_URL = process.env.OJS_BASE_URL || "http://204.216.215.234/ojs";
const OJS_JOURNAL_PATH = process.env.OJS_JOURNAL_PATH || "iei";
const OJS_API_TOKEN = process.env.OJS_API_TOKEN || "";

const CACHE_SECONDS = 300;

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "GET" && req.method !== "OPTIONS") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const segments = Array.isArray(req.query.path) ? req.query.path : [req.query.path].filter(Boolean) as string[];
  const apiPath = segments.join("/");

  const url = new URL(`${OJS_BASE_URL}/index.php/${OJS_JOURNAL_PATH}/api/v1/${apiPath}`);

  for (const [key, value] of Object.entries(req.query)) {
    if (key === "path") continue;
    if (Array.isArray(value)) value.forEach((v) => url.searchParams.append(key, v));
    else if (value != null) url.searchParams.set(key, String(value));
  }

  const headers: Record<string, string> = { Accept: "application/json" };
  if (OJS_API_TOKEN) headers.Authorization = `Bearer ${OJS_API_TOKEN}`;

  try {
    const upstream = await fetch(url.toString(), { method: "GET", headers });
    const body = await upstream.text();
    const contentType = upstream.headers.get("content-type") || "application/json";

    if (upstream.ok) {
      res.setHeader("Cache-Control", `public, s-maxage=${CACHE_SECONDS}, stale-while-revalidate=${CACHE_SECONDS * 2}`);
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
