<script setup lang="ts">
const props = defineProps({
  value: Number,
  srcImg: String,
})
</script>

<template>
  <div
    bg-brand-primary
    w-16
    h-16
    flex
    flex-col
    gap-2
    items-center
    justify-center
    rounded-full
    flex-shrink-0
  >
    <NuxtImg w-7 h-7 :src="props.srcImg" />
    <p text-sm>{{ props.value }}%</p>
  </div>
</template>
