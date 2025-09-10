<script setup lang="ts">
defineProps({
  srcImg: String,
  titleButton: String,
  isActive:Boolean
})

const emit = defineEmits(['sumbit'])

const clickEvent = () => {
  emit('sumbit')
}

</script>

<template>
  <button flex flex-col items-center cursor-pointer h-23 w-30 justify-center @click=clickEvent>
    <NuxtImg w-6 h-6 :src="srcImg" />
    <p>{{ titleButton }}</p>
  </button>
</template>
