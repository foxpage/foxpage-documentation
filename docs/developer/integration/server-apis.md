---
title: 如何使用API？
group:
  title: 接入集成
  order: 40
---

## 如何使用 Server API？

`Server API`是 Foxpage 服务端，为 Portal 端和 SDK 提供支持。

### 准备

将项目拉到本地

```shell
$ git clone https://github.com/foxfamily/foxpage-server.git
```

### 配置

- 1, 启动端口，可增加 `PORT` 环境变量，或者手动在文件 `app.config` 中设置 `port` 的默认值，比如 `port = 50000`<br>
- 2, 启动环境，可增加 `NODE_ENV` 环境变量，或者手动在文件 `app.config` 中设置 `env` 的默认值，比如`env = EnvType.Dev`
  可自定义环境变量，并且需要在 `config/environments` 文件夹下增加对应的环境的配置文件<br>
- 3, MongoDB 信息，可增加 `MONGO_CONFIG` 环境变量，或者在 `config/environments` 下对应的环境文件中配置 `mongodb` 链接串
- 4, 配置使用的插件，在`config/environments`文件加下对应的环境变量中配置需要使用的插件信息，比如`plugins = ["@foxpage/foxpage-server-provider-aws-s3"]`
  - 如果`plugins`中配置 aws-s3 的插件，需要再配置 `storageConfig` 信息，用来连接 AWS S3，结构如下：
    ```json
    {
      "bucket": "xxx",
      "config": {
        "region": "ap-southeast-1",
        "credentials": {
          "accessKeyId": "xxx",
          "secretAccessKey": "xxx"
        }
      }
    }
    ```

### 启动

```shell
// 在项目根目录
$ yarn boot

$ npm start
```

### 初始化项目

```shell
// 项目启动成功后，初始化项目
$ cd packages/foxpage-server && npm run install-server
```

完成上述步骤，则可正常访问服务端。
