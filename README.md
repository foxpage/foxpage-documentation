# Foxpage Documentation

foxpage 文档项目

在线地址：http://www.foxpage.io/

## Getting Started

Git clone

```bash
$ git clone https://github.com/foxpage/foxpage-documentation.git
```

Install dependencies,

```bash
$ npm i or yarn
```

Start the dev server,

```bash
$ npm start
```

Build documentation,

```bash
$ npm run docs:build
```

Deploy

```bash
node server/app-express.js
```

## Note

1. 通过 [dumi](https://d.umijs.org/zh-CN/guide) 进行文档项目开发
2. 基于 Markdown 语法
3. 已上传的 umi.js 和 umi.css 发生变化后，需要手动删除 EROS 上旧的版本文件
