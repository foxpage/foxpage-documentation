---
title: 内容接口
order: 3
group:
  title: API
  order: 50
---

## 模板文件

---

### 获取文件下模板页面列表

#### <Badge>API</Badge> GET /templates-searchs

获取包括页面以及版本信息

请求

```
GET /templates-searchs?applicationId=appl_yqfu8BI1BRe15fs&folderId=fold_pOginfBEFU2Rrlb&search=&page=1&size=10
```

- 参数
  - applicationId - `string` - 必选，应用 ID
  - folderId - `string` - 可选，默认为空，为空的话，默认查应用下的项目根文件夹下文件的模板列表，如果传值，则必须传该应用下的项目 ID，此时，查询该项目下文件模板信息列表
  - page - `number` - 可选，当前页数，默认为 1
  - size - `number` - 可选，当前每页数据数，默认为 10

返回

```json
{
  "data": [
    {
      "id": "file_Q27yiPoNl6Ah5cm",
      "name": "template",
      "type": "template",
      "version": 5,
      "contentId": "cont_ylpNPC33fdDgquK",
      "content": {
        "id": "cont_ylpNPC33fdDgquK",
        "schemas": [
          {
            "id": "stru_ykiifcynAFKaqsY",
            "label": "@fox-design/react-html",
            "name": "@fox-design/react-html",
            "children": [
              {
                "id": "stru_rorepmOVizYJSh4",
                "label": "@fox-design/react-body",
                "name": "@fox-design/react-body",
                "parentId": "stru_ykiifcynAFKaqsY"
              }
            ]
          }
        ]
      }
    }
  ],
  "pageInfo": {
    "page": 1,
    "size": 10,
    "total": 1
  }
}
```

