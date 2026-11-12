const typescriptParser = require('@typescript-eslint/parser')
const prettier = require('eslint-config-prettier')

const typescript = require('../typescript')

test('exports a native TypeScript flat config', () => {
  expect(Array.isArray(typescript)).toBe(true)
  expect(typescript[0].languageOptions.parser).toBe(typescriptParser)
  expect(typescript[0].languageOptions.parserOptions.project).toBe('./tsconfig.json')
  expect(typescript[0].plugins).toHaveProperty('@typescript-eslint')
  expect(typescript[0]).not.toHaveProperty('extends')
  expect(typescript[0]).not.toHaveProperty('env')
  expect(typescript[1].plugins).toHaveProperty('testing-library')
  expect(typescript.at(-1)).toBe(prettier)
})