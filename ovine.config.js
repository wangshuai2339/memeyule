// ovine 编译配置 文档： https://ovine.igroupes.com/org/docs/advance/configurations
module.exports = {
  favicon: '/static/images/favicon.ico', // 页面 icon
  title: '么么测试管理系统', // 页面标题
  ui: {
    initTheme: 'cxd',
  },
  envModes: ['localhost', 'staging', 'production'], // 对应的 env 的三个配置，可以自行添加，或者修改。
  devServer: {
    proxy: {
      '/api/*': {
        // target: 'https://cs-admin.memeyule.com/api',
        target: 'http://192.168.31.79:8000',
        changeOrigin: true,
      },
    },
  },
}
