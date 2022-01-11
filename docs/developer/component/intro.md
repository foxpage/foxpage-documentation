---
title: 开发须知
order: 1
group:
  title: 组件开发
  order: 40
---

## 如何开发组件？

在面对日益扩张的业务场景时, 如何更好的开发优质的组件是值得我们思考的事情, 目前我们推荐的是, 组件分为 UI 组件, 业务 UI 组件, 这里不是制造新的名词, 也不会要求必须按照这个划分, 只是提供一种新的思考方式, 具体还是要视实际情况而定

UI 组件: 更倾向于提供功能更加通用 UI 及功能的组件, 可供其他组件或项目导入使用

业务 UI 组件: 则不仅仅是包含特定的业务，更需要开发者在业务维度做抽象处理, 使得一个组件可以通过配置使其有不同的数据层面的展示差异, 即 UI 一致但是数据展示不一样。(例如一个业务 UI 组件在配置了不同的 saleID 的时候可以展示不同的商品数据)

在对组件有了基本的认知后, 可以着手开发符合自身业务的组件了。 `foxpage` 对开发者开发组件也提供了相应的开发环境及工具, 使开发者能更专注于组件本身的逻辑而非其他外部干扰因素, 以此开发出更加优质的组件。

开发者想要快速的开发组件仅需要以下两个前置流程即可:

- [创建组件开发项目](/developer/component/create-cmpt#创建组件开发项目)
- [创建组件](/developer/component/create-cmpt#创建组件)

在创建完组件后需要对以下内容有一定的了解, 才能更好的开发组件:

- [组件目录结构](/developer/component/create-cmpt#项目结构)
- [编辑器](/developer/component/cmpt-editor#编辑器样例)

在开发完组件后, 你需要对对以下内容有一定的了解:

- [资源构建](/developer/component/create-cmpt#资源构建)
- [组件发布到 npm 仓库](/developer/component/create-cmpt#组件发布到-npm-仓库)
- [组件注册到 foxpage 平台](/developer/component/register)

介绍从组件开发到发布的一整套流程后, 我们总结了一些最佳实践:

- [最佳实践](/developer/component/basic-cmpt#最佳实践)

## 最佳实践

### 开发原则

在本地做多包开发尽量使用 lerna 进行操作，避免直接的 npm 操作。lerna 在 bootstrap 的过程中，会优先尝试将 packages 下面的包之间互相的依赖通过 link 的方式安装，而不是真正的去下载，除非依赖包的版本号与本地包的版本号不同。因此 boot 之后的 package-lock.json 中，可能会有缺失，这个不会有影响。

### 初始化

- 使用 `yarn boot` (lerna bootstrap) 初始化整个项目(使用 lerna 工具做多包开发)
- 重新初始化某个 package 使用 `lerna bootstrap --scope=packageName`

### 安装依赖

- 尽量使用 lerna add 指令，而不是 npm install，或者手动修改 package.json。需要指定 scope，否则会给所有的 packages 都安装 lodash
  `lerna add lodash --scope=foxpage-component-demo-hello-world`

- 可以指定版本
  `lerna add lodash@1.0.0`

- 可以锁定版本
  `lerna add lodash@1.0.0 --exact`

- 安装本地依赖
  `lerna add foxpage-component-demo-hello-world --scope=foxpage-component-demo-need-hello-world`

### 更新(发布)版本

- 推荐: 使用 `lerna version` 命令

  - 直接在根目录运行, 可以自动生成 tag，固定当前版本信息
  - 在手动增加版本的 CI 场景中搭配 `lerna publish from-git` 一起使用 (用户本地通过 lerna version 升级版本, 提交代码后 CI 中调用 `lerna publish from-git` 进行自动发布)

- 推荐: 使用 `lerna publish` 命令(内部会先调用 lerna version)

  - 适合自动添加版本的 CI 场景中使用

- 不推荐: 使用 `npm version` 命令
  - `cd /path/to/package && npm version [patch|minor|major]`
