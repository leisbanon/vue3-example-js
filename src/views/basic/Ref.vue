<template>
  <main class="text-[14px]">
    <div class="flex mb-[12px]">
      <span>状态：{{ status }}</span>
      <span class="ml-[20px] cursor-pointer underline text-blue-600" @click="status = !status">点击改变状态</span>
    </div>

    <div class="flex mb-[12px]">
      <span>Form：{{ form }}</span>
    </div>

    <hr />
    <pre>
      <code>
        import { reactive, ref } from 'vue';

        // 深层响应性
        const status = ref(true)

        // reactive 将使对对象本身具有响应性
        const form = reactive({
        name: 'Leisbanon',
        email: '15800349672@163.com'
        })

        console.log('status => ', status.value)
        console.log('form => ', form)
      </code>
    </pre>
  </main>
</template>

<script setup>
import { onMounted, reactive, ref } from 'vue';
// import { useI18n } from 'vue-i18n';

onMounted(() => {
  // let i18n = useI18n();
  // let v1 = i18n.t('desc');
  // console.log(v1);
});

const status = ref(true);
const form = reactive({
  name: 'Leisbanon',
  email: '15800349672@163.com',
});

console.log('status => ', status.value);
console.log('form => ', form);
</script>

<style scoped lang="scss"></style>
