<script setup lang="ts">
const props = defineProps({
  urlImg: String,
  price: String,
  title: String,
})
</script>

<template>
  <div
    bg-brand-primary
    w-70
    flex
    flex-col
    gap-2
    justify-center
    items-center
    text-center
    p-2
    rounded-4xl
    flex-shrink-0
  >
    <NuxtImg w-30 h-30 :src="props.urlImg" />
    <p>
      {{ props.title }}
    </p>
    <div flex justify-between gap-3 items-center w-full>
      <div flex gap-2 items-center>
        <NuxtImg w-7 h-7 src="/main/badge-dollar.svg" />
        <p>{{ props.price }}</p>
      </div>
      <NuxtImg w-10 h-10 src="/main/check-access.svg" />
    </div>
  </div>
</template>
