/* eslint-env node */
// @flow
module.exports = {
  extends: [require.resolve('eslint-config-fusion')],
  globals: {
    Blob: true,
    document: true,
    fetch: true,
    navigator: true,
    process: true,
    window: true,
  },
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
  },
};
