<script setup lang="ts">
definePageMeta({
  title: 'Магазин',
})
</script>

<template>
  <div
    bg-brand-primary
    border-18
    border-brand-primary
    flex
    flex-col
    gap-4
    rounded-10
    mb-2
  >
    <div bg-brand rounded-5 p-5>
      <div
        flex
        flex-col
        gap-5
        items-center
        h-145
        wrap-normal
        overflow-x-scroll
        scrollbar-none
      >
        <ShopCard
          url-img="/main/crosshair.svg"
          price="780555550"
          title="Увеличение максиммаксмаксимальных прав атакимаксимальных"
        />

        <ShopCard
          url-img="/main/crosshair.svg"
          price="780555550"
          title="Увеличение максиммаксмаксимальных прав атакимаксимальных"
        />

        <ShopCard
          url-img="/main/crosshair.svg"
          price="780555550"
          title="Увеличение максиммаксммак симмаксмаксима льныхмаксимма ксмаксимальных максиммаксмак симальных максиммаксм аксима льныхмаксимма ксмаксима льныхаксим альных прав атакимаксимальных"
        />
      </div>
    </div>

    <div bg-brand rounded-5 h-20 p-4 flex flex-col justify-center items-end>
      <MainButton
        src-img="/main/basket-shopping.svg"
        title-button="Корзина"
        link="/basket"
      />
    </div>
  </div>
</template>
