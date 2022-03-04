import plugin from "tailwindcss/plugin";
import { corePlugins } from "./corePlugins";

module.exports = plugin((helpers) => {
  corePlugins.container(helpers);
  corePlugins.inset(helpers);
  corePlugins.margin(helpers);
  corePlugins.scrollMargin(helpers);
  corePlugins.scrollPadding(helpers);
  corePlugins.space(helpers);
  corePlugins.divideWidth(helpers);
  corePlugins.borderRadius(helpers);
  corePlugins.borderWidth(helpers);
  corePlugins.borderColor(helpers);
  corePlugins.padding(helpers);
  corePlugins.textAlign(helpers);
});
