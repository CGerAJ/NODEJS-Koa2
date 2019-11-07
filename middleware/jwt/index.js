const config = {
  'port':process.env.PORT || 3000,
  'secret': 'jwt_secret',
  'baseApi': 'api'
}

module.exports = () =>{
 return config
}
