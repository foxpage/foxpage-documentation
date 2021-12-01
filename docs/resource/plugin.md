---
title: 插件
order: 3
---

## 插件

以下是`Foxpage`的所有插件。更多插件持续扩展中。

| 名称                                                                                | 标识                    | 描述                                           |
| ----------------------------------------------------------------------------------- | ----------------------- | ---------------------------------------------- |
| [foxpage-plugin-function-parse](/resource/plugin#foxpage-plugin-function-parse)     | <Badge>Node SDK</Badge> | 方法解析器，用于扩展变量类型                   |
| [foxpage-plugin-react-helmet](/resource/plugin#foxpage-plugin-react-helmet)         | <Badge>Node SDK</Badge> | react helmet，用于统一收集组件内的 head 元素   |
| [foxpage-plugin-react-render](/resource/plugin#foxpage-plugin-react-render)         | <Badge>Node SDK</Badge> | 提供 react 渲染能力                            |
| [foxpage-plugin-styled-component](/resource/plugin#foxpage-plugin-styled-component) | <Badge>Node SDK</Badge> | 用于收集使用 styled-component 来编写的样式内容 |
| [foxpage-server-provider-aws-s3](/resource/plugin#foxpage-server-provider-aws-s3)   | <Badge>Server</Badge>   | 提供与 AWS S3 的上传，下载，获取对象列表等能力 |

### `foxpage-plugin-function-parse` <Badge>Node SDK</Badge>

提供 SDK 变量解析扩展，增加一种变量类型：`data.function.call`的支持，用于方法解析。

#### 引入

```sh
$ npm install @foxpage/foxpage-plugin-function-parse --save
# or
$ yarn add @foxpage/foxpage-plugin-function-parse
```

#### 使用

```ts
{
  ...
  plugins: ['@foxpage/foxpage-plugin-function-parse'],
  ...
}
```

#### 说明

可用于解析如下 DSL，返回方法执行后的结果。

```json
{
  "name": "call_functionA",
  "props": "{function: \"{{__functions:cont_QG7mbwHnfMzu8q2:functionA}}\", args: [1]}",
  "args": [1],
  "function": "{{__functions:cont_QG7mbwHnfMzu8q2:functionA}}",
  "type": "data.function.call"
}
```

### `foxpage-plugin-react-helmet` <Badge>Node SDK</Badge>

用来收集组件内设置的 head 元素，统一设置到 head 节点下。

#### 引入

```sh
$ npm install @foxpage/foxpage-plugin-react-helmet --save
# or
$ yarn add @foxpage/foxpage-plugin-react-helmet
```

#### 使用

```ts
{
  ...
  plugins: ['@foxpage/foxpage-plugin-react-helmet'],
  ...
}
```

### `foxpage-plugin-react-render` <Badge>Node SDK</Badge>

提供 React 渲染器。

#### 引入

```sh
$ npm install @foxpage/foxpage-plugin-react-render --save
# or
$ yarn add @foxpage/foxpage-plugin-react-render
```

#### 使用

```ts
{
  ...
  plugins: ['@foxpage/foxpage-plugin-react-render'],
  ...
}
```

### `foxpage-plugin-styled-component` <Badge>Node SDK</Badge>

组件内可能使用[styled-components](https://www.npmjs.com/package/styled-components)来编写样式的，该插件主要是用来收集这些样式统一设置到 head 节点下。

#### 引入

```sh
$ npm install @foxpage/foxpage-plugin-styled-component --save
# or
$ yarn add @foxpage/foxpage-plugin-styled-component
```

#### 使用

```ts
{
  ...
  plugins: ['@foxpage/foxpage-plugin-styled-component'],
  ...
}
```

### `foxpage-server-provider-aws-s3` <Badge>Node Service</Badge>

提供服务端与 AWS S3 之间数据处理，包括获取对象列表，上传，下载等

#### 引入

```sh
$ npm install @foxpage/foxpage-server-provider-aws-s3 --save
# or
$ yarn add @foxpage/foxpage-server-provider-aws-s3
```
