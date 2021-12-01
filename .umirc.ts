import { defineConfig } from 'dumi';

const PATH = '/dist';

export default defineConfig({
  hash: true,
  title: 'Foxpage',
  mode: 'site',
  favicon: `${PATH}/favicon.ico`,
  logo: `${PATH}/logo-s.png`,
  navs: {
    'zh-CN': [
      null,
      {
        title: 'Github',
        path:
          'https://github.com/foxfamily?q=foxpage&type=&language=typescript&sort=name',
      },
    ],
    'en-US': [
      null,
      {
        title: 'Github',
        path:
          'https://github.com/foxfamily?q=foxpage&type=&language=typescript&sort=name',
      },
    ],
  },
  history: {
    type: 'hash',
  },
  base: '/',
  publicPath: `${PATH}/`,
});
