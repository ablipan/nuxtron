<template>
  <div
    w="100vw"
    h="100vh"
    flex="~ col"
    items-center
    justify-center
    space="y-4"
  >
    <div
      space="x-10"
      flex="~"
      items-center
    >
      <i
        i-logos-nuxt-icon
        inline-block
        text="6xl"
      />
      <span>+</span>
      <i
        i-logos-electron
        inline-block
        text="6xl"
      />
    </div>
    <div
      whitespace-pre
      text="xl gray-500"
    >
      {{ data }}
    </div>
  </div>
</template>
<script lang="ts" setup>
// ssr
const { data } = await useFetch('/api/greet')
</script>
