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
        <AccountState
          src-img="/img/main/trophy.svg"
          value="37%"
          title="Max взятых полей"
        />
        <AccountState
          src-img="/img/main/dollar.svg"
          value="7500"
          title="Монет"
        />
        <AccountState
          src-img="/img/main/crosshair.svg"
          value="3/4"
          title="Право атаки"
        />
      </div>
    </div>

    <p text-xl text-end pr-3>Ваши возможности</p>

    <div bg-brand rounded-5 p-4 flex flex-col gap-3 justify-end items-end>
      <MainButton
        src-img="/img/main/loader.svg"
        title-button="Выйти из профиля"
        link="/auth"
      />
      <MainButton
        src-img="/img/main/sensor-triangle.svg"
        title-button="Сообщить о проблеме"
        link="/shop"
      />
      <MainButton
        src-img="/img/main/refresh.svg"
        title-button="Обновить данные"
        link="/acc"
      />
    </div>
  </div>
</template>
