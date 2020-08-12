const webpack = require("webpack")
const path = require('path');

function resolve(dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    // baseUrl: './',
    runtimeCompiler: true,
    publicPath: '/', // 设置打包文件相对路径
    devServer: {
        host: 'localhost',
        port: 8088,
        https: false, // https:{type:Boolean}
        open: true,
        proxy: {
            '/api': {
                 target: 'http://127.0.0.1:8882/api/',
                    // 在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
                changeOrigin: true, 
                // ws: true,
                pathRewrite: {
                    // 替换target中的请求地址，也就是说以后你在请求http://api.jisuapi.com/XXXXX这个地址的时候直接写成/api即可
                     '^/api': '' 
                }
            }
        }
    },
    configureWebpack: {
      plugins: [
        new webpack.ProvidePlugin({
          $:"jquery",
          jQuery:"jquery",
          "windows.jQuery":"jquery"
        })
      ]
    },
    productionSourceMap: false,
    lintOnSave: false,
    chainWebpack: config => {
        config.entry.app = ["babel-polyfill", resolve('src/main.js')],
            config.resolve.alias
                .set('@', resolve('src'))
                .set('./@assets', resolve('src/assets'))
                .set('@components', resolve('src/components'))
                .set('@font', resolve('src/element-variables.scss'));
    }
}
