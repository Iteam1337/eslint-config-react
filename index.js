module.exports = {
  parser: 'babel-eslint',
  extends: ['eslint:recommended', 'plugin:react/recommended', 'prettier'],
  env: {
    browser: true,
    es6: true,
    jest: true,
    mocha: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'no-unexpected-multiline': 'error',
    'no-var': 'error',
    'prefer-const': 'error',
    'react/prefer-stateless-function': 'error',
    'react/self-closing-comp': [
      'error',
      {
        component: true,
        html: true,
      },
    ],
    'space-before-blocks': ['error', 'always'],
    semi: ['error', 'never'],
  },
}
