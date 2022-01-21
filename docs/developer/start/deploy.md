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

1. 配置

同[本地配置](/developer/start/install#步骤-1配置-foxpage-server)类似，只需配置上服务器上部署的参数即可。

2. 编译

可在本地编译或服务器上编译，推荐在本地编译。编译命令如下：

```sh
$ npm run build:prod
# or
$ yarn build:prod
```

编译之后的产物会放置在子项目的根目录`dist`中，可将编译产物同项目一起上传至服务器。

```ts
<...>
  └── foxpage
      ├─foxpage-admin               // foxpage admin portal project
      ├─foxpage-app-server          // foxpage app server project
      └─foxpage-server              // foxpage api server project
        ├─dist                      // 编译后产物
        └─...
```

3. 启动服务

服务启动，即运行编译后的产物。

```sh
# 直接node启动服务
$ node dist/app.js
# or
# 通过script启动
$ npm run start
```

4. 初始化数据库

```sh
$ npm run install-server
```

### Foxpage admin

1. 配置

同[本地配置](/developer/start/install#步骤-2配置-foxpage-admin)类似，只需配置上服务器上部署的参数即可。

2. 编译

可在本地编译或服务器上编译，推荐在本地编译。编译命令如下：

```sh
$ npm run build
# or
$ yarn build
```

编译之后的产物会放置在子项目的根目录`dist`中，可将编译产物同项目一起上传至服务器。

```ts
<...>
  └── foxpage
      ├─foxpage-admin               // foxpage admin portal project
      │ ├─server                    // node 服务
      │ ├─dist                      // 编译后产物
      │ └─...
      ├─foxpage-app-server          // foxpage app server project
      └─foxpage-server              // foxpage api server project
```

3. 启动

```sh
$ node server/app-express.js
```

### Foxpage app server

1. 配置

同[本地配置](/developer/start/install#步骤-3配置-foxpage-app-server)类似，只需配置上服务器上部署的参数即可。

2. 编译

可在本地编译或服务器上编译，推荐在本地编译。编译命令如下

```sh
$ npm run build
# or
$ yarn build
```

编译之后的产物会放置在子项目的根目录`lib`中，可将编译产物同项目一起上传至服务器。

```ts
<...>
  └── foxpage
      ├─foxpage-admin               // foxpage admin portal project
      ├─foxpage-app-server          // foxpage app server project
      │ ├─lib                       // 编译后产物
      │ └─...
      └─foxpage-server              // foxpage api server project
```

3. 启动

```sh
# 单进程运行
$ node lib/server.js

# or

#开启多进程
$ node pm2.js
```
