<script setup lang="ts">
const props = defineProps({
  srcImg: String,
  titleButton: String,
})
</script>

<template>
  <button
    bg-brand-primary
    flex
    items-center
    cursor-pointer
    h-12
    w-65
    p-3
    justify-end
    rounded-full
    gap-3
  >
    <p>{{ props.titleButton }}</p>
    <NuxtImg w-6 h-6 :src="props.srcImg" />
  </button>
</template>
