# Copilot instructions:

## Scope

This repo is an assistant to help editors or teachers.

## Tech stack

- TypeScript, Next.js, Tailwind.
- Formatting via Prettier; linting via ESLint (flat config, type-checked).

## Working agreements

- Prefer minimal, focused changes. Preserve existing public APIs and component names.
- Keep code tree-shakable. Web components should expose explicit registration functions.
- Use Tailwind CSS; avoid hard-coded values preferably.

## Commands (from repo root)

- Build: 'npm run build'
- Lint: 'npm run lint'
- Test: 'npm run test'

## When adding a new component or utility function:

- If utility functions or custom hooks are added, create a unit test and run it to ensure the code does not fail.
- Update exports (packages/components/src/index.ts and package.json exports if needed).
- Update README with API and usage examples.

## Do / Don’t

- Do keep API names and attributes consistent with existing components.
- Do include accessibility considerations (ARIA, keyboard behavior) where relevant.
- Don’t introduce new tooling or dependencies without a clear need.
- Don’t change lint/format settings unless explicitly requested.
