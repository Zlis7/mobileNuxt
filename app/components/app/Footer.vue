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
            ? '/footer/moneybag-special.svg'
            : '/footer/moneybag.svg'
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
            ? '/footer/globe-special.svg'
            : '/footer/globe.svg'
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
            ? '/footer/user-special.svg'
            : '/footer/user.svg'
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
