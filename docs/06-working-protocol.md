# Working protocol (applies to every agent, every phase)

## The chunk rule
- One idea per chunk. <=200 changed lines (excluding lockfiles and generated files). <=3 files (typically 2 source + 1 test).
- Verifiable on its own (a command or a visible result proves it).
- No speculative code, no "while I'm here" changes, no new dependency without asking.
- If a chunk grows past the limit, split it and say so.

## Loop
1. Announce the chunk ID and goal in one sentence (from `07-chunk-backlog.md`).
2. Implement only that.
3. Run the verify commands; capture real output.
4. Send the **chunk report** below.
5. **STOP.** Wait for "approved" (or change requests). Do not begin the next chunk.
6. After approval: update `docs/progress.md`, commit (one chunk = one commit, message `W1.2: add theme tokens`), then propose the next chunk.

## Chunk report (use exactly this)
```
CHUNK <id> — <title>
What and why: 2–4 plain sentences, no jargon without explanation.
Files changed: path (+added/-removed lines) …
Read in this order: 1) … 2) …  (what to look for in each)
How the pieces connect: short paragraph or tiny diagram, incl. what earlier chunks it relies on.
Decisions I made: … (anything the owner might disagree with)
Verify: commands, expected output, and the ACTUAL output pasted.
See it: how to view the result (URL, screenshot path).
Questions for you: … (or "none")
Next chunk preview: <id> — <title>, what it will add.
```
The owner is learning from these reports; assume a smart reader who has not seen the code.

## Branching and commits
Branch `main` protected after the first deploy; work on `chunk/<id>` branches or commit directly pre-deploy as the owner prefers (see decisions.md). Conventional, small commits.

## Honesty rules
Do not mark a chunk done if verification failed. Do not paraphrase failing output as success. If you could not run something, say exactly what and why. If you disagree with a spec, say so before building.

## Handoff
`docs/progress.md` must always let a different agent resume cold: current chunk, done list, next chunk, open questions, commands that work.

## Skills / agent-specific features
Optional. Nothing in this project requires them; rules live in AGENTS.md and automated gates (08) so any agent behaves the same. Agent-specific helpers (Claude skills, Gemini extensions) may be added later but must not hold the only copy of a rule.
