<template>
  <main class="text-[14px]">
    <el-input
      v-model="form.name"
      placeholder="请输入"
      size="normal"
      style="width: 320px"
    ></el-input>
  </main>
</template>

<script setup>
import { reactive } from 'vue'

const form = reactive({
  name: '',
})
</script>

<style scoped lang="scss"></style>
