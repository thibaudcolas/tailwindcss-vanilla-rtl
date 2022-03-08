module.exports = {
  extends: ["eslint:recommended"],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
  },
  env: {
    node: true,
    es6: true,
    jest: true,
  },
  ignorePatterns: ["node_modules", "dist"],
};
