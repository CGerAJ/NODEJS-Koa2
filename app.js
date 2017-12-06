const Koa = require('koa')
const router = require('koa-router')()
const app = new Koa()

router.get('/',async (ctx,next) => {
  let stime = new Date().getTime()
  await next()
  let etime = new Date().getTime()
  ctx.response.type = 'text/html'
  ctx.response.body =`<h1>请求地址${ctx.path},路由页</h1>`
  console.log(`请求地址${ctx.path}，响应时间 ${etime - stime}ms`)
})


router.get('/home',async (ctx,next) => {
  let stime = new Date().getTime()
  await next()
  let etime = new Date().getTime()
  ctx.response.type = 'text/html'
  ctx.response.body =`<h1>请求地址${ctx.path},路由页</h1>`
  console.log(`请求地址${ctx.path}，响应时间 ${etime - stime}ms`)

})

app.use(router.routes())

app.listen(3000, () => {
  console.log('start')
})
