module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-param-reassign': ['error', { props: false }],
    'no-restricted-syntax': 'off',
    'no-underscore-dangle': 'off',
    'no-plusplus': 'off',
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  globals: {
    page: true,
    browser: true,
    context: true,
    jestPuppeteer: true,
  },
};
