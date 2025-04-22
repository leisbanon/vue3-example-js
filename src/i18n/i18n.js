import { createI18n } from 'vue-i18n';
import zh from '@/i18n/zh/index';
import en from '@/i18n/en/index';

const i18n = createI18n({
  locale: 'zh', // 设置默认语言
  messages: {
    en: en,
    zh: zh,
  },
});

export default i18n;
