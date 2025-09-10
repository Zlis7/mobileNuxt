<script setup lang="ts">
let idActiveButtons = -1; 
</script>

<template>
  <footer bg-brand-primary h-23 rounded-t-10 absolute w-full>
    <nav flex justify-center gap-5 items-center>
      <FooterButton src-img="/img/footer/moneybag.svg" title-button="Магазин" :is-active="idActiveButtons == 0 ? true: false" @sumbit="()=>{idActiveButtons = 0}"/>
      <FooterButton src-img="/img/footer/globe.svg" title-button="Карта мира" :is-active="idActiveButtons == 1 ? true: false" @sumbit="()=>{idActiveButtons = 1}" />
      <FooterButton src-img="/img/footer/user.svg" title-button="Аккаунт" :is-active="idActiveButtons == 2 ? true: false" @sumbit="()=>{idActiveButtons = 2}"/>
    </nav>
  </footer>
</template>
