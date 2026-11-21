# Brief

**Owner:** Soumyajit Das, Product Engineer at DeltaX (ad-tech), Bangalore. Targeting backend/full-stack roles at product-based companies.
**Goal:** a memorable, fast, personal site that recruiters and hiring managers can skim in 60 seconds and engineers can explore deeper.
**Concept:** "Mission Control" — rocket-launch theme from the logo (a teal quarter-disc "rocket" with dot exhaust trail), an interactive architecture "flight path" map of what he has worked on, and (later) an AI assistant answering questions about him.

## Audience / personas
recruiter · hiring manager · engineer · explorer (default). See 05.

## Scope now (Phase 1)
Built only from `docs/resume.md`. No project case studies yet (added later; keep a `projects` content slot that may be empty and renders nothing). No photo yet (graphics only; keep a profile-image slot, see 04). Hosting undecided: build static output that runs anywhere.

## Principles
1. Content is static truth; personalization only greets/reorders/highlights/restyles.
2. Fast and accessible beats flashy: Lighthouse >=95, WCAG AA, works without JS for core content, honors reduced motion.
3. Intro animation ~4s with a Skip button on EVERY load; nothing remembered about the intro.
4. Honest: no invented facts, no ranking promises.
5. Public repo: no phone number, no private data, no list of target companies.
6. Confidentiality: keep client and internal product names generic (as the resume does).

## Out of scope (for now)
Blog, CMS, analytics (decide later), comments, auth, multi-language.
