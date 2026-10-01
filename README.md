# CardBoardLab

Design your own card and board game components, then playtest them right in
the browser: shuffle, draw, private hands, dice and coins.

**Status:** 🚧 Phase 1 — template editor

## Planned features

- **Template editor:** design your own card layout with image, text, number and icon slots
- **Card builder:** fill a template per card, or import many cards from CSV
- **Playtest table:** shuffle, draw, discard, flip, drag pieces freely; d4–d20 dice and coins
- **Private hands:** only you can see your hand (online multiplayer planned)
- **Works on mobile:** playtest from your phone, not just a desktop

## Tech stack

React 19 · TypeScript · Vite · Tailwind CSS · shadcn/ui · Zustand + Immer · Konva · pnpm workspaces

## Getting started

```bash
pnpm install
pnpm dev
```

## Project structure

```text
apps/web          React app
packages/shared   Shared TypeScript types (templates, cards, table state)
```

## License

[MIT](LICENSE)