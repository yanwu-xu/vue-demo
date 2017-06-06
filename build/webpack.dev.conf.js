var HtmlWebpackPlugin = require('html-webpack-plugin')
var path = require('path')
var webpack = require('webpack')

// 引入基本配置
var config = require('./webpack.config');

config.output.publicPath = '/';

config.plugins = [
    // 添加三个插件
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),

    new HtmlWebpackPlugin({								//创建html，自动引入js文件
        filename: 'src/index.html',
        template: path.resolve(__dirname, '../src/index.html'),
        inject: true
    })
]

// 动态向入口配置中注入 webpack-hot-middleware/client
var devClient = 'webpack-hot-middleware/client';
Object.keys(config.entry).forEach(function (name, i) {
    var extras = [devClient]
    config.entry[name] = extras.concat(config.entry[name])
})

module.exports = config;