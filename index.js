const babelParser = require('@babel/eslint-parser')
const js = require('@eslint/js')
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
    files: ['**/*.{js,jsx,mjs,cjs}'],
    languageOptions: {
      parser: babelParser,
      parserOptions: {
        ecmaVersion: 2020,
        requireConfigFile: false,
        babelOptions: {
          presets: ['@babel/preset-react'],
        },
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
      import: importPlugin,
      'jsx-a11y': jsxA11y,
      react,
      'react-hooks': reactHooks,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      ...jsxA11y.configs.recommended.rules,
      ...importPlugin.configs.recommended.rules,
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',
      'no-var': 'error',
      'prefer-const': 'warn',
      'no-unused-vars': [
        'warn',
        {
          ignoreRestSiblings: true,
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],
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