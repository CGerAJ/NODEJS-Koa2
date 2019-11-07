module.exports = () => {
  let fileName = 'other'

  return async (ctx,next) => {
    try {
      await next()
      if(ctx.response.status === 404 && !ctx.response.body) ctx.throw(404)
    }catch(e) {
      let status = parseInt(e.status)
      const message = e.message

      if (status >= 400){

        switch(status){
          case 400:
          case 404:
          case 500:
            fileName = status
          break
          case 401:
            ctx.status = 401;
            ctx.body = {
              error: e.originalError ? e.originalError.message : message,
            }
            break
          default:
            fileName = 'other'
        }

      }


    }
  }
}
