# Content model

Source of truth: `docs/resume.md`. Convert to YAML files in `site/content/`; Zod schemas in `site/schema/`. Every field the UI shows comes from here. IDs are kebab-case and stable (the assistant and MCP cite them).

## Types (TypeScript sketch)
```ts
Profile { name, headline, location, email, links:{linkedin,github,site}, summary, resumeUrl? , imageUrl? /*optional, future photo*/ }
ImpactStat { id, value, label, source /* role id */ }       // e.g. "~80%" "build time cut"
Bullet { text, emphasis?: string[] }                          // emphasis = substrings rendered bold
Role { id, title, org, location, start:'YYYY-MM', end:'YYYY-MM'|'present', bullets: Bullet[], stats?: string[] }
Education { id, degree, institution, location, start:number, end:number }
SkillGroup { id, label, items: string[] }
Project { id, title, summary, role, stack:string[], links?:[], body?:string }   // optional, may be empty list
MapNode { id, label, layer:'client'|'api'|'integration'|'delivery'|'data'|'ai', involvement:'owned'|'contributed'|'context', x:0-100, y:0-100, blurb, roleIds:string[] }
MapEdge { from, to }
ArchitectureMap { nodes, edges, tours: Record<PersonaId, string[]> }   // ordered node ids per persona
Persona { id:'recruiter'|'hiring'|'engineer'|'explorer', label, greeting, sectionOrder:string[], highlight:string[] }
ThemePalette { id:'dawn'|'day'|'dusk'|'night', bg, surface, ink, muted, accent, glow }
ChangelogEntry { date, text }
```
Removed from the earlier blueprint: any `Company` list (see 05; personal links are self-contained query params).

## Section ids (for anchors, assistant citations, MCP)
`summary`, `exp-<roleId>`, `project-<id>`, `skills-<groupId>`, `edu-<id>`, `arch-<nodeId>`, `contact`.

## Role ids
`product-engineer`, `associate-product-engineer`, `associate-intern`, `nagarro-intern`.

## Architecture map nodes (generic names only)
Campaign launcher (client, contributed) · Schema-driven API (api, contributed — co-designed) · Platform integrations (integration, owned for Meta, guided for others) · Ad server (delivery, contributed — integration with in-house ad server) · MCP server (ai, owned) · Build and deploy pipeline (delivery, owned) · Site generator (client, contributed — enhanced) · Reporting and tracking (data, context).
Each node's blurb must restate only resume facts. Owner reviews labels for confidentiality before publish.

## Validation rules
Zod rejects: unknown ids in edges/tours, missing blurbs, dates out of order, phone-number-like strings anywhere in content (regex check), URLs not https.
