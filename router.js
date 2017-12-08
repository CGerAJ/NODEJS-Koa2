const router = require('koa-router')()
const HomeController = require('./controller/home')

module.exports = (app) => {

  router.get('/', HomeController.index)

  router.get('/home', HomeController.home)

  router.get('/login', HomeController.login)

  router.post('/register', HomeController.register)

  app.use(router.routes())
    .use(router.allowedMethods())
}
