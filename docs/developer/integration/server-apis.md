---
title: 如何使用API？
group:
  title: 接入集成
  order: 40
---

## 如何使用 Foxpage Server API？

`Server API`是 Foxpage 服务端，为 Foxpage Portal 端和 Foxpage SDK 提供支持。

## 前端与应用接入

### 接口参数与返回

Foxpage Server API 是以 `REST API` 的方式提供。

默认的服务地址是:`http://localhost:50000`,具体地址以服务部署方设置为准。

接口请求类型可用于判断操作类型，当前支持以下请求类型：

- GET - 查询数据；
- POST - 新增/查询数据，少部分接口由于参数格式复杂，使用 POST 类型来查询数据；
- PUT - 更新数据；

接口以固定的格式返回结果, 返回成功的结果中`data`字段格式与具体接口相关

```json
// 返回成功
{
  "code": 200,
  "status": 0,
  "data": {
    "id": "appl_EJlrKxog8TmgvLA",
    "name": "demo-app1",
    "organizationId": "orga_j9l4qJI9hAXWTer",
    "intro": "",
    "slug": "demo",
    "deleted": false,
    "locales": [],
    "resources": [],
    "createTime": "2021-08-09T12:21:56.926Z",
    "updateTime": "2021-12-13T07:41:57.622Z",
    "creator": {
      "id": "user-dvbfW1qsl8qkz39",
      "account": "test-user"
    }
  }
}
```

```json
// 返回警告
{
  "code": 400,
  "status": 299050,
  "msg": "获取应用详情失败"
}
```

```json
// 返回错误
{
  "code": 500,
  "status": 388050,
  "msg": "获取应用详情失败"
}
```

```json
// 参数格式错误
{
  "code": 400,
  "status": 4010101,
  "msg": "Invalid queries, check 'errors' property for more info.",
  "err": [
    {
      "target": {
        "page": 1,
        "search": "",
        "size": 10,
        "organizationId": ""
      },
      "value": "",
      "property": "organizationId",
      "children": [],
      "constraints": {
        "isLength": "organizationId must be longer than or equal to 20 characters"
      }
    }
  ]
}
```

### 获取 Access Token

Foxpage Server API 默认情况下是安全的，即大多数的接口的访问都需要获得授权。

- 对于个人用户访问

个人用户登录系统时，系统会生成一个`Access token`返回，并在后面每次请求都需要将该 token 放在请求头中传到 API，API 会检查该 token 的有效性，完成身份的校验。

<!-- ```typescript
// 用户登录，获取access token
import axios from 'axios';

const loginInfo = await axios.post('http://localhost:50000/users/login', {
  name: 'test-user',
  password: '123456',
});

console.log(loginInfo);
// 打印登录结果
// {
//     "code": 200,
//     "data": {
//         "userInfo": {
//             "organizationId": "orga_j9l4qJI9hAXWTer",
//             "id": "user-dvbfW1qsl8qkz39",
//             "account": "test-user",
//             "email": "xxxx@xx.com",
//             "nickName": "test",
//             "changePwdStatus": false
//         },
//         "token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InVzZXItZHZiZlcxcXNsOHFrejM5IiwiYWNjb3VudCI6ImZveC11c2VyIiwiaWF0IjoxNjQyNjY4NzUyLCJleHAiOjE2NTEzMDg3NTJ9.O9_ZzfHjLTxWQMTWls_v6q0e5uiQ4nV9KBQFsXjciY-8fC4pEFwhlZICkzhmkEmAI1X-1LNqjoqiN7_0eUehw4kN1wMbMtQJ45IFKGwCypkKmWRvj9D4KPYp9iWdPh6FnKfZIYNpgL1tpYKWfS1lZ1YMac8-wL6R6BE67qoJCUN3kn4hl5cuVsn9O6zIXk0mP0DhbiPv9G5SshBRHnbWELWH7CsQKZQH1lf-XlEPPRFMbUp5kd5FFm45s6jj9DytorosPz4UsRZJGVtkYZ068Wb3mMVaNdNCyweLqYCVXYvpTLeTk4M4AMQy2GA86LXrAeHtd6rd96tcSB_cxiXpJcrUZT35td6caoCK7t7PleC0VWUY4KacOBOobcnIt7T_jyyIM-viPS7VtBu2ics2lr1llUsfStMyeX2Yuo6NbOiudjXMzhVoGpcDds3OWENFVXg_Kt4btqQRi0K_0DT4bdsaKp1RHceOaif6jARjpyQDDoTuu6YFI4HRQA3vNA_RkdP-cXAuFc7niKMTI8ZIRPthtr0fsDbZZv64p2bN26GvreUixnETconhngM2SR8c2-VcWMZYCR6KAbW6iu65RyAdlQteGyDQ7R83an7avIhAcrj1b6h0gOxzbf8_TOPJf03XptlRJ8GxVgiUJfY5P1ENdm2DENrehqnlbPaabcd"
//     },
//     "status": 0
// }
``` -->

