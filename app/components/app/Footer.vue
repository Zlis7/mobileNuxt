<script setup lang="ts">
const route = useRoute()
const isActive = (paths: string[]) => paths.includes(route.path)
</script>

<template>
  <footer bg-brand-primary h-23 rounded-t-10 absolute w-full>
    <nav flex justify-center gap-5 items-center>
      <FooterButton
        :src-img="
          isActive(['/shop', '/basket'])
            ? '/img/footer/moneybag-special.svg'
            : '/img/footer/moneybag.svg'
        "
        :color-title="
          isActive(['/shop', '/basket'])
            ? 'text-brand-special'
            : 'text-brandWhite'
        "
        title-button="Магазин"
        link="/shop"
      />
      <FooterButton
        :src-img="
          isActive(['/map'])
            ? '/img/footer/globe-special.svg'
            : '/img/footer/globe.svg'
        "
        :color-title="
          isActive(['/map']) ? 'text-brand-special' : 'text-brandWhite'
        "
        title-button="Карта мира"
        link="/map"
      />
      <FooterButton
        :src-img="
          isActive(['/acc'])
            ? '/img/footer/user-special.svg'
            : '/img/footer/user.svg'
        "
        :color-title="
          isActive(['/acc']) ? 'text-brand-special' : 'text-brandWhite'
        "
        title-button="Аккаунт"
        link="/acc"
      />
    </nav>
  </footer>
</template>
