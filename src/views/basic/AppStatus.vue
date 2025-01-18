<template>
  <main class="text-[14px]">
    <div class="mb-[12px]">
      组合式 API：生命周期钩子：https://cn.vuejs.org/api/composition-api-lifecycle
    </div>

    <div class="flex">
      <span>status：{{ status }}</span>
      <span class="ml-[12px] text-blue-600 cursor-pointer" @click="status = !status">变更状态</span>
    </div>

    <pre>
      <code>
        import { onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUnmounted, onUpdated, ref } from 'vue'

        const status = ref(false)

        onBeforeMount(() => {
          console.log('组件被挂载之前被调用...')
        })

        onMounted(() => {
          console.log('组件挂载完成后执行...')
        })

        onBeforeUnmount(() => {
          console.log('组件实例被销毁之前调用...')
        })

        onUnmounted(() => {
          console.log('组件实例被销毁之后调用...')
        })

        onBeforeUpdate(() => {
          console.log('DOM数更新之前调用...')
        })

        onUpdated(() => {
          console.log('DOM数更新之后调用...')
        })
      </code>
    </pre>
  </main>
</template>

<script setup>
import {
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onMounted,
  onUnmounted,
  onUpdated,
  ref,
} from 'vue'

const status = ref(false)

onBeforeMount(() => {
  console.log('组件被挂载之前被调用...')
})

onMounted(() => {
  console.log('组件挂载完成后执行...')
})

onBeforeUnmount(() => {
  console.log('组件实例被销毁之前调用...')
})

onUnmounted(() => {
  console.log('组件实例被销毁之后调用...')
})

onBeforeUpdate(() => {
  console.log('DOM数更新之前调用...')
})

onUpdated(() => {
  console.log('DOM数更新之后调用...')
})
</script>

<style scoped lang="scss"></style>
