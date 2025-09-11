<script setup lang="ts">
definePageMeta({
  title: 'Профиль',
})
</script>

<template>
  <div
    bg-brand-primary
    border-18
    border-brand-primary
    flex
    flex-col
    gap-2
    rounded-10
    mb-2
  >
    <div bg-brand rounded-5 p-5>
      <div flex flex-col justify-center items-center>
        <div w-35 h-35 bg-brandWhite rounded-full></div>
        <div text-2xl font-semibold pt-2>Имя пользователя</div>
        <div flex gap-1 text-sm mb-6 pt-3>
          Игрок
          <div text-brandRed>красного</div>
          альянса
        </div>
      </div>

      <div flex flex-wrap justify-center gap-5>
        <div
          bg-brand-primary
          rounded-lg
          items-center
          p-2
          h-22
          w-35
          rounded-full
          content-center
          text-center
          flex
          flex-col
          justify-center
        >
          <NuxtImg w-8 h-8 src="/img/main/trophy.svg" />
          <div text-xl font-medium>37%</div>
          <div text-sm text-brandGray>Max взятых полей</div>
        </div>

        <div
          bg-brand-primary
          rounded-lg
          items-center
          p-2
          h-22
          w-35
          rounded-full
          content-center
          text-center
          flex
          flex-col
          justify-center
        >
          <NuxtImg w-8 h-8 src="/img/main/dollar.svg" />
          <div text-xl font-medium>7500</div>
          <div text-sm text-brandGray>Монет</div>
        </div>

        <div
          bg-brand-primary
          rounded-lg
          items-center
          p-2
          h-22
          w-35
          rounded-full
          content-center
          text-center
          flex
          flex-col
          justify-center
        >
          <NuxtImg w-8 h-8 src="/img/main/crosshair.svg" />
          <div text-xl font-medium>3/4</div>
          <div text-sm text-brandGray>Право атаки</div>
        </div>
      </div>
    </div>

    <p text-xl text-end pr-3>Ваши возможности</p>

    <div bg-brand rounded-5 p-4 flex flex-col gap-3 justify-end items-end>
      <MainButton
        src-img="/img/main/loader.svg"
        title-button="Выйти из профиля"
      />
      <MainButton
        src-img="/img/main/sensor-triangle.svg"
        title-button="Сообщить о проблеме"
      />
      <MainButton
        src-img="/img/main/refresh.svg"
        title-button="Обновить данные"
      />
    </div>
  </div>
</template>
