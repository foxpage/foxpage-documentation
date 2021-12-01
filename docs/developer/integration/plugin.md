---
title: 如何使用插件？
order: 3
# toc: menu
group:
  title: 接入集成
  order: 40
---

## 如何开发插件？

插件能够让一些业务上的实现剥离系统，针对不同场景提供不同实现，快速扩展相关功能。接下来将一步一步说明如何开发一个插件。

> 更详细插件实现请看：[插件实现](/advance#插件)

## 规范

我们所说的插件都是以 npm 包的形式来支持的。以包名作为唯一标识符。如下：

```ts
  "name": "@foxpage/foxpage-plugin-function-parse",
```

我们建议一个插件职责单一，也就是一个插件不建议实现多个[生命周期](/advance#生命周期)钩子。插件名（包名）有明显标识，如：`foxpage-plugin-*`，且遵循从插件名就能看出插件核心功能的原则。

## 开发

开发一个插件相对来说比较简单，可以将其认为是一个微小的系统。所以就开发过程来说和一般的项目开发无异：

1. 声明插件核心方法
   该方法主要是返回插件实体，结构请看：[插件](/advance#实体)。实现如下：

```ts
const functionParser = (): FoxpagePlugin<FoxpageHooks> => {
  return {
    visitor: {
      // hooks
      registerVariableParser: () => {
        // your logic ...
      },
      ...
    }
}
```

2. 导出插件实体
   这个是关键，想要插件能够顺利的注册，需要将插件实现导出。这里需要注意的点是，必须默认导出`default`。

```ts
export default functionParser;
```

3. 发布
   插件的发布和普通 npm 包发布无异。发布成功之后，即可在各个系统（项目）里面使用了。（使用插件请看：[插件注册](/advance#注册)）

## 例子

一个注册方法解析器的插件例子如下：

```ts
import { FoxpagePlugin } from '@foxpage/foxpage-plugin';
import {
  FoxpageHooks,
  FoxpagePluginApi,
  VariableItem,
  VariableParseEntity,
  VariableProps,
} from '@foxpage/foxpage-types';

export interface FunctionVariable extends VariableItem {
  type: 'data.function.call';
  props: VariableProps<{
    function: string;
    args: any[];
  }>;
}

/**
 * register function parser plugin
 * @returns function parser
 */
const functionParser = ({
  api,
}: {
  api: FoxpagePluginApi;
}): FoxpagePlugin<FoxpageHooks> => {
  return {
    visitor: {
      registerVariableParser: () => {
        return {
          type: 'data.function.call',
          parse(variable, context) {
            const {
              props: { function: code, args },
            } = variable;

            if (code) {
              const fn: unknown = api?.evalWithScope
                ? api.evalWithScope<(scope: unknown) => unknown>(
                    { $this: context },
                    code,
                  )
                : '';
              if (typeof fn === 'function') {
                const result = fn.call(context, ...args);
                return result;
              }
              console.log('context:', context);
              console.log('args:', args);
            }

            throw new Error(`${variable.name} function is correct`);
          },
        } as VariableParseEntity<FunctionVariable>;
      },
    },
  };
};

export default functionParser;
```
