const path = require('path');

function resolve(dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    pages: {
        index: {
            // page 的入口
            entry: 'examples/main.js',
            // 模板来源
            template: 'examples/index.html',
        }
    },
    /*configureWebpack: (config) => {
        //入口文件
        config.entry.app = ['./examples/main.js'];
    },*/
    // 对内部的 webpack 配置进行更细粒度的修改。
    chainWebpack: (config) => {
        // 相对路径名
        config.resolve.alias
            .set('@$', resolve('src'))
            .set('components', resolve('src/components'))
            .set('styles', resolve('src/styles'))
            .set('utils', resolve('src/utils'))
            .set('examples', resolve('examples'))
            .set('docs', resolve('docs'));
        //打包文件带hash
        config.output.filename('[name].[hash].js').end();
    },
    devServer: {
        port: '1001'
      }
}