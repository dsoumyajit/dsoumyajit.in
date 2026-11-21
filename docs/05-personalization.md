# Personalization

Rule: may greet, reorder, highlight, restyle. Never add, hide or alter facts.

## State
localStorage key `sd:state:v1` (always inside try/catch; site must work with it blocked). Stores only: chosen persona. The intro is NOT remembered; Skip shows every load.

## Persona resolution (precedence)
1. Explicit choice via picker (this visit)
2. `?as=` link param
3. Saved persona from a previous visit
4. Referrer hint (linkedin.com → recruiter; github.com → engineer; others none)
5. Default `explorer`

## Day-part theme
Local hour: dawn 5–8, day 8–17, dusk 17–20, night otherwise. An inline script in `<head>` sets `data-daypart` before paint (no flash). User can override with a theme toggle (not persisted beyond session unless he decides otherwise).

## Personal links (self-contained, no company list)
Example: `https://dsoumyajit.in/?for=Acme&as=hiring`.
- `for` → greeting "Hello, Acme team" (text-only rendering via `textContent`, never HTML).
- `as` → persona id from the fixed list; unknown ignored.
- Sanitization: allow letters, digits, spaces, `&`, `-`, `.`; max ~30 chars; strip everything else; empty → ignore.
- NO company list in repo or bundle (public repo would reveal where he applied).
- `site/scripts/make-link.ts "Acme" hiring` prints the link. Owner keeps his own list privately.
- Unit tests: XSS strings, long input, unicode, empty.

## Persona effects
Each persona defines greeting, section order (CSS `order`, DOM order stays canonical for SEO/a11y), highlighted stats and the architecture tour. Recruiter: summary, impact, experience, skills first. Hiring manager: impact, ownership bullets, flight path. Engineer: flight path, skills, then experience. Explorer: balanced default.

## Returning visitor
If saved persona exists, small "Welcome back" tweak only (greeting text); no tracking, no cookies.

## Generative hero
Seeded by persona + daypart (deterministic palette from theme tokens), not by identity.

## Quality bars
CLS <0.05; personalization script <3KB inline; unit tests for resolver, sanitizer, daypart.
