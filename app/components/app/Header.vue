<script setup lang="ts">
const route = useRoute()
</script>

<template>
  <header flex justify-center text-2xl px-4 pt-4>
    {{ route.meta.title }}
  </header>
</template>
