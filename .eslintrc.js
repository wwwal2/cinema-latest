module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
		'airbnb',
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
    'class-methods-use-this': 0
  },
};