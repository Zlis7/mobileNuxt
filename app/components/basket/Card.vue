<script setup lang="ts">
const props = defineProps({
  price: String,
  title: String,
})
</script>

<template>
  <div
    bg-brand-primary
    w-80
    h-28
    flex
    gap-2
    items-center
    pr-5
    rounded-4xl
    flex-shrink-0
  >
    <div pl-3 flex flex-col gap-2>
      <div flex gap-2 items-center h-10>
        <NuxtImg w-7 h-7 src="/main/badge-dollar.svg" />
        <p text-5>{{ props.price }}</p>
      </div>
      <p overflow-hidden text-ellipsis h-10 text-3>
        {{ props.title }}
      </p>
    </div>
    <NuxtImg w-8 h-8 src="/main/basket-shopping.svg" />
  </div>
</template>