- 对于外部应用访问

外部应用需要先在 Foxpage 系统注册一个应用，并点击进入注册好的应用，然后点击左下角的设置页面，手动创建一个应用`Access token`或者生成一个包含`id`,`secret`以及`refresh_token`的凭证。然后将该 token 或者凭证配置在使用的应用中，并在请求头中通过 token 参数传入。

`Access token`是将用户信息通过私钥文件加密生成的`JWT Token`。在验证身份时，通过公钥文件解密得到用户信息。

### 请求接口

以获取应用详情为例，如果请求头中没有带上 token，或者是无效的 token，则接口将会返回 `401`(无效的用户) 或者 `403`(没有权限),

```typescript
import axios from 'axios';

const applicationInfo = await axios.get(
  'http://localhost:50000/applications?organizationId=orga-YfPNNFOEAeTR4Rv',
  {
    headers: {},
  },
);

console.log(applicationInfo);
// 打印输出
// {
//     "code": 401,
//     "status": 4010110,
//     "msg": "Invalid User"
// }
```

```typescript
// 使用有效的token获取应用列表
import axios from 'axios';

const applicationInfo = await axios.get(
  'http://localhost:50000/applications?organizationId=orga-YfPNNFOEAeTR4Rv',
  {
    headers: {
      token:
        'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InVzZXItZHZiZlcxcXNsOHFrejM5IiwiYWNjb3VudCI6ImZveC11c2VyIiwiaWF0IjoxNjQyNjY4NzUyLCJleHAiOjE2NTEzMDg3NTJ9.O9_ZzfHjLTxWQMTWls_v6q0e5uiQ4nV9KBQFsXjciY-8fC4pEFwhlZICkzhmkEmAI1X-1LNqjoqiN7_0eUehw4kN1wMbMtQJ45IFKGwCypkKmWRvj9D4KPYp9iWdPh6FnKfZIYNpgL1tpYKWfS1lZ1YMac8-wL6R6BE67qoJCUN3kn4hl5cuVsn9O6zIXk0mP0DhbiPv9G5SshBRHnbWELWH7CsQKZQH1lf-XlEPPRFMbUp5kd5FFm45s6jj9DytorosPz4UsRZJGVtkYZ068Wb3mMVaNdNCyweLqYCVXYvpTLeTk4M4AMQy2GA86LXrAeHtd6rd96tcSB_cxiXpJcrUZT35td6caoCK7t7PleC0VWUY4KacOBOobcnIt7T_jyyIM-viPS7VtBu2ics2lr1llUsfStMyeX2Yuo6NbOiudjXMzhVoGpcDds3OWENFVXg_Kt4btqQRi0K_0DT4bdsaKp1RHceOaif6jARjpyQDDoTuu6YFI4HRQA3vNA_RkdP-cXAuFc7niKMTI8ZIRPthtr0fsDbZZv64p2bN26GvreUixnETconhngM2SR8c2-VcWMZYCR6KAbW6iu65RyAdlQteGyDQ7R83an7avIhAcrj1b6h0gOxzbf8_TOPJf03XptlRJ8GxVgiUJfY5P1ENdm2DENrehqnlbPaabcd',
    },
  },
);

console.log(applicationInfo);
// 打印输出
// {
//   "code": 200,
//   "status": 0,
//   "data": {
//     "id": "appl_EJlrKxog8TmgvLA",
//     "name": "demo-app1",
//     "organizationId": "orga_j9l4qJI9hAXWTer",
//     "intro": "",
//     "slug": "demo",
//     "deleted": false,
//     "locales": [],
//     "resources": [],
//     "createTime": "2021-08-09T12:21:56.926Z",
//     "updateTime": "2021-12-13T07:41:57.622Z",
//     "creator": {
//       "id": "user-dvbfW1qsl8qkz39",
//       "account": "test-user"
//     }
//   }
// }
```

更多接口详见 [API 文档](/developer/api/organization-apis)

## 二次开发

### 准备

将项目拉到本地

```shell
$ git clone https://github.com/foxfamily/foxpage-server.git
```

### 配置

- 1, 启动端口，可增加 `PORT` 环境变量，或者手动在文件 `app.config` 中设置 `port` 的默认值，比如 `port = 50000`
- 2, 启动环境，可增加 `NODE_ENV` 环境变量，或者手动在文件 `app.config` 中设置 `env` 的默认值，比如`env = EnvType.Dev`
  可自定义环境变量，并且需要在 `config/environments` 文件夹下增加对应的环境的配置文件
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

$ npm start-server:prod
```

完成上述步骤，则可通过`http://localhost:50000/`正常访问接口。

