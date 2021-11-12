# Iteam ESLint config for React

Contains our preferred eslint defaults for JS and TS React development

This library only contains eslint _code quality_ rules and is unopinionated regarding the consumer projects formatting preferences.

Althought it shouldn't happend, this means that any prettier configs you decide to use locally will override any potential conflicts it would raise with this eslint config.

## Installation

Add the peer dependencies of `@iteam/eslint-config-react` to your dev dependencies:

```shell
npx install-peerdeps --dev @iteam/eslint-config-react
```

Then add `@iteam/eslint-config-react`

```shell
npm install --save-dev @iteam/eslint-config-react
```

Then add the `@iteam/eslint-config-react` in your `.eslintrc`

```json
{
  "extends": ["@iteam/eslint-config-react"]
}
```

If you bootstrapped with create-react-app, edit package.json:

```json
"eslintConfig": {
    "extends": [
      "@iteam/eslint-config-react/typescript"
    ]
  },
```

## Plugins

- ESLint recommended
- React recommended
- React Hooks recommended
- Imports recommended
- JSX a11y recommended
