# Economia Internazionale / International Economics — Frontend

A modern, fast frontend for the academic journal **Economia Internazionale / International Economics**, built with React 19, Vite, and Tailwind CSS 4. Designed to connect to an OJS 3.4 backend via REST API and deploy on Vercel.

## Stack

- **React 19** + **Wouter** (client-side routing)
- **Tailwind CSS 4** + **shadcn/ui** (design system)
- **Framer Motion** (animations)
- **Vite 7** (build tool)
- **OJS 3.4 REST API** (data source)

## Pages

| Route | Page |
|---|---|
| `/` | Homepage — hero, current issue, search, metrics |
| `/review` | Review — current issue articles, archive |
| `/article/:id` | Article Detail — abstract, DOI, keywords, PDF |
| `/about` | About the Review — aims & scope, history |
| `/editorial-board` | Editorial Board — editors, scientific board |
| `/submission-guidelines` | Submission Guidelines |
| `/oa-copyright` | Open Access & Copyright |
| `/publication-ethics` | Publication Ethics (COPE) |
| `/institute` | Institute — history, prizes |
| `/contacts` | Contacts — form, address, map |

## Design

- **Typography**: Playfair Display (serif headings) + Source Sans 3 (body)
- **Colors**: Dark Navy (#1a3c5e) + Teal Accent (#00b4a0)
- **Style**: Institutional Elegance — academic authority with digital modernity

## Quick Start

```bash
pnpm install
pnpm dev
```

## Environment Variables

```env
VITE_OJS_BASE_URL=https://ojs.iei1946.it
VITE_OJS_JOURNAL_PATH=iei
```

See [DEPLOYMENT.md](./DEPLOYMENT.md) for full deployment instructions.

## License

All articles published in *Economia Internazionale / International Economics* are licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/).
