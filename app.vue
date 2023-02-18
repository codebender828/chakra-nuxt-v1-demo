<template>
  <chakra.div bg="bg" min-h="100vh" p="10">
    <c-stack spacing="8">
      <c-heading> Welcome to Chakra UI Vue Next </c-heading>
      <chakra.p> Powered by Nuxt 3 </chakra.p>
      <c-button-group size="lg" spacing="8">
        <c-button color-scheme="velvet"> Hello World </c-button>
        <c-icon-button
          color-scheme="velvet"
          aria-label="Toggle color mode"
          :icon="useColorModeValue('moon', 'sun').value"
          @click="changeColorMode"
          rounded="none"
        />
      </c-button-group>
    </c-stack>
  </chakra.div>
</template>

<script setup lang="ts">
import { chakra, useColorMode, useColorModeValue } from "@chakra-ui/vue-next";

const { colorMode, toggleColorMode } = useColorMode();

function changeColorMode() {
  debugger;
  toggleColorMode();
}

watchEffect(() => console.log("color mode changed", colorMode.value));
</script>
