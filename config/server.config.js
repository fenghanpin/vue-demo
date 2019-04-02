'use strict'
const api = {
  '/api/v1/**': {
      // target: 'https://cnodejs.org', // 接口域名
      secure: false,
      changeOrigin: false, //是否跨域
      // pathRewrite: {
      //     '/api/v1/**': ''
      // }
  }
}
module.exports = api