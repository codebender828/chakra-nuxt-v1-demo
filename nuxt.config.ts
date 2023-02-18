import { extendTheme } from "@chakra-ui/vue-next";
import theme from "./theme";

export default defineNuxtConfig({
  modules: ["@chakra-ui/nuxt-next"],
  chakra: {
    extendTheme: extendTheme(theme),
  },
  plugins: ["@/plugins/typography"],
});
