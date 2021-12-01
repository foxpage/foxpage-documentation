---
title: 如何使用JS SDK？
order: 2
# toc: menu
group:
  title: 接入集成
  order: 40
---

## 如何使用 JS SDK？

`Foxpage JS SDK` （简称：JS SDK）是 Foxpage 浏览器端实现，包含提供浏览器端一些核心功能。下面从已支持的功能来详细介绍。

### 引入

```sh
$ npm install @foxpage/foxpage-js-sdk --save
# or
$ yarn add @foxpage/foxpage-js-sdk
```

> `@foxpage/foxpage-shared` 包含一些公共 utils，看需要引入。  
> `@foxpage/foxpage-types` 包含一些公共类型。

### 解析 DSL

```ts
import { parsePage } from '@foxpage/foxpage-js-sdk';

...
// 传参示例
const appInfo: RenderAppInfo = {
  appId: '1000',
  slug: '/test',
  configs: {},
};
const relationInfo = {
  templates: [template], // Template[]
  variables: [variable], // Variable[]
  conditions: [condition], // Condition[]
  functions: [fn], //FPFunction[]
};

// parsePage 异步方法
// page -> Page: page content
const parsed = await parsePage(page, { appInfo, relationInfo });
...

```

### 加载资源

统一的资源加载器。

```ts
import { loader } from '@foxpage/foxpage-js-sdk';
...
// 1: init framework
loader.initFramework({
  requirejsLink: initialState.requirejsLink, // url
  libs: initialState.libs, //  ModuleConfigs
  win: initialState.window, // option
});

...
// 2: config components
loader.configComponent(
  {
    name: component.name,
    version: component.version,
    url: component.browserURL,
    deps: component.dependencies, //["demo1","demo2"]
    meta: component.meta,
    ...
  }
);
// 3: load components
loader.loadComponent(name, version);
```

### 更多

持续扩展中。

### 最后

JS SDK 提供的能力持续扩展中。若想更多了解实现原理，请看：[进阶之路-JS SDK](/advance/js-sdk)。
