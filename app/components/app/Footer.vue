<script setup lang="ts">
const route = useRoute()
const isActive = (path: string) => path === route.path
let forRerender = ref(0)
</script>

<template>
  <footer bg-brand-primary h-23 rounded-t-10 absolute w-full>
    <nav flex justify-center gap-5 items-center>
      <FooterButton
        :src-img="
          isActive('/shop')
            ? '/img/footer/moneybag-special.svg'
            : '/img/footer/moneybag.svg'
        "
        title-button="Магазин"
        @sumbit="
          () => {
            forRerender.value = 1
          }
        "
      />
      <FooterButton
        :src-img="
          isActive('/map')
            ? '/img/footer/globe-special.svg'
            : '/img/footer/globe.svg'
        "
        title-button="Карта мира"
        @sumbit="
          () => {
            forRerender = 1
          }
        "
      />
      <FooterButton
        :src-img="
          isActive('/acc')
            ? '/img/footer/user-special.svg'
            : '/img/footer/user.svg'
        "
        title-button="Аккаунт"
        @sumbit="
          () => {
            forRerender = 1
          }
        "
      />
    </nav>
  </footer>
</template>
