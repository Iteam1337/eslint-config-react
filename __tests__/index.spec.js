const babelParser = require('@babel/eslint-parser')
const prettier = require('eslint-config-prettier')

const index = require('../')

test('exports a native JavaScript flat config', () => {
  expect(Array.isArray(index)).toBe(true)
  expect(index[0].languageOptions.parser).toBe(babelParser)
  expect(index[0].plugins).toHaveProperty('react')
  expect(index[0].plugins).toHaveProperty('react-hooks')
  expect(index[0]).not.toHaveProperty('extends')
  expect(index[0]).not.toHaveProperty('env')
  expect(index[1].plugins).toHaveProperty('testing-library')
  expect(index.at(-1)).toBe(prettier)
})