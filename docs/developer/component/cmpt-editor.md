---
title: 创建组件编辑器
order: 40
group:
  title: 组件开发
  order: 40
---

## 编辑器(Editor)

组件通过`editor`可以在`foxpage`系统中修改组件的`props`，来控制组件的行为。`editor`是可选的，如无需控制组件，则不需要编写`editor`。

而组件编辑器之所以一开始设计成编写代码形式，是为了编辑器足够强大，能够为终端用户提供良好的体验。以满足编辑器中的各个字段间的联动。

`editor`跟随组件发布，但版本可以独立于组件版本。即更新`editor`无需更新组件。

### 编辑器样例

在开发完组件逻辑后, 你可能需要对组件 Props 参数进行编辑, 我们提供了一套基础编辑器供开发者使用, 使用方式可参考模板组件:

```tsx | pure
import React from 'react';
import { EditorFC } from '@foxpage/foxpage-component-editor-storybook-addon';

import { ComponentProps } from '../src/typing';

const Editor: EditorFC<ComponentProps> = props => {
  const { Group, Title, Field, Input, Label } = props.widgets;
  return (
    <div>
      <Group>
        <Title>Base</Title>
        <Field>
          <Label>text:</Label>
          <Input propKey="text" />
        </Field>
        <Field>
          <Label>number:</Label>
          <Input propKey="number" />
        </Field>
      </Group>
    </div>
  );
};

export default Editor;
```

只需在 `<package>/editor/index.ts` 文件中导出一个符合 `Editor` 规范的组件即可, 该组件会接受一个 props 参数, props.widgets 包含了一系列的编辑组件及布局组件, 可按类型描述自行使用.

在开发环境需要在 `stories` 中引入编写的 editor, 方式如下:

```tsx | pure
import {
  mountEditor,
  withFoxpageEditor,
} from '@foxpage/foxpage-component-editor-storybook-addon';
import Editor from '../editor';

export default {
  title: 'HelloWorld',
  decorators: [withFoxpageEditor],
  component: HelloWorld,
};

export const WithEditor = () => {
  const props = mountEditor(Editor, {});
  return <HelloWorld {...props} />;
};
```

在 foxpage 平台使用 editor 需在组件构建的时候构建出 `editor.js`, 然后在平台上注册组件时关联上对应的 `editor.js` 即可

### Editor 的编写

在组件目录与 `/src` 同级，新增 `/editor` 目录

一个最简单的`editor`代码样例（使用`widgets`）：

```tsx | pure
import React from 'react';
import { EditorFC } from '@foxpage/foxpage-component-editor-storybook-addon';
import { ComponentProps } from '../src/typing';
const Editor: EditorFC<ComponentProps> = props => {
  const { Group, Title, Field, Input, Label } = props.widgets;
  return (
    <div>
      <Group>
        <Title>Base</Title>
        <Field>
          <Label>text:</Label>
          <Input propKey="text" />
        </Field>
        <Field>
          <Label>number:</Label>
          <Input propKey="number" />
        </Field>
      </Group>
    </div>
  );
};
export default Editor;
```

为了简化编辑器的编写，系统在调用`editor`时会传入`props.widgets`，其中包含了对一些常用控件的封装，如`Input`, `Checkbox`等，同时包含了一些常用布局的封装，如`Group`, `Field`, `Label`等，详细内容参见文后描述的参考文档。

这个 `editor` 会展示成如下样式：

![editor-demo](../../../public/component-dev/editor-demo.png)

组件开发者对`editor`几乎有全部控制权，如果对`editor`有额外的制作需求，可以通过 props 中获取基础方法来调整

- componentProps
- propChange(key, value)
- applyState(key, value)
- propsChange(props)

通过调用基础方法`propChange`，来修改组件`componentProps`，并使得`editor`内的各个控件联动：

