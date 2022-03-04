module.exports = {
  testPathIgnorePatterns: ["/node_modules/", "/dist/"],
  transform: {
    "\\.js$": "@swc/jest",
  },
};
