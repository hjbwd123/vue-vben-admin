import { defineConfig } from '@vben/vite-config';

export default defineConfig(async () => {
  return {
    application: {},
    vite: {
      server: {
        proxy: {
          '/api': {
            changeOrigin: true,
            hostRewrite: 'localhost',
            // mock代理目标地址
            rewrite: (path) => path.replace(/^\/api/, ''),
            target: 'http://localhost:5320/api',
            // target: 'http://localhost:5000/api',
            ws: true,
          },
        },
      },
    },
  };
});
