# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/) and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

# [0.4.0](https://github.com/thibaudcolas/tailwindcss-vanilla-rtl/compare/v0.3.0...v0.4.0) (2022-12-30)

## Changed

- Fix border-opacity utilities by overriding `borderOpacity` core plugin ([#16](https://github.com/thibaudcolas/tailwindcss-vanilla-rtl/issues/16), [#21](https://github.com/thibaudcolas/tailwindcss-vanilla-rtl/pull/21)). Thanks to [@vltansky](https://github.com/vltansky).

## Removed

- Remove broken LTR-only fallbacks for `border-radius` and `scroll-padding` utilities ([#18](https://github.com/thibaudcolas/tailwindcss-vanilla-rtl/issues/18), [#19](https://github.com/thibaudcolas/tailwindcss-vanilla-rtl/pull/19)). Thanks to [@larsenwork](https://github.com/larsenwork).

# [0.3.0](https://github.com/thibaudcolas/tailwindcss-vanilla-rtl/compare/v0.2.0...v0.3.0) (2022-10-23)

## Changed

- Upgrade to Tailwind v3.2.0 – the plugin will no longer work with older releases of Tailwind.
- Minify the published plugin.

# [0.2.0](https://github.com/thibaudcolas/tailwindcss-vanilla-rtl/compare/v0.1.0...v0.2.0) (2022-06-10)

## Changed

- Upgrade to Tailwind v3.1.0 – the plugin will no longer work with older releases of Tailwind.

## Added

- Add `text-start` for `text-align: start` and `text-end` for `text-align: end`, matching Tailwind core plugin.

## Removed

- Stop overriding the `container` core plugin, as it sets the same amount of space left and right.
- Remove LTR-only fallback styles for inset `left`/`right` positioning in older browsers.
- Remove LTR-only fallback styles for `scroll-margin` in older browsers.

# [0.1.0](https://github.com/thibaudcolas/tailwindcss-vanilla-rtl/compare/2aa1d21...v0.1.0) (2022-03-09)

First usable release!
