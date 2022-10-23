# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/) and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html), enforced with [semantic-release](https://github.com/semantic-release/semantic-release).

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
