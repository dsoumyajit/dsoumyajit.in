# Prompts (copy-paste to any agent)

## First prompt (start of project)
```
You are working in the repo dsoumyajit/dsoumyajit. Read AGENTS.md, then docs/progress.md, docs/decisions.md and docs/06-working-protocol.md. Follow the chunk protocol strictly: one chunk at a time, report in the required format, then STOP and wait for me to say "approved". Do not start the next chunk on your own.
Today's task: chunk W0.1 from docs/07-chunk-backlog.md. Before writing code, tell me in plain language what you will create and in which files, then implement only that chunk.
```

## Next chunk
```
approved. Update docs/progress.md, commit, then do the next chunk from docs/07-chunk-backlog.md and report in the required format.
```

## Request changes
```
Not approved yet. Changes: <your notes>. Redo only this chunk, keep within the size limits, and report again.
```

## Explain more
```
I don't understand <file/part>. Explain it step by step as if I haven't seen the code, with how it connects to the previous chunks. Don't change code yet.
```

## Resume in a new session / different agent
```
Read AGENTS.md and docs/progress.md. Tell me where we are, run `pnpm verify` and paste the output, then propose the next chunk and wait for my go-ahead.
```

## Independent review (second agent)
```
Review the diff for chunks <ids> against docs/ specs only. List mismatches, missing tests, invented facts (compare to docs/resume.md), and security issues. Do not edit code.
```

## Start a phase
```
Phase <2|3|4> begins. Read docs/<09|10>-... and the backlog section. Before any code, propose the chunk list for this phase with sizes, and wait for approval.
```
