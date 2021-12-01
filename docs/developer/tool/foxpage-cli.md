---
title: Foxpage CLI
order: 40
group:
  title: 工具
  order: 60
---

## 介绍

Foxpage CLI 提供了常用的脚手架工具, 提供项目和组件的拉取、创建、安装、构建、部署等服务

## 安装

开发者可以通过 npm 或 yarn 来进行全局安装

```sh
$ npm install @foxpage/foxpage-cli -g
# or
$ yarn global add @foxpage/foxpage-cli
```

## foxpage

脚手架一级指令是 `foxpage`:

查看版本

```sh
$ foxpage -v
```

获取帮助提示

```sh
$ foxpage -h
```

二级指令目前分为 `cmpt` `server` 两类:

- `cmpt`: 组件相关, 包含组件资源构建, 组件新建, 组件模板维护, 创建组件化项目
- `server`: 系统级项目相关, 目前包含所以系统级别项目的拉取、安装, 未来会增加更多的功能

## foxpage-cmpt

处理组件相关的流程的指令工具, 下一级指令分为 `build`, `project`, `package`,

- `foxpage-cmpt build`: 构建组件资源, 详细构建参数可通过 `foxpage-cmpt build -h` 查看
- `foxpage-cmpt project`: 新建组件化项目, 通过指令 `foxpage-cmpt project my-project` 创建组件化模板项目
- `foxpage-cmpt package`: 目前仅包含新建组件功能, 后面功能上可能会根据用户需求做一些扩展, 目前可通过 `foxpage-cpmt project new` 根据选择的模板新建组件

```sh
$ foxpage-cmpt -h
# Usage: foxpage-cmpt [options] [command]

# foxpage-component tool

# Options:
#   -h, --help           display help for command

# Commands:
#   project <name>       create a new foxpage-component-[name] project
#   build                foxpage component tool, build for foxpage component
#   package <commander>  foxpage component package tool
#   help [command]       display help for command
```

### build

对组件进行资源构建, `/dist` 目录下的资源用于 foxpage 平台进行注册, `/es` `/lib` 目录下的资源用于 npm 仓库发布组件组件包资源

详细构建参数如下:

```sh
$ foxpage-cmpt build -h
# Usage: foxpage-cmpt build [options]

# Options:
#   -F, --foxpage                   Build umd for foxpage
#   -FR, --foxpage-root             Build umd for foxpage in root
#   -L, --lib                       Build lib(cjs) for npm
#   -E, --es-module                 Build es(es-module) for npm
#   -S, --schema-md                 Build schema.md to describe the api of component
#   --clean                         Clean dist directory (default: true)
#   --no-clean                      Set --clean to false
#   --assets-hash                   Build files in assets using the WebPack Contenthash parameter
#   --debug                         Debug: some temp file or data will be retained
#   --root-cache                    Cache <root>/dist directory for all package (default: true)
#   --no-root-cache                 Set --root-cache to false
#   --npm-client <npmClient>        Executable used to run scripts (npm, yarn, ...). (default: "npm")
#   --concurrency <concurrency>     Number of concurrently pending subprocess(default: Max(os.cpus().length - 1, 2)) (default: 3)
#   --modes <modes>                 Build modes, includes: "production,debug,node,editor", split by ",", (only support --foxpage)
#   --file-hash                     Build all files using the WebPack Contenthash parameter
#   --progress-plugin               Use webpack.ProgressPlugin when webpack build
#   --analyze                       Analyze build result. can be used with "--package-dir" (run on the "<root>/"), (only support --foxpage) (default: false)
#   --zip-fox                       Automatically compress build resources for the FoxPage component registration process, (only support --foxpage)
#   --no-zip-fox                    Set --zip to false
#   --babel-options <babelOptions>  Customer babel cli options, (only support --es/lib)
#   --ts-declaration                Generate typescript declaration (*.d.ts), (only support --es/lib) (default: true)
#   --no-ts-declaration             Set --ts-declaration to false
#   --css-style                     build style from index.(less/scss) to index.css. please used with --remove-style-import. mode name is style. (only support --es/lib)
#   --remove-style-import           Remove style import for all ".js" file. It's usually used with --css-style. (only support --es/lib)
#   --import-index-css              When use --remove-style-import, add "import './index.css'" in root index.js, (only support --es/lib)
#   -h, --help                      display help for command
```

#### --foxpage, -F

主流程, 为单个组件构建可用于 foxpage 平台注册的资源文件

#### --foxpage-root, -FR

主流程, 为项目所有组件构建可用于 foxpage 平台注册的资源文件

#### --lib, -L

主流程, 为单个组件构建可用于 npm 发布的 commonjs 规范的资源文件

#### --es-module, -E

主流程, 为单个组件构建可用于 npm 发布的 es-module 规范的资源文件

#### --schema-md, -S

