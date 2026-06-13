import { defineConfig } from '@apps-in-toss/web-framework/config';

export default defineConfig({
  appName: 'salarylive',
  brand: {
    displayName: '머니카운트',
    primaryColor: '#FF6B9D',
    icon: 'https://static.toss.im/appsintoss/30821/a771645b-20ec-4fe2-aa46-c5c7918d12ea.png', // 콘솔 앱 정보 > 아이콘 우클릭 > 링크 복사
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
