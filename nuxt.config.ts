import theme from "./theme";

export default defineNuxtConfig({
  modules: [
    (_options, nuxt) => {
      nuxt.hook("nitro:config", (config) => {
        // Prevent inlining emotion (+ the crucial css cache!) in dev mode
        if (nuxt.options.dev) {
          if (config.externals) {
            config.externals.external ||= [];
            config.externals.external.push("@emotion/server");
            config.externals.external.push("lodash.mergewith");
          }
        }
      });
    },
    "@chakra-ui/nuxt-next",
  ],
  chakra: {
    extendTheme: theme,
  },
  plugins: ["@/plugins/typography"],
  experimental: {
    emitRouteChunkError: true,
  },
});
