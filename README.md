# Foxpage Documentation

foxpage 文档项目

在线地址：https://pages.ares.ctripcorp.com/foxpage/docs/

## Getting Started

Git clone

```bash
$ git clone git@git.dev.sh.ctripcorp.com:fox-open/foxpage-documentation.git
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
将 dist 产物上传至 [EROS](http://eros.ares.ctripcorp.com/#/files/pages.ares.ctripcorp.com/foxpage/docs) 上

`只需上传以下文件(文件夹)`

```txt
<dist>
  ├── 404.html
  ├── index.html
  ├── static            // 静态文件夹
  ├── umi.****.css
  ├── umi.****.js
```

## Note

1. 通过 [dumi](https://d.umijs.org/zh-CN/guide) 进行文档项目开发
2. 基于 Markdown 语法
3. 已上传的 umi.js 和 umi.css 发生变化后，需要手动删除 EROS 上旧的版本文件
