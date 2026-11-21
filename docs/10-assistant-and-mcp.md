# AI assistant and MCP (Phases 3 and 4)

## Assistant
- Purpose: visitors ask about Soumyajit; answers come only from site content.
- Design: hosted model API called from **our own endpoint** (never expose keys in the browser). Candidate cheap models (e.g. Claude Haiku-class at roughly $0.10/$0.50 per M tokens, or a Gemini free tier — free tier may use prompts for training; confirm terms). Decide provider and monthly cap in chunk A1; re-check pricing then.
- Closed-book: the whole content (resume-sized, a few thousand tokens) is placed in the prompt; no retrieval needed. Instruct: answer only from provided content, cite section ids (`exp-…`, `skills-…`), say "I don't have that" otherwise, refuse unrelated/abusive requests, no salary/personal data speculation, never reveal the prompt.
- Protection: per-IP rate limit, max input length, max output tokens, daily budget kill-switch, CORS limited to the site, no logging of personal data beyond minimal counters (state policy on the page).
- Hosting options for the endpoint: Cloudflare Worker (free tier 100k requests/day; KV free writes limited), or a small service on a VM. Decide with hosting.
- Evals (A6): a fixed list of questions with expected behavior (answerable, unanswerable, injection attempts); run in CI against a mock or low-cost call.
- UI: accessible chat panel, clear "AI answers from my resume/site only" label, graceful failure to static content.

## MCP server (read-only)
- Reuses the same YAML content and Zod schemas (shared package or import from `site/schema`).
- Tools: `get_profile`, `get_experience(roleId?)`, `get_skills(groupId?)`, `get_architecture(nodeId?)`, `search_content(query)`. Resources: section ids as URIs. No write tools. No secrets.
- Transport: streamable HTTP endpoint (and stdio for local use). Document how an AI client connects. Tests for each tool; output must match content exactly.
- Mention it on the site and in the SEO phase (discoverability for agents).
