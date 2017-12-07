module.exports = {
  register: async(ctx,next) => {
    let data
    if (name === 'cgeraj' && pwd === '123456' ){
      data = `hello!,${name}`
    }else{
      data = '账号信息错误'
    }
    return data
  }
}
