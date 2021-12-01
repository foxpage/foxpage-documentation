---
title: 项目实践
order: 3
toc: menu
---

## 活动页面

需求特点：

- 短，活动时间会有一定的时间范围，可能不会太长，由其性质决定
- 频，活动的需求会有确定性的，周期性的和临时性的，需求繁多，玩法各异
- 快，一般活动上线时间都会有要求，他可能配合一个热点事件，如果是突发类的，需要快速响应
- 高，看活动需求，每个活动都可以看成单个大小不一的项目，支持成本比较高

应用特点:

- 应用是一个典型的 MPA（Multi-page applicaiton），多入口
- 有 SEO 诉求，所以需要支持 SSR（Server side render）
- 页面繁多，结构各异。需要一定的自由度和定制能力
- 由于业务的特性决定，页面内容的变更，发布都很频繁

接入 Foxpage 后:

![promo](../../public/guide/promo.png)

客户案例：

<img width="100" align="left" src="../../public/brand/trip.png"/>

Trip.com Eventsale 系统

简介：Eventsale 系统是 Trip.com 的活动配置系统，包含活动的基础信息，促销信息，玩法信息，活动页信息等配置<br>
地址：https://www.trip.com/sales/<br>
现状：截至 2021 年中为止，大约有 3000+的活动页面通过活动配置系统制作完成，同时在线的页面有 1000+，平均每天有 100+的页面在不间断的更新

## SEO 页面

需求特点：

- 动态性，页面模块需要有一定的动态性，会根据模块点击和曝光动态排序以及控制是否展示

应用特点:

- 需要支持 SSR（Server side render）
- 页面繁多，但结构相似。大部分是内容展示

接入 Foxpage 后:

![seo](../../public/guide/seo.png)

客户案例：

<img width="100" align="left" src="../../public/brand/trip.png"/>

Trip.com SEO 管理平台

简介：SEO 管理平台管理着 Trip.com Hot 频道的内容，包括关键词管理，页面 TDK 信息，结构信息，内容等。<br>
地址：内部系统<br>
现状：截至 2021 年中为止，SEO 平台目前由 Foxpage 框架生成的页面大概有 100w+的页面，页面部分的主要模块都是通过算法动态生成的

## 邮件页面

在邮件页面发送这个场景中，传统的方式是前端切图，将 HTML 交付给到后端，后端在结合模版引擎做数据绑定，然后调用发送渠道发送。这个过程中前后端没有分离，前后端合作低效。结合 Foxpage 方案后很好的解决了痛点。

![email](../../public/guide/email.png)

客户案例：

<img width="100" align="left" src="../../public/brand/trip.png"/>

Trip.com MessageHub 系统

简介：MessageHub 系统是 Trip.com 触达用户的消息系统，包含短息，邮件，站内信等内容的管理和发送。<br>
地址：内部系统<br>
现状：截至 2021 年中为止，通过邮件配置系统制作的各类邮件页面大约 2000+封左右， SSR 服务平均每天调用量在 300w+次，静态页面渲染耗时 99 线在 60ms 左右

## 更多玩法，等你探索！

Foxpage 的核心是一个比较开放的系统，我们也致力往这个方向实现。希望可以衍生出来更多的玩法，下图可以帮助大家做一些探索新玩法方面的引导。

![more play](../../public/guide/moreplay.png)
