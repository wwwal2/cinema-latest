module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb-base',
    "airbnb/rules/react",
		'airbnb/hooks',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'no-param-reassign': 0,
    'react/forbid-prop-types': 0,
    'arrow-body-style': 0,
    'no-underscore-dangle': 0,
    'class-methods-use-this': 0,
  },
};