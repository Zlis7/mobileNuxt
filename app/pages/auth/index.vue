<script setup lang="ts">
import * as yup from 'yup'

definePageMeta({
  title: 'Авторизация',
  layout: 'auth',
})

const schema = yup.object({
  email: yup.string().required().email(),
  password: yup.string().required().min(12),
})

function submit() {
  console.warn('SUBMIT')
}
</script>

<template>
  <Form
    bg-brand-primary
    h-208
    p-4
    flex
    justify-center
    flex-col
    relative
    gap-10
    :validation-schema="schema"
    @submit="submit"
  >
    <div flex flex-col gap-1>
      <label for="email">Почта:</label>
      <Field bg-brand h-13 p-2 name="email" type="email" />
    </div>

    <div flex flex-col gap-1>
      <label for="email">Пароль:</label>
      <Field bg-brand h-13 p-2 name="password" type="password" />
    </div>

    <div flex justify-center gap-2>
      <NuxtImg w-6 h-6 src="/img/main/loader.svg" />
      <button type="submit">Войти через Github</button>
    </div>

    <div flex justify-center gap-2>
      <NuxtImg w-6 h-6 src="/img/main/loader.svg" />
      <button type="submit">Войти через Google</button>
    </div>

    <div text-brandRed absolute bottom-0 right-0 m-4 flex flex-col>
      <ErrorMessage text-end name="email" />
      <ErrorMessage text-end name="password" />
    </div>
  </Form>
</template>
