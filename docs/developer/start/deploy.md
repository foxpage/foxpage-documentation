---
title: 服务部署
order: 2
group:
  title: 安装部署
  order: 1
---

## 服务部署

通过[上一个章节](/developer/start/install)的学习，我们了解了本地安装和启动项目的步骤，下面我们将分项目来详细说明服务部署。

### Foxpage server

- 配置
  同[本地配置](/developer/start/install#步骤-1配置-foxpage-server)类似，只需配置上服务器上部署的参数即可。
- 编译

```sh
$ npm run build:prod
# or
$ yarn build:prod
```

- 初始化数据库

```sh
$ npm run install-server
```

- 启动

```sh
$ node dist/app.js
```

### Foxpage admin

- 配置
  同[本地配置](/developer/start/install#步骤-2配置-foxpage-admin)类似，只需配置上服务器上部署的参数即可。
- 编译

```sh
$ npm run build
# or
$ yarn build
```

- 启动

```sh
$ node server/app-express.js
```

### Foxpage app server

- 配置
  同[本地配置](/developer/start/install#步骤-3配置-foxpage-app-server)类似，只需配置上服务器上部署的参数即可。
- 编译

```sh
$ npm run build
# or
$ yarn build
```

- 启动

```sh
$ node lib/server.js
```
