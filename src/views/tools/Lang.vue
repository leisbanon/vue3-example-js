<template>
  <main class="text-[14px]">
    <p>Vue 国际化插件（vue-i18n）</p>
    <p>https://vue-i18n.intlify.dev/guide/essentials/started.html</p>

    <div class="mt-[12px] flex flex-col">
      <span>desc - {{ $t('login.desc') }}</span>
      <span>login_success - {{ $t('login.login_success') }}</span>
    </div>

    <div class="flex mt-[12px]">
      <p class="mr-[12px]">切换语言：</p>
      <ol class="flex items-center">
        <li v-for="value of locales" :key="value" class="mr-[30px] underline text-blue-600 cursor-pointer" @click="onToggleLocale(value)">{{ value }}</li>
      </ol>
    </div>
  </main>
</template>

<script setup>
import { getCurrentInstance, onMounted, reactive, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
const { proxy } = getCurrentInstance();
const route = useRoute();
const router = useRouter();

onMounted(() => {
  let i18n = proxy.$i18n;
  locales.value = i18n.availableLocales;
});

// Refs
const locales = ref([]);

// Props

// Data

// Methods
const onToggleLocale = (value) => {
  console.log(value);

  proxy.$i18n.locale = value;
};
</script>

<style scoped lang="scss"></style>
