import { defineStyleConfig } from "@chakra-ui/vue-next";

export const Button = defineStyleConfig({
  baseStyle: {
    rounded: "none",
    fontFamily: "body",
  },
  variants: {
    solid: {
      borderBottomColor: "velvet.900",
      borderBottomWidth: "2px",
      borderBottomStyle: "solid",
    },
  },
});
