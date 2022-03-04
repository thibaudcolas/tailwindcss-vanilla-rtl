import { pluginFn } from "./index";

describe("tailwindcss-logical-rtl", () => {
  it("uses a stable set of core plugins", () => {
    expect(pluginFn.toString()).toMatchInlineSnapshot(`
      "(helpers)=>{
          _corePlugins.corePlugins.container(helpers);
          _corePlugins.corePlugins.inset(helpers);
          _corePlugins.corePlugins.margin(helpers);
          _corePlugins.corePlugins.scrollMargin(helpers);
          _corePlugins.corePlugins.scrollPadding(helpers);
          _corePlugins.corePlugins.space(helpers);
          _corePlugins.corePlugins.divideWidth(helpers);
          _corePlugins.corePlugins.borderRadius(helpers);
          _corePlugins.corePlugins.borderWidth(helpers);
          _corePlugins.corePlugins.borderColor(helpers);
          _corePlugins.corePlugins.padding(helpers);
          _corePlugins.corePlugins.textAlign(helpers);
      }"
    `);
  });
});