### 接口文档

系统运行`npm run build-server:prod`命令，可以生成所有接口的文档，并以 Swagger UI 的方式呈现。在项目启动后，可通过`http://localhost:50000/swagger/swagger`的地址访问，也可通过[在线文档](/developer/api/organization-apis)查看。

### 环境

Foxpage Server API 通过在`app.config.ts`文件中获取当前的运行环境`NODE_ENV`，如果不存在，则默认是`development`, 不同环境下的配置信息保存在`./config/environment/`目录下。

```typescript
enum EnvType {
  Debug = 'debug',
  Dev = 'development',
  Prod = 'production',
  Test = 'test',
}

let env: EnvType = EnvType.Dev;
if (process.env.NODE_ENV) {
  env = process.env.NODE_ENV as EnvType;
}
```

### 路由

Foxpage Server API 的路由是通过`routing-controllers`包来是实现的。

- 在 controller 文件夹下的每个类通过`@JsonController`来标记控制器名称；
- 在控制器类下的方法名前通过`@Get`, `@Post`,`@Put`等装饰器来标记接口的请求类型；

```typescript
// 接口路由文件
@JsonController('applications')
export class GetApplicationList extends BaseController {
  constructor() {
    super();
  }

  @Post('/list')
  @ResponseSchema(AppListRes)
  async index(
    @Ctx() ctx: FoxCtx,
    @Body() params: AppListByIdsReq,
  ): Promise<ResData<Application[]>> {
    // ....
  }
}
```

如果需要新增或者调整路由，可在相应的位置修改。

### 路由白名单

系统默认除登录，注册以及健康检查接口外，其他所有的接口在访问时都需要进行身份校验。如果需要取消指定的接口的身份校验，可以将该接口加入`./config/environments/xxx.ts`下配置文件中的`ignoreTokenPath`字段中。

### 中间件

Foxpage Server API 默认提供`身份校验`，`日志处理` 2 个中间件。当前只支持系统级别的中间件。
手动增加新的中间件:

- 创建`./src/middlewares/[name]-middleware.ts`文件，
- 在根目录下的`app.ts`文件中变量`routingControllerOptions.middlewares`加上该中间件。

中间件的实现

```typescript
// [name]-middleware.ts
import { KoaMiddlewareInterface, Middleware } from 'routing-controllers';
import { FoxCtx } from '../types/index-types';

@Middleware({ type: 'before' })
export class DemoMiddleware implements KoaMiddlewareInterface {
  async use(ctx: FoxCtx, next: (err?: any) => Promise<any>): Promise<any> {
    // 中间件逻辑
    next();
  }
}
```

```typescript
// app.ts
const routingControllerOptions = {
  ...
  middlewares: [loggerMiddleware, tokenMiddleware, demoMiddleware],
  ...
};
```

### 插件

Foxpage Server API 的插件是通过[@foxpage/foxpage-plugin](/developer/integration/plugin)包实现的，参考[插件开发规范](/developer/integration/plugin)。

- 配置需要的插件, 在`./config/environment/xxx.ts`下配置文件中的 plugins 中添加指定插件包的名称，并在`package.json`文件中加上该插件包；

```typescript
// ./config/environment/xxx.ts
export default {
  ...
  plugins: [
      '@foxpage/foxpage-plugin-unpkg',
    ],
  ...
}
```

- 系统在启动时会通过`./src/services/plugin-servers.ts`文件加载配置的插件；

```typescript
// 调用插件方法的文件内
import { PluginService } from './plugin-services';

const pluginInstance = PluginService.getInstance();
this.plugins = pluginInstance.plugins;

// 调用插件方法
this.plugins.xxx();
```

如果有多个插件是处理相同的逻辑的不同实现，则该多个插件都需要暴露相同的方法，并且系统在调用该逻辑方法时，会同时调用多个插件相同的方法，具体使用哪个插件的结果，需要使用者和插件开发者在开发插件时具体处理。

### 数据库

Foxpage Server API 数据库使用的是`MongoDB`，通过`Mongoose`包来实现数据的增删改查。
数据结构的实体定义在`./src/models/schema`目录下。

### 国际化

Foxpage Server API 通过在`./config/environment/xxx.ts`文件中配置`locale`字段来确定返回的文件语言。

```typescript
// ./config/environment/xxx.ts
export default {
  ...
  locale: 'en',
  ...
}
```

对应的 locale 配置文件保存在`./config/lang/`目录下。
在`app.config.ts`文件加载 locale，并导出`i18n`变量。在所有使用的文件中需要加载`app.config.ts`文件。

```typescript
// 使用i18n的文件
import { i18n } from './app.config';

...
return Response.warning(i18n.app.invalidAppId);
...

```

当前只允许在启动时配置系统响应的语言；暂不支持在请求时，通过参数来决定响应语言。
