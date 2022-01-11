---
title: 制作一张页面
order: 3
toc: menu
---

## 创建页面

当一些前置准备工作完成后，我们可以来创建页面了

1. 首先创建一个项目，进入项目后创建一个 page 类型的文件，命名为“promo-page”

<html>
  <div style="text-align: center; ">
    <img src="../../public/admin/project/new_file.png" alt="image" style="width: 800px;box-shadow: 1px 1px 10px #ddd;"/>
  </div>
</html>

&ensp; &ensp; &ensp; &ensp; - Type 类型：这里选择“page”

&ensp; &ensp; &ensp; &ensp; - Name 名称：页面的名称

&ensp; &ensp; &ensp; &ensp; - Path Name 路径名称：path name 可以作为 url 中目录的组成部分，用于访问【[详见页面访问](/course/create-page#配置页面访问入口)】

2. 进入页面，添加页面内容（这个可以创建多份内容，存放按语言或者其他自定义维度划分的内容）

<html>
  <div style="text-align: center; ">
    <img src="../../public/admin/project/new_content.png" alt="image" style="width: 800px;box-shadow: 1px 1px 10px #ddd;"/>
  </div>
</html>

&ensp; &ensp; &ensp; &ensp; - Name 名称：内容的名称，只为区分内容文件，无任何功能性的作用

&ensp; &ensp; &ensp; &ensp; - Locale 语言：当应用设置了国际化相关信息，这里会出现对应的 Locale 选择【[详见国际化](/course/create-application#国际化支持)】

&ensp; &ensp; &ensp; &ensp; - Query ：用户可以给内容文件设置自定义的路由标签，查询页面内容时可以带上这些标签标识，系统即会返回对应内容文件【[详见页面访问](/course/create-page#配置页面访问入口)】

3. 编辑页面内容，进入页面内容有三个入口

&ensp; &ensp;&ensp; &ensp; 项目入口

<html>
  <div style="text-align: center; ">
  <img src="../../public/admin/project/project-builder.png" alt="image" style="width: 800px;box-shadow: 1px 1px 10px #ddd;"/>
  </div>
</html>

&ensp; &ensp;&ensp; &ensp; 页面入口

<html>
  <div style="text-align: center; ">
  <img src="../../public/admin/project/file-builder.png" alt="image" style="width: 800px;box-shadow: 1px 1px 10px #ddd;"/>
  </div>
</html>

&ensp; &ensp;&ensp; &ensp; 内容入口

<html>
  <div style="text-align: center; ">
  <img src="../../public/admin/project/content-builder.png" alt="image" style="width: 800px;box-shadow: 1px 1px 10px #ddd;"/>
  </div>
</html>

从这三个入口的进入内容编辑页面，在左侧的项目结构展现的文件列表会有所不同。如从项目入口进入的话展示的是项目下面所有的文件，从页面入口则展示页面下面的所有内容文件

<html>
  <div style="text-align: center; ">
    <img src="../../public/admin/project/builder.png" alt="image" style="width: 800px;box-shadow: 1px 1px 10px #ddd;"/>
  </div>
</html>

4. 进到内容编辑页面后先选择页面模版，可以在“Template”中直接选择已有的页面进行复制，也可以在左侧的页面结构中选中“Page”节点，在右侧的编辑框中设置模板，选择这里【[详见页面模板](/course/create-application#制作页面模板)】的模板

<html>
  <div style="text-align: center; ">
  <img src="../../public/admin/project/template-select.png" alt="image" style="width: 800px;box-shadow: 1px 1px 10px #ddd;"/>
  </div>
</html>

### 页面搭建

打开组件列表可拖动组件（到页面树形结构区域放置、也可拖动到中间区域放置）编辑页面

<html>
  <div style="text-align: center; ">
    <img src="../../public/admin/project/drag.png" alt="image" style="width: 800px;box-shadow: 1px 1px 10px #ddd;"/>
  </div>
</html>

鼠标放置在拖动图标上可自由的拖动组件到任意层级

<html>
  <div style="text-align: center; ">
    <img src="../../public/admin/project/drag1.png" alt="image" style="width: 800px;box-shadow: 1px 1px 10px #ddd;"/>
  </div>
</html>

点击树形结构上组件名字或点击中间组件渲染区域都可进入组件（props、style、listener、condition）编辑模式

<html>
  <div style="text-align: center; ">
    <img src="../../public/admin/project/select.png" alt="image" style="width: 800px;box-shadow: 1px 1px 10px #ddd;"/>
  </div>
</html>

组件编辑分四块内容

- Basic info：基础信息及样式编辑
- Component props：组件的业务属性编辑，属性编辑器是由组件开发者提供的，如果组件开发者不提供则平台会提供一个基础通用的编辑器
- listener：配置组件的事件
- condition：条件渲染配置，如：指定组件展示的时间或是否展示等

<html>
  <div style="text-align: center; ">
    <img src="../../public/admin/project/basic.png" alt="image" style="width: 200px;box-shadow: 1px 1px 10px #ddd;"/>
    <img src="../../public/admin/project/props.png" alt="image" style="width: 200px;box-shadow: 1px 1px 10px #ddd;"/>
    <img src="../../public/admin/project/listener.png" alt="image" style="width: 200px;box-shadow: 1px 1px 10px #ddd;"/>
    <img src="../../public/admin/project/condition.png" alt="image" style="width: 200px;box-shadow: 1px 1px 10px #ddd;"/>
  </div>
</html>

### 使用变量

变量功能可以支持通过动态的方式获取数据，比如从一个接口中获取内容，然后绑定到具体的组件。目前变量类型有两种

- 静态数值(static)
- 方法调用（取方法的返回值)(function.call)

  <html>
    <div style="text-align: center; ">
      <img src="../../public/admin/project/variable.png" alt="image" style="width: 800px;box-shadow: 1px 1px 10px #ddd;"/>
    </div>
  </html>

- 如果需要使用 variableA 变量，以{{variableA}}的方式使用，
- 如果需要使用 variableA 变量的 label 属性，以{{variableD:label}}的方式使用，
  <html>
    <div style="text-align: center; ">
      <img src="../../public/admin/project/variable_use.png" alt="image" style="width: 800px;box-shadow: 1px 1px 10px #ddd;"/>
    </div>
  </html>

使用变量可以点击 “{}” 按钮进入变量使用界面

  <html>
    <div style="text-align: center; ">
      <img src="../../public/admin/project/variable_use1.png" alt="image" style="width: 800px;box-shadow: 1px 1px 10px #ddd;"/>
    </div>
  </html>

变量的使用界面的左侧为可用变量的列表，选中变量即可在内容区域的光标位置生成变量的模版语法

  <html>
    <div style="text-align: center; ">
      <img src="../../public/admin/project/variable_use2.png" alt="image" style="width: 800px;box-shadow: 1px 1px 10px #ddd;"/>
    </div>
  </html>

### 使用条件

条件功能支持某一个节点使用条件表达式来控制控制节点是否渲染，如设置一个组件的展示时间

<html>
  <div style="text-align: center; ">
    <img src="../../public/admin/project/condition_new.png" alt="image" style="width: 800px;box-shadow: 1px 1px 10px #ddd;"/>
  </div>
</html>

条件表达式中也可以使用变量，点击 select 选择

<html>
  <div style="text-align: center; ">
    <img src="../../public/admin/project/condition_select1.png" alt="image" style="width: 800px;box-shadow: 1px 1px 10px #ddd;"/>
  </div>
</html>

选择需要的条件，选择多个条件时他们之前是“AND”的关系

<html>
  <div style="text-align: center; ">
    <img src="../../public/admin/project/condition_select2.png" alt="image" style="width: 800px;box-shadow: 1px 1px 10px #ddd;"/>
  </div>
</html>

### 使用函数

函数支持编写一些简单的 Javascript 代码以便满足一些特殊的功能

<html>
  <div style="text-align: center; ">
    <img src="../../public/admin/project/function_new.png" alt="image" style="width: 800px;box-shadow: 1px 1px 10px #ddd;"/>
  </div>
</html>

变量中使用函数的方式是通过选择 function.call 的类型的变量来实现

<html>
  <div style="text-align: center; ">
    <img src="../../public/admin/project/function_use1.png" alt="image" style="width: 800px;box-shadow: 1px 1px 10px #ddd;"/>
  </div>
</html>

可用函数的列表，展示 Project 层级和 Applicaiton 层级的函数，直接选择所需函数点击 “Apply” 即可

<html>
  <div style="text-align: center; ">
    <img src="../../public/admin/project/function_use2.png" alt="image" style="width: 800px;box-shadow: 1px 1px 10px #ddd;"/>
  </div>
</html>

## 可视化编辑界面

#### 工具栏

<html>
  <div style="text-align: center; ">
    <img src="../../public/admin/project/tools.png" alt="image" style="width: 800px;box-shadow: 1px 1px 10px #ddd;"/>
  </div>
</html>

1.  Template 选择已有的页面作为模板来创建页面
2.  PC/PAD/Mobile 可改变渲染区域大小、查看页面不同视图下的自适应情况

    <html>
      <div style="text-align: center; ">
      <img src="../../public/admin/project/zoom.png" alt="image" style="width: 800px;box-shadow: 1px 1px 10px #ddd;"/>
      </div>
    </html>

3.  Zoom 缩放

    <html>
      <div style="text-align: center; ">
      <img src="../../public/admin/project/zoom1.png" alt="image" style="width: 800px;box-shadow: 1px 1px 10px #ddd;"/>
      </div>
    </html>

4.  Last Step/Next Step 编辑状态的前进、回退

    <html>
      <div style="text-align: center; ">
      <img src="../../public/admin/project/last-step.png" alt="image" style="width: 800px;box-shadow: 1px 1px 10px #ddd;"/>
      </div>
    </html>

5.  preview 实时预览
6.  save 保存数据到服务端
7.  publish 发布后、使编辑后的数据生效
8.  More DSL

    <html>
      <div style="text-align: center; ">
        <img src="../../public/admin/project/dsl.png" alt="image" style="width: 800px;box-shadow: 1px 1px 10px #ddd;"/>
      </div>
    </html>

## 保存，预览，发布页面

页面编辑完成后，会走一个发布流程，才能让页面正式生效。发布过程其实是数据的状态的变更，不会涉及到物理代码的部署

## 配置页面访问入口

页面的访问入口配置，其实配置的是一个映射关系。真实的路由是在应用中实现的，应用可以自由的设置真实的访问路由与页面的映射关系

1. 设置页面所属应用的 Access Control 信息，进入应用的设置界面

<html>
  <div style="text-align: center; ">
    <img src="../../public/admin/application/setting.png" alt="image" style="width: 800px;box-shadow: 1px 1px 10px #ddd;"/>
  </div>
</html>

&ensp; &ensp; &ensp; &ensp; - Host：如果是站点应用，这里配置的访问站点的域名

&ensp; &ensp; &ensp; &ensp; - Slug：为字母、中划线和数字组成的用唯一的字符串，可以作为访问应用的 URL 的组成部分

2. 设置页面的 Path Name，进入页面详情

<html>
  <div style="text-align: center; ">
    <img src="../../public/admin/project/new_file.png" alt="image" style="width: 800px;box-shadow: 1px 1px 10px #ddd;"/>
  </div>
</html>

&ensp; &ensp; &ensp; &ensp; - Path Name 路径名称：path name 可以作为 url 中目录的组成部分

3. 设置内容 Locale 及 Query 信息，进入页面内容详情

<html>
  <div style="text-align: center; ">
    <img src="../../public/admin/project/new_content.png" alt="image" style="width: 800px;box-shadow: 1px 1px 10px #ddd;"/>
  </div>
</html>

&ensp; &ensp; &ensp; &ensp; - Locale 语言：当应用设置了国际化相关信息

&ensp; &ensp; &ensp; &ensp; - Query ：用户可以给内容文件设置自定义的路由标签，查询页面内容时可以带上这些标签标识，系统即会返回对应内容文件

如上的设置举个例子：

- host: `http://ssr.api.foxfamily.io`
- slug: `demo-2`
- pathname: `new-page`
- locale: `ko-KA`
- query: `{promo_referee:1}`

出现在内容入口的访问链接：

<html>
  <div style="text-align: center; ">
    <img src="../../public/admin/project/url.png" alt="image" style="width: 800px;box-shadow: 1px 1px 10px #ddd;"/>
  </div>
</html>
