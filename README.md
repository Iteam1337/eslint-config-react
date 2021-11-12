# Iteam ESLint config for React

Contains our preferred eslint defaults for JS and TS React development

This library only contains eslint _code quality_ rules and is unopinionated regarding the consumer projects formatting preferences.

Althought it shouldn't happend, this means that any prettier configs you decide to use locally will override any potential conflicts it would raise with this eslint config.

## Installation

```shell
npm install --save-dev @iteam/eslint-config-react
```

Then add the `@iteam/eslint-config-react` in your `.eslintrc`

```json
{
  "extends": ["@iteam/eslint-config-react"]
}
```

## Plugins

- ESLint recommended
- React recommended
- React Hooks recommended
- JSX a11y recommended
