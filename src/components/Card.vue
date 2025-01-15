<template>
  <div class="card-component font-bold flex flex-col cursor-pointer items-center justify-center">
    <span class="text-[20px] font-bold mb-[12px]">{{ props.title }}</span>
    <span class="mb-[12px]">数量：{{ count }}</span>

    <div class="flex items-center text-[12px] cursor-pointer text-blue-600 select-none mb-[12px]">
      <span class="mr-[12px]" @click="onCount(1)">添加</span>
      <span @click="onCount(-1)">减少</span>
    </div>

    <slot></slot>
  </div>
</template>

<script setup>
// defineProps 是一个 script setup 中编译的宏命令，因此并不需要显式的导入
const props = defineProps(['title', 'count'])
const emit = defineEmits(['count-change'])

console.log('props => ', {
  ...props
})

const onCount = (value) => {
  emit('count-change', value)
}
</script>

<style scoped lang="scss">
.card-component {
  width: 180px;
  height: 180px;
  background-color: rgba(0, 0, 0, 0.08);
  border-radius: 8px;
  position: relative;
}
</style>
