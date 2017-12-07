const HomeService = require('../service/home')

module.exports = {
  index: async (ctx,next) => {
    let stime = new Date().getTime()
    await next()
    let etime = new Date().getTime()
    ctx.response.type = 'text/html'
    ctx.response.body =`<h1>请求地址${ctx.path},路由页</h1>`
    console.log(`请求地址${ctx.path}，响应时间 ${etime - stime}ms`)
  },
  home: async (ctx,next) => {
    let stime = new Date().getTime()
    await next()
    let etime = new Date().getTime()
    ctx.response.type = 'text/html'
    ctx.response.body =`<h1>请求地址${ctx.path},路由页</h1>`
    console.log(`请求地址${ctx.path}，响应时间 ${etime - stime}ms`)
  },
  login: async(ctx, next) => {
    ctx.response.body =
      `
        <form action="/register" method="post">
          <input name="name" type="text" placeholder="请输入用户名：ikcamp"/> 
          <br/>
          <input name="password" type="text" placeholder="请输入密码：123456"/>
          <br/> 
          <button>GoGoGo</button>
        </form>
      `
  },
  register: async(ctx,next) =>{

    let {name,pwd} = ctx.request.body

    let data = await HomeService.register(name,pwd)

    ctx.response.body = data

  }
}
