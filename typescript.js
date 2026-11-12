const js = require('@eslint/js')
const typescriptEslint = require('@typescript-eslint/eslint-plugin')
const typescriptParser = require('@typescript-eslint/parser')
const prettier = require('eslint-config-prettier')
const importPlugin = require('eslint-plugin-import')
const jsxA11y = require('eslint-plugin-jsx-a11y')
const react = require('eslint-plugin-react')
const reactHooks = require('eslint-plugin-react-hooks')
const testingLibrary = require('eslint-plugin-testing-library')
const globals = require('globals')

const testFiles = ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)']

module.exports = [
  {
    files: ['**/*.{ts,tsx,mts,cts}'],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        project: './tsconfig.json',
      },
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.jest,
        ...globals.mocha,
        ...globals.amd,
      },
    },
    plugins: {
      '@typescript-eslint': typescriptEslint,
      import: importPlugin,
      'jsx-a11y': jsxA11y,
      react,
      'react-hooks': reactHooks,
    },
    settings: {
      ...importPlugin.configs.typescript.settings,
      react: {
        version: 'detect',
      },
    },
    rules: {
      ...js.configs.recommended.rules,
      ...typescriptEslint.configs['eslint-recommended'].overrides[0].rules,
      ...typescriptEslint.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      ...jsxA11y.configs.recommended.rules,
      ...importPlugin.configs.recommended.rules,
      ...importPlugin.configs.typescript.rules,
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',
      'no-var': 'error',
      'prefer-const': 'warn',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          ignoreRestSiblings: true,
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
    },
  },
  {
    files: testFiles,
    settings: {
      'import/ignore': ['@testing-library/react'],
    },
    plugins: {
      'testing-library': testingLibrary,
    },
    rules: testingLibrary.configs.react.rules,
  },
  prettier,
]