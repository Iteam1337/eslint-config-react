module.exports = {
  parser: 'babel-eslint',
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  env: {
    browser: true,
    jest: true,
    mocha: true,
  },
  rules: {
    'no-var': 'error',
    'no-unexpected-multiline': 'error',
    'prefer-const': 'error',
    'react/prefer-stateless-function': 'error',
    semi: ['error', 'never'],
    'space-before-blocks': ['error', 'always'],
    'space-before-function-paren': ['error', 'always'],
  },
}
