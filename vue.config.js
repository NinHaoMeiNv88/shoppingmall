module.exports = {
  // 关闭语法
  lintOnSave: false,
  // 代理跨域 解决跨域问题
  devServer : {
    proxy: {
      // 发送请求的路径中带有api的都要访问一下根路径
      '/api':{
        target: 'http://gmall-h5-api.atguigu.cn',
        // pathRewroute:{}
      }
    }
  }
}