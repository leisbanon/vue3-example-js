<template>
  <main class="text-[14px]">
    <div class="flex flex-col leading-[25px]">
      <span>user：{{ user }}</span>
      <span>userFormat => {{ userFormat }}</span>
      <span class="cursor-pointer underline text-blue-600" @click="user.name = 'GuanQun'">改变姓名</span>
    </div>

    <pre>
      <code>
        import { reactive, computed } from 'vue'

        const user = reactive({
          name: 'leisbanon',
          phone: '158****9672'
        })

        const userFormat = computed(() => {
          return `姓名：${user.name} - 电话：${user.phone}`
        })
      </code>
    </pre>
  </main>
</template>

<script setup>
import { reactive, computed } from 'vue'

const user = reactive({
  name: 'leisbanon',
  phone: '158****9672'
})

const userFormat = computed(() => {
  return `姓名：${user.name} - 电话：${user.phone}`
})
</script>

<style scoped lang="scss"></style>