```tsx | pure
import React, { Component } from 'react';

class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tips: '',
    };
  }

  handleChange = e => {
    const { propChange } = this.props;

    // do something else
    this.setState({ tips: e.target.value });

    // controlled invoke
    if (propChange) {
      propChange('someKey', e.target.value);
    }
  };

  render() {
    const { componentProps = {} } = this.props;
    const { Group, Field, Label } = this.props.widgets;
    const { tips } = this.state;

    return (
      <div>
        <Group>
          <Field>
            <Label>promoId</Label>
            {componentProps.someKey && <input onChange={this.handleClick} />}
          </Field>
        </Group>
        <div>{tips}</div>
      </div>
    );
  }
}
export default Editor;
```

不过通常上述自定义不会用到，但如果需要做很多复杂的用户界面，则需要自己处理 `editor` 内部的逻辑，并通过 propChange 将修改反应出来。

### editor-widgets 参考文档

`editor-widgets` 是 `foxpage` 系统调用 editor 时, 系统传入的一组已封装好的控件集合，用来简化 `editor` 编辑器的编写。

使用 `widgets` 描述某个 `props` 的编辑，在某个 `editor`中：

```tsx | pure
const { Input } = this.props.widgets;

<Input propKey="promoId" />;
```

在这个`Input`中，已封装了`onChange`和对应修改组件`promoId`的逻辑，所以在这里只需指定`propKey`是什么。

在这些`widgets`中实际封装的 antd 的相关控件，以及一些编辑器如 JSON 等控件。下面是`widgets`相关文档：

### 布局（样式组件）

| name     | desc                                                 |
| -------- | ---------------------------------------------------- |
| Group    | 用于 props 的分组                                    |
| Title    | 用于 props 的分组                                    |
| Field    | 一个字段的容器，每个字段间的分隔                     |
| Label    | 控件标签                                             |
| Collapse | 用于折叠内容，为 antd 的外观再封装，用法与 antd 相同 |
| FlexCol2 | 等分成 2 列，间距为 10px                             |
| FlexCol3 | 等分成 3 列，间距为 10px                             |
| FlexCol4 | 等分成 4 列，间距为 10px                             |

### 基础编辑控件

#### Input

| props                   | desc                                                                       | default        |          |
| ----------------------- | -------------------------------------------------------------------------- | -------------- | -------- |
| propKey                 | 指定要修改 componentProps 中的 key 值                                      |                | required |
| defaultValue            | 默认                                                                       |                |          |
| blankIndicatesUndefined | 指定字段为空字符串时，需要将对应字段值设置为 undefined                     | true           |          |
| numberPreferred         | 指定是否需要将值尽可能转换为数字                                           | false          |          |
| validate                | 自定义验证回调，onBlur 触发，如果返回 false，此字段会被重置为 defaultValue | ()=>true       |          |
| convert                 | 更新值前的转换回调，可以自定义转换逻辑                                     | (value)=>value |          |

```tsx | pure
<Input propKey="promoId" />
```

#### Select

为 antd Select 封装，使用方法一致。

```tsx | pure
<Select propKey="buttonAlign">
  <Select.Option value="center">Center</Select.Option>
  <Select.Option value="left">Left</Select.Option>
  <Select.Option value="right">Right</Select.Option>
</Select>
```

#### Switch

为 antd Switch 封装，使用方法一致。

#### Checkbox

```tsx | pure
<Checkbox label="showDatePicker" propKey="showDatePicker" />
```

#### Radio

```tsx | pure
<Radio.Group propKey="direction" buttonStyle="solid">
  <Radio.Button value="ltr">ltr</Radio.Button>
  <Radio.Button value="rtl">rtl</Radio.Button>
</Radio.Group>
```

### 高级编辑控件

#### ColorPicker

```tsx | pure
<ColorPicker propKey="buttonTextColor" />
```

#### JSONEditor

编辑 JSON 对象，输入输出皆为对象。

| props | desc                             | default         |
| ----- | -------------------------------- | --------------- |
| style | 样式对象，通常用于设置编辑器高度 | { height: 300 } |

```tsx | pure
<JSONEditor propKey="cities" />
```

#### CodeEditor

| props | desc         | default |                                            |
| ----- | ------------ | ------- | ------------------------------------------ |
| theme | 主题配色     | github  | github, monikai, terminal, solarized_light |
| mode  | 代码高亮模式 | html    | html, css, javascript, json                |
