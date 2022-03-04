## Browser support

Browser support for CSS logical properties and values is still very recent.

This plugin supports the following browser versions:

- macOS Safari 12.1 (2019-03-25) and up
- iOS Safari 12.2 (2019-03-25) and up
- Chrome 69 (2018-09-04) and up
- Firefox 41 (2015-09-22) and up
- Edge 79 (2020-01-15) and up

There are a few caveats in older browser versions:

- [Mirroring border radius](https://caniuse.com/?search=border-start-start-radius) in RTL content only works with:
  - macOS Safari 15 (2021-09-21) and up
  - iOS Safari 15.1 (2021-09-21) and up
  - Chrome 89 (2021-03-01) and up
  - Firefox 66 (2019-03-19) and up
  - Edge 89 (2021-03-04) and up
- [Mirroring scroll-margin](https://caniuse.com/?search=scroll-margin-inline-start) in RTL content only works with:
  - Firefox 68 (2019-07-09) and up
  - Chrome 69 (2018-09-04) and up
  - macOS Safari 14.1 (2021-04-26) and up
  - iOS Safari 14.5 (2021-04-26) and up
  - Edge 79 (2020-01-15) and up
- [Mirroring scroll-padding](https://caniuse.com/?search=scroll-padding-inline-start) in RTL content only works with:
  - Firefox 68 (2019-07-09) and up
  - Chrome 69 (2018-09-04) and up
  - macOS Safari 15 (2021-09-21) and up
  - iOS Safari 15.1 (2021-09-21) and up
  - Edge 79 (2020-01-15) and up
- [Mirroring `left` / `right` positioning](https://caniuse.com/?search=inset-inline-start) in RTL content only works with:
  - Firefox 63 (2018-10-23) and up
  - Chrome 87 (2020-11-17) and up
  - Safari 14.1 (2021-04-26) and up
  - iOS Safari 14.5 (2021-04-26) and up
  - Edge 87 (2020-11-20) and up

## Targeted properties

As this plugin is only intended to mirror LTR layouts for right-to-left (RTL) scripts, it only affects the following properties:
