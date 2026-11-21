# Chunk backlog

Each line is one chunk (split further if >200 lines). Specs in parentheses.

## Phase 1 — Website
**W0 Foundations**
- W0.1 Scaffold Nuxt 4 in `site/`, strict TS, pnpm, minimal page (02)
- W0.2 Dockerfile + docker-compose dev service; `docker compose up web` serves page (02)
- W0.3 ESLint, Prettier, Vitest with one sample test; `pnpm verify` script (08)
- W0.4 GitHub Actions CI running `pnpm verify`; Dependabot config (08)
**W1 Design system**
- W1.1 Theme tokens as CSS variables + Tailwind mapping for 4 themes (04)
- W1.2 Font options proposal + self-hosted fonts (owner picks) (04)
- W1.3 Contrast unit test for all theme pairs (04)
- W1.4 Day-part inline script + resolver unit tests (05)
- W1.5 Layout shell: header, skip link, footer, theme override toggle (04)
**W2 Content**
- W2.1 Zod schemas + types (03)
- W2.2 `profile.yaml`, `skills.yaml`, `education.yaml` from resume.md (03)
- W2.3 `experience.yaml` (all 4 roles, exact resume facts) (03)
- W2.4 `architecture.yaml`, `personas.yaml`, `themes.yaml` (03)
- W2.5 Content validator script + failing-case tests (incl. phone regex) (03)
**W3 Static sections**
- W3.1 Hero (static, no animation) incl. optional photo slot (04)
- W3.2 Impact strip (04)
- W3.3 Experience timeline (04)
- W3.4 Skills + Education (04)
- W3.5 Contact + resume download link (04)
**W4 Flight-path map**
- W4.1 SVG map render from data (04)
- W4.2 Node hover/focus details + keyboard support (04)
- W4.3 Persona tours + list fallback on mobile (04, 05)
**W5 Personalization**
- W5.1 Persona resolver + sanitizer + tests (05)
- W5.2 Persona picker UI + section reorder via CSS order (05)
- W5.3 Personal-link greeting + `scripts/make-link.ts` (05)
- W5.4 Returning-visitor tweak + referrer hint (05)
**W6 Motion**
- W6.1 Intro sequence + Skip every load + reduced-motion bypass (04)
- W6.2 Generative hero canvas (throttled, pausable) (04)
- W6.3 Scroll reveals + small surprises (04)
**W7 Quality**
- W7.1 Playwright smoke + axe test (08)
- W7.2 Lighthouse CI budget (08)
- W7.3 No-JS check, CLS check, bundle-size budget (08)
**W8 Release prep**
- W8.1 Favicon/logo wiring, OG image generation, basic meta (09 basics)
- W8.2 README of `site/` and update docs/progress.md
- W8.3 Hosting decision + deploy chunk(s) (decided then; see decisions.md)
→ **Deploy stage 1.** Review live site before Phase 2.

## Phase 2 — SEO and discoverability (S) — see 09
- S1 robots.txt (with AI crawler policy), sitemap.xml, canonical URLs
- S2 Open Graph/Twitter cards, per-section meta
- S3 JSON-LD Person/ProfilePage/WebSite with sameAs links
- S4 Search Console + Bing verification and sitemap submission (owner steps, agent-written checklist), IndexNow
- S5 Off-site consistency checklist (LinkedIn, GitHub README link, Naukri), name-collision disambiguation
- S6 Optional llms.txt (low expectations), plain-text/markdown mirror of content
- S7 Crawl/render audit (view-source check, Lighthouse SEO, Rich Results test)

## Phase 3 — AI assistant (A) — see 10
- A1 Decide provider/model + cost cap; A2 content-to-context builder (reuses YAML); A3 endpoint skeleton with rate limiting; A4 system prompt closed-book + refusals; A5 chat UI component; A6 eval set (questions that must be answered/refused); A7 abuse protection and logging policy; A8 deploy.

## Phase 4 — MCP (MCP-) — see 10
- MCP-1 read-only server skeleton; MCP-2 tools: get_profile, get_experience, get_skills, get_architecture, search_content; MCP-3 tests; MCP-4 docs + deploy.