- 说明

  - data - `array` - 页面以及版本信息列表
    - id - `string` - 页面所属文件 ID
    - name - `string` - 页面名称
    - type - `string` - 页面类型
    - version - `number` - 页面 live 版本
    - contentId - `string` - 页面 ID
    - content - `object` - 页面版本详情
  - pageInfo - `object` - 分页信息，详见 [`PageInfo`](#pageinfo)

### 获取应用下模板文件列表

#### <Badge>API</Badge> GET /templates/file-searchs

获取应用下分页模板文件列表，按时间倒序, `每个文件只返回一个模板页面信息`，只在文件类型为变量，条件和函数时，返回模板最大的版本内容

请求

```
GET /templates/file-searchs?applicationId=appl_yqfu8BI1BRe15fs&search=&page=1&size=10
```

- 参数
  - applicationId - `string` - 必选, 应用 ID
  - search - `string` - 可选，模糊匹配模板文件名称， 默认为空
  - page - `number` - 可选，当前页数，默认为 1
  - size - `number` - 可选，当前每页数据数，默认为 10

返回

```json
{
  "data": [
    {
      "id": "file_Q27yiPoNl6Ah5cm",
      "name": "template",
      "intro": "",
      "tags": [],
      "type": "template",
      "suffix": "html",
      "deleted": false,
      "applicationId": "appl_yqfu8BI1BRe15fs",
      "folderId": "fold_pOginfBEFU2Rrlb",
      "folderName": "new-project",
      "contentId": "cont_ylpNPC33fdDgquK",
      "content": {...},
      "creator": {
        "id": "user-dvbfW1qsl8qkz39",
        "account": "fox-user"
      },
      "createTime": "2021-09-18T02:24:54.605Z",
      "updateTime": "2021-09-18T02:24:54.605Z"
    }
  ],
  "pageInfo": {
    "total": 1,
    "page": 1,
    "size": 20
  }
}
```

- 说明

  - data - `array` - 模板页面的相关联信息
    - id - `string` - 文件 ID
    - name - `string` - 文件名称
    - intro - `string` - 文件简介
    - tags - `array` - 文件标签
    - type - `string` - 文件类型
    - suffix - `string` - 文件后缀 boolean
    - deleted - `boolean` - 文件删除状态
    - applicationId - `string` - 文件所属应用 ID
    - folderId - `string` - 文件上级文件夹 ID
    - folderName - `string` - 文件上级文件夹名称
    - contentId - `string` - 文件下内容页面 ID
    - content - `object` - 文件下内容最大版本信息，只在文件类型是 variable, condition, function 时，返回版本信息
    - creator - `object` - 文件创建者信息
      - id - 用户 ID
      - account - 用户名称
    - createTime - `date` - 文件创建时间
    - updateTime - `date` - 文件更新时间
  - pageInfo - `object` - 分页信息，详见 [`PageInfo`](#pageinfo)

### 获取模板编辑版本详情

#### <Badge>API</Badge> GET /templates/build-versions

获取指定版本编辑时的版本详情，如果没有编辑的版本信息，则通过最新的版本创建一个编辑的版本

请求

```
GET /templates/build-versions?applicationId=appl_yqfu8BI1BRe15fs&id=cont_ylpNPC33fdDgquK
```

- 参数
  - applicationId - `string` - 必选，应用 ID
  - id - `string` - 必选，页面内容 ID

返回

- data - [`ContentVersionDetail`](#contentversiondetail)

### 获取模板文件的页面内容列表

#### <Badge>API</Badge> GET /templates/content-searchs

获取指定模板文件下的所有页面内容列表

请求

```
GET /templates/content-searchs?applicationId=appl_yqfu8BI1BRe15fs&fileId=file_Q27yiPoNl6Ah5cm&search=
```

- 参数
  - applicationId - `string` - 必选，应用 ID
  - fileId - `string` - 必选，文件 ID
  - search - `string` - 可选, 模糊匹配文件下页面名称

返回

- 说明
  - data - `array` - 内容列表信息 详见[`ContentDetail`](#contentdetail)

### 获取指定模板的 live 版本详情

#### <Badge>API</Badge> POST /templates/lives

通过指定下内容 ID，来获取内容的 live 版本详情

请求

```json
{
  "applicationId": "appl_yqfu8BI1BRe15fs",
  "ids": ["cont_ylpNPC33fdDgquK"]
}
```

- 参数
  - applicationId - `string` - 必选， 应用 ID
  - ids - `string[]` - 必选，指定的内容页面 ID

返回

```json
{
  "data": [
    {
      "id": "cont_ylpNPC33fdDgquK",
      "schemas": [
        {
          "id": "stru_ykiifcynAFKaqsY",
          "label": "@fox-design/react-html",
          "name": "@fox-design/react-html",
          "children": [
            {
              "id": "stru_rorepmOVizYJSh4",
              "label": "@fox-design/react-body",
              "name": "@fox-design/react-body",
              "parentId": "stru_ykiifcynAFKaqsY",
              "children": []
            }
          ]
        }
      ],
      "relation": {}
    }
  ]
}
```

- 说明
  - data - `array` - 内容页面的 live 版本详情
    - id - `string` - 版本所属内容 ID
    - schemas - `array` - 版本 schemas
      - id - `string` - 节点 ID
      - label - `string` - 节点名称
      - name - `string` - 节点使用的组件名称
      - children - `array` - 子节点信息 `schemas`
    - relations - `object` - schemas 中使用的关联信息，包括变量，条件，函数等

### 获取模板页面的内容目录列表

#### <Badge>API</Badge> GET /templates/catalogs

获取模板页面编辑时左侧的同一文件下的所有模板列表

请求

```
GET /templates/catalogs?applicationId=appl_yqfu8BI1BRe15fs&id=file_Q27yiPoNl6Ah5cm
```

- 参数
  - applicationId - `string` - 必选，应用 ID
  - id - `string` - 必选，文件 ID

返回

- data - `array` - 内容列表，详见[`ContentDetail`](#contentdetail)

### 创建模板详情

#### <Badge>API</Badge> POST /templates

创建模板文件详情

请求

```json
{
  "applicationId": "appl_yqfu8BI1BRe15fs",
  "folderId": "fold_mGD8gIhNRlvC6cK",
  "name": "111",
  "suffix": "html"
}
```

- 参数
  - applicationId - `string` - 必选，应用 ID
  - name - `string` - 必选，模板名称
  - folderId - `string` - 可选，模板的上级 ID，默认为空，为空则将模板创建在应用的默认模板文件夹下
  - intro - `string` - 可选，模板文件简介
  - tags - `array` - 可选，模板文件标签
  - suffix - `string` - 可选，模板文件后缀

返回

详见[`FileDetail`](#filedetail)

### 创建模板内容详情

#### <Badge>API</Badge> POST /templates/contents

请求

```json
{
  "applicationId": "appl_yqfu8BI1BRe15fs",
  "fileId": "file_yCOCeFqElCjIF9U",
  "title": "demo-2-content",
  "tags": [{ "locale": "zh-HK" }]
}
```

- 参数
  - applicationId - `string` - 必选，应用 ID
  - fileId - `string` - 必选，文件 ID
  - title - `string` - 必选，内容名称
  - tags - `string` - 可选， 内容标签
    - locale - `string` - locale 标签
    - query - `object` - query 标签

返回

详见[`ContentDetail`](#contentdetail)

### 设置模板发布状态

#### <Badge>API</Badge> PUT /templates/version-publish

设置模板内容版本的发布状态，比如，`base`设置为`release`

请求

```json
{
  "applicationId": "appl_yqfu8BI1BRe15fs",
  "id": "cver_PsBI5RQZ9pXtOfQ",
  "status": "release"
}
```

- 参数
  - applicationId - `string` - 必选，应用 ID
  - id - `string` - 必选，版本 ID
  - status - `string` - 必选，版本状态，`release`

返回

详见[`ContentVersionDetail`](#contentversiondetail)

### 设置模板的 live 版本

#### <Badge>API</Badge> PUT /templates/live-versions

设置模板的 live 版本

请求

```json
{
  "applicationId": "appl_yqfu8BI1BRe15fs",
  "id": "cont_46Voof9I295EWd4",
  "versionNumber": 2
}
```

- 参数
  - applicationId - `string` - 必选，应用 ID
  - id - `string` - 必选，模板内容 ID
  - versionNumber - `number` - 必选，发布的版本号

返回

详见[`ContentVersionDetail`](#contentversiondetail)

### 更新模板文件信息

#### <Badge>API</Badge> PUT /templates

更新模板所属的文件信息

请求

```json
{
  "applicationId": "appl_yqfu8BI1BRe15fs",
  "id": "file_yCOCeFqElCjIF9U",
  "name": "demo-file",
  "intro": "demo-intro",
  "tags": [{ "pathname": "demo" }]
}
```

- 参数
  - applicationId - `string` - 必选，应用 ID
  - id - `string` - 必选，文件 ID
  - name - `string` - 必选，文件名称
  - intro - `string` - 可选，文件简介
  - tags - `array` - 可选， 文件标签
    - pathname - `string` - 文件访问的路径

返回

详见[`FileDetail`](#filedetail)

### 更新模板内容信息

#### <Badge>API</Badge> PUT /templates/contents

更新模板的内容信息，包括 title，tags 字段

请求

```json
{
  "applicationId": "appl_yqfu8BI1BRe15fs",
  "id": "cont_46Voof9I295EWd4",
  "title": "demo-2-content-new",
  "tags": [{ "locale": "zh-HK", "query": { "a": "b" } }]
}
```

- 参数
  - applicationId - `string` - 必选，应用 ID
  - id - `string` - 必选，内容 ID
  - title - `string` - 可选，内容名称
  - tags - `array` - 可选，内容标签
    - locale - `string` - locale 标签
    - query - `object` - query 标签 `any`

返回

详见[`ContentDetail`](#contentdetail)

### 更新模板版本信息

#### <Badge>API</Badge> PUT /templates/versions

更新模板内容版本信息, 包括版本号和内容

请求

```json
{
  "applicationId": "appl_yqfu8BI1BRe15fs",
  "id": "cver_i1El8mbIiLIA4Dg",
  "version": "0.0.7",
  "content": {
    "id": "cont_ylpNPC33fdDgquK",
    "schemas": [
      {
        "id": "stru_ykiifcynAFKaqsY",
        "label": "@fox-design/react-html",
        "name": "@fox-design/react-html",
        "children": [
          {
            "id": "stru_rorepmOVizYJSh4",
            "label": "@fox-design/react-body",
            "name": "@fox-design/react-body",
            "parentId": "stru_ykiifcynAFKaqsY",
            "children": []
          }
        ]
      }
    ]
  }
}
```

- 参数
  - applicationId - `string` - 必选，应用 ID
  - id - `string` - 必选，版本 ID
  - content - `object` - 必选，版本详情， 详见[`..`]()
  - version - `string` - 可选， 版本号

返回

详见[`ContentVersionDetail`](#contentversiondetail)

### 删除模板文件

#### <Badge>API</Badge> PUT /templates/status

删除模板文件，同时删除该模板下的内容以及内容版本

请求

```json
{
  "applicationId": "appl_yqfu8BI1BRe15fs",
  "id": "file_Q27yiPoNl6Ah5cm"
}
```

- 参数
  - applicationId - `string` - 必选，应用 ID
  - id - `string` - 必选，文件 ID

返回

详见[`FileDetail`](#filedetail)

### 删除模板内容

#### <Badge>API</Badge> PUT /templates/content-status

删除模板内容，同时删除模板下的版本信息

请求

```json
{
  "applicationId": "appl_yqfu8BI1BRe15fs",
  "id": "cont_46Voof9I295EWd4"
}
```

- 参数
  - applicationId - `string` - 必选，应用 ID
  - id - `string` - 必选，内容 ID

返回

详见[`ContentDetail`](#contentdetail)

### 删除模板版本

#### <Badge>API</Badge> PUT /templates/version-status

删除模板版本详情

请求

```json
{
  "applicationId": "appl_yqfu8BI1BRe15fs",
  "id": "cver_PsBI5RQZ9pXtOfQ"
}
```

- 参数
  - applicationId - `string` - 必选，应用 ID
  - id - `string` - 必选，版本 ID

返回

详见[`ContentVersionDetail`](#contentversiondetail)

## 页面

---

### 获取文件下 Page 页面列表

#### <Badge>API</Badge> GET /pages-searchs

获取包括页面以及版本信息

请求

```
GET /pages-searchs?applicationId=appl_yqfu8BI1BRe15fs&folderId=fold_pOginfBEFU2Rrlb&search=&page=1&size=10
```

- 参数
  - applicationId - `string` - 必选，应用 ID
  - folderId - `string` - 可选，默认为空，为空的话，默认查应用下的项目根文件夹下文件的 Page 列表，如果传值，则必须传该应用下的项目 ID，此时，查询该项目下文件 Page 信息列表
  - page - `number` - 可选，当前页数，默认为 1
  - size - `number` - 可选，当前每页数据数，默认为 10

返回

```json
{
  "data": [
    {
      "id": "file_Q27yiPoNl6Ah5cm",
      "name": "page",
      "type": "page",
      "version": 5,
      "contentId": "cont_ylpNPC33fdDgquK",
      "content": {
        "id": "cont_ylpNPC33fdDgquK",
        "schemas": [
          {
            "id": "stru_ykiifcynAFKaqsY",
            "label": "@fox-design/react-html",
            "name": "@fox-design/react-html",
            "children": [
              {
                "id": "stru_rorepmOVizYJSh4",
                "label": "@fox-design/react-body",
                "name": "@fox-design/react-body",
                "parentId": "stru_ykiifcynAFKaqsY"
              }
            ]
          }
        ]
      }
    }
  ],
  "pageInfo": {
    "page": 1,
    "size": 10,
    "total": 1
  }
}
```

- 说明

  - data - `array` - 页面以及版本信息列表
    - id - `string` - 页面所属文件 ID
    - name - `string` - 页面名称
    - type - `string` - 页面类型
    - version - `number` - 页面 live 版本
    - contentId - `string` - 页面 ID
    - content - `object` - 页面版本详情
  - pageInfo - `object` - 分页信息，详见 [`PageInfo`](#pageinfo)

### 获取应用下 Page 文件列表

#### <Badge>API</Badge> GET /pages/file-searchs

获取应用下分页 Page 文件列表，按时间倒序, `每个文件只返回一个Page页面信息`，只在文件类型为变量，条件和函数时，返回 Page 最大的版本内容

请求

```
GET /pages/file-searchs?applicationId=appl_yqfu8BI1BRe15fs&search=&page=1&size=10
```

- 参数
  - applicationId - `string` - 必选, 应用 ID
  - search - `string` - 可选，模糊匹配 Page 文件名称， 默认为空
  - page - `number` - 可选，当前页数，默认为 1
  - size - `number` - 可选，当前每页数据数，默认为 10

返回

```json
{
  "data": [
    {
      "id": "file_Q27yiPoNl6Ah5cm",
      "name": "page",
      "intro": "",
      "tags": [],
      "type": "page",
      "suffix": "html",
      "deleted": false,
      "applicationId": "appl_yqfu8BI1BRe15fs",
      "folderId": "fold_pOginfBEFU2Rrlb",
      "folderName": "new-project",
      "contentId": "cont_ylpNPC33fdDgquK",
      "content": {...},
      "creator": {
        "id": "user-dvbfW1qsl8qkz39",
        "account": "fox-user"
      },
      "createTime": "2021-09-18T02:24:54.605Z",
      "updateTime": "2021-09-18T02:24:54.605Z"
    }
  ],
  "pageInfo": {
    "total": 1,
    "page": 1,
    "size": 20
  }
}
```

- 说明

  - data - `array` - Page 页面的相关联信息
    - id - `string` - 文件 ID
    - name - `string` - 文件名称
    - intro - `string` - 文件简介
    - tags - `array` - 文件标签
    - type - `string` - 文件类型
    - suffix - `string` - 文件后缀 boolean
    - deleted - `boolean` - 文件删除状态
    - applicationId - `string` - 文件所属应用 ID
    - folderId - `string` - 文件上级文件夹 ID
    - folderName - `string` - 文件上级文件夹名称
    - contentId - `string` - 文件下内容页面 ID
    - content - `object` - 文件下内容最大版本信息，只在文件类型是 variable, condition, function 时，返回版本信息
    - creator - `object` - 文件创建者信息
      - id - 用户 ID
      - account - 用户名称
    - createTime - `date` - 文件创建时间
    - updateTime - `date` - 文件更新时间
  - pageInfo - `object` - 分页信息，详见 [`PageInfo`](#pageinfo)

### 获取 Page 编辑版本详情

#### <Badge>API</Badge> GET /pages/build-versions

获取指定版本编辑时的版本详情，如果没有编辑的版本信息，则通过最新的版本创建一个编辑的版本

请求

```
GET /pages/build-versions?applicationId=appl_yqfu8BI1BRe15fs&id=cont_ylpNPC33fdDgquK
```

- 参数
  - applicationId - `string` - 必选，应用 ID
  - id - `string` - 必选，页面内容 ID

返回

- data - `object` - 详见 [`ContentVersionDetail`](#contentversiondetail)

### 获取 Page 文件的页面内容列表

#### <Badge>API</Badge> GET /pages/content-searchs

获取指定 Page 文件下的所有页面内容列表

请求

```
GET /pages/content-searchs?applicationId=appl_yqfu8BI1BRe15fs&fileId=file_Q27yiPoNl6Ah5cm&search=
```

- 参数
  - applicationId - `string` - 必选，应用 ID
  - fileId - `string` - 必选，文件 ID
  - search - `string` - 可选, 模糊匹配文件下页面名称

返回

- 说明
  - data - `array` - 内容列表信息 详见[`ContentDetail`](#contentdetail)

### 获取指定 Page 的 live 版本详情

#### <Badge>API</Badge> POST /pages/lives

通过指定下内容 ID，来获取内容的 live 版本详情

请求

```json
{
  "applicationId": "appl_yqfu8BI1BRe15fs",
  "ids": ["cont_ylpNPC33fdDgquK"]
}
```

- 参数
  - applicationId - `string` - 必选， 应用 ID
  - ids - `string[]` - 必选，指定的内容页面 ID

返回

```json
{
  "data": [
    {
      "id": "cont_ylpNPC33fdDgquK",
      "schemas": [
        {
          "id": "stru_ykiifcynAFKaqsY",
          "label": "@fox-design/react-html",
          "name": "@fox-design/react-html",
          "children": [
            {
              "id": "stru_rorepmOVizYJSh4",
              "label": "@fox-design/react-body",
              "name": "@fox-design/react-body",
              "parentId": "stru_ykiifcynAFKaqsY",
              "children": []
            }
          ]
        }
      ],
      "relation": {}
    }
  ]
}
```

- 说明
  - data - `array` - 内容页面的 live 版本详情
    - id - `string` - 版本所属内容 ID
    - schemas - `array` - 版本 schemas
      - id - `string` - 节点 ID
      - label - `string` - 节点名称
      - name - `string` - 节点使用的组件名称
      - children - `array` - 子节点信息 `schemas`
    - relations - `object` - schemas 中使用的关联信息，包括变量，条件，函数等

### 获取 Page 页面的内容目录列表

#### <Badge>API</Badge> GET /pages/catalogs

获取 Page 页面编辑时左侧的同一文件下的所有 Page 列表

请求

```
GET /pages/catalogs?applicationId=appl_yqfu8BI1BRe15fs&id=file_Q27yiPoNl6Ah5cm
```

- 参数
  - applicationId - `string` - 必选，应用 ID
  - id - `string` - 必选，文件 ID

返回

- data - `array` - 内容列表，详见[`ContentDetail`](#contentdetail)

### 获取指定 Page 的页面的 live 信息，包含所有 relation 详情

#### <Badge>API</Badge> POST /pages/lives-info

获取应用下指定的页面 live 版本详情,并包含所有 relation 的详情，以及 relation 的 relation 详情

请求

```json
{
  "applicationId": "appl_ypGICLOLbZC921u",
  "ids": ["cont_hS9gkH5CdZ6eltt"]
}
```

- 参数
  - applicationId - `string` - 必选，应用 ID
  - ids - `string[]` - 必选，Page 内容 ID 列表

返回

```json
{
  "data": [
    {
      "content": {
        "schemas": [
          {
            "props": {
              "width": "100%",
              "height": "100%"
            },
            "children": [],
            "id": "stru_arllhffMKViQEVG",
            "directive": {
              "tpl": "{{__templates:cont_ylpNPC33fdDgquK:schemas}}"
            }
          }
        ],
        "relation": {
          "__templates:cont_ylpNPC33fdDgquK:schemas": {
            "id": "cont_ylpNPC33fdDgquK",
            "type": "template"
          }
        },
        "id": "cont_hS9gkH5CdZ6eltt"
      },
      "relations": {
        "templates": [
          {
            "id": "cont_ylpNPC33fdDgquK",
            "schemas": [
              {
                "id": "stru_ykiifcynAFKaqsY",
                "label": "@fox-design/react-html",
                "name": "@fox-design/react-html",
                "children": []
              }
            ]
          }
        ]
      }
    }
  ]
}
```

- 说明
  - data - `array` - 包含 relation 详情的版本详情
    - content - 版本详情, 详见[`ContentVersionDetail`](#contentversiondetail)
    - relations - `object` 依赖的信息详情, 以依赖数据的类型为键的数组列表,如: `templates`, `variables`,`conditions`,...
      - templates - `array` - 详见[`ContentVersionDetail`](#contentversiondetail)
      - variables - `array` - 详见[`ContentVersionDetail`](#contentversiondetail)
      - conditions - `array` - 详见[`ContentVersionDetail`](#contentversiondetail)

### 创建 Page 详情

#### <Badge>API</Badge> POST /pages

创建 Page 文件详情

请求

```json
{
  "applicationId": "appl_yqfu8BI1BRe15fs",
  "folderId": "fold_mGD8gIhNRlvC6cK",
  "name": "111",
  "suffix": "html"
}
```

- 参数
  - applicationId - `string` - 必选，应用 ID
  - name - `string` - 必选，Page 名称
  - folderId - `string` - 可选，Page 的上级 ID，默认为空，为空则将 Page 创建在应用的默认 Page 文件夹下
  - intro - `string` - 可选，Page 文件简介
  - tags - `array` - 可选，Page 文件标签
  - suffix - `string` - 可选，Page 文件后缀

返回

详见[`FileDetail`](#filedetail)

### 创建 Page 内容详情

#### <Badge>API</Badge> POST /pages/contents

请求

```json
{
  "applicationId": "appl_yqfu8BI1BRe15fs",
  "fileId": "file_yCOCeFqElCjIF9U",
  "title": "demo-2-content",
  "tags": [{ "locale": "zh-HK" }]
}
```

- 参数
  - applicationId - `string` - 必选，应用 ID
  - fileId - `string` - 必选，文件 ID
  - title - `string` - 必选，内容名称
  - tags - `string` - 可选， 内容标签
    - locale - `string` - locale 标签
    - query - `object` - query 标签

返回

详见[`ContentDetail`](#contentdetail)

### 设置 Page 发布状态

#### <Badge>API</Badge> PUT /pages/version-publish

设置 Page 内容版本的发布状态，比如，`base`设置为`release`

请求

```json
{
  "applicationId": "appl_yqfu8BI1BRe15fs",
  "id": "cver_PsBI5RQZ9pXtOfQ",
  "status": "release"
}
```

- 参数
  - applicationId - `string` - 必选，应用 ID
  - id - `string` - 必选，版本 ID
  - status - `string` - 必选，版本状态，`release`

返回

详见[`ContentVersionDetail`](#contentversiondetail)

### 设置 Page 的 live 版本

#### <Badge>API</Badge> PUT /pages/live-versions

设置 Page 的 live 版本

请求

```json
{
  "applicationId": "appl_yqfu8BI1BRe15fs",
  "id": "cont_46Voof9I295EWd4",
  "versionNumber": 2
}
```

- 参数
  - applicationId - `string` - 必选，应用 ID
  - id - `string` - 必选，Page 内容 ID
  - versionNumber - `number` - 必选，发布的版本号

返回

详见[`ContentVersionDetail`](#contentversiondetail)

### 更新 Page 文件信息

#### <Badge>API</Badge> PUT /pages

更新 Page 所属的文件信息

请求

```json
{
  "applicationId": "appl_yqfu8BI1BRe15fs",
  "id": "file_yCOCeFqElCjIF9U",
  "name": "demo-file",
  "intro": "demo-intro",
  "tags": [{ "pathname": "demo" }]
}
```

- 参数
  - applicationId - `string` - 必选，应用 ID
  - id - `string` - 必选，文件 ID
  - name - `string` - 必选，文件名称
  - intro - `string` - 可选，文件简介
  - tags - `array` - 可选， 文件标签
    - pathname - `string` - 文件访问的路径

返回

详见[`FileDetail`](#filedetail)

### 更新 Page 内容信息

#### <Badge>API</Badge> PUT /pages/contents

更新 Page 的内容信息，包括 title，tags 字段

请求

```json
{
  "applicationId": "appl_yqfu8BI1BRe15fs",
  "id": "cont_46Voof9I295EWd4",
  "title": "demo-2-content-new",
  "tags": [{ "locale": "zh-HK", "query": { "a": "b" } }]
}
```

- 参数
  - applicationId - `string` - 必选，应用 ID
  - id - `string` - 必选，内容 ID
  - title - `string` - 可选，内容名称
  - tags - `array` - 可选，内容标签
    - locale - `string` - locale 标签
    - query - `object` - query 标签 `any`

返回

详见[`ContentDetail`](#contentdetail)

### 更新 Page 版本信息

#### <Badge>API</Badge> PUT /pages/versions

更新 Page 内容版本信息, 包括版本号和内容

请求

```json
{
  "applicationId": "appl_yqfu8BI1BRe15fs",
  "id": "cver_i1El8mbIiLIA4Dg",
  "version": "0.0.7",
  "content": {
    "id": "cont_ylpNPC33fdDgquK",
    "schemas": [
      {
        "id": "stru_ykiifcynAFKaqsY",
        "label": "@fox-design/react-html",
        "name": "@fox-design/react-html",
        "children": [
          {
            "id": "stru_rorepmOVizYJSh4",
            "label": "@fox-design/react-body",
            "name": "@fox-design/react-body",
            "parentId": "stru_ykiifcynAFKaqsY",
            "children": []
          }
        ]
      }
    ]
  }
}
```

- 参数
  - applicationId - `string` - 必选，应用 ID
  - id - `string` - 必选，版本 ID
  - content - `object` - 必选，版本详情， 详见[`..`]()
  - version - `string` - 可选， 版本号

返回

详见[`ContentVersionDetail`](#contentversiondetail)

### 删除 Page 文件

#### <Badge>API</Badge> PUT /pages/status

删除 Page 文件，同时删除该 Page 下的内容以及内容版本

请求

```json
{
  "applicationId": "appl_yqfu8BI1BRe15fs",
  "id": "file_Q27yiPoNl6Ah5cm"
}
```

- 参数
  - applicationId - `string` - 必选，应用 ID
  - id - `string` - 必选，文件 ID

返回

详见[`FileDetail`](#filedetail)

### 删除 Page 内容

#### <Badge>API</Badge> PUT /pages/content-status

删除 Page 内容，同时删除 Page 下的版本信息

请求

```json
{
  "applicationId": "appl_yqfu8BI1BRe15fs",
  "id": "cont_46Voof9I295EWd4"
}
```

- 参数
  - applicationId - `string` - 必选，应用 ID
  - id - `string` - 必选，内容 ID

返回

详见[`ContentDetail`](#contentdetail)

### 删除 Page 版本

#### <Badge>API</Badge> PUT /pages/version-status

删除 Page 版本详情

请求

```json
{
  "applicationId": "appl_yqfu8BI1BRe15fs",
  "id": "cver_PsBI5RQZ9pXtOfQ"
}
```

- 参数
  - applicationId - `string` - 必选，应用 ID
  - id - `string` - 必选，版本 ID

返回

详见[`ContentVersionDetail`](#contentversiondetail)

## 变量

---

### 获取变量列表

#### <Badge>API</Badge> GET /variables-searchs

获取变量分页列表详情, 包含变量的 relation 详情，以及 relation 的 relations 详情

请求

```
GET /variables-searchs?applicationId=appl_yqfu8BI1BRe15fs&folderId=fold_pOginfBEFU2Rrlb&search=&page=1&size=10
```

- 参数
  - applicationId - `string` - 必选， 应用 ID
  - folderId - `string` - 可选，项目 ID，默认为空则获取应用下的变量(不包含项目下的变量)
  - search - `string` - 可选，模糊匹配变量名称，默认为空
  - page - `number` - 可选，当前页数，默认为 1
  - size - `number` - 可选，每页数据数，默认为 10

返回

```json
{
  "data": [TypeContentVersionWithRelations],
  "pageInfo": {
    "total": 1,
    "page": 1,
    "size": 10
  }
}
```

- 说明

  - data - `array` - 变量详情列表, 详见[`TypeContentVersionWithRelations`](#typecontentversionwithrelations)
  - pageInfo - `object` - 分页信息，详见 [`PageInfo`](#pageinfo)

### 获取变量的 live 版本详情

#### <Badge>API</Badge> POST /variables/lives

获取指定变量的 live 版本详情

请求

```json
{
  "applicationId": "appl_yqfu8BI1BRe15fs",
  "ids": ["cont_NTznlcX9OTeaKPS"]
}
```

- 参数
  - applicationId - `string` - 必选，应用 ID
  - ids - `string` - 必选，变量内容 ID 列表

返回

```json
{
  "data": [
    {
      "id": "cont_NTznlcX9OTeaKPS",
      "schemas": [
        {
          "props": {
            "function": "{{__functions:cont_fFmffWPPDBz0MJg:testAdd}}",
            "args": [2, 4]
          },
          "type": "data.function.call",
          "name": "variableA"
        }
      ],
      "relation": {
        "{{__functions:cont_fFmffWPPDBz0MJg:testAdd}}": {
          "id": "cont_fFmffWPPDBz0MJg",
          "type": "function"
        }
      }
    }
  ]
}
```

- 说明
  - data - `array` - 变量详情列表
    - id - `string` - 内容 ID
    - schemas - `array` - 版本 schemas
      - props - `object` - 变量值
      - type - `string` - 变量类型
      - name - `string` - 变量名称
    - relation - `object` - 变量依赖数据
      - id - `string` - 依赖数据 ID
      - type - `string` - 依赖数据的类型

### 获取应用下变量列表

#### <Badge>API</Badge> GET /variables/file-searchs

获取应用下的变量数据，不包括在项目下的变量数据

请求

```
GET /variables/file-searchs?applicationId=appl_yqfu8BI1BRe15fs&search=&page=1&size=10
```

- 参数
  - applicationId - `string` - 必选， 应用 ID
  - search - `string` - 可选，模糊匹配变量文件名称，默认为空
  - page - `number` - 可选， 当前页数，默认为 1
  - size - `number` - 可选，每页数据数，默认为 10

返回

```json
{
  "data": [
    {
      "id": "file_PVBixnzTeNOQWGR",
      "applicationId": "appl_yqfu8BI1BRe15fs",
      "name": "test2",
      "folderId": "fold_pOginfBEFU2Rrlb",
      "type": "variable",
      "intro": "",
      "tags": [],
      "suffix": "",
      "deleted": false,
      "contentId": "cont_DKLkO6AUUQOAn2H",
      "folderName": "new-project",
      "content": {
        "id": "cont_DKLkO6AUUQOAn2H",
        "schemas": [
          {
            "props": {
              "value": {
                "name": "{{variableC}}"
              },
              "type": "json"
            },
            "type": "data.static",
            "name": "test2"
          }
        ],
        "relation": {
          "variableC": {
            "type": "variable",
            "id": "cont_mnKIhB4cJaO7fJG"
          }
        }
      },
      "creator": {
        "id": "user-dvbfW1qsl8qkz39",
        "account": "fox-user"
      },
      "createTime": "2021-09-27T08:32:57.619Z",
      "updateTime": "2021-09-27T08:35:24.011Z"
    }
  ],
  "pageInfo": {
    "total": 1,
    "page": 1,
    "size": 10
  }
}
```

- 说明

  - data - `array` - 变量详情列表
    - id - `string` - 文件 ID
    - name - `string` - 内容名称
    - folderName - `string` - 文件名称
    - folderId - `string` - 文件所属文件夹 ID
    - applicationId - `string` - 应用 ID
    - contentId - `string` - 内容 ID
    - type - `string` - 文件类型
    - intro - `string` - 文件简介
    - tags - `array` - 文件标签
    - suffix - `string` - 文件后缀
    - content - `object` - 版本详情，详见`...`
    - creator - `object` - 文件创建者
      - id - `string` - 用户 ID
      - account - `string` - 用户名称
    - deleted - `boolean` - 文件删除状态， true: 已删除，false:真成功
    - createTime - `date` - 文件创建时间
    - updateTime - `date` - 文件更新时间
  - pageInfo - `object` - 分页信息，详见 [`PageInfo`](#pageinfo)

### 获取变量的编辑版本详情

#### <Badge>API</Badge> GET /variables/build-versions

获取指定变量的可编辑的版本详情

请求

```
GET /variables/build-versions?applicationId=appl_yqfu8BI1BRe15fs&id=cont_ps7HuOWAEkna1Uh
```

- 参数
  - applicationId - `string` - 必选，应用 ID
  - id - `string` - 必选，变量内容 ID

返回
详情见 [`TypeContentVersionWithRelations`](#typecontentversionwithrelations)

### 获取应用下变量 live 版本，项目下变量最新版本

#### <Badge>API</Badge> POST /variables/scope-infos

获取应用下的变量 live 版本详情，项目下的最新版本详情(不一定是 live 版本) names 和 search 字段只传其中一个，如果同时传，默认取 search 字段

请求

```json
{
  "applicationId": "appl_yqfu8BI1BRe15fs",
  "id": "fold_pOginfBEFU2Rrlb",
  "names": ["variableA"],
  "search": "",
  "page": 1,
  "size": 10
}
```

- 参数

  - applicationId - `string` - 必选，应用 ID
  - id - `string` - `string` - 必选，指定的项目 ID
  - names - `string[]` - 可选，完全匹配变量名称，和 search 最多只能传其中 1 个
  - search - `string` - 可选，模糊匹配变量名称，和 names 最多只能传其中 1 个
  - page - `number` - 可选，当前页数，默认为 1
  - size - `number` - 可选，每页数据数，默认为 10

返回

```json
{
  "data": [TypeContentVersionWithRelations],
  "pageInfo": {
    "page": 1,
    "size": 10,
    "total": 1
  }
}
```

- 说明

  - data - `array` - 变量版本详情，详情见[`TypeContentVersionWithRelations`](#typecontentversionwithrelations)
  - pageInfo - `object` - 分页信息，详见 [`PageInfo`](#pageinfo)

### 创建变量详情

#### <Badge>API</Badge> POST /variables

创建变量详情信息, 包括文件，内容，和版本信息

请求

```json
{
  "applicationId": "appl_yqfu8BI1BRe15fs",
  "name": "variable-test-2-3",
  "folderId": "fold_gCPg5oK9ETlGdC3",
  "intro": "",
  "content": {}
}
```

- 参数
  - applicationId - `string` - 必选，应用 ID
  - name - `string` - 必选，变量名称
  - folderId - `string` - 可选，项目 ID 或者文件夹 ID，默认为空，则在应用下创建变量
  - intro - `string` - 可选，变量简介，默认为空
  - content - `object` - 可选，变量版本内容，默认为空对象

返回

详见[`TypeNewFile`](#typenewfile)

### 更新变量详情

#### <Badge>API</Badge> PUT /variables

更新变量详情， 只能更新变量名称和简介, 类型，并更新 content 名称和 version 内容

请求

```json
{
  "applicationId": "appl_yqfu8BI1BRe15fs",
  "id": "file_6EYucITtYOevN5E",
  "name": "variable-test-2-rename",
  "content": {
    "id": "cont_sO5PWa2EkN3FYw6",
    "schemas": [],
    "relation": {}
  },
  "intro": "test intro"
}
```

- 参数
  - applicationId - `string` - 必选，应用 ID
  - id - `string` - 必选，变量文件 ID
  - name - `string` - 必选，变量文件名称
  - content - `object` - 必选，变量版本详情，详见`...`
  - intro - `string` - 可选，变量文件简介，不传则不更新该字段

返回

详情见[`TypeFile`](#typefile)

### 更新变量文件详情

#### <Badge>API</Badge> PUT /variables/files

更新变量文件的详情信息

请求

```json
{
  "id": "file_6EYucITtYOevN5E",
  "applicationId": "appl_yqfu8BI1BRe15fs",
  "name": "variable-test-2-rename",
  "intro": "",
  "tags": [
    {
      "pathname": "test"
    }
  ]
}
```

- 参数
  - id - `string` - 必选，变量文件 ID
  - applicationId - `string` - 必选，应用 ID
  - name - `string` - 必选，变量文件名称
  - intro - `string` - 可选，变量文件简介，默认为空，不传则不更新该字段
  - tags - `string` - 可选，变量文件标签，默认为空，不传则不更新该字段

返回

详情见[`TypeFile`](#typefile)

### 更新变量内容详情

#### <Badge>API</Badge> PUT /variables/contents

更新变量内容详情信息

请求

```json
{
  "applicationId": "appl_yqfu8BI1BRe15fs",
  "id": "cont_sO5PWa2EkN3FYw6",
  "title": "variable-test-content-name",
  "tags": []
}
```

- 参数
  - applicationId - `string` - 必选，应用 ID
  - id - `string` - 必选，变量内容 ID
  - title - `string` - 可选，变量内容名称，不传则不更新该字段
  - tags - `array` - 可选，变量内容标签，不传则不更新该字段

返回

详情见[`TypeContent`](#typecontent)

### 更新变量内容版本详情

#### <Badge>API</Badge> PUT /variables/versions

通过变量内容 ID 更新变量内容版本详情信息

请求

```json
{
  "id": "cont_sO5PWa2EkN3FYw6",
  "applicationId": "appl_yqfu8BI1BRe15fs",
  "content": {
    "id": "cont_sO5PWa2EkN3FYw6",
    "schemas": [],
    "relation": {}
  },
  "version": "0.0.2"
}
```

- 参数
  - id - `string` - 必选，变量内容 ID
  - applicationID - `string` - 必选，应用 ID
  - content - `object` - 必选，变量内容版本详情, 详见`...`
  - version - `string` - 可选，变量版本号，不传则不更新该字段

返回

详情见[`TypeVersion`](#typeversion)

### 删除变量文件

#### <Badge>API</Badge> PUT /variables/status

删除变量文件详情、变量内容以及变量版本信息

请求

```json
{
  "applicationId": "appl_yqfu8BI1BRe15fs",
  "id": "file_6EYucITtYOevN5E"
}
```

- 参数
  - applicationId - `string` - 必选，应用 ID
  - id - `string` - 必选，变量文件 ID

返回

详情见[`TypeFile`](#typefile)

### 删除变量内容

#### <Badge>API</Badge> PUT /variables/content-status

删除变量内容详情,同时会删除内容下版本信息

请求

```json
{
  "applicationId": "appl_yqfu8BI1BRe15fs",
  "id": "cont_sO5PWa2EkN3FYw6"
}
```

- 参数
  - applicationId - `string` - 必选，应用 ID
  - id - `string` - 必选，变量内容 ID

返回

详情见[`TypeContent`](#typecontent)

### 删除变量版本

#### <Badge>API</Badge> PUT /variables/version-status

删除变量版本信息

请求

```json
{
  "applicationId": "appl_yqfu8BI1BRe15fs",
  "id": "cver_RSgVk5PuL4ABoN3"
}
```

- 参数
  - applicationId - `string` - 必选，应用 ID
  - id - `string` - 必选，变量版本 ID

返回

详情见[`TypeVersion`](#typeversion)

### 发布变量版本

#### <Badge>API</Badge> PUT /variables/version-publish

设置变量内容版本的发布状态， 只能由 base 状态改为其他状态，比如，beta, release 等

请求

```json
{
  "applicationId": "appl_yqfu8BI1BRe15fs",
  "id": "cver_RSgVk5PuL4ABoN3",
  "status": "release"
}
```

- 参数
  - applicationId - `string` - 必选，应用 ID
  - id - `string` - 必选，变量版本 ID
  - status - `string` - 必选，变量版本状态

返回

详情见[`TypeVersion`](#typeversion)

### 设置变量的 live 版本

#### <Badge>API</Badge> PUT /variables/live-versions

设置变量内容的 live 版本

请求

```json
{
  "applicationId": "appl_yqfu8BI1BRe15fs",
  "id": "cont_sO5PWa2EkN3FYw6",
  "versionNumber": 2
}
```

- 参数
  - applicationId - `string` - 必选，应用 ID
  - id - `string` - 必选，变量内容 ID
  - versionNumber - 必选，变量内容的 live 版本号

返回

详情见[`TypeContent`](#typecontent)

## 条件

---

### 获取条件列表

#### <Badge>API</Badge> GET /condition-searchs

请求

```
GET /condition-searchs?applicationId=appl_yqfu8BI1BRe15fs&folderId=fold_pOginfBEFU2Rrlb&search=&page=1&size=10
```

获取条件分页列表详情, 包含条件的 relation 详情，以及 relation 的 relations 详情

- 参数
  - applicationId - `string` - 必选， 应用 ID
  - folderId - `string` - 可选，项目 ID，默认为空则获取应用下的条件(不包含项目下的条件)
  - search - `string` - 可选，模糊匹配条件名称，默认为空
  - page - `number` - 可选，当前页数，默认为 1
  - size - `number` - 可选，每页数据数，默认为 10

返回

```json
{
  "data": [TypeContentVersionWithRelations],
  "pageInfo": {
    "total": 1,
    "page": 1,
    "size": 10
  }
}
```

- 说明

  - data - `array` - 条件详情列表, 详见[`TypeContentVersionWithRelations`](#typecontentversionwithrelations)
  - pageInfo - `object` - 分页信息，详见 [`PageInfo`](#pageinfo)

### 获取条件的 live 版本详情

#### <Badge>API</Badge> POST /conditions/lives

获取指定条件的 live 版本详情

请求

```json
{
  "applicationId": "appl_yqfu8BI1BRe15fs",
  "ids": ["cont_NTznlcX9OTeaKPS"]
}
```

- 参数
  - applicationId - `string` - 必选，应用 ID
  - ids - `string` - 必选，条件内容 ID 列表

返回

```json
{
  "data": [
    {
      "id": "cont_NTznlcX9OTeaKPS",
      "schemas": [
        {
          "props": {
            "function": "{{__functions:cont_fFmffWPPDBz0MJg:testAdd}}",
            "args": [2, 4]
          },
          "type": "data.function.call",
          "name": "conditionA"
        }
      ],
      "relation": {
        "{{__functions:cont_fFmffWPPDBz0MJg:testAdd}}": {
          "id": "cont_fFmffWPPDBz0MJg",
          "type": "function"
        }
      }
    }
  ]
}
```

- 说明
  - data - `array` - 条件详情列表
    - id - `string` - 内容 ID
    - schemas - `array` - 版本 schemas
      - props - `object` - 条件值
      - type - `string` - 条件类型
      - name - `string` - 条件名称
    - relation - `object` - 条件依赖数据
      - id - `string` - 依赖数据 ID
      - type - `string` - 依赖数据的类型

### 获取应用下条件列表

#### <Badge>API</Badge> GET /conditions/file-searchs

获取应用下的条件数据，不包括在项目下的条件数据

请求

```
GET /conditions/file-searchs?applicationId=appl_yqfu8BI1BRe15fs&search=&page=1&size=10
```

- 参数
  - applicationId - `string` - 必选， 应用 ID
  - search - `string` - 可选，模糊匹配条件文件名称，默认为空
  - page - `number` - 可选， 当前页数，默认为 1
  - size - `number` - 可选，每页数据数，默认为 10

返回

```json
{
  "data": [
    {
      "id": "file_PVBixnzTeNOQWGR",
      "applicationId": "appl_yqfu8BI1BRe15fs",
      "name": "test2",
      "folderId": "fold_pOginfBEFU2Rrlb",
      "type": "condition",
      "intro": "",
      "tags": [],
      "suffix": "",
      "deleted": false,
      "contentId": "cont_DKLkO6AUUQOAn2H",
      "folderName": "new-project",
      "content": {
        "id": "cont_DKLkO6AUUQOAn2H",
        "schemas": [
          {
            "props": {
              "value": {
                "name": "{{variableC}}"
              },
              "type": "json"
            },
            "type": "data.static",
            "name": "test2"
          }
        ],
        "relation": {
          "variableC": {
            "type": "variable",
            "id": "cont_mnKIhB4cJaO7fJG"
          }
        }
      },
      "creator": {
        "id": "user-dvbfW1qsl8qkz39",
        "account": "fox-user"
      },
      "createTime": "2021-09-27T08:32:57.619Z",
      "updateTime": "2021-09-27T08:35:24.011Z"
    }
  ],
  "pageInfo": {
    "total": 1,
    "page": 1,
    "size": 10
  }
}
```

- 说明

  - data - `array` - 条件详情列表
    - id - `string` - 文件 ID
    - name - `string` - 内容名称
    - folderName - `string` - 文件名称
    - folderId - `string` - 文件所属文件夹 ID
    - applicationId - `string` - 应用 ID
    - contentId - `string` - 内容 ID
    - type - `string` - 文件类型
    - intro - `string` - 文件简介
    - tags - `array` - 文件标签
    - suffix - `string` - 文件后缀
    - content - `object` - 版本详情，详见`...`
    - creator - `object` - 文件创建者
      - id - `string` - 用户 ID
      - account - `string` - 用户名称
    - deleted - `boolean` - 文件删除状态， true: 已删除，false:真成功
    - createTime - `date` - 文件创建时间
    - updateTime - `date` - 文件更新时间
  - pageInfo - `object` - 分页信息，详见 [`PageInfo`](#pageinfo)

### 获取条件的编辑版本详情

#### <Badge>API</Badge> GET /conditions/build-versions

获取指定条件的可编辑的版本详情

请求

```
GET /conditions/build-versions?applicationId=appl_yqfu8BI1BRe15fs&id=cont_ps7HuOWAEkna1Uh
```

- 参数
  - applicationId - `string` - 必选，应用 ID
  - id - `string` - 必选，条件内容 ID

返回

详情见 [`TypeContentVersionWithRelations`](#typecontentversionwithrelations)

### 获取应用下条件 live 版本，项目下条件最新版本

#### <Badge>API</Badge> POST /conditions/scope-infos

获取应用下的条件 live 版本详情，项目下的最新版本详情(不一定是 live 版本) names 和 search 字段只传其中一个，如果同时传，默认取 search 字段

请求

```json
{
  "applicationId": "appl_yqfu8BI1BRe15fs",
  "id": "fold_pOginfBEFU2Rrlb",
  "names": ["conditionA"],
  "search": "",
  "page": 1,
  "size": 10
}
```

- 参数

  - applicationId - `string` - 必选，应用 ID
  - id - `string` - `string` - 必选，指定的项目 ID
  - names - `string[]` - 可选，完全匹配条件名称，和 search 最多只能传其中 1 个
  - search - `string` - 可选，模糊匹配条件名称，和 names 最多只能传其中 1 个
  - page - `number` - 可选，当前页数，默认为 1
  - size - `number` - 可选，每页数据数，默认为 10

返回

```json
{
  "data": [TypeContentVersionWithRelations],
  "pageInfo": {
    "page": 1,
    "size": 10,
    "total": 1
  }
}
```

- 说明

  - data - `array` - 条件版本详情，详情见[`TypeContentVersionWithRelations`](#typecontentversionwithrelations)
  - pageInfo - `object` - 分页信息，详见 [`PageInfo`](#pageinfo)

### 创建条件详情

#### <Badge>API</Badge> POST /conditions

创建条件详情信息, 包括文件，内容，和版本信息

请求

```json
{
  "applicationId": "appl_yqfu8BI1BRe15fs",
  "name": "condition-test-2-3",
  "folderId": "fold_gCPg5oK9ETlGdC3",
  "intro": "",
  "content": {}
}
```

- 参数
  - applicationId - `string` - 必选，应用 ID
  - name - `string` - 必选，条件名称
  - folderId - `string` - 可选，项目 ID 或者文件夹 ID，默认为空，则在应用下创建条件
  - intro - `string` - 可选，条件简介，默认为空
  - content - `object` - 可选，条件版本内容，默认为空对象

返回

详见[`TypeNewFile`](#typenewfile)

### 更新条件详情

#### <Badge>API</Badge> PUT /conditions

更新条件详情， 只能更新条件名称和简介, 类型，并更新 content 名称和 version 内容

请求

```json
{
  "applicationId": "appl_yqfu8BI1BRe15fs",
  "id": "file_6EYucITtYOevN5E",
  "name": "condition-test-2-rename",
  "content": {
    "id": "cont_sO5PWa2EkN3FYw6",
    "schemas": [],
    "relation": {}
  },
  "intro": "test intro"
}
```

- 参数
  - applicationId - `string` - 必选，应用 ID
  - id - `string` - 必选，条件文件 ID
  - name - `string` - 必选，条件文件名称
  - content - `object` - 必选，条件版本详情，详见`...`
  - intro - `string` - 可选，条件文件简介，不传则不更新该字段

返回

详情见[`TypeFile`](#typefile)

### 更新条件文件详情

#### <Badge>API</Badge> PUT /conditions/files

更新条件文件的详情信息

请求

```json
{
  "id": "file_6EYucITtYOevN5E",
  "applicationId": "appl_yqfu8BI1BRe15fs",
  "name": "condition-test-2-rename",
  "intro": "",
  "tags": [
    {
      "pathname": "test"
    }
  ]
}
```

- 参数
  - id - `string` - 必选，条件文件 ID
  - applicationId - `string` - 必选，应用 ID
  - name - `string` - 必选，条件文件名称
  - intro - `string` - 可选，条件文件简介，默认为空，不传则不更新该字段
  - tags - `string` - 可选，条件文件标签，默认为空，不传则不更新该字段

返回

详情见[`TypeFile`](#typefile)

### 更新条件内容详情

#### <Badge>API</Badge> PUT /conditions/contents

更新条件内容详情信息

请求

```json
{
  "applicationId": "appl_yqfu8BI1BRe15fs",
  "id": "cont_sO5PWa2EkN3FYw6",
  "title": "condition-test-content-name",
  "tags": []
}
```

- 参数
  - applicationId - `string` - 必选，应用 ID
  - id - `string` - 必选，条件内容 ID
  - title - `string` - 可选，条件内容名称，不传则不更新该字段
  - tags - `array` - 可选，条件内容标签，不传则不更新该字段

返回

详情见[`TypeContent`](#typecontent)

### 更新条件内容版本详情

#### <Badge>API</Badge> PUT /conditions/versions

通过条件内容 ID 更新条件内容版本详情信息

请求

```json
{
  "id": "cont_sO5PWa2EkN3FYw6",
  "applicationId": "appl_yqfu8BI1BRe15fs",
  "content": {
    "id": "cont_sO5PWa2EkN3FYw6",
    "schemas": [],
    "relation": {}
  },
  "version": "0.0.2"
}
```

- 参数
  - id - `string` - 必选，条件内容 ID
  - applicationID - `string` - 必选，应用 ID
  - content - `object` - 必选，条件内容版本详情, 详见`...`
  - version - `string` - 可选，条件版本号，不传则不更新该字段

返回

详情见[`TypeVersion`](#typeversion)

### 删除条件文件

#### <Badge>API</Badge> PUT /conditions/status

删除条件文件详情、条件内容以及条件版本信息

请求

```json
{
  "applicationId": "appl_yqfu8BI1BRe15fs",
  "id": "file_6EYucITtYOevN5E"
}
```

- 参数
  - applicationId - `string` - 必选，应用 ID
  - id - `string` - 必选，条件文件 ID

返回

详情见[`TypeFile`](#typefile)

### 删除条件内容

#### <Badge>API</Badge> PUT /conditions/content-status

删除条件内容详情,同时会删除内容下版本信息

请求

```json
{
  "applicationId": "appl_yqfu8BI1BRe15fs",
  "id": "cont_sO5PWa2EkN3FYw6"
}
```

- 参数
  - applicationId - `string` - 必选，应用 ID
  - id - `string` - 必选，条件内容 ID

返回

详情见[`TypeContent`](#typecontent)

### 删除条件版本

#### <Badge>API</Badge> PUT /conditions/version-status

删除条件版本信息

请求

```json
{
  "applicationId": "appl_yqfu8BI1BRe15fs",
  "id": "cver_RSgVk5PuL4ABoN3"
}
```

- 参数
  - applicationId - `string` - 必选，应用 ID
  - id - `string` - 必选，条件版本 ID

返回

详情见[`TypeVersion`](#typeversion)

### 发布条件版本

#### <Badge>API</Badge> PUT /conditions/version-publish

设置条件内容版本的发布状态， 只能由 base 状态改为其他状态，比如，beta, release 等

请求

```json
{
  "applicationId": "appl_yqfu8BI1BRe15fs",
  "id": "cver_RSgVk5PuL4ABoN3",
  "status": "release"
}
```

- 参数
  - applicationId - `string` - 必选，应用 ID
  - id - `string` - 必选，条件版本 ID
  - status - `string` - 必选，条件版本状态

返回

详情见[`TypeVersion`](#typeversion)

### 设置条件的 live 版本

#### <Badge>API</Badge> PUT /conditions/live-versions

设置条件内容的 live 版本

请求

```json
{
  "applicationId": "appl_yqfu8BI1BRe15fs",
  "id": "cont_sO5PWa2EkN3FYw6",
  "versionNumber": 2
}
```

- 参数
  - applicationId - `string` - 必选，应用 ID
  - id - `string` - 必选，条件内容 ID
  - versionNumber - 必选，条件内容的 live 版本号

返回

详情见[`TypeContent`](#typecontent)

## 函数

---

### 获取函数列表

#### <Badge>API</Badge> GET /function-searchs

获取函数分页列表详情, 包含函数的 relation 详情，以及 relation 的 relations 详情

请求

```
GET /function-searchs?applicationId=appl_yqfu8BI1BRe15fs&folderId=fold_pOginfBEFU2Rrlb&search=&page=1&size=10
```

- 参数
  - applicationId - `string` - 必选， 应用 ID
  - folderId - `string` - 可选，项目 ID，默认为空则获取应用下的函数(不包含项目下的函数)
  - search - `string` - 可选，模糊匹配函数名称，默认为空
  - page - `number` - 可选，当前页数，默认为 1
  - size - `number` - 可选，每页数据数，默认为 10

返回

```json
{
  "data": [TypeContentVersionWithRelations],
  "pageInfo": {
    "total": 1,
    "page": 1,
    "size": 10
  }
}
```

- 说明

  - data - `array` - 函数详情列表, 详见[`TypeContentVersionWithRelations`](#typecontentversionwithrelations)
  - pageInfo - `object` - 分页信息，详见 [`PageInfo`](#pageinfo)

### 获取函数的 live 版本详情

#### <Badge>API</Badge> POST /functions/lives

获取指定函数的 live 版本详情

请求

```json
{
  "applicationId": "appl_yqfu8BI1BRe15fs",
  "ids": ["cont_NTznlcX9OTeaKPS"]
}
```

- 参数
  - applicationId - `string` - 必选，应用 ID
  - ids - `string` - 必选，函数内容 ID 列表

返回

```json
{
  "data": [
    {
      "id": "cont_NTznlcX9OTeaKPS",
      "schemas": [
        {
          "props": {
            "function": "{{__functions:cont_fFmffWPPDBz0MJg:testAdd}}",
            "args": [2, 4]
          },
          "type": "data.function.call",
          "name": "functionA"
        }
      ],
      "relation": {
        "{{__functions:cont_fFmffWPPDBz0MJg:testAdd}}": {
          "id": "cont_fFmffWPPDBz0MJg",
          "type": "function"
        }
      }
    }
  ]
}
```

- 说明
  - data - `array` - 函数详情列表
    - id - `string` - 内容 ID
    - schemas - `array` - 版本 schemas
      - props - `object` - 函数值
      - type - `string` - 函数类型
      - name - `string` - 函数名称
    - relation - `object` - 函数依赖数据
      - id - `string` - 依赖数据 ID
      - type - `string` - 依赖数据的类型

### 获取应用下函数列表

#### <Badge>API</Badge> GET /functions/file-searchs

获取应用下的函数数据，不包括在项目下的函数数据

请求

```
GET /functions/file-searchs?applicationId=appl_yqfu8BI1BRe15fs&search=&page=1&size=10
```

- 参数
  - applicationId - `string` - 必选， 应用 ID
  - search - `string` - 可选，模糊匹配函数文件名称，默认为空
  - page - `number` - 可选， 当前页数，默认为 1
  - size - `number` - 可选，每页数据数，默认为 10

返回

```json
{
  "data": [
    {
      "id": "file_PVBixnzTeNOQWGR",
      "applicationId": "appl_yqfu8BI1BRe15fs",
      "name": "test2",
      "folderId": "fold_pOginfBEFU2Rrlb",
      "type": "function",
      "intro": "",
      "tags": [],
      "suffix": "",
      "deleted": false,
      "contentId": "cont_DKLkO6AUUQOAn2H",
      "folderName": "new-project",
      "content": {
        "id": "cont_DKLkO6AUUQOAn2H",
        "schemas": [
          {
            "props": {
              "value": {
                "name": "{{variableC}}"
              },
              "type": "json"
            },
            "type": "data.static",
            "name": "test2"
          }
        ],
        "relation": {
          "variableC": {
            "type": "variable",
            "id": "cont_mnKIhB4cJaO7fJG"
          }
        }
      },
      "creator": {
        "id": "user-dvbfW1qsl8qkz39",
        "account": "fox-user"
      },
      "createTime": "2021-09-27T08:32:57.619Z",
      "updateTime": "2021-09-27T08:35:24.011Z"
    }
  ],
  "pageInfo": {
    "total": 1,
    "page": 1,
    "size": 10
  }
}
```

- 说明

  - data - `array` - 函数详情列表
    - id - `string` - 文件 ID
    - name - `string` - 内容名称
    - folderName - `string` - 文件名称
    - folderId - `string` - 文件所属文件夹 ID
    - applicationId - `string` - 应用 ID
    - contentId - `string` - 内容 ID
    - type - `string` - 文件类型
    - intro - `string` - 文件简介
    - tags - `array` - 文件标签
    - suffix - `string` - 文件后缀
    - content - `object` - 版本详情，详见`...`
    - creator - `object` - 文件创建者
      - id - `string` - 用户 ID
      - account - `string` - 用户名称
    - deleted - `boolean` - 文件删除状态， true: 已删除，false:真成功
    - createTime - `date` - 文件创建时间
    - updateTime - `date` - 文件更新时间
  - pageInfo - `object` - 分页信息，详见 [`PageInfo`](#pageinfo)

### 获取函数的编辑版本详情

#### <Badge>API</Badge> GET /functions/build-versions

获取指定函数的可编辑的版本详情

请求

```
GET /functions/build-versions?applicationId=appl_yqfu8BI1BRe15fs&id=cont_ps7HuOWAEkna1Uh
```

- 参数
  - applicationId - `string` - 必选，应用 ID
  - id - `string` - 必选，函数内容 ID

返回

详情见 [`TypeContentVersionWithRelations`](#typecontentversionwithrelations)

### 获取应用下函数 live 版本，项目下函数最新版本

#### <Badge>API</Badge> POST /functions/scope-infos

获取应用下的函数 live 版本详情，项目下的最新版本详情(不一定是 live 版本) names 和 search 字段只传其中一个，如果同时传，默认取 search 字段

请求

```json
{
  "applicationId": "appl_yqfu8BI1BRe15fs",
  "id": "fold_pOginfBEFU2Rrlb",
  "names": ["functionA"],
  "search": "",
  "page": 1,
  "size": 10
}
```

- 参数

  - applicationId - `string` - 必选，应用 ID
  - id - `string` - `string` - 必选，指定的项目 ID
  - names - `string[]` - 可选，完全匹配函数名称，和 search 最多只能传其中 1 个
  - search - `string` - 可选，模糊匹配函数名称，和 names 最多只能传其中 1 个
  - page - `number` - 可选，当前页数，默认为 1
  - size - `number` - 可选，每页数据数，默认为 10

返回

```json
{
  "data": [TypeContentVersionWithRelations],
  "pageInfo": {
    "page": 1,
    "size": 10,
    "total": 1
  }
}
```

- 说明

  - data - `array` - 函数版本详情，详情见[`TypeContentVersionWithRelations`](#typecontentversionwithrelations)
  - pageInfo - `object` - 分页信息，详见 [`PageInfo`](#pageinfo)

### 创建函数详情

#### <Badge>API</Badge> POST /functions

创建函数详情信息, 包括文件，内容，和版本信息

请求

```json
{
  "applicationId": "appl_yqfu8BI1BRe15fs",
  "name": "function-test-2-3",
  "folderId": "fold_gCPg5oK9ETlGdC3",
  "intro": "",
  "content": {}
}
```

- 参数
  - applicationId - `string` - 必选，应用 ID
  - name - `string` - 必选，函数名称
  - folderId - `string` - 可选，项目 ID 或者文件夹 ID，默认为空，则在应用下创建函数
  - intro - `string` - 可选，函数简介，默认为空
  - content - `object` - 可选，函数版本内容，默认为空对象

返回

详见[`TypeNewFile`](#typenewfile)

### 更新函数详情

#### <Badge>API</Badge> PUT /functions

更新函数详情， 只能更新函数名称和简介, 类型，并更新 content 名称和 version 内容

请求

```json
{
  "applicationId": "appl_yqfu8BI1BRe15fs",
  "id": "file_6EYucITtYOevN5E",
  "name": "function-test-2-rename",
  "content": {
    "id": "cont_sO5PWa2EkN3FYw6",
    "schemas": [],
    "relation": {}
  },
  "intro": "test intro"
}
```

- 参数
  - applicationId - `string` - 必选，应用 ID
  - id - `string` - 必选，函数文件 ID
  - name - `string` - 必选，函数文件名称
  - content - `object` - 必选，函数版本详情，详见`...`
  - intro - `string` - 可选，函数文件简介，不传则不更新该字段

返回

详情见[`TypeFile`](#typefile)

### 更新函数文件详情

#### <Badge>API</Badge> PUT /functions/files

更新函数文件的详情信息

请求

```json
{
  "id": "file_6EYucITtYOevN5E",
  "applicationId": "appl_yqfu8BI1BRe15fs",
  "name": "function-test-2-rename",
  "intro": "",
  "tags": [
    {
      "pathname": "test"
    }
  ]
}
```

- 参数
  - id - `string` - 必选，函数文件 ID
  - applicationId - `string` - 必选，应用 ID
  - name - `string` - 必选，函数文件名称
  - intro - `string` - 可选，函数文件简介，默认为空，不传则不更新该字段
  - tags - `string` - 可选，函数文件标签，默认为空，不传则不更新该字段

返回

详情见[`TypeFile`](#typefile)

### 更新函数内容详情

#### <Badge>API</Badge> PUT /functions/contents

更新函数内容详情信息

请求

```json
{
  "applicationId": "appl_yqfu8BI1BRe15fs",
  "id": "cont_sO5PWa2EkN3FYw6",
  "title": "function-test-content-name",
  "tags": []
}
```

- 参数
  - applicationId - `string` - 必选，应用 ID
  - id - `string` - 必选，函数内容 ID
  - title - `string` - 可选，函数内容名称，不传则不更新该字段
  - tags - `array` - 可选，函数内容标签，不传则不更新该字段

返回

详情见[`TypeContent`](#typecontent)

### 更新函数内容版本详情

#### <Badge>API</Badge> PUT /functions/versions

通过函数内容 ID 更新函数内容版本详情信息

请求

```json
{
  "id": "cont_sO5PWa2EkN3FYw6",
  "applicationId": "appl_yqfu8BI1BRe15fs",
  "content": {
    "id": "cont_sO5PWa2EkN3FYw6",
    "schemas": [],
    "relation": {}
  },
  "version": "0.0.2"
}
```

- 参数
  - id - `string` - 必选，函数内容 ID
  - applicationID - `string` - 必选，应用 ID
  - content - `object` - 必选，函数内容版本详情, 详见`...`
  - version - `string` - 可选，函数版本号，不传则不更新该字段

返回

详情见[`TypeVersion`](#typeversion)

### 删除函数文件

#### <Badge>API</Badge> PUT /functions/status

删除函数文件详情、函数内容以及函数版本信息

请求

```json
{
  "applicationId": "appl_yqfu8BI1BRe15fs",
  "id": "file_6EYucITtYOevN5E"
}
```

- 参数
  - applicationId - `string` - 必选，应用 ID
  - id - `string` - 必选，函数文件 ID

返回

详情见[`TypeFile`](#typefile)

### 删除函数内容

#### <Badge>API</Badge> PUT /functions/content-status

删除函数内容详情,同时会删除内容下版本信息

请求

```json
{
  "applicationId": "appl_yqfu8BI1BRe15fs",
  "id": "cont_sO5PWa2EkN3FYw6"
}
```

- 参数
  - applicationId - `string` - 必选，应用 ID
  - id - `string` - 必选，函数内容 ID

返回

详情见[`TypeContent`](#typecontent)

### 删除函数版本

#### <Badge>API</Badge> PUT /functions/version-status

删除函数版本信息

请求

```json
{
  "applicationId": "appl_yqfu8BI1BRe15fs",
  "id": "cver_RSgVk5PuL4ABoN3"
}
```

- 参数
  - applicationId - `string` - 必选，应用 ID
  - id - `string` - 必选，函数版本 ID

返回

详情见[`TypeVersion`](#typeversion)

### 发布函数版本

#### <Badge>API</Badge> PUT /functions/version-publish

设置函数内容版本的发布状态， 只能由 base 状态改为其他状态，比如，beta, release 等

请求

```json
{
  "applicationId": "appl_yqfu8BI1BRe15fs",
  "id": "cver_RSgVk5PuL4ABoN3",
  "status": "release"
}
```

- 参数
  - applicationId - `string` - 必选，应用 ID
  - id - `string` - 必选，函数版本 ID
  - status - `string` - 必选，函数版本状态

返回

详情见[`TypeVersion`](#typeversion)

### 设置函数的 live 版本

#### <Badge>API</Badge> PUT /functions/live-versions

设置函数内容的 live 版本

请求

```json
{
  "applicationId": "appl_yqfu8BI1BRe15fs",
  "id": "cont_sO5PWa2EkN3FYw6",
  "versionNumber": 2
}
```

- 参数
  - applicationId - `string` - 必选，应用 ID
  - id - `string` - 必选，函数内容 ID
  - versionNumber - 必选，函数内容的 live 版本号

返回

详情见[`TypeContent`](#typecontent)
