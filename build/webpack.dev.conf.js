var HtmlWebpackPlugin = require('html-webpack-plugin')
var path = require('path')
var webpack = require('webpack')
var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')

// 引入基本配置
var config = require('./webpack.config');

config.output.publicPath = '/';

// 动态向入口配置中注入 webpack-hot-middleware/client
var devClient = './build/dev-client'
Object.keys(config.entry).forEach(function (name, i) {

	var extras = [devClient]
	config.entry[name] = extras.concat(config.entry[name])
})

config.plugins = [
    // 添加三个插件
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin(),

    new HtmlWebpackPlugin({								//创建html，自动引入js文件
        filename: 'src/index.html',
        template: path.resolve(__dirname, '../src/index.html'),
        inject: true
    }),
    new FriendlyErrorsPlugin()
]

module.exports = config;