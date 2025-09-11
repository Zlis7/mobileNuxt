<script setup lang="ts">
const props = defineProps({
  srcImg: String,
  titleButton: String,
})

const emit = defineEmits(['sumbit'])

function clickEvent() {
  emit('sumbit')
}

onUpdated(() => {
  console.warn('reload')
})
</script>

<template>
  <button
    flex
    flex-col
    items-center
    cursor-pointer
    h-23
    w-30
    justify-center
    @click="clickEvent"
  >
    <NuxtImg w-6 h-6 :src="props.srcImg" />
    <p>{{ props.titleButton }}</p>
  </button>
</template>
