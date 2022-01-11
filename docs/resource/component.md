---
title: 组件
order: 2
toc: menu
group:
  title: 组件
  order: 1
nav:
  title: 资源
  order: 8
---

## 基础组件

以下是`Foxpage`提供的所有`React` 基础组件。用于搭建页面基础结构及功能。

| 名称                                                                                 | 标识                 | 描述                                               |
| ------------------------------------------------------------------------------------ | -------------------- | -------------------------------------------------- |
| [@fox-design/react-html](/resource/component#fox-designreact-html)                   | <Badge>React</Badge> | `<html>` 标签                                      |
| [@fox-design/react-head](/resource/component#fox-designreact-head)                   | <Badge>React</Badge> | `<head>` 标签                                      |
| [@fox-design/react-body](/resource/component#fox-designreact-body)                   | <Badge>React</Badge> | `<body>` 标签                                      |
| [@fox-design/react-title](/resource/component#fox-designreact-title)                 | <Badge>React</Badge> | `<title>` 标签                                     |
| [@fox-design/react-meta](/resource/component#fox-designreact-meta)                   | <Badge>React</Badge> | `<meta>` 标签                                      |
| [@fox-design/react-style](/resource/component#fox-designreact-style)                 | <Badge>React</Badge> | `<style>` 标签(内联)                               |
| [@fox-design/react-style-link](/resource/component#fox-designreact-style-link)       | <Badge>React</Badge> | `<link>` 标签(外链)                                |
| [@fox-design/react-script](/resource/component#fox-designreact-script)               | <Badge>React</Badge> | `<script>` 标签(内联)                              |
| [@fox-design/react-script-link](/resource/component#fox-designreact-script-link)     | <Badge>React</Badge> | `<script>` 标签(外链)                              |
| [@fox-design/react-link](/resource/component#fox-designreact-link)                   | <Badge>React</Badge> | `<link>` 标签                                      |
| [@fox-design/react-slot](/resource/component#fox-designreact-slot)                   | <Badge>React</Badge> | `<div>` 标签, 提供 slot 功能                       |
| [@fox-design/react-container](/resource/component#fox-designreact-container)         | <Badge>React</Badge> | 专为 foxpage 提供的块级元素, 支持 foxpage 独有字段 |
| [@fox-design/react-text](/resource/component#fox-designreact-text)                   | <Badge>React</Badge> | `<p>`, `<span>`, `<div>` 等文案标签                |
| [@fox-design/react-image](/resource/component#fox-designreact-image)                 | <Badge>React</Badge> | `<img>` 标签                                       |
| [@fox-design/react-input](/resource/component#fox-designreact-input)                 | <Badge>React</Badge> | `<input>` 标签                                     |
| [@fox-design/react-csr-entry](/resource/component#fox-designreact-csr-entry)         | <Badge>React</Badge> | 客户端渲染组件                                     |
| [@fox-design/react-listen-button](/resource/component#fox-designreact-listen-button) | <Badge>React</Badge> | `<button>` 标签                                    |
| [@fox-design/react-editor-demo](/resource/component#fox-designreact-editor-demo)     | <Badge>React</Badge> | editor 展示 demo 组件                              |

### `@fox-design/react-html` <Badge>React</Badge>

提供 `<html>` 标签, 用于搭建页面基础结构及功能

#### 使用

```tsx | pure
import ReactHtml from '@fox-design/react-html';

const Demo = () => {
  const htmlAttr = {
    // cover lang to 'en'
    lang: 'en',
  };
  return (
    <ReactHtml lang="zh" attr={htmlAttr}>
      <head>
        <title>demo title</title>
      </head>
      <body>demo</body>
    </ReactHtml>
  );
};
```

### `@fox-design/react-head` <Badge>React</Badge>

提供 `<head>` 标签, 用于搭建页面基础结构及功能

#### 使用

```tsx | pure
import ReactHtml from '@fox-design/react-html';
import ReactHead from '@fox-design/react-head';

const Demo = () => {
  return (
    <ReactHtml lang="zh">
      <ReactHead>
        <title>demo title</title>
      </ReactHead>
      <body>demo</body>
    </ReactHtml>
  );
};
```

### `@fox-design/react-body` <Badge>React</Badge>

提供 `<body>` 标签, 用于搭建页面基础结构及功能

#### 使用

```tsx | pure
import ReactHtml from '@fox-design/react-html';
import ReactHead from '@fox-design/react-head';
import ReactBody from '@fox-design/react-body';

const Demo = () => {
  return (
    <ReactHtml lang="zh">
      <ReactHead>
        <title>demo title</title>
      </ReactHead>
      <ReactBody attrs={{}}>demo</ReactBody>
    </ReactHtml>
  );
};
```

### `@fox-design/react-title` <Badge>React</Badge>

提供 `<title>` 标签, 用于搭建页面基础结构及功能

#### 使用

```tsx | pure
import ReactHtml from '@fox-design/react-html';
import ReactHead from '@fox-design/react-head';
import ReactBody from '@fox-design/react-body';
import ReactTitle from '@fox-design/react-title';

const Demo = () => {
  return (
    <ReactHtml lang="zh">
      <ReactHead>
        <ReactTitle value="demo title" />
      </ReactHead>
      <ReactBody>demo</ReactBody>
    </ReactHtml>
  );
};
```

### `@fox-design/react-meta` <Badge>React</Badge>

提供 `<meta>` 标签, 用于搭建页面基础结构及功能

#### 使用

```tsx | pure
import ReactHtml from '@fox-design/react-html';
import ReactHead from '@fox-design/react-head';
import ReactBody from '@fox-design/react-body';
import ReactTitle from '@fox-design/react-title';
import ReactMeta from '@fox-design/react-meta';

const Demo = () => {
  return (
    <ReactHtml lang="zh">
      <ReactHead>
        <ReactMeta attrs={{ charset: 'utf-8' }} />
        <ReactTitle value="demo title" />
      </ReactHead>
      <ReactBody>demo</ReactBody>
    </ReactHtml>
  );
};
```

### `@fox-design/react-style` <Badge>React</Badge>

提供 `<style>` 标签, 用于搭建页面基础结构及功能

#### 使用

```tsx | pure
import ReactHtml from '@fox-design/react-html';
import ReactHead from '@fox-design/react-head';
import ReactBody from '@fox-design/react-body';
import ReactTitle from '@fox-design/react-title';
import ReactMeta from '@fox-design/react-meta';
import ReactStyle from '@fox-design/react-style';

const Demo = () => {
  const styleCode = `
    .demo-class-name {
      color: red;
    }
  `;
  return (
    <ReactHtml lang="zh">
      <ReactHead>
        <ReactMeta attrs={{ charset: 'utf-8' }} />
        <ReactTitle value="demo title" />
        <ReactStyle code={styleCode} />
      </ReactHead>
      <ReactBody>demo</ReactBody>
    </ReactHtml>
  );
};
```

### `@fox-design/react-style-link` <Badge>React</Badge>

提供 `<link>` 标签, 内置 `rel=stylesheet` , 用于搭建页面基础结构及功能

#### 使用

```tsx | pure
import ReactHead from '@fox-design/react-head';
import ReactStyleLink from '@fox-design/react-style-link';

const Demo = () => {
  return (
    <ReactHead>
      <ReactStyleLink url="theme.css" />
    </ReactHead>
  );
};
```

### `@fox-design/react-script` <Badge>React</Badge>

提供 `<script>` 标签, 内联模式, 用于搭建页面基础结构及功能

#### 使用

```tsx | pure
import ReactHead from '@fox-design/react-head';
import ReactScript from '@fox-design/react-script';

const Demo = () => {
  const scriptCode = `
    console.log('I am script code demo....');
  `;
  const scriptAttr = {
    type: 'text/javascript',
  };
  return (
    <ReactHead>
      <ReactScript code={scriptCode} attrs={scriptAttr} />
    </ReactHead>
  );
};
```

### `@fox-design/react-script-link` <Badge>React</Badge>

提供 `<script>` 标签, 外链模式, 用于搭建页面基础结构及功能

#### 使用

```tsx | pure
import ReactHead from '@fox-design/react-head';
import ReactScriptLink from '@fox-design/react-script-link';

const Demo = () => {
  const scriptAttr = {
    type: 'text/javascript',
    async: 'async',
  };
  return (
    <ReactHead>
      <ReactScriptLink url="vendor.js" attrs={scriptAttr} />
    </ReactHead>
  );
};
```

### `@fox-design/react-link` <Badge>React</Badge>

提供 `<link>` 标签, 用于搭建页面基础结构及功能

#### 使用

```tsx | pure
import ReactHead from '@fox-design/react-head';
import ReactLink from '@fox-design/react-link';

const Demo = () => {
  const linkAttrs = {
    url: 'theme.css',
    rel: 'stylesheet',
    type: 'text/css',
  };
  return (
    <ReactHead>
      <ReactLink attrs={linkAttrs} />
    </ReactHead>
  );
};
```

### `@fox-design/react-slot` <Badge>React</Badge>

提供 `<div>` 标签, 内置参数处理样式问题, 实现 `slot` 功能, 用于搭建页面基础结构及功能

#### 使用

```tsx | pure
import ReactSlot from '@fox-design/react-slot';

const Demo = () => {
  const props = {
    attributes: {
      className: 'demo-class-name',
    },
    style: {
      margin: '8px',
    },
  };
  return (
    <ReactSlot {...props}>
      <h2>I am slot1</h2>
    </ReactSlot>
    <ReactSlot {...props}>
      <h2>I am slot2</h2>
    </ReactSlot>
  )
}
```

### `@fox-design/react-container` <Badge>React</Badge>

提供 `<div>` 标签, 专用于 `foxpage` 平台, 支持平台下发的 `_decorator` 数据, 将控制权交给平台, 用于搭建页面基础结构及功能

#### 使用

```tsx | pure
import ReactContainer from '@fox-design/react-container';

const Demo = () => {
  // set by foxpage-admin
  const _decorator = {
    style: {
      color: 'red',
    },
  };
  // customer
  const props = {
    id: 'demo-id',
    className: 'demo-class-name',
    style: {
      margin: '8px',
    },
  };
  return (
    <ReactContainer _decorator={_decorator} {...props}>
      <p>I am container</p>
    </ReactContainer>
  );
};
```

### `@fox-design/react-text` <Badge>React</Badge>

提供 `<p>`, `<span>`, `<div>` 标签, 用于文案展示

#### 使用

```tsx | pure
import ReactText from '@fox-design/react-text';

const Demo = () => {
  const textStyle = {
    color: 'red',
  };
  const textAttrs = {
    style: {
      // cover textStyle.color to blue
      color: 'blue',
    },
    className: 'demo-class-name',
  };
  return (
    <ReactText
      tagName="p"
      style={textStyle}
      attrs={textAttrs}
      text="I am text..."
    />
  );
};
```

### `@fox-design/react-image` <Badge>React</Badge>

提供 `<img>` 标签, 用于展示图片

#### 使用

```tsx | pure
import ReactImage from '@fox-design/react-image';

const Demo = () => {
  const imgStyle = {
    width: '40px',
  };
  const imgAttrs = {};
  return (
    <ReactImage
      src="http://image/id.jpeg"
      alt="image alt"
      style={imgStyle}
      attrs={imgAttrs}
    />
  );
};
```

### `@fox-design/react-input` <Badge>React</Badge>

提供 `<input>` 标签, 用于提供输入框

#### 使用

```tsx | pure
import ReactInput from '@fox-design/react-input';

const Demo = () => {
  const attrs = {
    type: 'submit',
    value: 'Submit Button',
  };
  return <ReactInput attrs={attrs} />;
};
```

### `@fox-design/react-csr-entry` <Badge>React</Badge>

react 客户端渲染组件, 用于客户端渲染组件化，主要实现了对注水数据结构的确认以及输出, 专用于 `foxpage` 平台

### `@fox-design/react-listen-button` <Badge>React</Badge>

提供 `<button>` 标签, 用于提供常规按钮

### `@fox-design/react-editor-demo` <Badge>React</Badge>

editor-demo 组件, 内部使用了所有的 editor 组件, 用于展示 editor 使用方式及功能
