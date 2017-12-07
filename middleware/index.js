const path = require('path')
const bodyParser = require('koa-bodyparser')
const staticFiles = require('koa-static')
const miSend = require('./mi-send')
const miLog = require('./mi-log')
const ip = require('ip')
const miHttpError = require('./mi-http-error')

module.exports = (app) => {

  app.use(miHttpError())
  // 将配置中间件的参数在注册中间件时作为参数传入
  app.use(miLog({
    env: app.env,  // koa 提供的环境变量
    projectName: 'koa2-tutorial',
    appLogLevel: 'debug',
    dir: 'logs',
    serverIp: ip.address()
  }))

  app.use(staticFiles(path.resolve(__dirname, '../public')))

  app.use(bodyParser())
  app.use(miSend())
/*增加错误的监听处理 存日志*/
  app.on('error', (err, ctx) => {
    if (ctx && ctx.headerSent && ctx.status < 500) {
      ctx.status = 500
    }
    if (ctx && ctx.log && ctx.log.error) {
      if (!ctx.state.logged) {
        ctx.log.error(err.stack)
      }
    }
  })

}
