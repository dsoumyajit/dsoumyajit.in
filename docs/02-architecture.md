# Architecture

## Stack
- Nuxt 4 (Vue 3, TypeScript strict), static generation (`nuxt generate`) → plain files, host anywhere.
- Tailwind CSS + CSS variables for themes. GSAP (free, incl. plugins) for motion. Canvas 2D for the generative hero. Data-driven SVG for the architecture map.
- Content: YAML in `site/content/`, validated by Zod at build time (build fails on bad content).
- Tests: Vitest (unit), Playwright + axe (e2e/a11y), Lighthouse CI. pnpm. ESLint + Prettier. GitHub Actions. Dependabot.
- Budget: initial JS ~150KB gzip, Lighthouse >=95, CLS <0.05.

## Repo layout (repo `dsoumyajit/dsoumyajit`)
```
README.md            GitHub profile README — DO NOT TOUCH
AGENTS.md CLAUDE.md GEMINI.md
docs/                all project docs (this folder)
site/                the Nuxt app (Cloudflare Pages root dir could be `site`)
  app/  components/ composables/ pages/ layouts/ assets/
  content/           *.yaml (profile, experience, skills, education, architecture, personas, themes, changelog)
  schema/            Zod schemas + TS types
  public/            favicon.svg, logo.svg, robots.txt, og image
  scripts/           make-link.ts, validate-content.ts
  tests/             unit/ e2e/
  Dockerfile  nuxt.config.ts  package.json
docker-compose.yml   (repo root)
.github/workflows/   ci.yml
```

## Docker
- Dev: Debian-based `node:lts` (NOT alpine; Playwright needs glibc), pnpm via corepack, bind-mount `./site`, named volume for `node_modules`, service `web` on port 3000 with `HOST=0.0.0.0`.
- E2E: official Playwright image as a separate compose service/profile.
- Optional prod: multi-stage build → static files served by Caddy. Only if self-hosting is chosen.
- Rule: the owner never installs dependencies by hand; `docker compose run --rm web pnpm <cmd>`.

## CI (.github/workflows/ci.yml)
On PR/push: install → `pnpm verify:full`. Required to pass before merge. Details in 08.

## Hosting (decided later)
Candidates: Cloudflare Pages (free static, unlimited bandwidth), Oracle Always Free VM (note: allowance reportedly reduced and idle instances can be reclaimed — verify current terms), others. The site must not depend on either. Phase 3 assistant needs a small server endpoint (e.g. Cloudflare Worker or a VM service) — see 10.
