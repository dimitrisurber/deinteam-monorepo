# Dein Team Monorepo

Centralized component system + brand tokens + section renderer for the 6 Dein Team sites.

See [`/Users/dimsum/localprojects/deinteam/COMPONENT-SYSTEM.md`](../deinteam/COMPONENT-SYSTEM.md) for the full architecture.

## Layout

```
packages/
├── components/         @deinteam/components — typed React components, variant-driven
├── brand-tokens/       @deinteam/brand-tokens — DTH + DTL theme JSON + logo assets
└── section-renderer/   @deinteam/section-renderer — dispatches EmDash sections_config

apps/
├── (none yet — sites migrate one at a time per phase 1+)
```

## Getting started

```bash
# At the repo root
pnpm install
pnpm typecheck       # verify all packages compile
pnpm ladle           # opens component preview at localhost:61000
```

## Adding a new component

1. `packages/components/src/MyComponent/MyComponent.tsx` + `MyComponent.types.ts`
2. Export from `packages/components/src/index.ts`
3. Add a Ladle story `MyComponent.stories.tsx` for each variant
4. Components must:
   - Be typed (no `any`)
   - Take `variant?: '...' | '...'` prop with string-literal union
   - Reference brand tokens via CSS custom properties (`var(--color-primary)`)
   - Have sensible defaults — missing optional props render an empty slot, never crash
   - Be site-agnostic — never read `process.env.SITE` or branch on brand

## Migrating a site to use the library

See COMPONENT-SYSTEM.md "Migration plan". Phase 1 (dth.healthcare) is the first site.

## Component changes ship lockstep

A version bump on `@deinteam/components` triggers rebuild + redeploy of every app that imports it. Turborepo's build cache keeps that cheap. Ship breaking changes deliberately — there's no per-app version pin.
