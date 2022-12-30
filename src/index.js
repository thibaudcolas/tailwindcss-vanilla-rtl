import plugin from "tailwindcss/plugin";
import { corePlugins } from "./corePlugins";

/**
 * A single plugin to rule them all.
 * Loading the overriden core plugins.
 */
const vanillaRTL = plugin((helpers) => {
  corePlugins.inset(helpers);
  corePlugins.margin(helpers);
  corePlugins.scrollMargin(helpers);
  corePlugins.scrollPadding(helpers);
  corePlugins.space(helpers);
  corePlugins.divideWidth(helpers);
  corePlugins.borderRadius(helpers);
  corePlugins.borderWidth(helpers);
  corePlugins.borderColor(helpers);
  corePlugins.borderOpacity(helpers);
  corePlugins.padding(helpers);
  corePlugins.textAlign(helpers);
});

/**
 * Use this to disable Tailwind’s core plugins,
 * so we can replace them with RTL-aware equivalents.
 */
vanillaRTL.disabledCorePlugins = {
  inset: false,
  margin: false,
  scrollMargin: false,
  scrollPadding: false,
  space: false,
  divideWidth: false,
  borderRadius: false,
  borderWidth: false,
  borderColor: false,
  borderOpacity: false,
  padding: false,
  textAlign: false,
};

module.exports = vanillaRTL;
