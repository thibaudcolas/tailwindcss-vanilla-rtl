const vanillaRTL = require("../dist/index");

module.exports = {
  content: ["demo/*.html"],
  plugins: [vanillaRTL],
  corePlugins: {
    ...vanillaRTL.disabledCorePlugins,
  },
};
