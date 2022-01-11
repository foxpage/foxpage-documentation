---
title: 组件开发（高阶）
order: 80
group:
  title: 组件开发
  order: 40
---

## 组件开发(高级)

用户开发组件所用到的项目是通过 `foxpage-component-boilerplate` 模板项目拷贝而来的, 该模板项目主要提供一下功能:

- [基础配置](#基础配置): `foxpage-component-framework` 项目提供了一整套的基础配置供项目使用, 用户无需过度关心这些配置即可运行项目. 含 `eslint-config`, `babel-preset`, `jest-preset`, `storybook-preset` 等.

- [本地组件开发环境](#本地组件开发环境): 该环境主要由 [storybook](https://storybook.js.org/docs/react/get-started/introduction) 提供, 如果你想要优化你的开发体验, 编写自己的插件, 请自行学习开发 `storybook-addon`

- [多组件(包)管理](#多组件包管理): 我们使用 [lerna](https://www.lernajs.cn/) 针对使用 git 和 npm 管理多软件包代码仓库的工作流程进行优化. (由于 lerna 的新建包的功能太过基础, 我们提供了 `foxpage-cmpt package` 指令接管了新建组件的工作, 减少用户不必要的手动填写的步骤)

- [组件公共数据](#组件公共数据): 我们实现了 `FoxpageContext` 用于存放项目维度的组件所依赖的`公共` `静态`数据, 例如 `theme`, `locale`, `currency` 等

- [服务端渲染](#服务端渲染): 我们实现了 `beforeNodeBuild` 钩子函数用于服务端渲染时的数据处理, 并在本地通过 `FoxpageSrrContext` 及 `withFoxpageSsr` 模拟实现服务端渲染流程

- [组件资源构建](#组件资源构建): 我们提供了 `foxpage-cli` 脚手架, `foxpage-cmpt build` 指令负责所有组件的资源构建相关工作, 并提供组件资源优化解决方案

- [组件 Editor](#组件-editor): 我们提供 `foxpage-component-editor` 为组件提供 props 编辑功能, 且可同时运行于 foxpage 平台

对组件开发项目的整体划分有一定的了解后, 我们开始深入了解，作为开发者, 可以做哪些更多的事情

### 基础配置

虽然 `foxpage-component-boilerplate` 为我们提供了完善的基础配置, 但作为开发者, 当然对其有绝对的控制权, 我们可以自行修改配置

#### eslint-config

项目 `.eslintrc` 文件默认配置方式如下:

```json
{
  "root": true,
  "extends": "@foxpage/eslint-config-foxpage-component",
  "rules": {}
}
```

你可以根据 `.eslintrc` 的编写规范， 自行覆盖我们提供的默认规则

#### babel-preset

项目 `babel.config.js` 文件默认配置方式如下:

```js | pure
module.exports = api => {
  api.assertVersion('^7.0');
  api.cache(true);

  /** @type {import('@foxpage/foxpage-component-babel-preset/interfaces').PublicOptions} */
  const option = {};

  return {
    presets: [[require('@foxpage/foxpage-component-babel-preset'), option]],
  };
};
```

你可以修改 option 参数或根据 `babel.config.js` 的编写规范， 自行覆盖我们提供的默认规则, 你需要注意的是需要根据 `PublicOptions` 类型来修改, 不要修改了参与 `foxpage-cmpt build` 构建流程所依赖的参数, 这样可能会导致出现未知错误

#### jest-preset

项目 `jest.config.js` 文件默认配置方式如下:

```js | pure
const { createJestConfig } = require('@foxpage/foxpage-component-jest-preset');

const config = createJestConfig();

module.exports = config;
```

你可以直接修改 `config` 对象来修改 jest 配置

#### storybook-preset

我们提供的 `storybook-preset` 是专为 `foxpage` 流程服务的, 如需接入自己提供的 storybook 插件, 自行接入即可

### 本地组件开发环境

storybook 作为一款成熟的组件开发框架, 有一套完善的组件开发体系, 所以组件开发环境我们全权交给 storybook 来处理, foxpage 自身没有做任何处理, 反而基于 storybook 实现了一系列插件.

作为开发者需要对 storybook 有一定的深入了解, 这里不对 storybook 做过多的介绍, 自行官网

### 多组件(包)管理

组件的包管理流程我们交个 `lerna` 工具来处理, 采用的是 `independent` 模式, 启用 `workspaces`, 作为开发者必须要熟悉 `lerna bootstrap` `lerna version` `lerna publish` `lerna run` `lerna add` 等指令, 这里不一一展开介绍, 自行官网查阅.

当然组件开发模板项目有对中的部分进行 `scripts` 封装:

- `yarn boot`: lerna bootstrap
- `yarn version [mode|version]`: lerna version

### 组件公共数据

为了兼容各种业务场景, 我们抽象出了 `FoxpageContext` 公共静态数据中心的概念, 用户可以根据自身情况(页面维度, 项目维度, 业务维度)来合理规划公共静态数据, `FoxpageContext` 自身仅挂载了系统级别的基础数据, 用户可以自行扩展

例如 : 我有一个业务维度的组件划分, 业务场景是支持多语言(`locale`), 我们的组件所在页面都需要兼容该场景即获取对应的 `locale` 数据然后发起请求获取对应语言的数据, 这种情况在开发组件的时候, 如何获取 `locale` 数据呢? 通过我们提供的基于 `React.createContext` 实现的 `FoxpageContext` 获取数据

想要使用组件公共数据需要如下两个阶段:

- [开发环境 context 数据挂载](#开发环境-context-数据挂载) | [foxpage 平台 context 数据挂载](#foxpage平台-context-数据挂载)
- [组件如何使用](#组件如何使用)

#### 开发环境 context 数据挂载

在开发环境挂载的方式按优先级从低到高有以下几种方式:

1. 在 `.storybook/preview.js` 文件内全局配置 context 默认值:

```js | pure
export const parameters = {
  // foxpageContext 是插件标识的关键字
  foxpageContext: {
    context: {
      locale: 'en-US',
    },
    // disable: false, // 是否禁用 foxpageContext 插件
  },
};
```

2. 自行提供 `decorators-addon` 插件, 接入 `FoxpageCtxOverridesProvider` 并传入对应值:

插件代码:

```js | pure
import React from 'react';
import { FoxpageCtxOverridesProvider } from '@foxpage/foxpage-component-context';

const FoxpageCustomerContextDecorator = StoryFn => {
  const ctx = {
    locale: 'en-US',
  };
  return (
    <FoxpageCtxOverridesProvider value={ctx}>
      <StoryFn />
    </FoxpageCtxOverridesProvider>
  );
};
export default FoxpageCustomerContextDecorator;
```

在 `.storybook/preview.js` 中使用接入提供的插件:

> 注意: 一定要注意先后顺序, 保证在 `makeFoxpageContextDecorator()` 的前面, 靠后的先运行, 需要先运行 `makeFoxpageContextDecorator` 初始化 `FoxpageContext`

```js | pure
import { makeFoxpageContextDecorator } from '@foxpage/foxpage-component-storybook-addon';
import FoxpageCustomerContextDecorator from './decorators/foxpage-customer-ctx';

export const decorators = [
  FoxpageCustomerContextDecorator,
  makeFoxpageContextDecorator(),
];
```

> 优化提示: 开发者还可以开发自己的 `tabs-addon` 插件, 通过与 `decorators-addon` 做数据交互来达到优化操作的目的

3. 在`<package>/stories/index.stories.tsx` 文件内, 通过 `withFoxpageSsr` 方法挂载数据(优先级最高, 等于强制指定, 一般 debug 时用, 正常情况下使用第二种插件的形式来做比较友好)

withFoxpageSsr 是运行服务端渲染逻辑所以来的方法,

```tsx | pure
import React from 'react';
import { withFoxpageSsr } from '@foxpage/foxpage-component-storybook-addon';
import HelloWorld from '../src/index';

export default {
  title: 'HelloWorldSsr',
  component: HelloWorld,
};

export const HelloWorldSsrWrap = withFoxpageSsr({
  // 强制设置或扩展 context
  // 如果逐渐开发者不想 context 数据受外部插件控制, 可以自行 mock
  context: {
    locale: 'en-US',
    otherData: 'force set other data',
  },
})(HelloWorld);
```

#### foxpage 平台 context 数据挂载

请参考 [foxpage 平台插件开发](/developer/integration/plugin) 文档.

> 注意: 需要开发者开发两套插件挂载同一套格式的数据, 请开发者自行保证数据一致性

#### 组件如何使用

在组件内部通过 `useFoxpageContext` 获取数据:

```tsx | pure
import React from 'react';
import { useFoxpageContext } from '@foxpage/foxpage-component-context';
import { ComponentProps } from './typing';
import './index.scss';

const HelloWorld: React.FC<ComponentProps> = props => {
  const foxpageContext = useFoxpageContext();
  console.debug('HelloWorld foxpageContext: ', foxpageContext);
  return (
    <div>
      <h1>Hello World!</h1>
    </div>
  );
};
export default HelloWorld;
```

> 注意: 为保证 `FoxpageContext` 的唯一性, 必须引入 `@foxpage/foxpage-component-context` 导出的 `useFoxpageContext`. 我们提供的构建工具保证 `@foxpage/foxpage-component-context` 不会被构建到组件的静态资源中, 而是由 foxpage 平台来引入唯一的 `foxpage-component-context.min.js` (library: `FoxpageComponentContext`);

### 服务端渲染

服务端渲染通过执行 `beforeNodeBuild` 执行并挂载数据给组件渲染, 示例如下:

```tsx | pure
const HelloWorld: React.FC<ComponentProps> &
  FoxpageComponentSsrLifecycle<ComponentProps, CustomerSsrCtxType> = props => {
  const { text = 'Hello, world!', number = 1, ssrText = '' } = props;
  const foxpageContext = useFoxpageContext();
  console.debug('HelloWorld foxpageContext: ', foxpageContext);
  return (
    <div>
      <h1>Hello World</h1>
      <div className="text">
        text:
        <span className="text-bold">{text}</span>
      </div>

      <div>
        Input Number: <span style={{ fontSize: 30 }}>{number}</span>
      </div>

      <div className="text">
        ssrText:
        <span className="text-bold">{ssrText}</span>
      </div>
    </div>
  );
};

HelloWorld.beforeNodeBuild = async (ctx, nodeData) => {
  console.debug('beforeNodeBuild ctx: ', ctx);
  console.debug('beforeNodeBuild nodeData: ', nodeData);
  const { props } = nodeData;
  const { text, number } = props;
  const ssrText = await Promise.resolve(
    `I am get in beforeNodeBuild. \n text: ${text} and number: ${number}`,
  );

  return {
    ssrText,
  };
};
```

### 组件资源构建

组件资源构建主要为两个场景服务: 构建 npm 包资源, 构建 foxpage 组件资源, 都通过 `foxpage cmpt build` 工具实现

#### 构建 npm 包资源

构建 npm 包资源细分为两类, 一类是构建 `commonjs` 类型的 `lib` 资源(`foxpage cmpt build --lib`), 另一类是构建 `es-module` 类型的 `es` 资源(`foxpage cmpt build --es-module`), 两类的构建流程是相同的, 只是使用了不同的构建参数, 构建流程如下:

1. 构建类型声明文件

   - 构建类型声明文件使用的是 `typescript` 提供的 `tsc` 工具
   - 依赖项目根目录的 `tsconfig.json` 文件为基础模板
   - 添加组件维度扩展的类型声明(`<package>/src/typings` 目录下所有扩展的类型声明)
   - 添加项目维度扩展的类型声明(`<root>/typing.d.ts` 文件内扩展的类型声明)
   - 指定 `outDir` 为组件目录下的 `lib` 或 `es` 文件
   - 指定构建模式: `skipLibCheck: true, declaration: true, emitDeclarationOnly: true`
   - 以此临时配置文件为新的 `tsconfig.json` 通过 tsc 工具构建出 `.d.ts` 文件
   - 开启 `--debug` 模式可以通过 `<package>/.fox_temp/_tsconfig.temp.json` 查看 `tsc` 构建时运行的配置参数

2. 通过 babel 编译`/src`目录

   - 依赖项目根目录的 `babel.config.js` 文件为 babel 配置文件
   - 设置运行时环境变量 `BUILD_ES_MODULE` `BUILD_STYLE` 供 `babel.config.js` 读取
   - 指定 `outDir` 为组件目录下的 `lib` 或 `es` 文件

3. 判断是否处理样式
   - 开启 `--css-style` 则代表需要将样式文件编译成 `.css` 格式
   - 使用 webpack 构建样式, mode 为 `style`, 入口文件为 `src/index.(less|sass)`
   - 如果同时开启了 `--remove-style-import` `--import-index-css` 则会为构建产物中的 `index.js` 添加引入 `index.css` 的代码并移除其他所有 `.js` 文件中关与样式文件的引入代码

> 注意: 一般情况组件的使用方配置了对应的 `loader`(less-loader, sass-loader) 则组件的 npm 资源可以直接使用 `.less` or `.sass`, 而无需对样式做处理. 如果想要强制使用 `.css` 格式的文件, 你需要注意以下几点:
>
> - 无论组件目录下有多少个样式文件, 仅以 `src/index.(scss|less|css)` 为入口文件, 仅构建出一个 `.css` 文件, 防止文件嵌套引用导致样式重复
> - 搭配 `--remove-style-import` 移除所有 `.js` 文件中关于样式文件的引入代码
> - 可让组件使用方在引入组件的同时手动引入组件的样式 或者 组件开发者搭配 `--import-index-css` 自动在 `index.js` 中添加 `index.css` 的样式引入代码自动引入组件样式

#### 构建 foxpage 组件资源

构建 foxpage 组件资源可分为为:

- 单个组件构建资源: 在组件目录运行 `foxpage cmpt build --foxpage`
- 项目所有组件构建资源: 在项目目录运行 `foxpage cmpt build --foxpage-root`

两种方式构建资源的结果并无任何差异

##### 单个组件构建资源

内部构建流程如下:

1. 根据 `--modes` 决定需要构建哪些资源
   - `--modes` 默认值为 'production,debug,node,editor'
   - 可通过 `--modes` 指定构建哪些类型的文件
   - 可通过 `<package>/.foxpage/webpack.js` 修改对应 mode 的 webpack 构建参数
   - 可通过开启 `--file-hash` 启用 webpack ContentHash 模式
   - 可通过开启 `--analyze` 启用 webpack analyze 模式, 建议搭配 `--modes` 且指定某一类型使用
2. 构建 `schema.json` 组件类型描述文件
   - 读取 `src/typing.ts` 或 `src/index.ts` 文件内命名为 `ComponentProps` 的类型声明描述(参考[typescript-json-schema](https://github.com/YousefED/typescript-json-schema/blob/master/api.md)文档)
   - 通过 `<root>/schema.config.js` 文件可指定 `typescript-json-schema` 工具的[构建参数](https://github.com/YousefED/typescript-json-schema#command-line)
   - 通过 `typescript-json-schema` 工具解析 `ComponentProps` 生成 `schema.json`文件
3. 处理构建产物
   - 处理并生成 `foxpage.json` 文件
   - 通过开启 `--zip-fox` 自动压缩构建的 `/dist` 产物

组件资源优化:

例如有一个公共模块 `lodash`, 我们在为某个组件构建资源的时候不想把他构建到构建产物里去, 我们可以通过 `<package>/.foxpage/webpack.js` 为某个组件单独配置, 也可以通过 `<root>/.foxpage/webpack.js` 为所有组件做统一配置, 配置方式如下:

```js
const webpackFinal = (mode, config) => {
  if (['debug', 'production', 'node'].includes(mode)) {
    config.externals['lodash'] = {
      root: 'lodash',
      commonjs: 'lodash',
      commonjs2: 'lodash',
      amd: 'lodash',
    };
  }
  return config;
};
module.exports = webpackFinal;
```

此时在 foxpage 平台注册时, 需要指定该组件依赖 `lodash` (需要先在 foxpage 平台上注册 lodash).

> 注意: 这种优化策略不建议过分的滥用, 建议以业务场景为维度, 为每个业务场景维护一个 `shared` 包资源, 组件都依赖这个资源, 从而避免出现过分嵌套的依赖链

##### 项目所有组件构建资源

内部构建流程如下:

1. 获取所有需要构建的组件的目录列表

   - 默认指定 `--root-cache`, 为组件目录生成文件 hash, 若文件未变动, 则 hash 匹配则不会重复构建
   - 缓存文件存放在 `.cache/foxpage/root-cache.json`
   - 注意: 不要随便修改或删除 `dist/component/<package>/*` 内部的文件, 这种行为会导致`<package>`缓存内容丢失, 不会参与后续的构建, 如果想要重新构建某个组件, 只需修改 `.cache/foxpage/root-cache.json` 文件, 删除掉对应的 `key,value` 即可.

2. 根据组件列表进入相应目录并发执行 `yarn foxpage:build`

   - 可通过 `--npm-client` 指定 npm 客户端工具, 可选 `npm` 或 `yarn`, 默认 `npm`
   - 可通过 `--concurrency` 指定并发数, 默认 `Max(os.cpus().length - 1, 2)`;

3. 将执行成功的组件的 `/dist` 目录拷贝到根目录

4. 打印执行结果列表(成功或失败)

### 组件 Editor

参考 [组件 Editor](./cmpt-editor)
