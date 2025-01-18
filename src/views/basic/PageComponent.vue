<template>
  <main class="text-[14px]">
    <div class="flex">
      <Card class="mr-[12px]" title="图文" :count="count" @count-change="onCountChange">
        <div>Card Component</div>
      </Card>
    </div>

    <pre>
      <code>
        // defineProps, defineEmits 是一个 script setup 中编译的宏命令，因此并不需要显式的导入
        const props = defineProps(['title', 'count'])
        const emit = defineEmits(['count-change'])

        const onCount = (value) => {
          emit('count-change', value)
        }
      </code>
    </pre>
  </main>
</template>

<script setup>
import Card from '@/components/Card.vue'
import { ref } from 'vue'

const count = ref(0)

const onCountChange = (value) => {
  count.value += value
}
</script>

<style scoped lang="scss"></style>
