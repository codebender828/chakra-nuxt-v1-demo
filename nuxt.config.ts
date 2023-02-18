import theme from "./theme";

export default defineNuxtConfig({
  modules: ["@chakra-ui/nuxt-next"],
  chakra: {
    extendTheme: theme,
  },
  plugins: ["@/plugins/typography"],
});
