---
title: 应用、项目、资源接口
order: 2
group:
  title: API
  order: 50
---

## 应用

---

### 获取应用列表

#### <Badge>API</Badge> GET /application-searchs

获取分页的应用列表数据

请求

```
GET /application-searchs?organizationId=orga_j9l4qJI9hAXWTer&search=&page=1&size=10
```

- 参数
  - organizationId - `string` - 必选, 组织 ID
  - search - `string` - 可选, 过滤信息，模糊匹配应用名称，默认为空
  - page - `number` - 可选，分页数据，当前页数，默认为 1
  - size - `number` - 可选, 分页数据，每页数据数, 默认为 10

返回

- 说明
  - data - `array` - 应用详情列表, 详见[`AppDetail`](#appdetail)
  - pageInfo - `object` - 分页信息，详见[`PageInfo`](#pageinfo)

### 获取应用详情

#### <Badge>API</Badge> GET /applications

获取应用的详情信息，包括 locales，资源，slug 等

请求

```
GET /applications?applicationId=appl_2RjQIXBuNd3STg5
```

- 参数
  - applicationId - `string` - 必选，应用 ID

返回:

- 应用详情信息, 详情见 [`AppDetailWithFolder`](#appdetailwithfolder)

### 获取指定应用的资源详情

#### <Badge>API</Badge> GET /applications/resources

请求

```
GET /applications/resources?applicationId=appl_2RjQIXBuNd3STg5&type=UNPKG
```

- 参数
  - applicationId - `string` - 必选，应用 ID
  - type - `string` - 可选，资源的类型，默认为空

返回

```json
{
  "data": [
    {
      "name": "UNPKG",
      "type": "UNPKG",
      "detail": {
        "host": "https://www.unpkg.com/",
        "downloadHost": "https://www.unpkg.com/"
      }
    }
  ]
}
```

- 说明
  - data - `array` - 应用资源列表
    - name - `string` - 资源名称
    - type - `string` - 资源类型
    - detail - `object`
      - host - `string` - 资源访问地址的 host
      - downloadHost - `string` - 资源下载地址的 host

### 获取应用可选的 locale 列表

#### <Badge>API</Badge> GET /applications/locales

请求

```
GET /applications/locales?applicationId=appl_2RjQIXBuNd3STg5
```

- 参数
  - applicationId - `string` - 必选, 应用 ID

返回

```json
{
  "data": ["en-US", "zh-HK", "..."]
}
```

- 说明
  - data - `string[]` - 可选的所有的 locale 列表

### 获取指定应用详情

#### <Badge>API</Badge> POST /applications/list

获取指定多个应用的详细信息

请求

```json
{
  "applicationIds": ["appl_2RjQIXBuNd3STg5"]
}
```

- 参数
  - applicationIds - `string[]` - 必选, 指定的应用 ID 列表

返回

- data - `array` - 应用详情列表, 详见[`AppDetail`](#appdetail)

### 创建应用详情

#### <Badge>API</Badge> POST /applications

创建一个新的应用

请求

```json
{
  "name": "new-application",
  "organizationId": "orga_j9l4qJI9hAXWTer",
  "intro": "test-app",
  "host": ["www.demo.com"],
  "slug": "path",
  "locales": ["en-HK"],
  "resources": [
    {
      "name": "UNPKG",
      "type": "UNPKG",
      "detail": {
        "host": "https://www.unpkg.com/",
        "downloadHost": "https://www.unpkg.com/"
      }
    }
  ]
}
```

- 参数
  - name - `string` - 必选, 应用名称
  - organizationId - `string` - 必选, 应用所属组织
  - intro - `string` - 可选, 应用简介, 默认为空
  - host - `string[]` - 可选, 应用的域名列表, 默认为空数组
  - slug - `string` - 可选, 应用 slug, 默认为空
  - locales - `string[]` - 可选, 应用 locales 列表, 例如： en-HK, zh-HK, ko-KA, ja-JP 等， 默认为空数组
  - resources - `array` - 可选, 应用下资源配置信息
    - name - `string` - 必选, 资源名称
    - type - `string` - 必选, 资源类型
    - detail - `object`
      - host - `string` - 可选, 资源访问地址的 host
      - downloadHost - `string` - 可选, 资源下载地址的 host

返回

- 应用详情信息, 详情见 [`AppDetailWithFolder`](#appdetailwithfolder)

### 更新应用详情

#### <Badge>API</Badge> PUT /applications

更新应的简介，host, slug, locales, resources 等信息

请求

```json
{
  "id": "appl_2RjQIXBuNd3STg5",
  "name": "new-application",
  "intro": "test-app",
  "host": ["www.demo.com"],
  "slug": "path",
  "locales": ["en-HK"],
  "resources": [
    {
      "name": "UNPKG",
      "type": "UNPKG",
      "detail": {
        "host": "https://www.unpkg.com/",
        "downloadHost": "https://www.unpkg.com/"
      }
    }
  ]
}
```

- 参数
  - id - `string` - 必选, 应用 ID
  - name - `string` - 必选, 应用名称
  - intro - `string` - 可选, 应用简介
  - host - `string[]` - 可选, 应用的域名列表
  - slug - `string` - 可选, 应用 slug
  - locales - `string[]` - 可选, 应用 locales 列表, 例如： en-HK, zh-HK, ko-KA, ja-JP 等
  - resources - `array` - 可选, 应用下资源配置信息
    - name - `string` - 必选, 资源名称
    - type - `string` - 必选, 资源类型
    - detail - `object`
      - host - `string` - 可选, 资源访问地址的 host
      - downloadHost - `string` - 可选, 资源下载地址的 host

返回

- 应用详情信息, 详情见 [`AppDetail`](#appdetail)

## 项目

---

### 获取项目列表

#### <Badge>API</Badge> GET /project-searchs

获取指定组织下的分页项目列表

请求

```
GET /project-searchs?organizationId=orga_j9l4qJI9hAXWTer&applicationId=appl_2RjQIXBuNd3STg5&search=test&page=1&size=10
```

请求

- 参数
  - organizationId - `string` - 必选，组织 ID
  - applicationId - `string` - 可选, 应用 ID，匹配指定应用下的项目，默认为空
  - search - `string` - 可选, 过滤字符，模糊匹配项目名称，默认为空
  - page - `number` - 可选，当前页数，默认为 1
  - size - `number` - 可选，当前每页数据数，默认为 10

返回

```json
{
  "data": [
    {
      "parentFolderId": "fold_eXkHNVL1EtubEo4",
      "folderPath": "system-project",
      "deleted": false,
      "id": "fold_BShBPX961UszMz6",
      "name": "system-project",
      "intro": "",
      "tags": [],
      "createTime": "2021-08-27T07:05:49.057Z",
      "updateTime": "2021-08-27T07:05:49.058Z",
      "creator": {
        "id": "user-dvbfW1qsl8qkz39",
        "account": "fox-user"
      },
      "application": {
        "id": "appl_2RjQIXBuNd3STg5",
        "name": "flutter-app"
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

  - data - `array` - 项目详情
    - id - `string` - 项目 ID
    - name - `string` - 项目名称
    - intro - `string` - 项目简介
    - tags - `array` - 项目标签，
      - type - `string` - 标签类型
    - parentFolderId - `string` - 项目上级文件夹 ID
    - folderPath - `string` - 项目文件路径
    - creator - `object` - 项目创建者信息
      - id - `string` - 创建者 ID
      - account - `string` - 创建者用户名
    - application - `object` - 项目所属应用信息
      - id - `string` - 应用 ID
      - name - `string` - 应用名称
  - pageInfo - `object` - 分页信息，详见 [`PageInfo`](#pageinfo)

### 获取项目下指定路径文件列表

#### <Badge>API</Badge> POST /projects/files-info

获取指定项目下，指定的页面列表

请求

```json
{
  "applicationId": "appl_2RjQIXBuNd3STg5",
  "projectId": "fold_BShBPX961UszMz6",
  "filter": {
    "pathList": ["system-project"]
  }
}
```

- 参数
  - applicationId - `string` - 必选，项目所属的应用 ID
  - projectId - `string` - 必选，项目 ID
  - filter - `object` - 必选，指定文件的条件
    - pathList - `string[]` - 必选，指定的文件的路径

返回

```json
{
  "data": [
    {
      "fileId": "file_Qpch1pRnzXpNFJl",
      "path": "page-2",
      "version": "0.0.1",
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
      }
    }
  ]
}
```

- 说明
  - data - `array` - 文件列表
    - fileId - `string` - 文件 ID
    - path - `string` - 文件路径
    - version - `string` - 文件下对应的内容版本
    - content - `object` - 文件详情, 详情见 [`PageContent`](#)

### 获取项目下文件列表

#### <Badge>API</Badge> GET /projects/files

获取指定应用下指定项目的文件分页列表

请求

```
GET /projects/files?applicationId=appl_2RjQIXBuNd3STg5&id=fold_BShBPX961UszMz6&type=&search=&page=1&size=10
```

- 参数
  - applicationId - `string` - 必选, 应用 ID
  - id - `string` - 必选, 项目 ID
  - type - `string` - 可选, 文件类型，template|page
  - search - `string` - 可选, 模糊匹配文件名称
  - page - `number` - 可选, 当前页数，默认为 1
  - size - `number` - 可选, 当前每页数据数, 默认为 10

返回

```json
{
  "data": {
    "folders": [
      {
        "intro": "",
        "tags": [],
        "deleted": false,
        "id": "fold-iqI83MGK0mitcKV",
        "name": "test-template",
        "folderPath": "test-template",
        "parentFolderId": "fold_BShBPX961UszMz6",
        "createTime": "2021-09-24T06:31:22.549Z",
        "updateTime": "2021-09-24T06:31:22.550Z",
        "creator": {
          "id": "user-dvbfW1qsl8qkz39",
          "account": "fox-user"
        },
        "application": {
          "id": "appl_2RjQIXBuNd3STg5",
          "name": "flutter-app"
        }
      }
    ],
    "files": [
      {
        "intro": "",
        "tags": [],
        "suffix": "html",
        "deleted": false,
        "id": "file_UgGWWPbfuYGWxfm",
        "name": "test-template",
        "folderId": "fold_BShBPX961UszMz6",
        "type": "template",
        "createTime": "2021-09-24T06:31:22.549Z",
        "updateTime": "2021-09-24T06:31:22.550Z",
        "creator": {
          "id": "user-dvbfW1qsl8qkz39",
          "account": "fox-user"
        },
        "application": {
          "id": "appl_2RjQIXBuNd3STg5",
          "name": "flutter-app"
        }
      }
    ]
  },
  "pageInfo": {
    "page": 1,
    "size": 10,
    "total": 2
  }
}
```

- 说明

  - data - `object` - 项目下文件夹，文件详情
    - folders - `array` - 项目下文件夹详情
      - id - `string` - 文件夹 ID
      - name - `string` - 文件夹名称
      - intro - `string` - 文件夹简介
      - folderPath - `string` - 文件夹路径
      - parentFolderId - `string` - 文件夹上级文件夹 ID
      - tags - `array` - 文件夹标签
      - deleted - `boolean` - 文件夹状态， true:已删除， false: 正常
      - creator - `object` - 文件夹创建者信息
        - id - `string` - 创建者 ID
        - account - `string` - 创建者名称
      - application - `object` - 文件夹所属应用信息
        - id - `string` - 应用 ID
        - name - `string` - 应用名称
      - createTime - `date` - 文件夹创建时间
      - updateTime - `date` - 文件夹更新时间
    - files - `array` - 项目下文件详情
      - id - `string` - 文件 ID
      - name - `string` - 文件名称
      - intro - `string` - 文件简介
      - type - `string` - 文件类型 `template` , `page` , `condition` , `variable` ,...
      - folderId - `string` - 文件上级文件夹 ID
      - suffix - `string` - 文件后缀
      - tags - `array` - 文件标签
        - pathname - `string` - 文件 url path
      - deleted - `boolean` - 文件状态， true:已删除， false: 正常
      - creator - `object` - 文件创建者信息
        - id - `string` - 创建者 ID
        - account - `string` - 创建者名称
      - application - `object` - 文件所属应用信息
        - id - `string` - 应用 ID
        - name - `string` - 应用名称
      - createTime - `date` - 文件创建时间
      - updateTime - `date` - 文件更新时间
  - pageInfo - `object` - 分页信息，详见 [`PageInfo`](#pageinfo)

### 获取项目下的文件目录

#### <Badge>API</Badge> GET /projects/catalogs

获取指定项目下文件目录

请求

```
GET /projects/catalogs?applicationId=appl_2RjQIXBuNd3STg5&id=fold_BShBPX961UszMz6
```

- 参数
  - applicationId - `string` - 必选, 应用 ID
  - id - `string` - 必选, 项目 ID

返回

```json
{
  "code": 200,
  "data": {
    "folders": [
      {
        "id": "fold_pOginfBEFU2Rrlb",
        "name": "new-project",
        "intro": "",
        "applicationId": "appl_yqfu8BI1BRe15fs",
        "tags": [],
        "parentFolderId": "fold_j2gEgJEGLJjdCmM",
        "folderPath": "new-project",
        "deleted": false,
        "creator": "user-dvbfW1qsl8qkz39",
        "createTime": "2021-09-18T02:24:44.341Z",
        "updateTime": "2021-09-18T02:24:44.342Z",
        "children": {}
      }
    ],
    "files": [
      {
        "intro": "",
        "tags": [],
        "suffix": "html",
        "deleted": false,
        "id": "file_UgGWWPbfuYGWxfm",
        "applicationId": "appl_2RjQIXBuNd3STg5",
        "name": "test-template",
        "folderId": "fold_BShBPX961UszMz6",
        "type": "template",
        "creator": "user-dvbfW1qsl8qkz39",
        "createTime": "2021-09-24T06:31:22.549Z",
        "updateTime": "2021-09-24T06:31:22.550Z",
        "contents": [
          {
            "tags": [
              {
                "locale": "en-US"
              }
            ],
            "liveVersionNumber": 0,
            "deleted": false,
            "id": "cont_5eN1oeIgYy5WdZ9",
            "title": "template",
            "fileId": "file_UgGWWPbfuYGWxfm",
            "creator": "user-dvbfW1qsl8qkz39",
            "createTime": "2021-09-24T06:31:32.300Z",
            "updateTime": "2021-09-24T06:31:32.300Z"
          }
        ]
      }
    ]
  }
}
```

- 说明

  - data - `object`
    - folders - `array` - 项目下文件夹信息, 详见[`FolderBaseDetail`](#folderbasedetail)
    - files - `array` - 项目下文件信息
      - id - `string` - 文件 ID
      - name - `string` - 文件名称
      - intro - `string` - 文件简介
      - type - `string` - 文件类型 `template` , `page` , `condition` , `variable` ,...
      - folderId - `string` - 文件上级文件夹 ID
      - suffix - `string` - 文件后缀
      - tags - `array` - 文件标签
        - pathname - `string` - 文件 url path
      - deleted - `boolean` - 文件状态， true:已删除， false: 正常
      - creator - `string` - 创建者 ID
      - application - `string` - 应用 ID
      - contents - `array` - 文件下页面列表
        - id - `string` - 页面 ID
        - title - `string` - 页面名称
        - fileId - `string` - 页面所属的文件 ID
        - tags - `array` - 页面标签
          - locale - `string` - 页面 locale
          - query - `object` - 页面请求参数
        - liveVersionNumber - `number` - 页面 live 版本
        - deleted - `boolean` - 页面的状态， true: 已删除， false:正常
        - creator - `string` - 页面创建者 ID
        - createTime - `date` - 页面创建时间
        - updateTime - `date` - 页面更新时间
      - createTime - `date` - 文件创建时间
      - updateTime - `date` - 文件更新时间

### 创建项目详情

#### <Badge>API</Badge> POST /projects

创建项目信息

请求

```json
{
  "applicationId": "appl_2RjQIXBuNd3STg5",
  "name": "test project",
  "intro": "test project intro",
  "path": "test-project"
}
```

- 参数
  - applicationId - `string` - 必选, 应用 ID
  - name - `string` - 必选, 项目名称
  - intro - `string` - 可选，项目简介
  - path - `string` - 可选，项目路径

返回

```json
{
  "data": {
    "id": "fold_asMHr9oKtMwM8pq",
    "name": "test-project",
    "intro": "tttt",
    "applicationId": "appl_2RjQIXBuNd3STg5",
    "folderPath": "test-project",
    "parentFolderId": "fold_eXkHNVL1EtubEo4",
    "tags": [],
    "creator": "user-dvbfW1qsl8qkz39",
    "deleted": false
  }
}
```

- 说明
  - data - `object` - 项目详情
    - id - `string` - 项目 ID
    - name - `string` - 项目名称
    - intro - `string` - 项目简介
    - applicationId - `string` - 项目所属应用 ID
    - folderPath - `string` - 项目路径
    - parentFolderId - `string` - 项目所属文件夹 ID
    - tags - `array` - 项目标签
    - creator - `string` - 项目创建者 ID
    - deleted - `string` - 项目状态， true: 已删除，false: 正常

### 创建项目下页面详情

#### <Badge>API</Badge> POST /projects/files

创建包含页面，内容和版本信息

请求

```json
{
  "applicationId": "appl_2RjQIXBuNd3STg5",
  "projectId": "fold_asMHr9oKtMwM8pq",
  "files": [
    {
      "name": "test",
      "path": "common/test2",
      "content": {
        "locale": "zh-HK",
        "detail": "{}"
      }
    }
  ]
}
```

- 参数
  - applicationId - `string` - 必选, 应用 ID
  - projectId - `string` - 必选, 项目 ID
  - files - `array` - 必选，文件信息
    - name - `string` - 不选，文件名称
    - path - `string` - 可选，文件路径，common/test,则是在 common 文件夹下创建 test 文件，再创建文件
    - content - `object` - 必选， 版本信息
      - locale - `string` - 必选，文件的 locale 值
      - detail - `string` - 必选，文件的版本详情信息

返回

```json
{
  "data": [
    {
      "id": "file_yJXWUmbdaeQcevN",
      "version": "0.0.1",
      "name": "common/test2/test",
      "content": {}
    }
  ]
}
```

- 说明
  - data - `object` - 返回的文件信息
    - id - `string` - 文件 ID
    - name - `string` - 文件名称
    - version - `string` - 文件页面的版本号
    - content - `object` - 文件页面的版本详情

### 删除项目详情

#### <Badge>API</Badge> PUT /projects/status

设置项目的删除状态， 同时会删除该项目下所有文件，文件夹，页面和版本信息

请求

```json
{
  "applicationId": "appl_2RjQIXBuNd3STg5",
  "id": "fold_asMHr9oKtMwM8pq"
}
```

- 参数
  - applicationId - `string` - 必选，应用 ID
  - projectId - `string` - 必选，项目 ID

返回

```json
{
  "data": {
    "id": "fold_asMHr9oKtMwM8pq",
    "name": "test-project",
    "intro": "tttt",
    "applicationId": "appl_2RjQIXBuNd3STg5",
    "folderPath": "test-project",
    "parentFolderId": "fold_eXkHNVL1EtubEo4",
    "tags": [],
    "creator": "user-dvbfW1qsl8qkz39",
    "deleted": true
  }
}
```

- 说明
  - data - `object` - 项目详情
    - id - `string` - 项目 ID
    - name - `string` - 项目名称
    - intro - `string` - 项目简介
    - applicationId - `string` - 项目所属应用 ID
    - folderPath - `string` - 项目路径
    - parentFolderId - `string` - 项目所属文件夹 ID
    - tags - `array` - 项目标签
    - creator - `string` - 项目创建者 ID
    - deleted - `string` - 项目状态， true: 已删除，false: 正常

### 发布项目页面

#### <Badge>API</Badge> PUT /projects/page-publish

发布项目下指定的页面，并且设置 live 版本，同时会发布该页面依赖的变量，条件等数据

请求

```json
{
  "applicationId": "appl_2RjQIXBuNd3STg5",
  "projectId": "fold_asMHr9oKtMwM8pq",
  "ids": ["cont_IVFFwx46VIO6ROU"]
}
```

- 参数
  - applicationId - `string` - 必选，应用 ID
  - projectId - `string` - 必选， 项目 ID
  - ids - `string[]` - 必选，项目下页面 ID 列表

返回

```json
{
  "data": [
    {
      "id": "cver_hWZoTLQ3G5lgubX",
      "version": "0.0.1",
      "versionNumber": 1.0,
      "status": "release",
      "deleted": false,
      "contentId": "cont_IVFFwx46VIO6ROU",
      "creator": "user-dvbfW1qsl8qkz39",
      "content": {
        "schemas": [
          {
            "props": {},
            "children": [
              {
                "label": "@fox-design/react-html",
                "name": "@fox-design/react-html",
                "props": {},
                "parentId": "stru_tzwhyfNfGnS4aN1",
                "id": "stru_LEzZJQUbjDBuVK3"
              }
            ],
            "id": "stru_tzwhyfNfGnS4aN1"
          }
        ],
        "relation": {},
        "id": "cont_IVFFwx46VIO6ROU"
      },
      "createTime": ISODate("2021-07-26T13:26:25.420+08:00"),
      "updateTime": ISODate("2021-07-26T14:09:07.867+08:00")
    }
  ]
}
```

- 说明
  - data - `array` - 发布的页面的版本详情
    - id - `string` - 页面版本 ID
    - version - `string` - 页面版本号
    - versionNumber - `number` - 页面版本号
    - status - `string` - 页面版本发布状态, `base`,`release`, ...
    - deleted - `boolean` - 页面版本删除状态， true: 已删除， false: 正常
    - contentId - `string` - 页面 ID
    - creator - `string` - 页面版本创建者 ID
    - content - `object` - 页面版本详情
    - createTime - `date` - 页面版本创建时间
    - updateTime - `date` - 页面版本更新时间

### 更新项目详情

#### <Badge>API</Badge> PUT /projects

更新项目的基础信息

请求

```json
{
  "applicationId": "appl_2RjQIXBuNd3STg5",
  "projectId": "fold_asMHr9oKtMwM8pq",
  "name": "new project name",
  "intro": "new intro",
  "path": "new-path"
}
```

- 参数
  - applicationId - `string` - 必选, 应用 ID
  - projectId - `string` - 必选, 项目 ID
  - name - `string` - 可选, 项目名称
  - intro - `string` - 可选， 项目简介
  - path - `string` - 可选，项目路径

返回

```json
{
  "data": {
    "id": "fold_asMHr9oKtMwM8pq",
    "name": "new project name",
    "intro": "new intro",
    "applicationId": "appl_2RjQIXBuNd3STg5",
    "folderPath": "new-path",
    "parentFolderId": "fold_eXkHNVL1EtubEo4",
    "tags": [],
    "creator": "user-dvbfW1qsl8qkz39",
    "deleted": true
  }
}
```

- 说明
  - data - `object` - 项目详情
    - id - `string` - 项目 ID
    - name - `string` - 项目名称
    - intro - `string` - 项目简介
    - applicationId - `string` - 项目所属应用 ID
    - folderPath - `string` - 项目路径
    - parentFolderId - `string` - 项目所属文件夹 ID
    - tags - `array` - 项目标签
    - creator - `string` - 项目创建者 ID
    - deleted - `string` - 项目状态， true: 已删除，false: 正常

## 资源

---

### 获取资源列表

#### <Badge>API</Badge> GET /resource-searchs

获取资源的分页列表详情

请求

```
GET /resource-searchs?applicationId=appl_EJlrKxog8TmgvLA&parentFolderId=fold_BnEO6zWcgMfdftn&search=&page=1&size=10
```

- 参数
  - applicationId - `string` - 必选，应用 ID
  - parentFolderId - `string` - 必选，指定的资源文件夹 ID，获取该文件夹下的资源列表
  - search - `string` - 可选，模糊匹配资源名称，默认为空
  - page - `number` - 可选，当前页数，默认为 1
  - size - `number` - 可选，每页数据数，默认为 10

返回

```json
{
  "data": [
    {
      "id": "fold_XRwaFwyE368REzj",
      "parentFolderId": "fold_BnEO6zWcgMfdftn",
      "folderPath": "foxpage-basic-resource",
      "applicationId": "appl_EJlrKxog8TmgvLA",
      "name": "foxpage-basic-resource",
      "intro": "Foxpage system basic resource group，eg. Reactjs, Layout Component",
      "tags": [
        {
          "tagType": "resourceGroup",
          "resourceType": "UNPKG"
        }
      ],
      "deleted": false,
      "creator": {
        "id": "user-dvbfW1qsl8qkz39",
        "account": "fox-user"
      },
      "createTime": "2021-08-24T08:44:12.652Z",
      "updateTime": "2021-08-24T08:44:12.653Z"
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

  - data - `array` - 资源文件夹详情列表
    - id - `string` - 文件夹 ID
    - parentFolderId - `string` - 上级文件夹 ID
    - folderPath - `string` - 文件夹路径
    - applicationId - `string` - 文件夹所属应用 ID
    - name - `string` - 文件夹名称
    - intro - `string` - 文件夹简介
    - tags - `array` - 文件夹标签，除了系统定义的字段外，其他可自定义
      - tagType - `string` - 当前标签类型
      - resourceType - `string` - 标签值，再 tagType 为`resourceGroup`时可设置
    - deleted - `boolean` - 文件夹删除状态，true:已删除，false:正常
    - creator - `object` - 文件夹创建者信息
      - id - `string` - 文件夹创建者 ID
      - account - `string` - 文件夹创建者名称
    - createTime - `date` - 文件夹创建时间
    - updateTime - `date` - 文件夹更新时间
  - pageInfo - `object` - 分页信息，详见 [`PageInfo`](#pageinfo)

### 获取资源详情

#### <Badge>API</Badge> GET /resources

通过资源文件夹 ID 或者名称获取详情以及所有子集信息

请求

```
GET /resources?applicationId=appl_EJlrKxog8TmgvLA&id=&name=fold_XRwaFwyE368REzj
```

- 参数
  - applicationId - `string` - 必选，应用 ID
  - id - `string` - 可选，资源文件夹 ID，和 name 参数必选其中之一
  - name - `string` - 可选，精确匹配资源文件夹名称，和 id 参数必选其中之一

返回

```json
{
  "data": {
    "id": "fold_j2gEgJEGLJjdCmM",
    "name": "_project",
    "intro": "",
    "applicationId": "appl_yqfu8BI1BRe15fs",
    "tags": [
      {
        "type": "project"
      }
    ],
    "parentFolderId": "",
    "folderPath": "project",
    "deleted": false,
    "creator": "user-dvbfW1qsl8qkz39",
    "createTime": "2021-09-18T02:03:19.764Z",
    "updateTime": "2021-09-18T02:03:19.765Z",
    "depth": 0,
    "children": {
      "folders": [
        {
          "tags": [],
          "parentFolderId": "fold_j2gEgJEGLJjdCmM",
          "folderPath": "new-project",
          "deleted": false,
          "id": "fold_pOginfBEFU2Rrlb",
          "name": "new-project",
          "intro": "",
          "applicationId": "appl_yqfu8BI1BRe15fs",
          "creator": "user-dvbfW1qsl8qkz39",
          "createTime": "2021-09-18T02:24:44.341Z",
          "updateTime": "2021-09-18T02:24:44.342Z",
          "children": {}
        }
      ],
      "files": []
    }
  }
}
```

- 说明
  - data - `object` - 资源文件夹详情，包含该资源下的子集
    - id - `string` - 文件夹 ID
    - applicationId - `string` - 文件夹所属应用 ID
    - name - `string` - 文件夹名称
    - intro - `string` - 文件夹简介
    - tags - `array` - 文件夹标签
    - parentFolderId - `string` - 上级文件夹 ID
    - folderPath - `string` - 文件夹路径
    - deleted - `boolean` - 文件夹删除状态，true:已删除，false:正常
    - creator - `string` - 文件夹创建者 ID
    - createTime - `date` - 文件夹创建时间
    - updateTime - `date` - 文件夹更新时间
    - depth - `number` - 当前文件夹是距离根资源文件夹的距离，为 0 则是在根资源文件夹下，为 1 则是在跟资源文件夹的某个文件夹下，以此类推
    - children - `object` - 文件夹子集
      - folders - `array` - 文件夹信息，详见[`FolderBaseDetail`](#folderbasedetail)
        - children - `object` - 资源子集
      - files - `array` - 文件信息，详见[`TypeFile`](#typefile)

### 通过路径获取资源详情

#### <Badge>API</Badge> GET /resources/by-paths

通过资源路径来获取资源详情信息

请求

```
GET /resources/by-paths?applicationId=appl_EJlrKxog8TmgvLA&path=foxpage-basic-resource&depth=1
```

- 参数
  - applicationId - `string` - 必选，应用 ID
  - path - `string` - 可选，资源路径，例如：/foxpage-basic-resource/aa/bbb
  - depth - `number` - 可选，获取资源的子集层数，默认为 1，最多 5 层

返回

```json
{
  "data": {
    "id": "fold_XRwaFwyE368REzj",
    "applicationId": "appl_EJlrKxog8TmgvLA",
    "name": "foxpage-basic-resource",
    "intro": "Foxpage system basic resource group，eg. Reactjs, Layout Component",
    "tags": [
      {
        "tagType": "resourceGroup",
        "resourceType": "UNPKG"
      }
    ],
    "parentFolderId": "fold_BnEO6zWcgMfdftn",
    "folderPath": "foxpage-basic-resource",
    "deleted": false,
    "creator": "user-dvbfW1qsl8qkz39",
    "createTime": "2021-08-24T08:44:12.652Z",
    "updateTime": "2021-08-24T08:44:12.653Z",
    "children": {
      "folders": [
        {
          "tags": [],
          "parentFolderId": "fold_XRwaFwyE368REzj",
          "folderPath": "fox-design-antd-layout-footer",
          "deleted": false,
          "id": "fold_F85jvCw8TUQXYqB",
          "name": "@fox-design/antd-layout-footer",
          "intro": "",
          "applicationId": "appl_EJlrKxog8TmgvLA",
          "creator": "user-dvbfW1qsl8qkz39",
          "createTime": "2021-09-17T05:59:19.208Z",
          "updateTime": "2021-09-17T05:59:19.209Z",
          "children": []
        }
      ],
      "files": [
        {
          "intro": "",
          "tags": [],
          "suffix": "fp",
          "deleted": false,
          "id": "file_GjWcFEuN8OYKYSX",
          "applicationId": "appl_EJlrKxog8TmgvLA",
          "name": "editor.js",
          "folderId": "fold_XRwaFwyE368REzj",
          "type": "resource",
          "creator": "user-dvbfW1qsl8qkz39",
          "createTime": "2021-09-17T06:00:21.172Z",
          "updateTime": "2021-09-17T06:00:21.173Z"
        }
      ]
    }
  }
}
```

- 说明
  - data - `object` - 资源文件夹详情，包含该资源下的子集
    - id - `string` - 文件夹 ID
    - applicationId - `string` - 文件夹所属应用 ID
    - name - `string` - 文件夹名称
    - intro - `string` - 文件夹简介
    - tags - `array` - 文件夹标签
    - parentFolderId - `string` - 上级文件夹 ID
    - folderPath - `string` - 文件夹路径
    - deleted - `boolean` - 文件夹删除状态，true:已删除，false:正常
    - creator - `string` - 文件夹创建者 ID
    - createTime - `date` - 文件夹创建时间
    - updateTime - `date` - 文件夹更新时间
    - children - `object` - 文件夹子集
      - folders - `array` - 文件夹信息，详见[`FolderBaseDetail`](#folderbasedetail)
        - children - `object` - 文件夹子集
      - files - `array` - 文件信息，详情见[`TypeFile`](#typefile)

### 获取资源下内容列表

#### <Badge>API</Badge> GET /resources/contents

通过文件 ID， 获取资源文件下的内容列表

请求

```
GET /resources/contents?applicationId=appl_EJlrKxog8TmgvLA&id=file_GjWcFEuN8OYKYSX
```

- 参数
  - applicationId - `string` - 必选，应用 ID
  - id - `string` - 必选，资源文件 ID

返回

```json
{
  "data": [
    {
      "id": "cont_d7ELKOkYKoEhofn",
      "title": "editor.js",
      "fileId": "file_GjWcFEuN8OYKYSX",
      "tags": [],
      "liveVersionNumber": 2,
      "version": "0.0.2",
      "deleted": false,
      "creator": {
        "id": "user-dvbfW1qsl8qkz39",
        "account": "fox-user"
      },
      "createTime": "2021-09-17T06:00:21.178Z",
      "updateTime": "2021-09-17T06:00:21.179Z"
    }
  ]
}
```

- 说明
  - data - `array` - 资源文件下页面列表详情
    - id - `string` - 页面 ID
    - title - `string` - 页面名称
    - fileId - `string` - 页面所属文件 ID
    - tags - `array` - 页面标签
    - liveVersionNumber - `number` - 页面的 live 版本号
    - version - `string` - 页面 live 版本号
    - deleted - `boolean` - 页面删除状态，true:已删除，false:正常
    - creator - `string` - 页面创建者信息
      - id - `string` - 创建者 ID
      - account - `string` - 创建者名称
    - createTime - `date` - 页面创建时间
    - updateTime - `date` - 页面更新时间

### 获取指定资源的内容详情

#### <Badge>API</Badge> GET /resources/content-info

通过资源文件内容 ID 获取指定资源的内容项

请求

```
GET /resources/content-info?applicationId=appl_EJlrKxog8TmgvLA&fileId=file_PWtMXPMub1E9wUd&id=cont_tT4poWveGWM8N4n
```

- 参数
  - applicationId - `string` - 必选，应用 ID
  - fileId - `string` - 必选，资源文件 ID
  - id - `string` - 必选，资源文件内容 ID

返回

```json
{
  "data": {
    "id": "cver_SAtfFdsdYhaSGIg",
    "contentId": "cont_tT4poWveGWM8N4n",
    "version": "0.0.1",
    "versionNumber": 1,
    "content": {
      "id": "cont_tT4poWveGWM8N4n",
      "realPath": "/@fox-design/antd-layout-footer@0.0.2/dist/cjs/production.js"
    },
    "status": "base",
    "deleted": false,
    "creator": "user-dvbfW1qsl8qkz39",
    "createTime": "2021-09-17T05:59:56.591Z",
    "updateTime": "2021-09-17T05:59:56.592Z"
  }
}
```

- 说明
  - data - `object` - 资源内容的版本详情
    - id - `string` - 版本 ID
    - contentId - `string` - 资源内容 ID
    - version - `string` - 资源版本号
    - versionNumber - `number` - 资源版本号
    - content - `string` - 资源详情
      - id - `string` - 资源内容 ID
      - realPath - `string` - 资源路径
    - status - `string` - 资源发布状态，默认都是`base`
    - deleted - `boolean` - 资源删除状态，true:已删除，false:正常
    - creator - `string` - 资源版本创建者 ID
    - createTime - `date` - 资源版本创建时间
    - updateTime - `date` - 资源版本更新时间

### 获取资源组列表详情

#### <Badge>API</Badge> GET /resources/group-searchs

获取资源组列表信息

请求

```
GET /resources/group-searchs?applicationId=appl_EJlrKxog8TmgvLA&search=&page=1&size=10
```

- 参数
  - applicationId - `string` - 必选，应用 ID
  - search - `string` - 可选，模糊匹配资源组名称，默认为空
  - page - `number` - 可选，当前页数，默认为 1
  - size - `number` - 可选，每页数据数，默认为 10

返回

```json
{
  "data": [
    {
      "id": "fold_XRwaFwyE368REzj",
      "parentFolderId": "fold_BnEO6zWcgMfdftn",
      "folderPath": "foxpage-basic-resource",
      "applicationId": "appl_EJlrKxog8TmgvLA",
      "name": "foxpage-basic-resource",
      "intro": "Foxpage system basic resource group，eg. Reactjs, Layout Component",
      "tags": [
        {
          "tagType": "resourceGroup",
          "resourceType": "UNPKG"
        }
      ],
      "deleted": false,
      "creator": {
        "id": "user-dvbfW1qsl8qkz39",
        "account": "fox-user"
      },
      "createTime": "2021-08-24T08:44:12.652Z",
      "updateTime": "2021-08-24T08:44:12.653Z"
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

  - data - `array` - 资源组列表详情
    - id - `string` - 资源组 ID
    - name - `string` - 资源组名称
    - intro - `string` - 资源组简介
    - parentFolderId - `string` - 资源组上级文件夹 ID
    - folderPath - `string` - 资源组路径
    - applicationId - `string` - 资源组所属应用 ID
    - tags - `array` - 资源组标签
      - tagType - 资源组标签字段，值为`resourceGroup`
      - resourceType - 资源组类型
    - deleted - `boolean` - 资源组删除状态，true: 已删除，false,正常
    - creator - `object` - 资源组创建者信息
      - id - 创建者 ID
      - account - 创建者名称
    - createTime - `date` - 资源组创建时间
    - updateTime - `date` - 资源组更新时间
  - pageInfo - `object` - 分页信息，详见 [`PageInfo`](#pageinfo)

### 获取资源组详情

#### <Badge>API</Badge> GET /resource/groups

通过资源组 ID 或者资源组路径获取指定资源组详情

请求

```
GET /resource/groups?applicationId=appl_EJlrKxog8TmgvLA&id=fold_XRwaFwyE368REzj&path=
```

- 参数
  - applicationId - `string` - 必选，应用 ID
  - id - `string` - 可选，资源组 ID，和 path 字段必传其中一个
  - path - `string` - 可选，资源组路径，和 id 字段必传其中一个

返回

```json
{
  "data": {
    "id": "fold_XRwaFwyE368REzj",
    "name": "foxpage-basic-resource",
    "parentFolderId": "fold_BnEO6zWcgMfdftn",
    "folderPath": "foxpage-basic-resource",
    "applicationId": "appl_EJlrKxog8TmgvLA",
    "intro": "Foxpage system basic resource group，eg. Reactjs, Layout Component",
    "tags": [
      {
        "tagType": "resourceGroup",
        "resourceType": "UNPKG"
      }
    ],
    "deleted": false,
    "creator": "user-dvbfW1qsl8qkz39",
    "createTime": "2021-08-24T08:44:12.652Z",
    "updateTime": "2021-08-24T08:44:12.653Z",
    "group": {
      "name": "UNPKG",
      "type": "UNPKG",
      "detail": {
        "host": "https://www.unpkg.com/",
        "downloadHost": "https://www.unpkg.com/"
      }
    }
  }
}
```

- 说明
  - data - 资源组详情
    - id - `string` - 资源组 ID
    - name - `string` - 资源组名称
    - parentFolderId - `string` - 资源组上级 ID
    - folderPath - `string` - 资源组文件夹路径
    - applicationId - `string` - 资源组所属应用
    - intro - `string` - 资源组简介
    - tags - `array` - 资源组标签
      - tagType - 资源组标签字段，值为`resourceGroup`
      - resourceType - 资源组类型
    - deleted - `boolean` - 资源组删除状态，true: 已删除，false,正常
    - creator - `object` - 资源组创建者信息
    - createTime - `date` - 资源组创建时间
    - updateTime - `date` - 资源组更新时间
    - group - `object` - 资源组类型详情
      - name - `string` - 类型名称
      - type - `string` - 类型
      - detail - `object` - 类型详情
        - host - `string` - 访问的 host
        - downloadHost - `string` - 下载的 host

### 新增资源组

#### <Badge>API</Badge> POST /resources/groups

新增资源组详情

请求

```json
{
  "applicationId": "appl_EJlrKxog8TmgvLA",
  "name": "demo",
  "intro": "demo resource group",
  "path": "demo",
  "parentFolderId": "fold_BnEO6zWcgMfdftn",
  "tags": [{ "resourceType": "UNPKG" }]
}
```

- 参数
  - applicationId - `string` - 必选，应用 ID
  - name - `string` - 必选，资源组名称
  - intro - `string` - 可选，资源组简介
  - path - `string` - 可选，资源组文件夹路径
  - parentFolderId - `string` - 可选，资源组上级文件夹 ID
  - tags - `array` - 可选，资源组标签，标明组员组的类型等信息

返回

```json
{
  "data": {
    "id": "fold_RuK8simqT3kdJQu",
    "name": "demo",
    "intro": "demo resource group",
    "applicationId": "appl_EJlrKxog8TmgvLA",
    "parentFolderId": "fold_BnEO6zWcgMfdftn",
    "folderPath": "demo",
    "tags": [
      {
        "resourceType": "UNPKG"
      }
    ],
    "deleted": false,
    "creator": "user-dvbfW1qsl8qkz39",
    "createTime": "2021-10-19T06:50:36.265Z",
    "updateTime": "2021-10-19T06:50:36.265Z"
  }
}
```

- 说明
  - data - `object` - 资源组详情
    - id - `string` - 资源组 ID
    - name - `string` - 资源组名称
    - parentFolderId - `string` - 资源组上级 ID
    - folderPath - `string` - 资源组文件夹路径
    - applicationId - `string` - 资源组所属应用
    - intro - `string` - 资源组简介
    - tags - `array` - 资源组标签
      - resourceType - 资源组类型
    - deleted - `boolean` - 资源组删除状态，true: 已删除，false,正常
    - creator - `object` - 资源组创建者信息
    - createTime - `date` - 资源组创建时间
    - updateTime - `date` - 资源组更新时间

### 新增资源文件夹

#### <Badge>API</Badge> POST /resources/folders

新增资源文件夹详情信息

请求

```json
{
  "applicationId": "appl_EJlrKxog8TmgvLA",
  "name": "test resource",
  "parentFolderId": "fold_BnEO6zWcgMfdftn",
  "intro": "test intro",
  "path": "test-resource",
  "tags": []
}
```

- 参数
  - applicationId - `string` - 必选，应用 ID
  - name - `string` - 必选，资源名称
  - parentFolderId - `string` - 必选，资源上级文件夹
  - intro - `string` - 可选，资源简介，默认为空
  - path - `string` - 可选，资源路径，默认通过 name 字段生成
  - tags - `array` - 可选，资源标签，字段自定义

返回

```json
{
  "data": {
    "id": "fold_PXCeWVjDKgDO1TR",
    "name": "test resource",
    "intro": "test intro",
    "applicationId": "appl_EJlrKxog8TmgvLA",
    "tags": [],
    "parentFolderId": "fold_BnEO6zWcgMfdftn",
    "folderPath": "test-resource",
    "deleted": false,
    "creator": "user-dvbfW1qsl8qkz39",
    "createTime": "2021-10-19T06:31:04.339Z",
    "updateTime": "2021-10-19T06:31:04.340Z"
  }
}
```

- 说明
  - data - `object` - 资源文件夹详情
    - id - `string` - 文件夹 ID
    - name - `string` - 文件夹名称
    - intro - `string` - 文件夹简介
    - applicationId - `string` - 文件夹所属应用 ID
    - tags - `array` - 文件夹标签
    - parentFolderId - `string` - 文件夹上级文件夹 ID
    - folderPath - `string` - 文件夹路径
    - deleted - `boolean` - 文件夹删除状态，true: 已删除，false,正常
    - creator - `object` - 文件夹创建者信息
    - createTime - `date` - 文件夹创建时间
    - updateTime - `date` - 文件夹更新时间

### 新增资源文件

#### <Badge>API</Badge> POST /resources

新增资源文件详情信息

请求

```json
{
  "applicationId": "appl_EJlrKxog8TmgvLA",
  "name": "test resource file",
  "folderId": "fold_PXCeWVjDKgDO1TR",
  "intro": "test resource file intro",
  "tags": []
}
```

- 参数
  - applicationId - `string` - 必选，应用 ID
  - name - `string` - 必选，资源文件名称
  - folderId - `string` - 必选，资源文件所属的文件夹 ID
  - intro - `string` - 可选，资源文件简介
  - tags - `array` - 可选，资源标签

返回

详情见[`TypeFile`](#typefile)

### 新增资源内容

#### <Badge>API</Badge> POST /resources/contents

新增资源内容详情信息，同时创建资源文件和资源内容信息，资源版本信息
创建文件是因为文件是可作为版本来呈现

请求

```json
{
  "applicationId": "appl_EJlrKxog8TmgvLA",
  "folderId": "fold_PXCeWVjDKgDO1TR",
  "content": {
    "realPath": "react.production3.min.js",
    "downloadPath": "/browse/react@16.0.0/umd/react.production3.min.js"
  }
}
```

- 参数
  - applicationId - `string` - 必选，应用 ID
  - folderId - `string` - 必选，资源文件夹 ID
  - content - `object` - 必选，资源内容版本详情

返回

```json
{
  "data": {
    "id": "file_Fl22D5KyZ20cP0L",
    "applicationId": "appl_EJlrKxog8TmgvLA",
    "name": "react.production3.min.js",
    "folderId": "fold_PXCeWVjDKgDO1TR",
    "type": "resource",
    "intro": "",
    "tags": [],
    "suffix": "fp",
    "deleted": false,
    "creator": "user-dvbfW1qsl8qkz39",
    "createTime": "2021-10-19T07:15:30.662Z",
    "updateTime": "2021-10-19T07:15:30.663Z"
  }
}
```

- 说明
  - data - `object` - 资源文件详情
    - id - string - 文件 ID
    - name - string - 文件名称
    - intro - string - 文件简介
    - type - string - 文件类型 `resource`, `template`, `page`, `condition`, `variable`,...
    - folderId - string - 文件上级文件夹 ID
    - suffix - string - 文件后缀
    - tags - array - 文件标签
    - pathname - string - 文件 url path
    - deleted - boolean - 文件状态， true:已删除， false: 正常
    - creator - string - 创建者 ID
    - application - string - 应用 ID
    - createTime - date - 文件创建时间
    - updateTime - date - 文件更新时间

### 更新资源文件夹

#### <Badge>API</Badge> PUT /resources/folders

更新资源文件夹详情，包括 name, path, intro, tags
只能更新资源下的文件夹，不能更新资源组

请求

```json
{
  "applicationId": "appl_EJlrKxog8TmgvLA",
  "id": "fold_jBUm4goqUwB5zWd",
  "name": "cjs",
  "intro": "test intro"
}
```

- 参数
  - applicationId - `string` - 必选，应用 ID
  - id - `string` - 必选，资源文件夹 ID
  - name - `string` - 可选，资源文件夹名称，不传则不更新该字段
  - intro - `string` - 可选，资源文件夹简介，不传则不更新该字段

返回

详细见[`FolderBaseDetail`](#folderbasedetail)

### 更新资源内容信息

#### <Badge>API</Badge> PUT /resources/contents

更新资源内容信息, 需要更新文件名称，内容名称

请求

```json
{
  "applicationId": "appl_EJlrKxog8TmgvLA",
  "id": "file_PWtMXPMub1E9wUd",
  "content": {
    "realPath": "react.production3.min.js",
    "downloadPath": "/browse/react@16.0.0/umd/react.production3.min.js"
  }
}
```

- 参数
  - applicationId - `string` - 必选，应用 ID
  - id - `string` - `string` - 必选，资源文件 ID
  - content - `object` - 必选，资源内容版本详情

返回

```json
{
  "data": {
    "id": "cver_SAtfFdsdYhaSGIg",
    "contentId": "cont_tT4poWveGWM8N4n",
    "version": "0.0.1",
    "versionNumber": 1,
    "content": {
      "realPath": "react.production3.min.js",
      "downloadPath": "/browse/react@16.0.0/umd/react.production3.min.js"
    },
    "status": "base",
    "deleted": false,
    "creator": "user-dvbfW1qsl8qkz39",
    "createTime": "2021-09-17T05:59:56.591Z",
    "updateTime": "2021-10-19T07:45:19.960Z"
  }
}
```

- 说明
  - data - `object` 资源版本详情
    - id - `string` - 资源版本 ID
    - contentId - `string` - 资源内容 ID
    - version - `string` - 资源版本号
    - versionNumber - `number` -资源版本号
    - content - `object` - 资源版本详情
    - status - `string` - 资源版本发布状态，`base`,`release`
    - deleted - `boolean` - 资源版本删除状态，true: 已删除，false,正常
    - creator - `string` - 资源版本创建者 ID
    - createTime - `date` - 资源版本创建时间
    - updateTime - `date` - 资源版本更新时间

### 删除资源组

#### <Badge>API</Badge> PUT /resources/group-status

删除资源新信息，同时删除资源组下的所有资源文件夹，文件，以及版本信息

请求

```json
{
  "applicationId": "appl_EJlrKxog8TmgvLA",
  "id": "fold_RuK8simqT3kdJQu"
}
```

- 参数
  - applicationId - `string` - 必选，应用 ID
  - id - `string` - 必选，资源组 ID

返回

详细见[`FolderBaseDetail`](#folderbasedetail)

### 删除资源文件夹

#### <Badge>API</Badge> PUT /resources/folder-status

删除资源文件夹，包括其下的资源文件以及资源内容，版本信息

请求

```json
{
  "applicationId": "appl_EJlrKxog8TmgvLA",
  "id": "fold_RuK8simqT3kdJQu"
}
```

- 参数
  - applicationId - `string` - 必选，应用 ID
  - id - `string` - 必选，资源文件夹 ID

返回

详细见[`FolderBaseDetail`](#folderbasedetail)

### 删除资源文件

#### <Badge>API</Badge> PUT /resources/file-status

删除资源文件，包括其下的内容和版本信息

请求

```json
{
  "applicationId": "appl_EJlrKxog8TmgvLA",
  "id": "file_Fl22D5KyZ20cP0L"
}
```

- 参数
  - applicationId - `string` - 必选，应用 ID
  - id - `string` - 必选，资源文件 ID

返回
详细见[`TypeFile`](#typefile)

### 删除资源内容

#### <Badge>API</Badge> PUT /resources/content-status

删除资源内容，包括版本信息

请求

```json
{
  "applicationId": "appl_EJlrKxog8TmgvLA",
  "id": "cont_tT4poWveGWM8N4n"
}
```

- 参数
  - applicationId - `string` - 必选，应用 ID
  - id - `string` - 必选，资源内容 ID

返回

详情见[`TypeFile`](#typefile)

### 删除指定的资源文件夹，资源文件

#### <Badge>API</Badge> PUT /resource/status

删除指定的资源文件夹，资源文件，暂时只删除指定数据，不删除其子集信息

请求

```json
{
  "applicationId": "appl_EJlrKxog8TmgvLA",
  "ids": ["cont_tT4poWveGWM8N4n"]
}
```

- 参数
  - applicationId - `string` - 必选，应用 ID
  - ids - `string[]` - 必选，资源 ID，包括文件夹，文件 ID

## 组件

### 获取组件列表

#### <Badge>API</Badge> GET /component-searchs

请求

```
GET /component-searchs?applicationId=appl_yqfu8BI1BRe15fs&type=component&search=&page=1&size=10
```

- 参数
  - applicationId - `string` - 必选，应用 ID
  - type - `string` - 必选，组件类型, `component`,`editor`,`library`
  - search - `string` - 可选，模糊匹配组件名称，默认为空
  - page - `number` - 可选，当前页数，默认为 1
  - size - `number` - 可选，每页数据数，默认为 10

返回

```json
{
  "data": [
    {
      "id": "file_FcKE5zW6uO2avt9",
      "name": "@fox-design/react-slot",
      "applicationId": "appl_yqfu8BI1BRe15fs",
      "folderId": "fold_em4pqtFSFOua4zo",
      "type": "component",
      "intro": "",
      "tags": [],
      "creator": {
        "id": "user-dvbfW1qsl8qkz39",
        "account": "fox-user"
      },
      "contentId": "cont_X3oHESmT7lQebHz",
      "deleted": false,
      "createTime": "2021-09-18T02:20:53.677Z",
      "updateTime": "2021-09-18T02:20:53.677Z"
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

  - data - `array` - 组件详情列表
    - id - `string` - 组件 ID
    - name - `string` - 组件名称
    - applicationId - `string` - 组件所属应用 ID
    - folderId - `string` - 组件所属文件夹 ID
    - type - `string` - 组件类型，`component`,`editor`,`library`
    - intro - `string` - 组件简介
    - tags - `array` - 组件标签
    - creator - `string` - 组件创建者信息
      - id - `string` - 创建者 ID
      - account - `string` - 创建者名称
    - contentId - `string` - 组件下内容 ID
    - deleted - `boolean` - 组件删除状态，true:已删除，false:正常
    - createTime - `date` - 组件创建时间
    - updateTime - `date` - 组件更新时间
  - pageInfo - `object` - 分页信息，详见 [`PageInfo`](#pageinfo)

### 获取组件 live 版本

#### <Badge>API</Badge> POST /components/live-versions

获取组件的 live 版本详情，如果制定了 contentIds，则获取指定的 content 的 live 版本信息

请求

```json
{
  "applicationId": "appl_yqfu8BI1BRe15fs",
  "type": ["component"],
  "componentIds": []
}
```

- 参数
  - applicationId - `string` - 必选，应用 ID
  - type - `string[]` - 可选，查询的组件类型，`component`,`editor`,`library`
  - componentIds: `string[]` - 可选，指定的组件 ID

返回

```json
{
  "data": [
    {
      "id": "cont_EnDIBD76d6Wy7aC",
      "type": "component",
      "name": "@fox-design/antd-layout",
      "version": "0.0.2",
      "meta": "{}",
      "schema": "{}",
      "enableChildren": true,
      "changelog": "",
      "resource": {
        "entry": {
          "browser": "https://www.unpkg.com/@fox-design/antd-layout@0.0.2/dist/umd/production.min.js",
          "node": "https://www.unpkg.com/@fox-design/antd-layout@0.0.2/dist/cjs/production.js",
          "debug": "",
          "css": ""
        },
        "editor-entry": [],
        "dependencies": [
          {
            "id": "cont_fVDCJCSipb361K4",
            "name": "moment"
          }
        ]
      },
      "components": [
        {
          "name": "moment",
          "id": "cont_fVDCJCSipb361K4",
          "versionId": "cver_l7Z8QWx8tnKHrtx",
          "version": "0.0.2",
          "resource": {
            "entry": {
              "browser": "https://www.unpkg.com/moment@2.29.1/min/moment.min.js",
              "node": "https://www.unpkg.com/moment@2.29.1/min/moment.min.js",
              "debug": "",
              "css": ""
            },
            "editor-entry": [],
            "dependencies": []
          },
          "meta": "{}",
          "schema": "{}",
          "changelog": ""
        }
      ],
      "isLive": true
    }
  ]
}
```

- 说明

  - data - `array` - 组件详情, 详见 [`ComponentVersionWithResource`](#componentversionwithresource)

    - components - `array` - 组件中依赖的组件详情,详见 [`ComponentVersionWithResource`](#componentversionwithresource)
    - isLive - `boolean` - 当前版本是否是 live 版本标志

### 获取指定的组件详情

#### <Badge>API</Badge> POST /components/version-infos

通过组件名称和版本获取组件的详情

请求

```json
{
  "applicationId": "appl_yqfu8BI1BRe15fs",
  "nameVersions": [
    {
      "name": "@fox-design/react-slot"
    }
  ],
  "type": []
}
```

- 参数
  - applicationId - `string` - 必选，应用 ID
  - nameVersions - `array` - 组件名称和版本信息
    - name - `string` - 必选，组件名称
    - version - `string` - 可选，组件版本
  - type - `string[]` - 可选，组件类型列表，`component`,`editor`,`library`

返回

```json
{
  "data": [
    {
      "name": "@fox-design/react-slot",
      "version": "",
      "package": {
        "id": "cont_X3oHESmT7lQebHz",
        "name": "@fox-design/react-slot",
        "meta": "{}",
        "useStyleEditor": false,
        "enableChildren": true,
        "changelog": "",
        "version": "0.1.1",
        "type": "component",
        "isLive": true,
        "resource": {
          "entry": {
            "browser": "https://www.unpkg.com/@fox-design/react-slot@0.1.1/dist/umd/production.min.js",
            "node": "https://www.unpkg.com/@fox-design/react-slot@0.1.1/dist/cjs/production.js",
            "debug": "",
            "css": ""
          },
          "editor-entry": [
            {
              "id": "cont_YPwBg8ptFsQKv3q",
              "name": "@fox-design/react-slot_editor"
            }
          ],
          "dependencies": []
        },
        "components": [
          {
            "id": "cont_YPwBg8ptFsQKv3q",
            "name": "@fox-design/react-slot_editor",
            "versionId": "cver_vwXNPyVp5MAdUp1",
            "version": "0.1.1",
            "meta": "{}",
            "schema": "{}",
            "changelog": "",
            "resource": {
              "entry": {
                "browser": "https://www.unpkg.com/@fox-design/react-slot@0.1.1/dist/umd/editor.js",
                "node": "",
                "debug": "",
                "css": ""
              },
              "editor-entry": [],
              "dependencies": []
            }
          }
        ]
      }
    }
  ]
}
```

- 说明
  - data - `array`- 指定的组件详情
    - name - `string` - 指定的组件名称
    - version - `string` - 指定的组件版本
    - packages - `object` - 组件详情，详见 [`ComponentVersionWithResource`](#componentversionwithresource)
      - isLive - `boolean` - 当前版本是否是 live 版本标记
      - components - `array` - 组件依赖的组件详情列表
        - 详见 [`ComponentVersionWithResource`](#componentversionwithresource)

### 获取组件内容详情

#### <Badge>API</Badge> GET /components/contents

获取组件的内容信息

请求

```
GET /components/contents?applicationId=appl_yqfu8BI1BRe15fs&id=file_FcKE5zW6uO2avt9
```

- 参数
  - applicationId - `string` - 必选，应用 ID
  - id - `string` - 必选，组件 ID

返回

```json
{
  "data": {
    "id": "cont_X3oHESmT7lQebHz",
    "title": "@fox-design/react-slot",
    "fileId": "file_FcKE5zW6uO2avt9",
    "type": "component",
    "tags": [],
    "liveVersion": "0.1.1",
    "liveVersionNumber": 10001,
    "deleted": false,
    "creator": {
      "id": "user-dvbfW1qsl8qkz39",
      "account": "fox-user"
    },
    "createTime": "2021-09-18T02:20:53.682Z",
    "updateTime": "2021-09-18T02:24:31.708Z"
  }
}
```

- 说明
  - data - `object` - 组件内容详情
    - id - `string` - 内容 ID
    - title - `string` - 内容名称
    - fileId - `string` - 内容所属文件 ID
    - type - `string` - 内容所属文件类型，`component`,`editor`,`library`
    - tags - `array` - 内容标签
    - liveVersion - `string` - 内容的 live 版本号
    - liveVersionNumber - `number` - 内容的 live 版本号
    - deleted - `boolean` - 内容的删除状态，true:已删除，false:正常
    - creator - `object` - 内容创建者信息
      - id - `string` - 创建者 ID
      - account - `string` - 创建者名称
    - createTime - `date` - 内容创建时间
    - updateTime - `date` - 内容更新时间

### 获取组件的编辑版本详情

#### <Badge>API</Badge> GET /components/edit-versions

通过组件版本 ID 获取组件编辑版本的详情信息

请求

```
GET /components/edit-versions?applicationId=appl_yqfu8BI1BRe15fs&id=cver_Uq1AaB1aiBjo1ji
```

- 参数
  - applicationId - `string` - 必选，应用 ID
  - id - `string` - 必选，组件版本 ID

返回

详见 [`ComponentVersionWithResource`](#componentversionwithresource)

### 获取组件版本列表

#### <Badge>API</Badge> GET /components/version-searchs

获取组件的版本分页列表

请求

```
GET /components/version-searchs?applicationId=appl_yqfu8BI1BRe15fs&id=file_FcKE5zW6uO2avt9&page=1&size=10
```

- 参数
  - applicationId - `string` - 必选，应用 ID
  - id - `string` - 必选，组件 ID（文件 ID）
  - page - `number` - 可选，当前页数，默认为 1
  - size - `number` - 可选，每页数据数，默认为 10

返回

```json
{
  "data": [
    {
      "id": "cver_Uq1AaB1aiBjo1ji",
      "contentId": "cont_X3oHESmT7lQebHz",
      "version": "0.1.1",
      "versionNumber": 10001,
      "status": "release",
      "content": {
        "id": "cont_X3oHESmT7lQebHz",
        "resource": {
          "entry": {
            "browser": "https://www.unpkg.com/@fox-design/react-slot@0.1.1/dist/umd/production.min.js",
            "node": "https://www.unpkg.com/@fox-design/react-slot@0.1.1/dist/cjs/production.js",
            "debug": "",
            "css": ""
          },
          "editor-entry": [
            {
              "id": "cont_YPwBg8ptFsQKv3q",
              "name": "@fox-design/react-slot-text"
            }
          ],
          "dependencies": []
        },
        "meta": "{}",
        "schema": "{}",
        "useStyleEditor": false,
        "enableChildren": true,
        "changelog": ""
      },
      "deleted": false,
      "creator": {
        "id": "user-dvbfW1qsl8qkz39",
        "account": "fox-user"
      },
      "isLiveVersion": true,
      "createTime": "2021-09-18T02:24:28.989Z",
      "updateTime": "2021-09-18T02:24:30.646Z"
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

  - data - `array` - 组件版本详情列表, 详见 [`ComponentVersionWithResource`](#componentversionwithresource)
  - pageInfo - `object` - 分页信息，详见 [`PageInfo`](#pageinfo)

### 获取组件版本详情

#### <Badge>API</Badge> GET /components/versions

通过组件文件 ID，组件版本号来获取组件版本详情

请求

```
GET /components/versions?applicationId=appl_yqfu8BI1BRe15fs&id=file_FcKE5zW6uO2avt9&versionNumber=10001
```

- 参数
  - applicationId - `string` - 必选，应用 ID
  - id - `string` - 必选，组件 ID（文件 ID）
  - versionNumber - `number` - 必选，版本号

返回
详见 [`ComponentVersionWithResource`](#componentversionwithresource)

### 新增组件详情

#### <Badge>API</Badge> POST /components

新增组件详情信息,只创建组件文件,内容的详情

请求

```json
{
  "applicationId": "appl_yqfu8BI1BRe15fs",
  "name": "@fox-design/react-slot-test",
  "type": "component"
}
```

- 参数
  - applicationId - `string` - 必选，应用 ID
  - name - `string` - 必选，组件名称
  - type - `string` - 必选，组件类型，`component`,`editor`,`library`

返回

详见 [`ComponentFile`](#componentfile)

### 新增组件版本详情

#### <Badge>API</Badge> POST /components/versions

新增组件版本详情信息

请求信息

```json
{
  "applicationId": "appl_yqfu8BI1BRe15fs",
  "contentId": "cont_HiucMsjjOEk6lix",
  "version": "0.0.1",
  "content": {
    "id": "cont_HiucMsjjOEk6lix",
    "resource": {
      "entry": {
        "browser": "cont_3ukIeVI9IYRWarx",
        "node": "cont_235wnI622YI7QR8",
        "debug": "",
        "css": ""
      },
      "editor-entry": [
        {
          "id": "cont_zKBDB0kEBeJzxNj"
        }
      ],
      "dependencies": []
    },
    "meta": "{}",
    "schema": "{}",
    "enableChildren": true,
    "changelog": ""
  }
}
```

- 参数
  - applicationId - `string` - 必选，应用 ID
  - contentId - `string` - 必选，组件内容 ID
  - version - `string` - 必选，组件版本号，如:`0.0.1`, `0.1.1`
  - content - `object` - 可选，组件详情，详见`...`

返回

详见[`ComponentBaseVersion`](#componentbaseversion)

### 更新组件文件信息

#### <Badge>API</Badge> PUT /components

更新组件文件信息，由于组件的特殊性，目前只支持文件简介更新

请求

```json
{
  "applicationId": "appl_yqfu8BI1BRe15fs",
  "id": "file_dL43KQBVcFGTpUJ",
  "intro": "test intro"
}
```

- 参数
  - applicationId - `string` - 必选，应用 ID
  - id - `string` - 必选，组件文件 ID
  - intro - `string` - 必选，组件简介

返回

详见 [`ComponentFile`](#componentfile)

### 更新组件内容详情

#### <Badge>API</Badge> PUT /components/contents

更新组件内容信息, 目前只能更新内容标签信息
请求

```json
{
  "applicationId": "appl_yqfu8BI1BRe15fs",
  "id": "cont_HiucMsjjOEk6lix",
  "tags": [{ "type": "content" }]
}
```

- 参数
  - applicationId - `string` - 必选，应用 ID
  - id - `string` - 必选，组件内容 ID
  - tags - `array` - 必选，组件内容标签，自定义格式

返回

详见[`TypeContent`](#typecontent)

### 更新组件版本详情

#### <Badge>API</Badge> PUT /components/versions

更新组件版本详情信息

请求

```json
{
  "applicationId": "appl_yqfu8BI1BRe15fs",
  "id": "cver_Uq1AaB1aiBjo1ji",
  "content": {
    "id": "cont_HiucMsjjOEk6lix",
    "resource": {
      "entry": {
        "browser": "cont_3ukIeVI9IYRWarx",
        "node": "cont_235wnI622YI7QR8",
        "debug": "",
        "css": ""
      },
      "editor-entry": [
        {
          "id": "cont_zKBDB0kEBeJzxNj"
        }
      ],
      "dependencies": []
    },
    "meta": "{}",
    "schema": "{}",
    "enableChildren": true,
    "changelog": ""
  },
  "version": "0.1.2"
}
```

- 参数
  - applicationId - `string` - 必选，应用 ID
  - id - `string` - 必选，组件版本 ID
  - content - `object` - 必选，组件版本详情
  - version- `string` - 可选，组件版本号，如：`0.1.2`

返回

详见[`ComponentBaseVersion`](#componentbaseversion)

### 发布组件版本

#### <Badge>API</Badge> PUT /components/version-publish

发布组件版本，将状态设置发布状态，比如`release`

请求

```json
{
  "applicationId": "appl_yqfu8BI1BRe15fs",
  "id": "cver_Uq1AaB1aiBjo1ji",
  "status": "release"
}
```

- 参数
  - applicationId - `string` - 必选，应用 ID
  - id - `string` - 必选，组件版本 ID
  - status - `string` - 必选，组件版本状态，如：`release`

返回

详见[`ComponentBaseVersion`](#componentbaseversion)

### 设置组件的 live 版本

#### <Badge>API</Badge> PUT /components/live-versions

设置组件的 live 版本信息

请求

```json
{
  "applicationId": "appl_yqfu8BI1BRe15fs",
  "id": "cont_X3oHESmT7lQebHz",
  "versionNumber": 10002
}
```

- 参数
  - applicationId - `string` - 必选，应用 ID
  - id - `string` - 必选，组件内容 ID
  - versionNumber - `number` - 必选，组件版本号

返回

详见[`TypeContent`](#typecontent)

### 删除组件

#### <Badge>API</Badge> PUT /components/status

删除组件文件信息，包括删除组件内容，版本信息

请求

```json
{
  "applicationId": "appl_yqfu8BI1BRe15fs",
  "id": "file_dL43KQBVcFGTpUJ"
}
```

- 参数
  - applicationId - `string` - 必选，应用 ID
  - id - `string` - 必选，组件文件 ID

返回

详见 [`ComponentFile`](#componentfile)

### 删除组件内容详情

#### <Badge>API</Badge> PUT /components/content-status

删除组件内容详情，包括组件的版本信息

请求

```json
{
  "applicationId": "appl_yqfu8BI1BRe15fs",
  "id": "cont_HiucMsjjOEk6lix"
}
```

- 参数

  - applicationId - `string` - 必选，应用 ID
  - id - `string` - 必选，组件内容 ID

返回

详见[`TypeContent`](#typecontent)

### 删除组件版本详情

#### <Badge>API</Badge> PUT /components/version-status

删除组件版本详情信息

请求

```json
{
  "applicationId": "appl_yqfu8BI1BRe15fs",
  "id": "cver_Uq1AaB1aiBjo1ji"
}
```

- 参数

  - applicationId - `string` - 必选，应用 ID
  - id - `string` - 必选，组件版本 ID

返回

详见[`ComponentBaseVersion`](#componentbaseversion)

#### 数据类型

##### <Badge>TYPE</Badge> OrganizationDetail

组织详情

```json
{
  "id": "orga_j9l4qJI9hAXWTer",
  "name": "test-organization",
  "members": [
    {
      "userId": "user-dvbfW1qsl8qkz39",
      "account": "fox-user",
      "status": true,
      "joinTime": "2021-07-26T04:20:19.902Z"
    }
  ],
  "deleted": false,
  "createTime": "2021-07-26T04:20:11.163Z",
  "updateTime": "2021-07-26T04:20:19.902Z"
}
```

- 说明
  - id - `string` - 组织 ID
  - name - `string` - 组织名称
  - members - `array` - 组织成员
    - userId - `string` - 成员 ID
    - account - `string` - 成员名称
    - status - `boolean` - 成员状态， true: 正常，false: 已删除
    - joinTime - `date` - 成员加入时间
  - deleted - `boolean` - 组织删除状态, true: 已删除， false: 正常
  - createTime - `date` - 组织创建时间
  - updateTime - `date` - 组织更新时间

#### <Badge>API</Badge> TeamDetail

团队详情

```json
{
  "id": "team_m9tJYJqt3v1MLKP",
  "name": "test team",
  "organizationId": "orga_j9l4qJI9hAXWTer",
  "creator": "user-dvbfW1qsl8qkz39",
  "members": [
    {
      "userId": "user-aadeW1qsl8qkz39",
      "joinTime": "2021-10-14T09:15:54.549Z",
      "status": true
    }
  ],
  "deleted": false,
  "createTime": "2021-10-14T09:15:54.549Z",
  "updateTime": "2021-10-14T09:15:54.551Z"
}
```

- 说明
  - id - `string` - 团队 ID
  - name - `string` - 团队详情
  - organizationId - `string` - 团队所属组织 ID
  - creator - `string` - 团队创建者 ID
  - members - `array` - 团队成员信息
    - userId - `string` - 成员 ID
    - joinTime - `date` - 成员加入时间
    - status - `boolean` - 成员状态， true:正常，false: 已删除
  - deleted - `boolean` - 团队状态, true: 已删除， false: 正常
  - createTime - `date` - 团队创建时间
  - updateTime - `date` - 团队更新时间

#### <Badge>TYPE</Badge> AppDetail

应用详情

```json
{
  "id": "appl_2RjQIXBuNd3STg5",
  "name": "test-app",
  "intro": "",
  "organizationId": "orga_j9l4qJI9hAXWTer",
  "host": "",
  "slug": "flutter",
  "locales": ["en-US", "zh-HK", "ja-JP", "ko-KA"],
  "resources": [
    {
      "name": "UNPKG",
      "type": "UNPKG",
      "detail": {
        "host": "https://www.unpkg.com/",
        "downloadHost": "https://www.unpkg.com/"
      }
    }
  ],
  "deleted": false,
  "creator": "user-dvbfW1qsl8qkz39",
  "createTime": "2021-08-27T07:05:22.660Z",
  "updateTime": "2021-08-27T07:05:22.669Z"
}
```

- 说明
  - id - `string` - 应用 ID
  - name - `string` - 应用名称
  - intro - `string` - 应用简介
  - organizationId - `string` - 应用所属组织 ID
  - host - `string[]` - 应用的域名列表
  - slug - `string` - 应用 slug
  - locales - `string[]` - 当前应用配置的 locales 列表
  - resources- `array` - 应用下资源配置信息
    - name - `string` - 资源名称
    - type - `string` - 资源类型
    - detail - `object`
      - host - `string` - 资源访问地址的 host
      - downloadHost - `string` - 资源下载地址的 host
    - tags - `array` - 文件夹标签，标明文件夹的类型等信息
      - type - `string` - 文件夹类型 project|variable|condition|component...
  - deleted - `boolean` - 应用的状态，true:启用，false:停用
  - creator - `string` - 应用创建者 ID
  - createTime - `date` - 应用创建时间
  - updateTime - `date` - 应用上次更新时间

#### <Badge>TYPE</Badge> AppDetailWithFolder

包含默认文件夹的应用详情

```json
{
  "id": "appl_2RjQIXBuNd3STg5",
  "name": "test-app",
  "intro": "",
  "organizationId": "orga_j9l4qJI9hAXWTer",
  "host": "",
  "slug": "flutter",
  "locales": ["en-US", "zh-HK", "ja-JP", "ko-KA"],
  "resources": [
    {
      "name": "UNPKG",
      "type": "UNPKG",
      "detail": {
        "host": "https://www.unpkg.com/",
        "downloadHost": "https://www.unpkg.com/"
      }
    }
  ],
  "folders": [
    {
      "parentFolderId": "",
      "folderPath": "project",
      "deleted": false,
      "id": "fold_eXkHNVL1EtubEo4",
      "name": "_project",
      "intro": "",
      "applicationId": "appl_2RjQIXBuNd3STg5",
      "tags": [
        {
          "type": "project"
        }
      ]
    }
  ],
  "deleted": false,
  "creator": "user-dvbfW1qsl8qkz39",
  "createTime": "2021-08-27T07:05:22.660Z",
  "updateTime": "2021-08-27T07:05:22.669Z"
}
```

- 说明
  - id - `string` - 应用 ID
  - name - `string` - 应用名称
  - intro - `string` - 应用简介
  - organizationId - `string` - 应用所属组织 ID
  - host - `string[]` - 应用的域名列表
  - slug - `string` - 应用 slug
  - locales - `string[]` - 当前应用配置的 locales 列表
  - resources- `array` - 应用下资源配置信息
    - name - `string` - 资源名称
    - type - `string` - 资源类型
    - detail - `object`
      - host - `string` - 资源访问地址的 host
      - downloadHost - `string` - 资源下载地址的 host
  - folders - `array` - 应用下所有默认根文件夹
    - id - `string` - 文件夹 ID
    - name - `string` - 文件夹名称
    - intro - `string` - 文件夹简介
    - applicationId - `string` - 文件夹所属应用 ID
    - tags - `array` - 文件夹标签，标明文件夹的类型等信息
      - type - `string` - 文件夹类型 project|variable|condition|component...
  - deleted - `boolean` - 应用的状态，true:启用，false:停用
  - creator - `string` - 应用创建者 ID
  - createTime - `date` - 应用创建时间
  - updateTime - `date` - 应用上次更新时间

#### <Badge>TYPE</Badge> ComponentFile

组件文件详情

```json
{
  "data": {
    "id": "file_dL43KQBVcFGTpUJ",
    "name": "@fox-test/react-slot-test",
    "applicationId": "appl_yqfu8BI1BRe15fs",
    "folderId": "fold_em4pqtFSFOua4zo",
    "intro": "test intro",
    "tags": [],
    "suffix": "",
    "type": "component",
    "deleted": true,
    "creator": "user-dvbfW1qsl8qkz39",
    "createTime": "2021-10-20T03:02:25.722Z",
    "updateTime": "2021-10-20T05:34:22.445Z"
  }
}
```

- 说明
  - data - `object` - 组件文件详情
    - id - `string` - 文件 ID
    - name - `string` - 文件名称
    - applicationId - `string` - 文件所属应用 ID
    - folderId - `string` - 文件所属文件夹 ID
    - intro - `string` - 文件简介
    - tags - `array` - 文件标签
    - suffix - `string` - 文件后缀
    - type - `string` - 文件类型，`component`,`editor`,`library`
    - deleted - `boolean` - 文件删除状态, true: 已删除，false:正常
    - creator - `string` - 文件创建者 ID
    - createTime - `date` - 文件创建时间
    - updateTime - `date` - 文件更新时间

#### <Badge>TYPE</Badge> ComponentBaseVersion

组件版本详情

```json
{
  "code": 200,
  "data": {
    "id": "cver_Uq1AaB1aiBjo1ji",
    "contentId": "cont_X3oHESmT7lQebHz",
    "content": {
      "id": "cont_X3oHESmT7lQebHz",
      "resource": {
        "entry": {
          "browser": "cont_3ukIeVI9IYRWarx",
          "node": "cont_235wnI622YI7QR8",
          "debug": "",
          "css": ""
        },
        "editor-entry": [
          {
            "id": "cont_zKBDB0kEBeJzxNj"
          }
        ],
        "dependencies": []
      },
      "meta": "{}",
      "schema": "{}",
      "enableChildren": true,
      "changelog": ""
    },
    "version": "0.1.2",
    "versionNumber": 10002,
    "status": "release",
    "deleted": true,
    "creator": "user-dvbfW1qsl8qkz39",
    "createTime": "2021-09-18T02:24:28.989Z",
    "updateTime": "2021-10-20T05:47:49.420Z"
  }
}
```

- 说明
  - data - `array` - 组件版本详情列表
    - id - `string` - 版本 ID
    - contentId - `string` - 版本所属内容 ID
    - version - `string` - 版本号
    - versionNumber - `number` - 版本号
    - status - `string` - 版本发布状态, `base`,`release`
    - content - `object` - 版本详情，
      - id - `string` - 组件的内容 ID
      - name - `string` - 组件名称
      - version - `string` - 组件版本
      - type - `string` - 组件类型
      - resource - `object` - 组件的资源信息
        - entry - `object` - entry 信息
          - browser - `string` - URL, 组件在浏览器端使用资源内容 ID
          - node - `string` - URL, 组件在服务端使用的资源内容 ID
          - debug - `string` - URL, 组件在 debug 时使用的资源内容 ID
          - css - `string` - URL, 组件使用的样式文件资源内容 ID
        - editor-entry - `array` - editor 信息
          - id - `string` - editor 组件依赖的组件 ID
        - dependencies - `array` - 依赖信息
          - id - `string` - 依赖的组件 ID
      - meta - `string` - meta 信息
      - schema - `string` - schema 信息
      - useStyleEditor - `boolean` - 是否使用默认编辑功能标记
      - enableChildren - `boolean` - 是否允许包含组件标记
      - changelog - `string` - 当前组件版本的更新日志
  - deleted - `boolean` - 版本的删除状态，true:已删除，false:正常
  - creator - `string` - 创建者 ID
  - createTime - `date` - 版本创建时间
  - updateTime - `date` - 版本更新时间

#### <Badge>TYPE</Badge> ComponentVersionWithResource

组件版本信息，包含解析后的资源详情

```json
{
  "data": {
    "id": "cver_Uq1AaB1aiBjo1ji",
    "contentId": "cont_X3oHESmT7lQebHz",
    "version": "0.1.1",
    "versionNumber": 10001,
    "status": "release",
    "content": {
      "id": "cont_X3oHESmT7lQebHz",
      "resource": {
        "entry": {
          "browser": {
            "path": "demo-unpkg/fox-design-react-slot/0-1-1/umd/production.min.js",
            "contentId": "cont_Y8anUQOukNFKVC7"
          },
          "node": {
            "path": "demo-unpkg/fox-design-react-slot/0-1-1/cjs/production.js",
            "contentId": "cont_vgv0u5muaVEwPXN"
          },
          "debug": "",
          "css": ""
        },
        "editor-entry": [
          {
            "id": "cont_YPwBg8ptFsQKv3q",
            "name": "@fox-design/react-slot_editor"
          }
        ],
        "dependencies": []
      },
      "meta": "{}",
      "schema": "{}",
      "useStyleEditor": false,
      "enableChildren": true,
      "changelog": ""
    },
    "deleted": false,
    "creator": "user-dvbfW1qsl8qkz39",
    "createTime": "2021-09-18T02:24:28.989Z",
    "updateTime": "2021-09-18T02:24:30.646Z"
  }
}
```

- 说明
  - data - `object` - 组件版本详情信息
    - id - `string` - 版本 ID
    - contentId - `string` - 版本所属内容 ID
    - version - `string` - 版本号
    - versionNumber - `number` - 版本号
    - status - `string` - 版本发布状态, `base`,`release`
    - content - `object` - 版本详情，[`ComponentVersion`](#componentversion)
    - deleted - `boolean` - 版本的删除状态，true:已删除，false:正常
    - creator - `string` - 版本创建者 ID
    - createTime - `date` - 版本创建时间
    - updateTime - `date` - 版本更新时间

#### <Badge>TYPE</Badge> ComponentVersion

组件版本下 content 字段详情

```json
{
  "id": "cont_EnDIBD76d6Wy7aC",
  "type": "component",
  "name": "@fox-design/antd-layout",
  "version": "0.0.2",
  "resource": {
    "entry": {
      "browser": "https://www.unpkg.com/@fox-design/antd-layout@0.0.2/dist/umd/production.min.js",
      "node": "https://www.unpkg.com/@fox-design/antd-layout@0.0.2/dist/cjs/production.js",
      "debug": "",
      "css": ""
    },
    "editor-entry": [
      {
        "id": "cont_YPwBg8ptFsQKv3q",
        "name": "@fox-design/react-slot_editor"
      }
    ],
    "dependencies": [
      {
        "id": "cont_fVDCJCSipb361K4",
        "name": "moment"
      }
    ]
  },
  "meta": "{}",
  "schema": "{}",
  "enableChildren": true,
  "changelog": ""
}
```

- 说明
  - id - `string` - 组件的内容 ID
  - name - `string` - 组件名称
  - version - `string` - 组件版本
  - type - `string` - 组件类型
  - resource - `object` - 组件的资源信息
    - entry - `object` - entry 信息
      - browser - `string` - URL, 组件在浏览器端使用的地址
      - node - `string` - URL, 组件在服务端使用的地址
      - debug - `string` - URL, 组件在 debug 时使用的地址
      - css - `string` - URL, 组件使用的样式文件地址
    - editor-entry - `array` - editor 信息
      - id - `string` - editor 组件的内容 ID
      - name - `string` - editor 组件名称
    - dependencies - `array` - 依赖信息
      - id - `string` - 依赖的组件的内容 ID
      - name - `string` - 依赖的组件名称
  - meta - `string` - meta 信息
  - schema - `string` - schema 信息
  - useStyleEditor - `boolean` - 是否使用默认编辑功能标记
  - enableChildren - `boolean` - 是否允许包含组件标记
  - changelog - `string` - 当前组件版本的更新日志

#### <Badge>TYPE</Badge> PageInfo

分页信息

```json
{
  "pageInfo": {
    "page"： 1，
    "size": 10,
    "total": 1
  }
}
```

- pageInfo
  - page - `number` - 当前页数
  - size - `number` - 当前每页数据数
  - total - `number` - 总数据量

#### <Badge>API</Badge>FolderBaseDetail

文件夹信息

```json
{
  "id": "fold_pOginfBEFU2Rrlb",
  "name": "new-project-folder",
  "intro": "test inintro",
  "applicationId": "appl_yqfu8BI1BRe15fs",
  "tags": [],
  "parentFolderId": "fold_j2gEgJEGLJjdCmM",
  "folderPath": "new-project-folder",
  "deleted": false,
  "creator": "user-dvbfW1qsl8qkz39",
  "createTime": "2021-09-18T02:24:44.341Z",
  "updateTime": "2021-09-18T02:24:44.342Z"
}
```

- 说明
  - id - `string` - 文件夹 ID
  - name - `string` - 文件夹名称
  - intro - `string` - 文件夹简介
  - folderPath - `string` - 文件夹路径
  - parentFolderId - `string` - 文件夹上级文件夹 ID
  - tags - `array` - 文件夹标签
  - deleted - `boolean` - 文件夹状态， true:已删除， false: 正常
  - creator - `string` - 创建者 ID
  - application - `string` - 应用 ID
  - createTime - `date` - 文件夹创建时间
  - updateTime - `date` - 文件夹更新时间

#### <Badge>TYPE</Badge> TypeFile

文件信息

```json
{
  "id": "file_GjWcFEuN8OYKYSX",
  "applicationId": "appl_EJlrKxog8TmgvLA",
  "name": "editor-file",
  "folderId": "fold_XRwaFwyE368REzj",
  "type": "resource",
  "intro": "",
  "tags": [{ "pathname": "/test-path" }],
  "suffix": "fp",
  "deleted": false,
  "creator": "user-dvbfW1qsl8qkz39",
  "createTime": "2021-09-17T06:00:21.172Z",
  "updateTime": "2021-09-17T06:00:21.173Z"
}
```

- 说明
  - id - `string` - 类型文件 ID
  - applicationId - `string` - 应用 ID
  - name - `string` - 类型文件名称
  - intro - `string` - 类型文件简介
  - folderId - `string` - 类型文件上级文件夹 ID
  - type - `string` - 文件的类型，包括`page`, `template`, `variable`, `condition`,`function`, `resource`, `component`等
  - tags - `array` - 类型文件标签
  - suffixed - `string` - 类型文件后缀
  - deleted - `boolean` - 类型文件的删除状态，true:已删除，false:正常
  - creator - `string` - 类型文件创建者
  - createTime - `date` - 类型文件创建时间
  - updateTime - `date` - 类型文件更新时间

#### <Badge>TYPE</Badge> TypeContent

内容类型信息

```json
{
  "data": {
    "id": "cont_sO5PWa2EkN3FYw6",
    "title": "test-content-name",
    "fileId": "file_6EYucITtYOevN5E",
    "tags": [
      {
        "type": ""
      }
    ],
    "liveVersionNumber": 1,
    "deleted": false,
    "creator": "user-dvbfW1qsl8qkz39",
    "createTime": "2021-10-18T08:51:07.126Z",
    "updateTime": "2021-10-18T09:12:54.406Z"
  }
}
```

- 说明
  - data - 类型文件内容详情，`variable`,`condition`,`function`, `page`, `template`, `component`, `editor`, `library`等
    - id - `string` - 类型内容 ID
    - title - `string` - 类型内容 ID
    - fileId - `string` - 类型内容所属文件 ID
    - tags - `array` - 类型内容标签, 内容自定义
    - liveVersionNumber - `number` - 类型内容的 live 版本号
    - deleted - `boolean` - 类型内容删除状态，true:已删除，false:正常
    - creator - `string` - 类型内容创建者 ID
    - createTime - `date` - 类型内容创建时间
    - updateTime - `date` - 类型内容更新时间

#### <Badge>TYPE</Badge> TypeVersion

版本类型详情

```json
{
  "data": {
    "id": "cver_RSgVk5PuL4ABoN3",
    "contentId": "cont_sO5PWa2EkN3FYw6",
    "content": {
      "id": "cont_sO5PWa2EkN3FYw6",
      "schemas": [],
      "relation": {}
    },
    "version": "0.0.2",
    "versionNumber": 2,
    "status": "release",
    "deleted": false,
    "creator": "user-dvbfW1qsl8qkz39",
    "createTime": "2021-10-18T08:51:07.139Z",
    "updateTime": "2021-10-18T09:26:55.080Z"
  }
}
```

- id - `string` - 内容版本 ID
- contentId - `string` - 内容 ID
- content - `object` - 内容版本详情
  - id - `string` - 内容 ID
  - schemas - `array` - 内容数据
    - name - `string` - 当前内容的名称
    - type - `string` - props 的值的类型，比如，`data.static`
    - props - `object` - 内容数据具体定义
      - value - `object` - 具体格式根据 props.type 的值来确定
      - type - `string` - value 的值的格式
  - relation - `object` - 内容数据的依赖，每个依赖项是一个对象
    - id - `string` - 依赖数据的内容 ID
    - type - `string` - `依赖数据的类型`
- version - `string` - 内容版本号
- versionNumber - `number` - 内容版本号
- status - `string` - 内容版本发布状态，`base`, `release`等
- deleted - `boolean` - 内容版本删除状态，true:已删除，false:正常
- creator - `string` - 内容版本创建者 ID
- createTime - `date` - 内容版本创建时间
- updateTime - `date` - 内容版本更新时间

#### <Badge>TYPE</Badge> TypeContentVersionWithRelations

包含关联信息详情的版本信息

```json
{
  "id": "cver_fqNrpskYI4CPleD",
  "contentId": "cont_ps7HuOWAEkna1Uh",
  "content": {
    "id": "cont_ps7HuOWAEkna1Uh",
    "schemas": [
      {
        "props": {
          "value": {
            "label": "{{variableB:name}}"
          },
          "type": "json"
        },
        "type": "data.static",
        "name": "variableD"
      }
    ],
    "relation": {
      "variableA:name": {
        "type": "variable",
        "id": "cont_NTznlcX9OTeaKPS"
      },
      "variableB:name": {
        "type": "variable",
        "id": "cont_yfpX4vygoMVUyJb"
      }
    }
  },
  "relations": {
    "variables": [
      {
        "version": "0.0.1",
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
      },
      ...
    ],
    "functions": [
      ...
    ]
  },
  "version": "0.0.1",
  "versionNumber": 1,
  "status": "release",
  "deleted": false,
  "creator": "user-dvbfW1qsl8qkz39",
  "createTime": "2021-09-22T07:21:34.355Z",
  "updateTime": "2021-09-27T08:26:58.666Z"
}
```

- 说明
  - id - `string` - 类型数据版本 ID
  - contentId - `string` - 类型数据内容 ID
  - version - `string` - 版本号
  - versionNumber - `number` - 版本号
  - status - `string` - 版本发布状态
  - creator - `string` - 版本创建者 ID
  - deleted - `boolean` - 版本删除状态，true: 已删除，false: 正常
  - content - `string` - 版本内容详情
    - data - 类型文件内容详情，`variable`,`condition`,`function`等
    - id - `string` - 类型内容 ID
    - title - `string` - 类型内容 ID
    - fileId - `string` - 类型内容所属文件 ID
    - tags - `array` - 类型内容标签, 内容自定义
    - liveVersionNumber - `number` - 类型内容的 live 版本号
    - deleted - `boolean` - 类型内容删除状态，true:已删除，false:正常
    - creator - `string` - 类型内容创建者 ID
    - createTime - `date` - 类型内容创建时间
    - updateTime - `date` - 类型内容更新时间
  - relations - `object` - 各种依赖数据的详情集合，以类型来聚合, 比如`variables`, `conditions`, `functions`等
    - variables - `array`
      - data - 类型文件内容详情，`variable`,`condition`,`function`等
      - id - `string` - 类型内容 ID
      - title - `string` - 类型内容 ID
      - fileId - `string` - 类型内容所属文件 ID
      - tags - `array` - 类型内容标签, 内容自定义
      - liveVersionNumber - `number` - 类型内容的 live 版本号
      - deleted - `boolean` - 类型内容删除状态，true:已删除，false:正常
      - creator - `string` - 类型内容创建者 ID
      - createTime - `date` - 类型内容创建时间
      - updateTime - `date` - 类型内容更新时间
  - createTime - `date` - 类型数据创建时间
  - updateTime - `date` - 类型数据更新时间

#### <Badge>TYPE</Badge> FileDetail

```json
{
  "data": {
    "id": "file_Q27yiPoNl6Ah5cm",
    "name": "demo-file",
    "intro": "demo-intro",
    "applicationId": "appl_yqfu8BI1BRe15fs",
    "folderId": "fold_mGD8gIhNRlvC6cK",
    "type": "template",
    "tags": [{ "pathname": "demo" }],
    "suffix": "html",
    "creator": "user-dvbfW1qsl8qkz39",
    "deleted": false,
    "createTime": "2021-10-15T05:23:27.720Z",
    "updateTime": "2021-10-15T07:25:27.725Z"
  }
}
```

- 说明
  - data - `object` - 模板文件详情
    - id - `string` - 文件 ID
    - name - `string` - 文件名称
    - intro - `string` - 文件简介
    - applicationId - `string` - 文件所属应用 ID
    - folderId - `string` - 文件所属上级文件夹 ID
    - type - `string` - 文件类型，`page`, `template`
    - tags - `array` - 文件标签
      - pathname - `string` - 文件访问 path
    - suffix - `string` - 文件后缀
    - creator - `string` - 文件创建者 ID
    - deleted - `boolean` - 文件状态， true: 已删除，false:正常
    - createTime - `date` - 文件创建时间
    - updateTime - `date` - 文件更新时间

#### <Badge>TYPE</Badge> ContentDetail

内容详情

```json
{
  "id": "cont_46Voof9I295EWd4",
  "title": "demo-2-content-new",
  "fileId": "file_yCOCeFqElCjIF9U",
  "tags": [{ "locale": "zh-HK", "query": { "a": "b" } }],
  "liveVersionNumber": 0,
  "deleted": true,
  "creator": "user-dvbfW1qsl8qkz39",
  "createTime": "2021-10-15T06:23:27.720Z",
  "updateTime": "2021-10-15T08:24:27.725Z"
}
```

- 说明
  - id - `string` - 内容 ID
  - title - `string` - 内容名称
  - fileId - `string` - 内容所属文件 ID
  - liveVersionNumber - `number` - 内容 live 版本号
  - tags - `array` - 内容标签
    - locale - `string` - locale
    - query - `object` - query 参数对象, 属性为 `any`
  - creator - `string` - 用户 ID
  - deleted - `boolean` - 内容删除状态
  - createTime - `date` - 内容创建时间
  - updateTime - `date` - 内容更新时间

#### <Badge>TYPE</Badge> ContentVersionDetail

版本详情

```json
{
  "data": {
    "id": "cver_i1El8mbIiLIA4Dg",
    "contentId": "cont_ylpNPC33fdDgquK",
    "version": "0.0.6",
    "versionNumber": 6,
    "status": "base",
    "deleted": false,
    "creator": "user-dvbfW1qsl8qkz39",
    "createTime": "2021-09-18T02:26:23.542Z",
    "updateTime": "2021-09-23T06:02:29.458Z",
    "relations": {
      "{{__templates:cont_ylpNPC33fdDgquK:schemas}": {
        "id": "cont_ylpNPC33fdDgquK"
      }
    },
    "content": {
      "id": "cont_ylpNPC33fdDgquK",
      "schemas": [
        {
          "id": "stru_ykiifcynAFKaqsY",
          "label": "@fox-design/react-html",
          "name": "@fox-design/react-html",
          "directive": {
            "tpl": "{{__templates:cont_ylpNPC33fdDgquK:schemas}}"
          },
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
    },
    "components": [
      {
        "name": "@fox-design/react-html",
        "version": "0.0.4",
        "type": "component",
        "id": "cont_xb3K8k2NPp8GtpO",
        "resource": {
          "entry": {
            "browser": "https://www.unpkg.com/@fox-design/react-html@0.0.2/dist/umd/production.min.js",
            "node": "https://www.unpkg.com/@fox-design/react-html@0.0.2/dist/cjs/production.js",
            "debug": "https://www.unpkg.com/",
            "css": "https://www.unpkg.com/"
          },
          "editor-entry": [],
          "dependencies": []
        },
        "meta": "{}",
        "schema": "{}",
        "enableChildren": true,
        "changelog": ""
      }
    ]
  }
}
```

- 说明
  - data - `object` - 页面版本详情
    - id - `string` - 版本 ID
    - contentId - `string` - 版本所属内容 ID
    - version - `string` - 版本号
    - versionNumber - `number` - 版本号
    - status - `string` - 版本发布状态
    - deleted - `boolean` - 版本删除状态
    - content - `object` - 版本内容详情
      - id - `string` - 版本所属内容 ID
      - schemas - `array` - 版本 schemas
        - id - `string` - 节点 ID
        - label - `string` - 节点名称
        - name - `string` - 节点使用的组件名称
        - directive - `object` - 页面使用的模板信息
          - tpl - `string` - 模板
        - children - `array` - 子节点信息 `schemas`
      - relations - `object` - schemas 中使用的关联信息，包括模板， 变量，条件，函数等
      - components - `array` - schemas 中使用的组件详情,详见[`ComponentVersion`](#componentversion)
    - creator - `string` - 版本创建者 ID
    - createTime - `date` - 版本创建时间
    - updateTime - `date` - 版本更新时间

#### <Badge>TYPE</Badge> TypeNewFile

```json
{
  "data": {
    "id": "file_6EYucITtYOevN5E",
    "applicationId": "appl_yqfu8BI1BRe15fs",
    "name": "variable-test-2-3",
    "intro": "",
    "folderId": "fold_gCPg5oK9ETlGdC3",
    "type": "variable",
    "tags": [],
    "suffix": "",
    "deleted": false,
    "creator": "user-dvbfW1qsl8qkz39",
    "contentId": "cont_sO5PWa2EkN3FYw6",
    "createTime": "2021-09-27T08:32:57.619Z",
    "updateTime": "2021-09-27T08:35:24.011Z"
  }
}
```

- 说明

  - data - `object` - 文件详情
    - id - `string` - 文件 ID
    - applicationId - `string` - 应用 ID
    - name - `string` - 文件名称
    - intro - `string` - 文件简介
    - folderId - `string` - 文件上级文件夹 ID
    - type - `string` - 文件的类型，包括`variable`,`condition`,`function`等
    - tags - `array` - 文件标签
    - suffixed - `string` - 文件后缀
    - deleted - `boolean` - 文件的删除状态，true:已删除，false:正常
    - creator - `string` - 文件创建者
    - contentId - `string` - 文件对应的下级内容 ID
    - createTime - `date` - 文件创建时间
    - updateTime - `date` - 文件更新时间
