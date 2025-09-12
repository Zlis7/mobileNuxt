<script setup lang="ts">
const props = defineProps({
  srcImg: String,
  colorTitle: String,
  titleButton: String,
  link: String,
})
</script>

<template>
  <NuxtLink
    flex
    flex-col
    items-center
    cursor-pointer
    h-23
    w-30
    justify-center
    :to="props.link"
  >
    <NuxtImg w-6 h-6 :src="props.srcImg" />
    <p :class="props.colorTitle">
      {{ props.titleButton }}
    </p>
  </NuxtLink>
</template>
