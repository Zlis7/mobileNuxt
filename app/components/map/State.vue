<script setup lang="ts">
const props = defineProps({
  title: String,
  srcImg: String,
})
</script>

<template>
  <div
    bg-brand-primary
    w-30
    h-12
    flex
    gap-2
    items-center
    justify-center
    rounded-full
    flex-shrink-0
  >
    <p text-lg>{{ props.title }}</p>
    <NuxtImg w-8 h-8 :src="props.srcImg" />
  </div>
</template>
