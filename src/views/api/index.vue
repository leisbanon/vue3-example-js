<template>
  <main>
    <RouterView />
  </main>
</template>

<script setup>
import { nextTick, provide, useId } from 'vue';

const message = {
  name: 'Leisbanon',
  message: 'Hello Vue3',
}
provide('message', message)

nextTick(() => {
  console.log('Next Tikc...')
})

console.log('useId => ', useId()) // v-0
console.log('useId => ', useId()) // v-1
</script>

<style scoped lang="scss"></style>
