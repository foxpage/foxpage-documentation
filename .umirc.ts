import { defineConfig } from 'dumi';

export default defineConfig({
  hash: true,
  title: 'Foxpage',
  mode: 'site',
  favicon: '/favicon.ico',
  logo: '/logo-s.png',
  navs: {
    'zh-CN': [
      null,
      {
        title: 'Github',
        path: 'https://github.com/foxpage?sort=stargazers',
      },
    ],
    'en-US': [
      null,
      {
        title: 'Github',
        path: 'https://github.com/foxpage?sort=stargazers',
      },
    ],
  },
  history: {
    type: 'hash',
  },
  base: '/',
  // publicPath: '/dist/',
  publicPath: '/foxpage/docs/',
  // exportStatic: { htmlSuffix: true }
  styles: [
    `
  div[data-class="active core members"] {
    margin:20px 0 0 40px;
  }
  div[data-class="core members"] {
    margin:20px 0 0 40px;
  }
  .avatar {
    display: inline-block;
    overflow: hidden;
    line-height: 1;
    vertical-align: middle;
    flex-shrink: 0;
    box-shadow: 0 0 0 1px #1b1f2426;
  }
  .avatar-user {
    border-radius: 50%;
    margin-right: 6px;
  }
  `,
  ],
});
