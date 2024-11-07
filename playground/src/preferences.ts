import { defineOverridesPreferences } from '@vben/preferences';

/**
 * @description 项目配置文件
 * 只需要覆盖项目中的一部分配置，不需要的配置不用覆盖，会自动使用默认配置
 */
export const overridesPreferences = defineOverridesPreferences({
  // overrides
  app: {
    accessMode: 'frontend',
    name: import.meta.env.VITE_APP_TITLE,
  },
  copyright: {
    companyName: 'My',
    companySiteLink: 'https://www.myse.com.cn/',
    date: '2024',
    enable: true,
    icp: '',
    icpLink: '',
  },
  logo: {
    enable: true,
    source: 'https://unpkg.com/@vbenjs/static-source@0.1.7/source/logo-v1.webp',
  },
});
