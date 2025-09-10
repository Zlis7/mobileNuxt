<script setup lang="ts">
let idActiveButton = -1; 

const checkID = (id:number):Boolean => id === idActiveButton
const setidActiveButton = (id:number):void => {
  idActiveButton = id
}

</script>

<template>
  <footer bg-brand-primary h-23 rounded-t-10 absolute w-full>
    <nav flex justify-center gap-5 items-center>
      <FooterButton src-img="/img/footer/moneybag.svg" title-button="Магазин" :is-active="checkID(0)" @sumbit="setidActiveButton(0)"/>
      <FooterButton src-img="/img/footer/globe.svg" title-button="Карта мира" :is-active="checkID(1)" @sumbit="setidActiveButton(1)" />
      <FooterButton src-img="/img/footer/user.svg" title-button="Аккаунт" :is-active="checkID(2)" @sumbit="setidActiveButton(2)"/>
    </nav>
  </footer>
</template>
