# Deployment Guide — Economia Internazionale / International Economics

## Architecture

```
Browser  ─►  Vercel (HTTPS)  ─►  /api/ojs/*  (serverless proxy)  ─►  OJS 3.4 (HTTP)
                static assets       hides token, bridges TLS,            REST API
                + React app         strips CORS issues
```

- **Frontend**: React 19 + Vite + Tailwind 4, deployed on Vercel
- **Proxy**: Vercel serverless function `api/ojs/[...path].ts`
- **Backend**: OJS 3.4 at `http://204.216.215.234/ojs/`

Why the proxy: the OJS is on HTTP and the Vercel site on HTTPS, so direct
browser fetches would be blocked as *mixed content*. The proxy also hides
the OJS API token from the client bundle.

---

## 1. Local Development

```bash
pnpm install
pnpm dev
```

Open http://localhost:3000.

In local dev there is no Vercel proxy. Two options:

- **Option A (recommended)**: run `vercel dev` after installing the Vercel CLI
  (`npm i -g vercel`). It serves both the Vite app and the proxy function.
  Make sure `OJS_API_TOKEN` is exported (or in `.env.local` as `OJS_API_TOKEN=…`).

- **Option B (no proxy, direct calls)**: set in `.env.local`:
  ```env
  VITE_OJS_DIRECT=1
  VITE_OJS_API_TOKEN=<your-token>
  ```
  This bypasses the proxy and calls OJS directly from the browser. Works
  only when the dev origin is HTTP (so localhost), and only if CORS is
  enabled on the OJS server.

---

## 2. Generate the OJS API Token

1. Log in to `http://204.216.215.234/ojs` as a user with **Journal Manager**
   role in the `iei` context.
2. Go to **Profile → API Key** tab.
3. Click **Generate new API key**. Copy the token shown.
4. Paste it in Vercel **Project Settings → Environment Variables** as
   `OJS_API_TOKEN` (Production + Preview).

---

## 3. Vercel Environment Variables

| Key | Scope | Value |
|---|---|---|
| `VITE_OJS_BASE_URL` | Production, Preview | `http://204.216.215.234/ojs` |
| `VITE_OJS_JOURNAL_PATH` | Production, Preview | `iei` |
| `OJS_BASE_URL` | Production, Preview | `http://204.216.215.234/ojs` |
| `OJS_JOURNAL_PATH` | Production, Preview | `iei` |
| `OJS_API_TOKEN` | Production, Preview | *(secret, from step 2)* |

Public (`VITE_*`) vars end up in the JS bundle. The `OJS_API_TOKEN` is
NOT prefixed with `VITE_` so it stays server-side only.

---

## 4. OJS Endpoints Used (per-journal REST API)

All proxied through `/api/ojs/*` which forwards to
`${OJS_BASE_URL}/index.php/${OJS_JOURNAL_PATH}/api/v1/<path>`.

| Frontend Hook | OJS Endpoint |
|---|---|
| `useCurrentIssue` | `GET /issues/current` |
| `useIssues` | `GET /issues?count=&offset=` |
| `useIssue(id)` | `GET /issues/{id}` |
| `useSubmissions` | `GET /submissions?status=3&searchPhrase=…` |
| `useArticle(id)` | `GET /submissions/{id}` (+ `/issues/{publication.issueId}`) |

---

## 5. Deploy

### Via GitHub (recommended)

1. Push the repo to GitHub.
2. Import in [Vercel Dashboard](https://vercel.com/new).
3. Set environment variables (section 3).
4. Deploy.

### Via Vercel CLI

```bash
npm i -g vercel
vercel link
vercel env add OJS_API_TOKEN production
vercel --prod
```

---

## 6. Common pitfalls

| Symptom | Cause | Fix |
|---|---|---|
| 403 on every `/api/ojs/...` | Missing or invalid `OJS_API_TOKEN` | Re-generate in OJS, set in Vercel env vars, redeploy |
| 404 on `/issues/current` | No issue published in OJS yet | Publish at least one issue from OJS backend |
| Articles list empty | Submissions not in `status=3` (published) | Publish submissions from OJS |
| `Mixed Content` in browser | Calling OJS directly from HTTPS site | Use the proxy (default); keep `VITE_OJS_DIRECT` unset in prod |
| `502 upstream_unreachable` from proxy | OJS server down or firewall blocking Vercel egress | Check OJS host; allow Vercel egress IPs if firewalled |

---

## 7. Future: putting OJS on HTTPS

When the OJS server gets a TLS certificate, set:

```
VITE_OJS_BASE_URL=https://ojs.<your-domain>
OJS_BASE_URL=https://ojs.<your-domain>
```

The proxy still works (and still recommended, to hide the token).
