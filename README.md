# Chakra UI / Nuxt 3 Minimal Starter (No Hoisting)

Here we install Chakra UI Nuxt module and run `pnpm build` or `pnpm generate`. The process emits an error:
`Ambiguous external namespace resolution: "MODE_NAME" re-exports "useColorMode" from one of the external modules "MODULE_1", "MODULE_2", "MODULE_3", "MODULE_4" or "MODULE_5"`.

```shell
chakra-nuxt-demo on  debug-pnpm-no-hoisting via  v18.13.0 on ☁️  (us-west-2) 
❯ pnpm build                            

> @ build /Users/jonasrct/Github/chakra-nuxt-demo
> nuxt build

Nuxi 3.2.2                                                                                                                                                18:10:59
Nuxt 3.2.2 with Nitro 2.2.2                                                                                                                               18:10:59
ℹ Building client...                                                                                                                                      18:11:01
vite v4.1.2 building for production...
✓ 755 modules transformed.
.nuxt/dist/client/_nuxt/ibm-plex-mono-vietnamese-400-normal.cfc4eb12.woff2      5.26 kB
.nuxt/dist/client/_nuxt/ibm-plex-mono-cyrillic-ext-400-normal.dec44d96.woff2    6.92 kB
.nuxt/dist/client/manifest.json                                                 8.00 kB
.nuxt/dist/client/_nuxt/ibm-plex-mono-cyrillic-400-normal.8bc4f839.woff2        8.33 kB
.nuxt/dist/client/_nuxt/dm-sans-latin-ext-700-normal.6652abd0.woff2            10.85 kB
.nuxt/dist/client/_nuxt/dm-sans-latin-ext-400-normal.83c62f43.woff2            10.97 kB
.nuxt/dist/client/_nuxt/ibm-plex-mono-latin-ext-400-normal.119309a7.woff2      13.01 kB
.nuxt/dist/client/_nuxt/ibm-plex-mono-latin-400-normal.14ce87c8.woff2          13.88 kB
.nuxt/dist/client/_nuxt/dm-sans-latin-400-normal.7164a212.woff2                18.10 kB
.nuxt/dist/client/_nuxt/dm-sans-latin-700-normal.f3c0fa2c.woff2                18.21 kB
.nuxt/dist/client/_nuxt/dm-sans-all-700-normal.dd031ca7.woff                   31.41 kB
.nuxt/dist/client/_nuxt/dm-sans-all-400-normal.52bacf2c.woff                   31.59 kB
.nuxt/dist/client/_nuxt/ibm-plex-mono-all-400-normal.3790e6d3.woff             51.09 kB
.nuxt/dist/client/_nuxt/error-500.26873dcc.css                                  1.95 kB │ gzip:   0.74 kB
.nuxt/dist/client/_nuxt/entry.764f8f11.css                                      3.00 kB │ gzip:   0.57 kB
.nuxt/dist/client/_nuxt/error-404.dd29d79a.css                                  3.63 kB │ gzip:   1.12 kB
.nuxt/dist/client/_nuxt/_plugin-vue_export-helper.bf6a7ef8.js                   0.17 kB │ gzip:   0.16 kB
.nuxt/dist/client/_nuxt/error-component.fa0fd7f4.js                             1.20 kB │ gzip:   0.64 kB
.nuxt/dist/client/_nuxt/error-500.a61c559e.js                                   1.93 kB │ gzip:   1.01 kB
.nuxt/dist/client/_nuxt/error-404.c04f6242.js                                   5.89 kB │ gzip:   2.62 kB
.nuxt/dist/client/_nuxt/entry.b916038e.js                                     427.57 kB │ gzip: 143.06 kB
✔ Client built in 2235ms                                                                                                                                  18:11:04
ℹ Building server...                                                                                                                                      18:11:04
vite v4.1.2 building SSR bundle for production...
transforming (38) node_modules/.pnpm/@chakra-ui+vue-next@0.0.0-dev-20230218191716_@emotion+css@11.10.6/node_modules/@chakra-ui/vue-next/dist/chunk-MXDE2D42.mjsAmbiguous external namespace resolution: "node_modules/.pnpm/@chakra-ui+vue-next@0.0.0-dev-20230218191716_@emotion+css@11.10.6/node_modules/@chakra-ui/vue-next/dist/index.mjs" re-exports "ColorModeConstants" from one of the external modules "@chakra-ui/vue-system", "@chakra-ui/c-accordion", "@chakra-ui/c-alert", "@chakra-ui/c-avatar", "@chakra-ui/c-breadcrumb", "@chakra-ui/c-button", "@chakra-ui/c-checkbox", "@chakra-ui/c-color-mode", "@chakra-ui/c-close-button", "@chakra-ui/c-code", "@chakra-ui/c-focus-lock", "@chakra-ui/c-form-control", "@chakra-ui/c-icon", "@chakra-ui/c-image", "@chakra-ui/c-input", "@chakra-ui/vue-layout", "@chakra-ui/c-media-query", "@chakra-ui/c-menu", "@chakra-ui/c-modal", "@chakra-ui/c-motion", "@chakra-ui/c-pin-input", "@chakra-ui/c-popper", "@chakra-ui/c-portal", "@chakra-ui/c-reset", "@chakra-ui/c-skip-nav", "@chakra-ui/c-spinner", "@chakra-ui/c-scroll-lock", "@chakra-ui/c-theme-provider", "@chakra-ui/c-tag", "@chakra-ui/c-toast", "@chakra-ui/c-visually-hidden", "@chakra-ui/vue-accessibilty", "@chakra-ui/vue-composables" and "@chakra-ui/vue-utils", guessing "@chakra-ui/vue-system".
Ambiguous external namespace resolution: "node_modules/.pnpm/@chakra-ui+vue-next@0.0.0-dev-20230218191716_@emotion+css@11.10.6/node_modules/@chakra-ui/vue-next/dist/index.mjs" re-exports "cookieStorageManagerSSR" from one of the external modules "@chakra-ui/vue-system", "@chakra-ui/c-accordion", "@chakra-ui/c-alert", "@chakra-ui/c-avatar", "@chakra-ui/c-breadcrumb", "@chakra-ui/c-button", "@chakra-ui/c-checkbox", "@chakra-ui/c-color-mode", "@chakra-ui/c-close-button", "@chakra-ui/c-code", "@chakra-ui/c-focus-lock", "@chakra-ui/c-form-control", "@chakra-ui/c-icon", "@chakra-ui/c-image", "@chakra-ui/c-input", "@chakra-ui/vue-layout", "@chakra-ui/c-media-query", "@chakra-ui/c-menu", "@chakra-ui/c-modal", "@chakra-ui/c-motion", "@chakra-ui/c-pin-input", "@chakra-ui/c-popper", "@chakra-ui/c-portal", "@chakra-ui/c-reset", "@chakra-ui/c-skip-nav", "@chakra-ui/c-spinner", "@chakra-ui/c-scroll-lock", "@chakra-ui/c-theme-provider", "@chakra-ui/c-tag", "@chakra-ui/c-toast", "@chakra-ui/c-visually-hidden", "@chakra-ui/vue-accessibilty", "@chakra-ui/vue-composables" and "@chakra-ui/vue-utils", guessing "@chakra-ui/vue-system".
Ambiguous external namespace resolution: "node_modules/.pnpm/@chakra-ui+vue-next@0.0.0-dev-20230218191716_@emotion+css@11.10.6/node_modules/@chakra-ui/vue-next/dist/index.mjs" re-exports "domElements" from one of the external modules "@chakra-ui/vue-system", "@chakra-ui/c-accordion", "@chakra-ui/c-alert", "@chakra-ui/c-avatar", "@chakra-ui/c-breadcrumb", "@chakra-ui/c-button", "@chakra-ui/c-checkbox", "@chakra-ui/c-color-mode", "@chakra-ui/c-close-button", "@chakra-ui/c-code", "@chakra-ui/c-focus-lock", "@chakra-ui/c-form-control", "@chakra-ui/c-icon", "@chakra-ui/c-image", "@chakra-ui/c-input", "@chakra-ui/vue-layout", "@chakra-ui/c-media-query", "@chakra-ui/c-menu", "@chakra-ui/c-modal", "@chakra-ui/c-motion", "@chakra-ui/c-pin-input", "@chakra-ui/c-popper", "@chakra-ui/c-portal", "@chakra-ui/c-reset", "@chakra-ui/c-skip-nav", "@chakra-ui/c-spinner", "@chakra-ui/c-scroll-lock", "@chakra-ui/c-theme-provider", "@chakra-ui/c-tag", "@chakra-ui/c-toast", "@chakra-ui/c-visually-hidden", "@chakra-ui/vue-accessibilty", "@chakra-ui/vue-composables" and "@chakra-ui/vue-utils", guessing "@chakra-ui/vue-system".
Ambiguous external namespace resolution: "node_modules/.pnpm/@chakra-ui+vue-next@0.0.0-dev-20230218191716_@emotion+css@11.10.6/node_modules/@chakra-ui/vue-next/dist/index.mjs" re-exports "createIcon" from one of the external modules "@chakra-ui/vue-system", "@chakra-ui/c-accordion", "@chakra-ui/c-alert", "@chakra-ui/c-avatar", "@chakra-ui/c-breadcrumb", "@chakra-ui/c-button", "@chakra-ui/c-checkbox", "@chakra-ui/c-color-mode", "@chakra-ui/c-close-button", "@chakra-ui/c-code", "@chakra-ui/c-focus-lock", "@chakra-ui/c-form-control", "@chakra-ui/c-icon", "@chakra-ui/c-image", "@chakra-ui/c-input", "@chakra-ui/vue-layout", "@chakra-ui/c-media-query", "@chakra-ui/c-menu", "@chakra-ui/c-modal", "@chakra-ui/c-motion", "@chakra-ui/c-pin-input", "@chakra-ui/c-popper", "@chakra-ui/c-portal", "@chakra-ui/c-reset", "@chakra-ui/c-skip-nav", "@chakra-ui/c-spinner", "@chakra-ui/c-scroll-lock", "@chakra-ui/c-theme-provider", "@chakra-ui/c-tag", "@chakra-ui/c-toast", "@chakra-ui/c-visually-hidden", "@chakra-ui/vue-accessibilty", "@chakra-ui/vue-composables" and "@chakra-ui/vue-utils", guessing "@chakra-ui/vue-system".
Ambiguous external namespace resolution: "node_modules/.pnpm/@chakra-ui+vue-next@0.0.0-dev-20230218191716_@emotion+css@11.10.6/node_modules/@chakra-ui/vue-next/dist/index.mjs" re-exports "useColorMode" from one of the external modules "@chakra-ui/vue-system", "@chakra-ui/c-accordion", "@chakra-ui/c-alert", "@chakra-ui/c-avatar", "@chakra-ui/c-breadcrumb", "@chakra-ui/c-button", "@chakra-ui/c-checkbox", "@chakra-ui/c-color-mode", "@chakra-ui/c-close-button", "@chakra-ui/c-code", "@chakra-ui/c-focus-lock", "@chakra-ui/c-form-control", "@chakra-ui/c-icon", "@chakra-ui/c-image", "@chakra-ui/c-input", "@chakra-ui/vue-layout", "@chakra-ui/c-media-query", "@chakra-ui/c-menu", "@chakra-ui/c-modal", "@chakra-ui/c-motion", "@chakra-ui/c-pin-input", "@chakra-ui/c-popper", "@chakra-ui/c-portal", "@chakra-ui/c-reset", "@chakra-ui/c-skip-nav", "@chakra-ui/c-spinner", "@chakra-ui/c-scroll-lock", "@chakra-ui/c-theme-provider", "@chakra-ui/c-tag", "@chakra-ui/c-toast", "@chakra-ui/c-visually-hidden", "@chakra-ui/vue-accessibilty", "@chakra-ui/vue-composables" and "@chakra-ui/vue-utils", guessing "@chakra-ui/vue-system".
Ambiguous external namespace resolution: "node_modules/.pnpm/@chakra-ui+vue-next@0.0.0-dev-20230218191716_@emotion+css@11.10.6/node_modules/@chakra-ui/vue-next/dist/index.mjs" re-exports "useTheme" from one of the external modules "@chakra-ui/vue-system", "@chakra-ui/c-accordion", "@chakra-ui/c-alert", "@chakra-ui/c-avatar", "@chakra-ui/c-breadcrumb", "@chakra-ui/c-button", "@chakra-ui/c-checkbox", "@chakra-ui/c-color-mode", "@chakra-ui/c-close-button", "@chakra-ui/c-code", "@chakra-ui/c-focus-lock", "@chakra-ui/c-form-control", "@chakra-ui/c-icon", "@chakra-ui/c-image", "@chakra-ui/c-input", "@chakra-ui/vue-layout", "@chakra-ui/c-media-query", "@chakra-ui/c-menu", "@chakra-ui/c-modal", "@chakra-ui/c-motion", "@chakra-ui/c-pin-input", "@chakra-ui/c-popper", "@chakra-ui/c-portal", "@chakra-ui/c-reset", "@chakra-ui/c-skip-nav", "@chakra-ui/c-spinner", "@chakra-ui/c-scroll-lock", "@chakra-ui/c-theme-provider", "@chakra-ui/c-tag", "@chakra-ui/c-toast", "@chakra-ui/c-visually-hidden", "@chakra-ui/vue-accessibilty", "@chakra-ui/vue-composables" and "@chakra-ui/vue-utils", guessing "@chakra-ui/vue-system".
Ambiguous external namespace resolution: "node_modules/.pnpm/@chakra-ui+vue-next@0.0.0-dev-20230218191716_@emotion+css@11.10.6/node_modules/@chakra-ui/vue-next/dist/index.mjs" re-exports "CStack" from one of the external modules "@chakra-ui/vue-system", "@chakra-ui/c-accordion", "@chakra-ui/c-alert", "@chakra-ui/c-avatar", "@chakra-ui/c-breadcrumb", "@chakra-ui/c-button", "@chakra-ui/c-checkbox", "@chakra-ui/c-color-mode", "@chakra-ui/c-close-button", "@chakra-ui/c-code", "@chakra-ui/c-focus-lock", "@chakra-ui/c-form-control", "@chakra-ui/c-icon", "@chakra-ui/c-image", "@chakra-ui/c-input", "@chakra-ui/vue-layout", "@chakra-ui/c-media-query", "@chakra-ui/c-menu", "@chakra-ui/c-modal", "@chakra-ui/c-motion", "@chakra-ui/c-pin-input", "@chakra-ui/c-popper", "@chakra-ui/c-portal", "@chakra-ui/c-reset", "@chakra-ui/c-skip-nav", "@chakra-ui/c-spinner", "@chakra-ui/c-scroll-lock", "@chakra-ui/c-theme-provider", "@chakra-ui/c-tag", "@chakra-ui/c-toast", "@chakra-ui/c-visually-hidden", "@chakra-ui/vue-accessibilty", "@chakra-ui/vue-composables" and "@chakra-ui/vue-utils", guessing "@chakra-ui/vue-system".
Ambiguous external namespace resolution: "node_modules/.pnpm/@chakra-ui+vue-next@0.0.0-dev-20230218191716_@emotion+css@11.10.6/node_modules/@chakra-ui/vue-next/dist/index.mjs" re-exports "CHeading" from one of the external modules "@chakra-ui/vue-system", "@chakra-ui/c-accordion", "@chakra-ui/c-alert", "@chakra-ui/c-avatar", "@chakra-ui/c-breadcrumb", "@chakra-ui/c-button", "@chakra-ui/c-checkbox", "@chakra-ui/c-color-mode", "@chakra-ui/c-close-button", "@chakra-ui/c-code", "@chakra-ui/c-focus-lock", "@chakra-ui/c-form-control", "@chakra-ui/c-icon", "@chakra-ui/c-image", "@chakra-ui/c-input", "@chakra-ui/vue-layout", "@chakra-ui/c-media-query", "@chakra-ui/c-menu", "@chakra-ui/c-modal", "@chakra-ui/c-motion", "@chakra-ui/c-pin-input", "@chakra-ui/c-popper", "@chakra-ui/c-portal", "@chakra-ui/c-reset", "@chakra-ui/c-skip-nav", "@chakra-ui/c-spinner", "@chakra-ui/c-scroll-lock", "@chakra-ui/c-theme-provider", "@chakra-ui/c-tag", "@chakra-ui/c-toast", "@chakra-ui/c-visually-hidden", "@chakra-ui/vue-accessibilty", "@chakra-ui/vue-composables" and "@chakra-ui/vue-utils", guessing "@chakra-ui/vue-system".
Ambiguous external namespace resolution: "node_modules/.pnpm/@chakra-ui+vue-next@0.0.0-dev-20230218191716_@emotion+css@11.10.6/node_modules/@chakra-ui/vue-next/dist/index.mjs" re-exports "CHStack" from one of the external modules "@chakra-ui/vue-system", "@chakra-ui/c-accordion", "@chakra-ui/c-alert", "@chakra-ui/c-avatar", "@chakra-ui/c-breadcrumb", "@chakra-ui/c-button", "@chakra-ui/c-checkbox", "@chakra-ui/c-color-mode", "@chakra-ui/c-close-button", "@chakra-ui/c-code", "@chakra-ui/c-focus-lock", "@chakra-ui/c-form-control", "@chakra-ui/c-icon", "@chakra-ui/c-image", "@chakra-ui/c-input", "@chakra-ui/vue-layout", "@chakra-ui/c-media-query", "@chakra-ui/c-menu", "@chakra-ui/c-modal", "@chakra-ui/c-motion", "@chakra-ui/c-pin-input", "@chakra-ui/c-popper", "@chakra-ui/c-portal", "@chakra-ui/c-reset", "@chakra-ui/c-skip-nav", "@chakra-ui/c-spinner", "@chakra-ui/c-scroll-lock", "@chakra-ui/c-theme-provider", "@chakra-ui/c-tag", "@chakra-ui/c-toast", "@chakra-ui/c-visually-hidden", "@chakra-ui/vue-accessibilty", "@chakra-ui/vue-composables" and "@chakra-ui/vue-utils", guessing "@chakra-ui/vue-system".
Ambiguous external namespace resolution: "node_modules/.pnpm/@chakra-ui+vue-next@0.0.0-dev-20230218191716_@emotion+css@11.10.6/node_modules/@chakra-ui/vue-next/dist/index.mjs" re-exports "CCircle" from one of the external modules "@chakra-ui/vue-system", "@chakra-ui/c-accordion", "@chakra-ui/c-alert", "@chakra-ui/c-avatar", "@chakra-ui/c-breadcrumb", "@chakra-ui/c-button", "@chakra-ui/c-checkbox", "@chakra-ui/c-color-mode", "@chakra-ui/c-close-button", "@chakra-ui/c-code", "@chakra-ui/c-focus-lock", "@chakra-ui/c-form-control", "@chakra-ui/c-icon", "@chakra-ui/c-image", "@chakra-ui/c-input", "@chakra-ui/vue-layout", "@chakra-ui/c-media-query", "@chakra-ui/c-menu", "@chakra-ui/c-modal", "@chakra-ui/c-motion", "@chakra-ui/c-pin-input", "@chakra-ui/c-popper", "@chakra-ui/c-portal", "@chakra-ui/c-reset", "@chakra-ui/c-skip-nav", "@chakra-ui/c-spinner", "@chakra-ui/c-scroll-lock", "@chakra-ui/c-theme-provider", "@chakra-ui/c-tag", "@chakra-ui/c-toast", "@chakra-ui/c-visually-hidden", "@chakra-ui/vue-accessibilty", "@chakra-ui/vue-composables" and "@chakra-ui/vue-utils", guessing "@chakra-ui/vue-system".
Ambiguous external namespace resolution: "node_modules/.pnpm/@chakra-ui+vue-next@0.0.0-dev-20230218191716_@emotion+css@11.10.6/node_modules/@chakra-ui/vue-next/dist/index.mjs" re-exports "CBadge" from one of the external modules "@chakra-ui/vue-system", "@chakra-ui/c-accordion", "@chakra-ui/c-alert", "@chakra-ui/c-avatar", "@chakra-ui/c-breadcrumb", "@chakra-ui/c-button", "@chakra-ui/c-checkbox", "@chakra-ui/c-color-mode", "@chakra-ui/c-close-button", "@chakra-ui/c-code", "@chakra-ui/c-focus-lock", "@chakra-ui/c-form-control", "@chakra-ui/c-icon", "@chakra-ui/c-image", "@chakra-ui/c-input", "@chakra-ui/vue-layout", "@chakra-ui/c-media-query", "@chakra-ui/c-menu", "@chakra-ui/c-modal", "@chakra-ui/c-motion", "@chakra-ui/c-pin-input", "@chakra-ui/c-popper", "@chakra-ui/c-portal", "@chakra-ui/c-reset", "@chakra-ui/c-skip-nav", "@chakra-ui/c-spinner", "@chakra-ui/c-scroll-lock", "@chakra-ui/c-theme-provider", "@chakra-ui/c-tag", "@chakra-ui/c-toast", "@chakra-ui/c-visually-hidden", "@chakra-ui/vue-accessibilty", "@chakra-ui/vue-composables" and "@chakra-ui/vue-utils", guessing "@chakra-ui/vue-system".
Ambiguous external namespace resolution: "node_modules/.pnpm/@chakra-ui+vue-next@0.0.0-dev-20230218191716_@emotion+css@11.10.6/node_modules/@chakra-ui/vue-next/dist/index.mjs" re-exports "CButtonGroup" from one of the external modules "@chakra-ui/vue-system", "@chakra-ui/c-accordion", "@chakra-ui/c-alert", "@chakra-ui/c-avatar", "@chakra-ui/c-breadcrumb", "@chakra-ui/c-button", "@chakra-ui/c-checkbox", "@chakra-ui/c-color-mode", "@chakra-ui/c-close-button", "@chakra-ui/c-code", "@chakra-ui/c-focus-lock", "@chakra-ui/c-form-control", "@chakra-ui/c-icon", "@chakra-ui/c-image", "@chakra-ui/c-input", "@chakra-ui/vue-layout", "@chakra-ui/c-media-query", "@chakra-ui/c-menu", "@chakra-ui/c-modal", "@chakra-ui/c-motion", "@chakra-ui/c-pin-input", "@chakra-ui/c-popper", "@chakra-ui/c-portal", "@chakra-ui/c-reset", "@chakra-ui/c-skip-nav", "@chakra-ui/c-spinner", "@chakra-ui/c-scroll-lock", "@chakra-ui/c-theme-provider", "@chakra-ui/c-tag", "@chakra-ui/c-toast", "@chakra-ui/c-visually-hidden", "@chakra-ui/vue-accessibilty", "@chakra-ui/vue-composables" and "@chakra-ui/vue-utils", guessing "@chakra-ui/vue-system".
Ambiguous external namespace resolution: "node_modules/.pnpm/@chakra-ui+vue-next@0.0.0-dev-20230218191716_@emotion+css@11.10.6/node_modules/@chakra-ui/vue-next/dist/index.mjs" re-exports "CButton" from one of the external modules "@chakra-ui/vue-system", "@chakra-ui/c-accordion", "@chakra-ui/c-alert", "@chakra-ui/c-avatar", "@chakra-ui/c-breadcrumb", "@chakra-ui/c-button", "@chakra-ui/c-checkbox", "@chakra-ui/c-color-mode", "@chakra-ui/c-close-button", "@chakra-ui/c-code", "@chakra-ui/c-focus-lock", "@chakra-ui/c-form-control", "@chakra-ui/c-icon", "@chakra-ui/c-image", "@chakra-ui/c-input", "@chakra-ui/vue-layout", "@chakra-ui/c-media-query", "@chakra-ui/c-menu", "@chakra-ui/c-modal", "@chakra-ui/c-motion", "@chakra-ui/c-pin-input", "@chakra-ui/c-popper", "@chakra-ui/c-portal", "@chakra-ui/c-reset", "@chakra-ui/c-skip-nav", "@chakra-ui/c-spinner", "@chakra-ui/c-scroll-lock", "@chakra-ui/c-theme-provider", "@chakra-ui/c-tag", "@chakra-ui/c-toast", "@chakra-ui/c-visually-hidden", "@chakra-ui/vue-accessibilty", "@chakra-ui/vue-composables" and "@chakra-ui/vue-utils", guessing "@chakra-ui/vue-system".
Ambiguous external namespace resolution: "node_modules/.pnpm/@chakra-ui+vue-next@0.0.0-dev-20230218191716_@emotion+css@11.10.6/node_modules/@chakra-ui/vue-next/dist/index.mjs" re-exports "CIconButton" from one of the external modules "@chakra-ui/vue-system", "@chakra-ui/c-accordion", "@chakra-ui/c-alert", "@chakra-ui/c-avatar", "@chakra-ui/c-breadcrumb", "@chakra-ui/c-button", "@chakra-ui/c-checkbox", "@chakra-ui/c-color-mode", "@chakra-ui/c-close-button", "@chakra-ui/c-code", "@chakra-ui/c-focus-lock", "@chakra-ui/c-form-control", "@chakra-ui/c-icon", "@chakra-ui/c-image", "@chakra-ui/c-input", "@chakra-ui/vue-layout", "@chakra-ui/c-media-query", "@chakra-ui/c-menu", "@chakra-ui/c-modal", "@chakra-ui/c-motion", "@chakra-ui/c-pin-input", "@chakra-ui/c-popper", "@chakra-ui/c-portal", "@chakra-ui/c-reset", "@chakra-ui/c-skip-nav", "@chakra-ui/c-spinner", "@chakra-ui/c-scroll-lock", "@chakra-ui/c-theme-provider", "@chakra-ui/c-tag", "@chakra-ui/c-toast", "@chakra-ui/c-visually-hidden", "@chakra-ui/vue-accessibilty", "@chakra-ui/vue-composables" and "@chakra-ui/vue-utils", guessing "@chakra-ui/vue-system".
Ambiguous external namespace resolution: "node_modules/.pnpm/@chakra-ui+vue-next@0.0.0-dev-20230218191716_@emotion+css@11.10.6/node_modules/@chakra-ui/vue-next/dist/index.mjs" re-exports "useColorModeValue" from one of the external modules "@chakra-ui/vue-system", "@chakra-ui/c-accordion", "@chakra-ui/c-alert", "@chakra-ui/c-avatar", "@chakra-ui/c-breadcrumb", "@chakra-ui/c-button", "@chakra-ui/c-checkbox", "@chakra-ui/c-color-mode", "@chakra-ui/c-close-button", "@chakra-ui/c-code", "@chakra-ui/c-focus-lock", "@chakra-ui/c-form-control", "@chakra-ui/c-icon", "@chakra-ui/c-image", "@chakra-ui/c-input", "@chakra-ui/vue-layout", "@chakra-ui/c-media-query", "@chakra-ui/c-menu", "@chakra-ui/c-modal", "@chakra-ui/c-motion", "@chakra-ui/c-pin-input", "@chakra-ui/c-popper", "@chakra-ui/c-portal", "@chakra-ui/c-reset", "@chakra-ui/c-skip-nav", "@chakra-ui/c-spinner", "@chakra-ui/c-scroll-lock", "@chakra-ui/c-theme-provider", "@chakra-ui/c-tag", "@chakra-ui/c-toast", "@chakra-ui/c-visually-hidden", "@chakra-ui/vue-accessibilty", "@chakra-ui/vue-composables" and "@chakra-ui/vue-utils", guessing "@chakra-ui/vue-system".
✓ 73 modules transformed.
.nuxt/dist/server/_nuxt/error-404-styles.80478c74.mjs            0.08 kB
.nuxt/dist/server/_nuxt/error-500-styles.2483f26f.mjs            0.08 kB
.nuxt/dist/server/_nuxt/typography-styles.18f314c4.mjs           0.16 kB
.nuxt/dist/server/styles.mjs                                     0.54 kB
.nuxt/dist/server/_nuxt/_plugin-vue_export-helper-a9bd3342.js    0.40 kB │ map:   0.69 kB
.nuxt/dist/server/_nuxt/typography-styles-1.mjs-9e1aa46f.js      0.88 kB │ map:   0.12 kB
.nuxt/dist/server/_nuxt/typography-styles-2.mjs-28f2e175.js      0.88 kB │ map:   0.12 kB
.nuxt/dist/server/_nuxt/island-renderer-fb8eb0b5.js              1.87 kB │ map:   1.68 kB
.nuxt/dist/server/_nuxt/error-component-1efff851.js              2.06 kB │ map:   2.67 kB
.nuxt/dist/server/_nuxt/error-500-styles-1.mjs-495e79e6.js       2.17 kB │ map:   0.12 kB
.nuxt/dist/server/_nuxt/error-dev-styles-1.mjs-8c89367e.js       2.46 kB │ map:   0.12 kB
.nuxt/dist/server/_nuxt/error-500-d90c651a.js                    3.75 kB │ map:   3.82 kB
.nuxt/dist/server/_nuxt/error-404-styles-1.mjs-dae82ae2.js       3.86 kB │ map:   0.12 kB
.nuxt/dist/server/_nuxt/error-404-4767daab.js                    8.84 kB │ map:  16.38 kB
.nuxt/dist/server/server.mjs                                   143.27 kB │ map: 201.22 kB
✔ Server built in 470ms                                                                                                                                   18:11:04
✔ Generated public .output/public                                                                                                                   nitro 18:11:04
ℹ Building Nitro Server (preset: node-server)                                                                                                       nitro 18:11:04
✔ Nitro server built                                                                                                                                nitro 18:11:07
  ├─ .output/server/package.json (4.26 kB) (1.24 kB gzip)
  ├─ .output/server/index.mjs (610 B) (303 B gzip)
  ├─ .output/server/chunks/rollup/_virtual_head-static.mjs.map (111 B) (112 B gzip)
  ├─ .output/server/chunks/rollup/_virtual_head-static.mjs (301 B) (217 B gzip)
  ├─ .output/server/chunks/nitro/node-server.mjs.map (202 kB) (12.2 kB gzip)
  ├─ .output/server/chunks/nitro/node-server.mjs (53 kB) (15.1 kB gzip)
  ├─ .output/server/chunks/handlers/renderer.mjs.map (20.6 kB) (3.61 kB gzip)
  ├─ .output/server/chunks/handlers/renderer.mjs (16.3 kB) (4.97 kB gzip)
  ├─ .output/server/chunks/error-500.mjs.map (1.11 kB) (406 B gzip)
  ├─ .output/server/chunks/error-500.mjs (4.26 kB) (1.82 kB gzip)
  ├─ .output/server/chunks/emotion-utils.esm.mjs.map (17.6 kB) (3.22 kB gzip)
  ├─ .output/server/chunks/emotion-utils.esm.mjs (15.8 kB) (5.31 kB gzip)
  ├─ .output/server/chunks/app/styles.mjs.map (457 B) (243 B gzip)
  ├─ .output/server/chunks/app/styles.mjs (612 B) (290 B gzip)
  ├─ .output/server/chunks/app/server.mjs.map (116 kB) (13.1 kB gzip)
  ├─ .output/server/chunks/app/server.mjs (143 kB) (25.1 kB gzip)
  ├─ .output/server/chunks/app/client.manifest.mjs.map (5.33 kB) (874 B gzip)
  ├─ .output/server/chunks/app/client.manifest.mjs (11.2 kB) (1.14 kB gzip)
  ├─ .output/server/chunks/app/_nuxt/typography-styles.18f314c4.mjs.map (842 B) (304 B gzip)
  ├─ .output/server/chunks/app/_nuxt/typography-styles.18f314c4.mjs (2.35 kB) (705 B gzip)
  ├─ .output/server/chunks/app/_nuxt/island-renderer-fb8eb0b5.mjs.map (1.16 kB) (516 B gzip)
  ├─ .output/server/chunks/app/_nuxt/island-renderer-fb8eb0b5.mjs (1.62 kB) (694 B gzip)
  ├─ .output/server/chunks/app/_nuxt/error-component-1efff851.mjs.map (2.37 kB) (816 B gzip)
  ├─ .output/server/chunks/app/_nuxt/error-component-1efff851.mjs (2.1 kB) (928 B gzip)
  ├─ .output/server/chunks/app/_nuxt/error-500-styles.2483f26f.mjs.map (374 B) (233 B gzip)
  ├─ .output/server/chunks/app/_nuxt/error-500-styles.2483f26f.mjs (2.22 kB) (861 B gzip)
  ├─ .output/server/chunks/app/_nuxt/error-500-d90c651a.mjs.map (1.7 kB) (623 B gzip)
  ├─ .output/server/chunks/app/_nuxt/error-500-d90c651a.mjs (3.44 kB) (1.46 kB gzip)
  ├─ .output/server/chunks/app/_nuxt/error-404-styles.80478c74.mjs.map (374 B) (232 B gzip)
  ├─ .output/server/chunks/app/_nuxt/error-404-styles.80478c74.mjs (3.92 kB) (1.25 kB gzip)
  ├─ .output/server/chunks/app/_nuxt/error-404-4767daab.mjs.map (6.74 kB) (1.65 kB gzip)
  ├─ .output/server/chunks/app/_nuxt/error-404-4767daab.mjs (8.57 kB) (2.76 kB gzip)
  ├─ .output/server/chunks/app/_nuxt/_plugin-vue_export-helper-a9bd3342.mjs.map (585 B) (326 B gzip)
  └─ .output/server/chunks/app/_nuxt/_plugin-vue_export-helper-a9bd3342.mjs (403 B) (274 B gzip)
Σ Total size: 5.53 MB (1.37 MB gzip)
✔ You can preview this build using node .output/server/index.mjs                               
```


Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
