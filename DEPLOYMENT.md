# Deployment Guide — Economia Internazionale / International Economics

## Architecture Overview

This project follows a **headless architecture**:

- **Frontend**: React 19 + Vite + Tailwind CSS 4 (this repository)
- **Backend**: OJS 3.4 (Open Journal Systems) — installed separately
- **Hosting**: Vercel (frontend) + your own server (OJS backend)

The frontend consumes data from OJS via its REST API and renders it in a modern, fast interface.

---

## 1. Local Development

```bash
# Install dependencies
pnpm install

# Start dev server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

---

## 2. Environment Variables

Create a `.env.local` file in the project root:

```env
# OJS Backend URL (without trailing slash)
VITE_OJS_BASE_URL=https://ojs.iei1946.it

# Journal path as configured in OJS
VITE_OJS_JOURNAL_PATH=iei
```

> **Note**: All environment variables must be prefixed with `VITE_` to be accessible in the Vite frontend.

---

## 3. OJS Backend Setup

### Enable the REST API

In your OJS `config.inc.php`, ensure:

```php
; Enable the REST API
api_key_secret = your-random-secret-key
```

### Configure CORS

Add CORS headers to your OJS server (Nginx example):

```nginx
location /api/ {
    add_header Access-Control-Allow-Origin "https://www.iei1946.it" always;
    add_header Access-Control-Allow-Methods "GET, OPTIONS" always;
    add_header Access-Control-Allow-Headers "Accept, Content-Type" always;

    if ($request_method = OPTIONS) {
        return 204;
    }
}
```

### API Endpoints Used

| Endpoint | Description |
|---|---|
| `GET /api/v1/_journals/{path}/issues` | List all issues |
| `GET /api/v1/_journals/{path}/issues/current` | Get current issue |
| `GET /api/v1/_journals/{path}/issues/{id}` | Get specific issue |
| `GET /api/v1/_journals/{path}/submissions` | List published submissions |
| `GET /api/v1/_journals/{path}/submissions/{id}` | Get specific submission |

---

## 4. Deploy to Vercel

### Option A: Via GitHub (Recommended)

1. Push this repository to GitHub
2. Import the repository in [Vercel Dashboard](https://vercel.com/new)
3. Set environment variables in Vercel:
   - `VITE_OJS_BASE_URL` = your OJS URL
   - `VITE_OJS_JOURNAL_PATH` = your journal path
4. Deploy

### Option B: Via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

---

## 5. Custom Domain

In Vercel Dashboard > Settings > Domains:
- Add `www.iei1946.it` (or your preferred domain)
- Configure DNS records as instructed by Vercel

Vercel provides free SSL/TLS certificates automatically.

---

## 6. Troubleshooting

| Issue | Solution |
|---|---|
| Articles not loading | Check that OJS REST API is enabled and CORS is configured |
| Build fails | Run `pnpm check` to find TypeScript errors |
| Blank page | Check browser console for errors; verify env vars are set |
| Slow loading | Ensure OJS server has adequate resources and caching |

---

## References

- [Vercel Documentation](https://vercel.com/docs)
- [OJS REST API Documentation](https://docs.pkp.sfu.ca/dev/api)
- [PKP Technical Documentation](https://docs.pkp.sfu.ca)
