# Copilot instructions:

## Scope
This repo is an assistant to help editors or teachers.

## Tech stack
- TypeScript, Lit web components, Storybook, Vitest.
- Formatting via Prettier; linting via ESLint (flat config, type-checked).

## General Principles
- We build accessible, performant web components using Lit
- All components must be tree-shakable with register functions
- Follow the existing component architecture (see PinataButton as reference)
- Maintain consistency with design tokens and CSS custom properties
- Every component needs documentation and Storybook stories

## Working agreements
- Prefer minimal, focused changes. Preserve existing public APIs and component names.
- Keep code tree-shakable. Web components should expose explicit registration functions.
- Use CSS custom properties for styling and token usage; avoid hard-coded colors where tokens exist.
- Follow existing patterns in the components package for structure, exports, and Storybook stories.

## Commands (from repo root)
- Build: 'npm run build'
- Lint: 'npm run lint'
- Test: 'npm run test'
- Storybook (components): 'npm run storybook:components'

## Web component conventions (packages/components)
- Use Lit and define a custom element class.
- Provide a register* function that calls customElements.define if needed (tree-shakable).
- Add Storybook stories in *.stories.ts and include key variants and states.
- Document the component API and usage in a README next to the component.
- Update package exports and the package entry index when adding a new component.

## When adding a new component
- Create a folder under packages/components/src/web-component/<component-name>/.
- Implement the component and registration function.
- Add styles and CSS custom properties.
- Add Storybook stories.
- If utility functions or custom hooks are added, create a unit test and run it to ensure the code does not fail.
- Update exports (packages/components/src/index.ts and package.json exports if needed).
- Update README with API and usage examples.

## Do / Don’t
- Do keep API names and attributes consistent with existing components.
- Do include accessibility considerations (ARIA, keyboard behavior) where relevant.
- Don’t introduce new tooling or dependencies without a clear need.
- Don’t change lint/format settings unless explicitly requested.