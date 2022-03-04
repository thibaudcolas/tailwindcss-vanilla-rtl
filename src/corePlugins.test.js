import { corePlugins } from "./corePlugins";

describe("corePlugins", () => {
  it("exports a stable set of core plugins", () => {
    expect(Object.keys(corePlugins)).toMatchInlineSnapshot(`
      Array [
        "container",
        "inset",
        "margin",
        "scrollMargin",
        "scrollPadding",
        "space",
        "divideWidth",
        "borderRadius",
        "borderWidth",
        "borderColor",
        "padding",
        "textAlign",
      ]
    `);
  });
});
