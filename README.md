# Iteam ESLint config for React

Native ESLint 9 flat configs with Iteam's preferred code-quality rules for JavaScript and TypeScript React projects. Formatting remains the consumer's choice; Prettier compatibility is included last so formatting rules do not conflict.

## Install

```shell
pnpm add --save-dev @iteam/eslint-config-react eslint
```

pnpm installs the package's declared peer dependencies automatically.

## Starter config for JavaScript and JSX

Create `eslint.config.mjs`:

```js
import iteamReact from '@iteam/eslint-config-react'

export default [
  {
    ignores: ['node_modules/**', 'dist/**', 'coverage/**'],
  },
  ...iteamReact,
]
```

Run ESLint with `pnpm exec eslint src`.

## TypeScript and TSX

Create `eslint.config.mjs`:

```js
import iteamReactTypescript from '@iteam/eslint-config-react/typescript'

export default [
  {
    ignores: ['node_modules/**', 'dist/**', 'coverage/**'],
  },
  ...iteamReactTypescript,
]
```

The TypeScript config expects a `tsconfig.json` in the project working directory.

## Customize

Append flat-config objects to override rules for selected files:

```js
import iteamReact from '@iteam/eslint-config-react'

export default [
  ...iteamReact,
  {
    files: ['src/**/*.{js,jsx}'],
    rules: {
      'no-console': 'warn',
    },
  },
]
```

## Included plugins

- ESLint recommended
- React recommended
- React Hooks recommended
- Imports recommended
- JSX accessibility recommended
- Testing Library React rules for test files

## Test

```shell
pnpm test
```