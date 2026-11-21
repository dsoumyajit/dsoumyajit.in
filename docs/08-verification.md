# Verification

Goal: correctness does not depend on an agent's word. Gates are automated and agent-independent.

## Commands (defined in chunk W0.3, extended later)
- `pnpm verify` = lint + typecheck + content validation + unit tests + `nuxt generate`. Run after EVERY chunk.
- `pnpm verify:full` = verify + Playwright e2e + axe a11y + Lighthouse CI + bundle-size budget. Run at end of each milestone and in CI.

## Budgets / checks
- Lighthouse performance, accessibility, best-practices, SEO >= 95
- axe: zero violations
- CLS < 0.05; initial JS ~150KB gzip max
- Contrast AA for all theme pairs
- Content: no phone number patterns, no unknown ids, no `http://` links
- Personalization: sanitizer/resolver/daypart unit tests
- Static HTML contains all core content (curl the built page and grep for a few resume phrases)
- Reduced motion: no intro, no canvas animation

## Per-chunk evidence
The chunk report must paste actual command output. Reviewer (owner) can re-run the same commands in Docker.

## Optional independent review
For milestone ends, a second agent (different vendor if possible) may review `git diff` against the specs and list mismatches. Never let the building agent be the only checker for important milestones.

## Visual check
Agent captures screenshots (desktop + mobile, light + night themes) with Playwright into `docs/screens/` for owner review at W3, W4, W6 ends.
