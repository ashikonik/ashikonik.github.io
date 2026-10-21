# Portfolio Puku Config

This directory scopes design tooling to the **portfolio** project.

## `mcp.json` — MCP servers available while working on the portfolio

- **playwright** — `@playwright/mcp@latest`. Lets the agent open
  `http://localhost:5173`, click around, take screenshots, and visually verify
  changes. Run `npm run dev` first.
- **figma** — `figma-mcp@latest`. Pulls design context from Figma. Needs
  `FIGMA_TOKEN` in your shell or `.env` (see `.env.example`).

## `skills/` — Design skills bundled for this project

See [`skills/README.md`](./skills/README.md) for the full list. Three are
installed:

1. `emil-design-eng` — motion + component craft (Emil Kowalski).
2. `impeccable` — design vocabulary + anti-slop detector (24 commands).
3. `design-taste` — anti-slop frontend skill distilled from a 247-site study.

## Quick start

```bash
# 1. Run the dev server in one terminal:
npm run dev

# 2. Have the agent screenshot the result before changing anything:
"Open http://localhost:5173 in Playwright and take a full-page screenshot."

# 3. Describe the change in design terms:
"Tighten the rhythm between hero and first project; newsreader display feels
under-scaled. Apply typeset, then animate the entrance with skill:
emil-design-eng."
```

## Environment

The MCP servers resolve env from your shell first, then fall back to the
project's `.env`. Set `FIGMA_TOKEN` once in your shell (`export
FIGMA_TOKEN=…`) or copy `.env.example` to `.env`.
