# Decisions log

- D1 Concept: "Mission Control" (rocket theme from logo, architecture flight-path map, later AI assistant).
- D2 Personas: recruiter, hiring manager, engineer, explorer (default).
- D3 Personalization: greet/reorder/highlight/restyle only; content static. Personal links are self-contained query params (`?for=&as=`); no company list in repo.
- D4 Intro ~4s with Skip on every load; nothing remembered.
- D5 Order: website -> deploy stage 1 -> SEO -> assistant -> MCP.
- D6 Stack: Nuxt 4 static, Tailwind, GSAP, Canvas, SVG map, YAML+Zod, Vitest/Playwright/Lighthouse, pnpm, Docker.
- D7 Repo: existing `dsoumyajit/dsoumyajit`; root README untouched; app in `site/`; docs in `docs/`.
- D8 Agent-agnostic: AGENTS.md canonical; CLAUDE.md/GEMINI.md pointers; automated gates, no reliance on agent-specific skills.
- D9 Public repo: phone number removed from docs/resume.md. The resume PDF is NOT in the pack because it contains the phone number; decide later whether to publish a phone-free PDF for the site.
- D10 Phase 1 uses resume content only; projects/case studies later; no photo yet (slot reserved).
- D11 Hosting undecided (Cloudflare Pages vs Oracle VM vs other).
- D12 Development model: Claude Opus (owner's choice); any agent allowed.
