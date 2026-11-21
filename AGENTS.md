# AGENTS.md — read this first

This repo (`dsoumyajit/dsoumyajit`) holds Soumyajit Das's GitHub profile README (root `README.md`, **never edit it**) plus his personal portfolio site ("Mission Control") in `site/`. Docs live in `docs/`. Any AI agent (Claude, Gemini, Codex, Cursor, others) can work here; this file is the single source of rules.

## Start of every session (mandatory)
1. Read `docs/progress.md` (what is done, what is next) and `docs/decisions.md`.
2. Read `docs/06-working-protocol.md` (how you must work) and the spec files relevant to the current chunk (`docs/07-chunk-backlog.md` names them).
3. Facts about the person come ONLY from `docs/resume.md` (and later `site/content/*.yaml`). Never invent employers, numbers, clients, projects, quotes, or links.

## Non-negotiable rules
- **Work in small chunks.** One chunk = one idea, <=200 changed lines (excluding lockfiles/generated files), <=3 files. After each chunk: STOP, send the chunk report (format in `docs/06-working-protocol.md`), and wait for the owner to reply "approved". Never start the next chunk before that. Never batch chunks.
- **Explain so the owner can review without guessing:** every report says what/why, the files and line counts, the reading order, how the pieces connect, and exactly how to verify.
- **Prove it.** Run `pnpm verify` (or the chunk's listed commands) and paste the real output. Never claim "tests pass" without output. If something fails, say so and fix it or stop.
- **No speculative code.** Build only what the current chunk lists. No extra dependencies without asking (state name, size, why).
- **Public repo:** never commit secrets, API keys, phone number, personal links lists, or the names of companies he has applied to.
- **Content is static truth.** Personalization may greet, reorder, highlight or restyle; it must never add, hide, or change facts.
- **Update `docs/progress.md`** at the end of each approved chunk (done list, next chunk, open questions). Record any new decision in `docs/decisions.md`.
- If a spec is ambiguous or contradicts itself, ask the owner; do not guess on anything hard to undo.

## Where things are
| Need | File |
|---|---|
| Overview and reading order | docs/00-README.md |
| Goals, audience, scope | docs/01-brief.md |
| Stack, folders, Docker, CI | docs/02-architecture.md |
| Content/data models | docs/03-content-model.md |
| Pages, theme, motion, a11y | docs/04-design-spec.md |
| Personalization engine | docs/05-personalization.md |
| Chunk protocol and report format | docs/06-working-protocol.md |
| Ordered chunk backlog (W, S, A, MCP) | docs/07-chunk-backlog.md |
| Verification gates | docs/08-verification.md |
| SEO and AI discoverability | docs/09-seo-discovery.md |
| Assistant and MCP | docs/10-assistant-and-mcp.md |
| Ready-made prompts | docs/prompts.md |
| State / history | docs/progress.md, docs/decisions.md |
| Resume as markdown | docs/resume.md |
| Logo files | docs/assets/ |

## Commands (once the scaffold exists)
`pnpm dev` · `pnpm verify` (lint, typecheck, content validation, unit tests, build) · `pnpm verify:full` (adds e2e, a11y, Lighthouse). Docker: `docker compose up web`. See `docs/08-verification.md`.
