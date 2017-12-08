# NODEJS-Koa2
基于Koa2搭建Node.js

资料来源
- https://github.com/ikcamp/koa2-tutorial
- 新增eslint代码检测规范
- 增加统一编辑器编码风格文件


- controller 参数处理
- service 业务逻辑层

学习记录

-日志模块 直接研究代码不是很清晰
- 找到一个更好的node-koa2目录组织
- 未增加view层 是想前后分离反接口给前台
- 本地开发发现跨域问题 vue-cli配置问题
- 低级错误 dockerfile 文件首字母必须大写 触发daocloud 自动构建任务 dockerfile无法识别

```
.
├── README.md 项目描述
├── app  业务侧代码
│   ├── controller 与路由关联的api方法
│   └── modal 数据模型
├── app.js 入口文件
├── bin nodemon
│   ├── run  nodemon 的入口文件
│   └── www
├── config 配置文件
│   ├── dbConfig.js 数据库配置
│   ├── logConfig.js 日志配置 
│   └── serverConfig.js 服务配置
├── logs  日志目录
│   ├── error 错误日志
│   └── response 普通响应日志 (还可以继续拆分，系统日志，业务日志)
├── middleware  中间件
│   └── loggers.js  日志中间件
├── public
│   └── stylesheets 公用文件
├── routes  路由
│   ├── allRoute.js 总路由配置
│   ├── files.js 各个模块路由配置
│   ├── index.js
│   └── users.js
├── uploads 上传文件夹
│   └── 2017-8-29
├── utils 公用方法
│   ├── logUtil.js 
│   └── mkdir.js
├── views 页面层
│   ├── error.jade
│   ├── index.jade
│   └── layout.jade
└── package.json 
```

- 优化目录结构
- 下一步增加token认证
- 连接mysql数据库
- 增加接口文件
- 增加node爬虫

