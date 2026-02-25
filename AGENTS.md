# AGENTS.md

## Cursor Cloud specific instructions

### Project overview

AOV-Scan is a Next.js 16 (App Router) wizard that helps Dutch self-employed individuals check whether their existing disability insurance (AOV) qualifies for an exemption from the mandatory BAZ. It is a single-service, client-side-only application with no backend, database, or environment variables.

### Development commands

See `package.json` scripts. Key commands:

- **Dev server:** `npm run dev` (port 3000)
- **Lint:** `npm run lint` (ESLint; the codebase has pre-existing `@ts-ignore` lint errors)
- **Build:** `npm run build`
- **Start (production):** `npm run start`

### Notes

- Node.js v22+ is required (Next.js 16 needs Node >= 18.18).
- No Docker, no `.env` files, no external services needed.
- External images are loaded from `databaseaov.nl` CDN (cosmetic only, app works without them).
