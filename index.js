module.exports = {
  parser: 'babel-eslint',
  extends: ['eslint:recommended', 'plugin:react/recommended', 'prettier'],
  env: {
    browser: true,
    es6: true,
    jest: true,
    mocha: true,
  },
  rules: {
    'no-unexpected-multiline': 'error',
    'no-var': 'error',
    'prefer-const': 'error',
    'react/prefer-stateless-function': 'error',
    'space-before-blocks': ['error', 'always'],
    semi: ['error', 'never'],
  },
}
