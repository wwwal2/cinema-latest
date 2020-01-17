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
    'react/forbid-prop-types': 0,
    'arrow-body-style': 0,
  },
};