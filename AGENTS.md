# AGENTS — Guidance for AI coding agents

Purpose: give concise, actionable instructions so AI coding agents can be productive in this repository without duplicating existing docs.

- **Primary entrypoints:** Refer to the repo `README.md` for high-level context and the `docs/` folder for design and process links.
- **Do not duplicate docs:** Link to existing docs instead of copying large sections. Use short summaries only when necessary.

Quick commands
- **Install:** `npm install`
- **Dev server:** `npm run dev` (runs `vite`)
- **Build (SSG):** `npm run build` (uses `vite-react-ssg`)
- **Preview:** `npm run preview`
- **Deploy:** `npm run deploy` (builds and runs `wrangler pages deploy dist --project-name primeinnovators`)
- **Wrangler tail:** `npm run tail`
- **Lint:** `npm run lint` (Biome)
- **Format:** `npm run format` (Biome)

Key files & locations
- **Frontend source:** `src/` — main app, components, layouts, pages.
- **Backend worker:** `backend/api/waitlist.js` — Cloudflare Worker entry (see `wrangler.toml` `main`).
- **DB schema:** `backend/schema.sql` — D1 schema for the waitlist.
- **Configs:** `wrangler.toml`, `vite.config.js`, `tailwind.config.js`, `postcss.config.js`.
- **Docs:** `docs/` (QUICKSTART.md, DEVELOPMENT.md, PRD.md, etc.) and top-level `README.md`, `CONTRIBUTING.md`.

Conventions & expectations for agents
- **Link, don't copy:** When referencing documentation, point agents or humans to the file path or docs entry.
- **Run scripts before large changes:** Use the existing npm scripts (`dev`, `build`, `lint`, `format`) to verify behavior locally before committing changes.
- **Formatting & linting:** Respect Biome formatting rules — run `npm run format` and `npm run lint` where appropriate. Avoid changing formatting configuration.
- **Minimal, focused edits:** Make small, reviewable changes. Prefer creating a branch and opening a PR rather than pushing broad edits.
- **Secrets & env:** Never insert or expose secrets. If an env is required, reference `.env.example` (if present) and ask the maintainer for values.
- **Backend caution:** Changes to `backend/` may affect the Cloudflare Pages/Workers deployment and D1 database. Coordinate schema or migration changes with maintainers.

Notes for automation and CI
- CI: see `.github/workflows/ci.yml` (if present) via `README.md` badge. Follow CI failures and tests rather than bypassing them.
- Deployment: `npm run deploy` uses `wrangler pages deploy` — ensure you understand Cloudflare Pages/Workers bindings in `wrangler.toml` before altering deployment steps.