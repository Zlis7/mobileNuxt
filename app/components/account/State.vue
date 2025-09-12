<script setup lang="ts">
const props = defineProps({
  srcImg: String,
  value: String,
  title: String,
})
</script>

<template>
  <div
    bg-brand-primary
    rounded-lg
    items-center
    p-2
    h-22
    w-37
    rounded-full
    content-center
    text-center
    flex
    flex-col
    justify-center
  >
    <NuxtImg w-8 h-8 :src="props.srcImg" />
    <div text-xl font-medium>{{ props.value }}</div>
    <div text-sm text-brandGray>{{ props.title }}</div>
  </div>
</template>