主流程, 为组件构构建 API 说明文档, 请在 `<package>/src/typing.ts` 中提供名为 `ComponentProps` 类型声明, 且遵循 [typescript-json-schema](https://github.com/YousefED/typescript-json-schema/blob/master/api.md) 规范

#### --clean

通用配置: 是否清除上次构建的遗留文件, 默认 true, 关闭请设置 `--no-clean`

#### --assets-hash

通用配置: 保留字段, 为构建的外部静态资源提供 file hash, 由于 foxpage 平台暂时不支持处理相对路径, 所以外部静态资源建议使用绝对 url 地址, 所以不会出现在构建产物中, 所以暂时会不用到该配置

#### --debug

通用配置: debug 模式, 开启的话会保留构建时依赖的临时配置文件, 如: `.fox_temp/_tsconfig.temp.json` 文件, 方便开发者排查问题

#### --root-cache

foxpage-root 配置: 是否启用缓存. 当项目内的组件越来越多, 我们只需要构建修改的组件, 而不是为所有组件都构建一遍. 在 `.cache/foxpage/root-cache.json` 中存缓存了所有的组件的文件 hash 数据, 以此计算组件缓存的有效性. 注意: 不要随便修改或删除 `dist/component/<package>/*` 内部的文件, 这种行为会导致`<package>`缓存内容丢失, 不会参与后续的构建, 如果想要重新构建某个组件, 只需修改 `.cache/foxpage/root-cache.json` 文件, 删除掉对应的 `key,value` 即可.

#### --npm-client

foxpage-root 配置: 指定 npm 客户端工具, 可选 `npm` 或 `yarn`, 默认 `npm`

#### --concurrency

foxpage-root 配置: 指定构建组件的并发数, 默认值为 `Max(os.cpus().length - 1, 2)`, 合理的压榨 cpu 性能来提高构建速度

#### --modes

foxpage 配置: 指定 `--foxpage` 流程的构建模式, 默认值: `production,debug,node,editor`, 如果你的组件不需要构建出 `editor.js` 或没有提供 `src/editor/index.ts`, 你可以手动指定 `--modes=production,debug,node` 标识想要构建的模式

#### --file-hash

foxpage 配置: 指定 `--foxpage` 流程的 webpack 配置启用 Contenthash

#### --progress-plugin

foxpage 配置: 指定 `--foxpage` 流程的是否使用 `webpack.ProgressPlugin` 插件

#### --analyze

foxpage 配置: 指定 `--foxpage` 流程的 webpack 配置启用 analyze 模式, 建议搭配 `--modes production` 使用, 不要一次分析多个模式的构建结果.

#### --zip-fox

foxpage 配置: 将 `<package>/dist` 打包成 `zip` 文件

#### --babel-options

lib/es 配置: 指定 babel 配置. 我们提供了一套默认 `babel.config.js` 配置满足构建需求, 如需扩展, 可修改 `<root>/babel.config.js` 文件. 也可添加构建字段 `--babel-options=-out-dir ./customer-dir`, 更多参数请查看 [babel](https://babeljs.io/docs/en/babel-cli) 配置文档, 注意: 这里尽量不要覆盖构建工具设置的配置数据, 开启 `--debug` 模式可通过 `Info: babel options:` 开头的日志查看 `babel-cli` 构建时使用的构建参数信息

#### --ts-declaration

lib/es 配置: 是否构建组件的类型声明文件. 内部使用 [tsc](https://www.typescriptlang.org/docs/handbook/compiler-options.html#using-the-cli) 构建工具, 且构建参数强制为 `declaration: true, emitDeclarationOnly: true`, 仅构建出 `.d.ts` 文件

#### --css-style

lib/es 配置: 是否需要将样式文件处理成 `.css` 格式, 默认 false. 一般情况组件的使用方配置了对应的 `loader`(less-loader, sass-loader) 则组件的 npm 资源可以直接使用 `.less` or `.sass`, 而无需对样式做处理. 如果想要强制使用 `.css` 格式的文件, 你需要注意以下几点:

- 无论组件目录下有多少个样式文件, 仅以 `src/index.(scss|less|css)` 为入口文件, 仅构建出一个 `.css` 文件, 防止文件嵌套引用导致样式重复
- 搭配 `--remove-style-import` 移除所有 `.js` 文件中关于样式文件的引入代码
- 可让组件使用方在引入组件的同时手动引入组件的样式 或者 组件开发者搭配 `--import-index-css` 自动在 `index.js` 中添加 `index.css` 的样式引入代码自动引入组件样式

#### --remove-style-import

lib/es 配置: 移除所有 `.js` 文件中关于样式文件的引入代码

#### --import-index-css

lib/es 配置: 自动在构建产物的 `index.js` 中添加 `index.css` 的样式引入代码

### project

创建组件开发项目, 例如创建一个名叫 `foxpage-component-demo` 的组件项目方式如下:

```sh
$ foxpage-cmpt project demo
```

详细构建参数如下:

```sh
$ foxpage-cmpt project -h
# Usage: foxpage-cmpt project [options] <name>

# Options:
#   -h, --help  display help for command
```

### package

用于组件维护, 目前仅包含新建组件的功能

详细构建参数如下:

```sh
$ foxpage-cmpt package -h
# Usage: foxpage-cmpt package [options] [command]

# foxpage component package tools

# Options:
#   -h, --help      display help for command

# Commands:
#   new             create a new component
#   help [command]  display help for command
```

#### package new

创建新组件, 可通过 `--template` 指定模板, 也可以通过 `--templates` 指定模板文件夹供用户选择文件夹中的模板.

详细构建参数如下:

```sh
$ foxpage-cmpt package new -h
# Usage: foxpage-cmpt package new [options]

# Options:
#   --templates <templateDir>  templates dir location. you can select subfolders to determine the path of the template
#   --template <templateDir>   template dir location
#   --formate                  formate code after create
#   -h, --help                 display help for command
```

## foxpage-serve

为 foxpage 系统级项目提供帮助.

详细构建参数如下:

```sh
$ foxpage-server -h
# Usage: foxpage-server <command> [options]

# foxpage server tool

# Options:
#   -h, --help      display help for command

# Commands:
#   fetch           pull project
#   install         install dependencies
#   help [command]  display help for command
```

### fetch

拉取 `foxpage` 所有需要启动或部署的项目, 方式如下:

```sh
$ foxpage-server fetch
```

### install

为所有项目安装依赖, 方式如下:

```sh
$ foxpage-server install
```
