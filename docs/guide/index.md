---
title: 介绍
order: 1
toc: menu
nav:
  title: 指南
  order: 1
---

## 前言

“低代码” 是什么？ “低代码” 能做什么？ 我为什么需要 “低代码” ？ 萌新三连问。这里我推荐这一篇知乎上的文章【[什么是低代码（Low-code）](https://zhuanlan.zhihu.com/p/296396032)】。如果你理解并接受了“低代码”的概念，那么欢迎参加接下来的 “低代码” 体验之旅。

## 什么是 Foxpage？

Foxpage 是一个轻量级前端低代码框架。Foxpage 由 “fox” 和 “page” 两个单词的组成，“fox” 的中文 “狐狸” 寓意着自由、灵活、聪明！借助 Foxpage 让项目可以用低代码的方式进行迭代！

## 特性

- 🖥 可视化，提供可视化的前端页面搭建，所见即所得
- 🏷 组件化，提供较为完善的组件制作流程和组件化方案，制作页面先从制作组件开始
- 📋 可扩展，提供多端，多技术栈及多种场景的支持
- 🌍 国际化，提供一套国际化内容管理的方案
- 📡 平台化，给开发者、编辑、运营等提供了一个在线合作的平台

## 如何工作？

Foxpage 框架重要的一个部分是无头 CMS（Headless CMS），他提供了各类内容的定义、管理、存储和分发等功能，视为平台的基建部分。同时为了各类的内容编辑高效性和一致性，我们设计了一套 Foxpage DSL（Domain Specific Language）用来描述各类内容，特定的语法和语义并提供了对应的解析器，在结合不同的应用场景提供定制的功能。针对具体的端提供对应 SDK 实现供应用接入

举个 🌰 来说明下：

![how to work](../../public/guide/howtowork.png)

在邮件页面渲染服务 SSR API 中（以下简称 API），API 应用需要接入 Foxpage Node SDK（以下简称 SDK）。当用户请求 API 获取邮件页面 HTML 文档时，SDK 会请求 Foxpage Restful API 获取邮件页面的内容信息（DSL），拿到页面 DSL 后会走解析流程，如做一些预处理、数据绑定及动态加载资源文件（比如组件的 umd 文件）等工作。解析完成后 SDK 会根据解析后的对象做页面的构建和渲染（SDK 默认内置 Reactjs 框架，这里的邮件页面组件为 React 实现的），最终调用 Reactjs 框架的接口输出页面的 HTML 内容

## 快速开始

Foxpage 平台由多个项目构成, 快速开始部分主要是安装 `Foxpage Admin` 及 `Foxpage Server`

### 环境准备

- nodejs 14.15.1+
- mongodb 5.0+

### 项目安装

首先安装 Foxpage CLI 命令行工具【[详见命令行工具](/developer/tool/foxpage-cli)】

```sh
$ npm install -g @foxpage/foxpage-cli

# install with yarn

$ yarn global add @foxpage/foxpage-cli

```

运行命令拉取所需项目

```sh
$ foxpage-server fetch
```

拉取完后可根据提示决定是否安装依赖, 可以输入 y 确认或者自行运行安装命令安装依赖

```sh
$ foxpage-server install
```

至此项目的获取及依赖的安装已经完成

### 配置启动

涉及到多个项目的配置与启动，详见[项目配置与启动](/developer/start/install#项目配置启动)

## 开源和贡献

Foxpage 是一个开源项目（见 [LICENSE](https://github.com/foxpage/foxpage/blob/master/LICENSE) 文件以获取更多信息），我们非常欢迎个人或团队参与 Foxpage 开源事业，贡献每一份力量，共同见证其成长。

以下是存储在 [GitHub](https://github.com/foxpage)上的开源项目列表：

- foxpage/foxpage-admin
- foxpage/foxpage-server
- foxpage/foxpage-sdk-js
- foxpage/foxpage-cli
- foxpage/foxpage-component-\*

如何贡献？请参考[开源贡献指南](/guide/contribute)。
