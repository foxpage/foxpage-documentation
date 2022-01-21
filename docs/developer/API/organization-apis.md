---
title: 组织、团队、用户接口
order: 1
group:
  title: API
  order: 50
---

## 组织

---

### 获取组织列表

#### <Badge>API</Badge> GET /organization-searchs

获取组织的分页列表

请求

```
GET /organization-searchs?search=&page=1&size=10
```

请求

- 参数
  - search - `string` - 可选，模糊匹配组织名称， 默认为空
  - page - `number` - 可选，当前页数，默认为 1
  - size - `number` - 可选，当前每页数据数，默认为 10

返回

```json
{
  "data": [
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
  ],
  "pageInfo": {
    "page": 1,
    "size": 10,
    "total": 1
  }
}
```

返回

- 说明
  - data - `array` - 组织详情, 详见[`OrganizationDetail`](#organizationdetail)
  - pageInfo - `object` - 分页信息，详见 [`PageInfo`](#pageinfo)

### 获取组织详情

#### <Badge>API</Badge> GET /organizations

获取指定组织的详情

请求

```
GET /organizations?id=orga_j9l4qJI9hAXWTer
```

- 参数
  - id - `string` - 必选，组织 ID

返回

- 说明
  - data - `object` - 组织详情, 详见[`OrganizationDetail`](#organizationdetail)

### 创建组织详情

#### <Badge>API</Badge> PUT /organizations

创建组织详情

请求

```json
{
  "name": "test organization"
}
```

- 参数
  - name - `string` - 必选，组织名称

返回

- 说明
  - data - `object` - 组织详情, 详见[`OrganizationDetail`](#organizationdetail)

### 更新组织详情

#### <Badge>API</Badge> PUT /organizations

目前只更新组织名称

请求

```json
{
  "organizationId": "orga_j9l4qJI9hAXWTer",
  "name": "new organization name"
}
```

- 参数
  - organizationId - `string` - 必选，组织 ID
  - name - `string` - 必选，组织名称

返回

- 说明
  - data - `object` - 组织详情, 详见[`OrganizationDetail`](#organizationdetail)

### 更新组织成员列表

#### <Badge>API</Badge> PUT /organizations/members

更新组织的成员列表信息

请求

```json
{
  "organizationId": "orga_j9l4qJI9hAXWTer",
  "members": [
    {
      "userId": "user-dvbfW1qsl8qkz39",
      "status": true
    }
  ]
}
```

- 参数
  - organizationId - `string` - 必选，组织 ID
  - members - `array` - 成员列表
    - userId - `string` - 成员 ID
    - status - `boolean` - 成员状态， true: 正常， false，删除

返回

- 说明
  - data - `object` - 组织详情, 详见[`OrganizationDetail`](#organizationdetail)

### 删除组织详情

#### <Badge>API</Badge> PUT /organizations/status

设置组织的删除状态

请求

```json
{
  "organizationId": "orga_j9l4qJI9hAXWTer"
}
```

- 参数
  - organizationId - `string` - 必选，组织 ID

返回

- 说明
  - data - `object` - 组织详情, 详见[`OrganizationDetail`](#organizationdetail)

## 团队

---

### 获取团队列表

#### <Badge>API</Badge> GET /team-searchs

获取组织下的团队分类列表数据

请求

```
GET /team-searchs?organizationId=orga_j9l4qJI9hAXWTer&search=&page=1&size=10
```

请求

- 参数
  - organizationId - `string` - 必选，组织 ID
  - search - `string` - 可选，模糊匹配团队名称，默认为空
  - page - `number` - 可选，当前页数， 默认为 1
  - size - `number` - 可选，当前每页数据数，默认为 10

返回

```json
{
  "data": [
    {
      "id": "team_m9tJYJqt3v1MLKP",
      "name": "test team",
      "organizationId": "orga_j9l4qJI9hAXWTer",
      "creator": {
        "id": "user-dvbfW1qsl8qkz39",
        "account": "fox-user"
      },
      "members": [
        {
          "userId": "user-aadeW1qsl8qkz39",
          "account": "fox-user-2",
          "joinTime": "2021-10-14T09:15:54.549Z",
          "status": true
        }
      ],
      "deleted": false,
      "createTime": "2021-10-14T09:15:54.549Z",
      "updateTime": "2021-10-14T09:15:54.551Z"
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
  - data - `array` - 团队详情
    - id - `string` - 团队 ID
    - name - `string` - 团队详情
    - organizationId - `string` - 团队所属组织 ID
    - creator - `object` - 团队创建者信息
      - id - `string` - ID
      - account - `string` - 用户名
    - members - `array` - 团队成员信息
      - userId - `string` - 成员 ID
      - account - `string` - 成员名称
      - joinTime - `date` - 成员加入时间
      - status - `boolean` - 成员状态， true:正常，false: 已删除
    - deleted - `boolean` - 团队状态, true: 已删除， false: 正常
    - createTime - `date` - 团队创建时间
    - updateTime - `date` - 团队更新时间
  - pageInfo - `object` - 分页信息，详见[`PageInfo`](#pageinfo)

### 创建团队详情

#### <Badge>API</Badge> POST /teams

创建团队详情信息

请求

```json
{
  "organizationId": "orga_j9l4qJI9hAXWTer",
  "name": "new team"
}
```

- 参数
  - organizationId - `string` - 必选，团队所属组织 ID
  - name - `string` - 必选，团队名称

返回

- 说明
  - data - `object` - 团队详情, 详见[`TeamDetail`](#teamdetail)

### 更新团队详情

#### <Badge>API</Badge> PUT /teams

当前仅更新团队名称

请求

```json
{
  "teamId": "team_m9tJYJqt3v1MLKP",
  "name": "new team name"
}
```

- 参数
  - teamId - `string` - 必选，团队 ID
  - name - `string` - 必选，团队名称

返回

- 说明
  - data - `object` - 团队详情, 详见[`TeamDetail`](#teamdetail)

### 更新团队成员

#### <Badge>API</Badge> PUT /teams/members

更新团队成员列表信息

请求

```json
{
  "teamId": "team_m9tJYJqt3v1MLKP",
  "members": [
    {
      "userId": "user-aadeW1qsl8qkz39",
      "joinTime": "2021-10-14T09:15:54.549Z",
      "status": true
    }
  ]
}
```

返回

- 说明
  - data - `object` - 团队详情, 详见[`TeamDetail`](#teamdetail)

### 删除团队详情

#### <Badge>API</Badge> PUT /teams/status

设置团队的删除状态

请求

```json
{
  "teamId": "team_m9tJYJqt3v1MLKP"
}
```

- 参数
  - teamId - `string` - 必选，团队 ID

返回

- 说明
  - data - `object` - 团队详情, 详见[`TeamDetail`](#teamdetail)

<!--
## 用户

---

### 用户登录

#### <Badge>API</Badge> POST /users/login

请求:

```json
{
  "account": "fox-user",
  "password": "...."
}
```

- 参数
  - account - `string` - 必选，用户名
  - password - `string` - 必选，用户密码

返回:

```json
{
  "userInfo": {
    "organizationId": "orga_j9l4qJI9hAXWTer",
    "id": "user-dvbfW1qsl8qkz39",
    "account": "fox-user",
    "email": "fox-user@trip.com",
    "nickName": "",
    "changePwdStatus": false
  },
  "token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9......_IthaxsJoVmOi0aFOWquAJQpG0"
}
```

- 说明
  - userInfo
    - id - `string` - 用户 ID
    - organizationId - `string` - 用户所属组织 ID
    - account - `string` - 用户名
    - email - `string` - 用户邮箱
    - nickName - `string` - 用户昵称
    - changePwdStatus - `boolean` - 用户是否需要更新密码状态
  - token - `string` - 当前登录 Token

### 用户注册

#### <Badge>API</Badge> POST /users/register

请求

```json
{
  "account": "fox-user",
  "email": "fox-user@demo.com",
  "password": "...."
}
```

- 参数
  - account - `string` - 必选，用户名
  - email - `string` - 必选，用户邮箱
  - password - `string` - 必选，用户密码

返回

```json
{
  "id": "user-dvbfW1qsl8qkz39",
  "account": "fox-user",
  "email": "fox-user@demo.com"
}
```

- 说明
  - id - `string` - 用户 ID
  - account - `string` - 用户名
  - email - `string` - 用户邮箱 -->
