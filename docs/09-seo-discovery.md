# SEO and AI discoverability (Phase 2 — after stage 1 is deployed)

Be honest with the owner: nothing here guarantees ranking or AI citations. Goal: make the site easy to find, crawl, understand and attribute.

## Baseline (from W8.1)
Title, meta description, canonical, `lang`, OG/Twitter, favicon, static HTML with all content.

## Chunks
- **S1 robots.txt + sitemap.xml + canonical.** robots.txt allows normal crawlers and references the sitemap. AI crawler policy (owner decides, record in decisions.md): allow search/answer bots (OAI-SearchBot, ChatGPT-User, Claude-SearchBot, Claude-User, PerplexityBot, Perplexity-User, Googlebot, Bingbot); training bots are the owner's choice (GPTBot, ClaudeBot, Google-Extended, Applebot-Extended, CCBot, Bytespider, meta-externalagent, Amazonbot). `anthropic-ai` and `Claude-Web` are deprecated. **Agent must verify the current token list against each vendor's official docs before writing** — it changes. robots.txt is advisory.
- **S2 Social/meta.** OG + Twitter card image (generated), description under ~160 chars.
- **S3 JSON-LD.** `Person` (name, jobTitle, worksFor, address locality, url, sameAs: LinkedIn, GitHub), `ProfilePage`, `WebSite`. Facts only from resume. Validate with Google's Rich Results / Schema validator. Add `alternateName` only with variants he really uses.
- **S4 Webmaster tools (owner steps, agent writes the checklist).** Google Search Console via DNS TXT verification, submit sitemap; Bing Webmaster Tools (can import from GSC); IndexNow key file + ping on deploy.
- **S5 Off-site consistency.** Same headline/bio on LinkedIn, GitHub profile README (add site link), Naukri; link to the site from each. Many people share the name "Soumyajit Das": use a consistent disambiguator ("Product Engineer, DeltaX, Bangalore") and the same `sameAs` set everywhere.
- **S6 Optional llms.txt + markdown mirror (`/content.md` generated from YAML).** Cheap, but major search engines and most AI search don't rely on llms.txt (Google has said it does not use it; observed AI-bot fetch rates are very low). Do it only as low-cost extra; don't promise results.
- **S7 Audit.** `curl` + view-source shows content without JS; Lighthouse SEO >=95; Rich Results test; check indexing in Search Console after ~1–2 weeks.

## Not to do
Keyword stuffing, hidden text, fake reviews, doorway pages, buying links, claiming facts not in the resume.
