# Design spec

## Identity
Logo: `docs/assets/logo.svg`; favicon: `favicon.svg` (auto dark mode). Teal #0F766E on warm off-white; dark themes use #2DD4BF. Rocket motif: quarter-disc nose + dot trail. Keep a minimal, editorial, "mission control" feel — calm instrument-panel details (thin rules, mono labels, small status chips), not neon sci-fi.

## Themes (CSS variables; set via `data-daypart` on `<html>`)
| theme | bg | surface | ink | muted | accent | glow |
|---|---|---|---|---|---|---|
| dawn | #FFF4EC | #FFFFFF | #1F2937 | #6B7280 | #0F766E | #F59E7B |
| day | #FAF7F2 | #FFFFFF | #111111 | #5B6470 | #0F766E | #99F6E4 |
| dusk | #1E1B3A | #28244B | #F3EFFF | #B7B0D9 | #2DD4BF | #F6B26B |
| night | #0B1020 | #121A30 | #EAF0FF | #94A3C4 | #2DD4BF | #38BDF8 |
Verify every text/background pair meets WCAG AA (contrast test in unit tests).

## Typography
Open-source fonts, self-hosted (no third-party requests): a distinctive display face + clean text face + mono for labels. Agent proposes two options in chunk W1.2; owner picks.

## Page structure (single page, anchored sections)
1. **Intro** (~4s launch sequence, Skip button on every load, `prefers-reduced-motion` → skip automatically to static hero)
2. **Hero**: name, headline, one-line value statement, generative Canvas background, persona picker, primary CTAs (Resume, Contact). Greeting line personalized (05).
3. **Impact strip**: 4–5 stats from resume (e.g. ~80% build time cut; 30–40MB→KBs bundles; weeks→days new-platform support; ~100 modules modernized; onboarding within a day).
4. **Flight path** (architecture map): SVG nodes/edges, hover/focus details, persona tour, keyboard accessible, list fallback.
5. **Experience**: timeline of roles (Oct 2025 overlap is intentional).
6. **Skills**: grouped chips.
7. **Projects**: hidden until content exists.
8. **Education**
9. **Contact**: email, LinkedIn, GitHub; resume download.
Footer: tiny changelog / "mission log" easter egg.
Photo slot: hero has an optional circular/rocket-masked image area rendered only if `profile.imageUrl` exists; layout must not shift when absent or present.

## Motion
GSAP timeline for intro; scroll reveals subtle; generative hero (particles forming exhaust trail, responds to pointer, throttled, paused off-screen, off for reduced motion). Small surprises: konami-style or logo-click launch; never block content.

## Accessibility and performance
Semantic landmarks, visible focus, skip-to-content link, alt/aria for SVG map, color not sole signal, axe zero violations, no layout shift, images/SVG optimized, fonts `font-display: swap`, works without JS for core content (static HTML contains all content).
## Responsive
Mobile-first; map becomes vertical list/tour under 640px.
