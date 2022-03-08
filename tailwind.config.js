const logicalRTL = require("../dist/index");

module.exports = {
  content: ["demo/*.html"],
  plugins: [logicalRTL],
  corePlugins: {
    ...logicalRTL.disabledCorePlugins,
  },
};
