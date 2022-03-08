import pluginFn from "../src/index";

describe("tailwindcss-vanilla-rtl", () => {
  it("disables a stable set of core plugins", () => {
    expect(pluginFn.disabledCorePlugins).toMatchInlineSnapshot(`
      Object {
        "borderColor": false,
        "borderRadius": false,
        "borderWidth": false,
        "container": false,
        "divideWidth": false,
        "inset": false,
        "margin": false,
        "padding": false,
        "scrollMargin": false,
        "scrollPadding": false,
        "space": false,
        "textAlign": false,
      }
    `);
  });
});
