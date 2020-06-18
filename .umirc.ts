import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  // 采用约定路由不需要指定
  // routes: [
  //   { path: '/', component: '@/pages/index' },
  // ],
  theme: {
    'primary-color': '#4882F3',
    // 'link-color': '#8E95A5',
    'border-radius-base': '2px',
  },
});
