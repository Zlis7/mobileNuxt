<script setup lang="ts">
defineProps({
  srcImg: String,
  titleButton: String,
})
</script>

<template>
  <button flex flex-col items-center cursor-pointer h-23 w-30 justify-center>
    <NuxtImg w-6 h-6 :src="srcImg" />
    <p>{{ titleButton }}</p>
  </button>
</template>
