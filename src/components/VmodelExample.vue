<template>
  <div class="vmodel-example flex items-center">
    <div class="mr-[40px]">
      <span class="mr-[12px]">姓名：{{ name }}</span>
      <span class="text-blue-400 cursor-pointer select-none" @click="name = 'GuanQun'">变更</span>
    </div>

    <div>
      <span class="mr-[12px]">年龄：{{ age }}</span>
      <span class="text-blue-400 cursor-pointer select-none" @click="age += 1">添加</span>
    </div>
  </div>
</template>

<script setup>
const name = defineModel('name')
const age = defineModel('age')
</script>

<style scoped lang="scss">
.vmodel-example {
  height: 50px;
  padding: 0 16px !important;
  background-color: rgba(0, 0, 0, 0.08);
  border-radius: 8px;
  position: relative;
}
</style>
