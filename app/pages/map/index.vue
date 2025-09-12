<script setup lang="ts">
definePageMeta({
  title: 'Карта мира',
})
</script>

<template>
  <div
    bg-brand-primary
    border-18
    border-brand-primary
    rounded-10
    mb-2
    flex
    flex-col
    gap-6
    items-center
  >
    <div flex flex-col gap-4>
      <div flex flex-col gap-4>
        <p text-lg text-center>Мировое господство</p>

        <div
          bg-brand
          rounded-5
          p-4
          flex
          gap-6
          wrap-normal
          flex-wrap
          justify-center
        >
          <MapCardColor :value="45" src-img="/main/color-red.svg" />
          <MapCardColor :value="45" src-img="/main/color-green.svg" />
          <MapCardColor :value="45" src-img="/main/color-purple.svg" />
          <MapCardColor :value="45" src-img="/main/color-blue.svg" />
          <MapCardColor :value="45" src-img="/main/color-white.svg" />
          <MapCardColor :value="45" src-img="/main/color-yellow.svg" />
        </div>
      </div>

      <div flex flex-col gap-4>
        <p text-lg text-center>
          Положение вашего <span text-brandRed>альянса</span>
        </p>

        <div
          bg-brand
          rounded-5
          p-4
          flex
          gap-6
          wrap-normal
          flex-wrap
          justify-center
        >
          <MapState title="№3" src-img="/main/trophy.svg" />
          <MapState title="145%" src-img="/main/chart-line.svg" />
          <MapState title="+150" src-img="/main/dollar.svg" />
        </div>
      </div>
    </div>

    <div
      bg-brand
      flex
      flex-col
      justify-center
      items-center
      p-3
      w-70
      rounded-2xl
      m-5
    >
      <p text-xl text-center>
        Атаковать <span text-brandYellow>желтый</span> цвет
      </p>
      <NuxtImg w-40 h-40 src="/main/knife.svg" />
    </div>
  </div>
</template>
