import { defineConfig } from '@apps-in-toss/web-framework/config';

export default defineConfig({
  appName: 'salarylive',
  brand: {
    displayName: '연봉 LIVE 카운트',
    primaryColor: '#FF6B9D',
    icon: 'https://static.toss.im/appsintoss/30821/7c447c56-33a9-4cfc-a497-ec18bc66b7aa.png', // 콘솔 앱 정보 > 아이콘 우클릭 > 링크 복사
  },
  web: {
    host: 'localhost',
    port: 5173,
    commands: {
      dev: 'vite',
      build: 'vite build',
    },
  },
  permissions: [],
});