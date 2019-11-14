// @flow
module.exports = {
  "**/*.+(js|jsx|css|sass|scss)": [
    "eslint . --fix",
    "prettier --write",
    "git add"
  ]
};
