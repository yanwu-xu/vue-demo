var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var path = require('path')
var webpack = require('webpack')
// 引入基本配置
var config = require('./webpack.config')

/*config.vue = {
	loaders: {
		css: ExtractTextPlugin.extract("css")
	}
}*/

config.plugins = [
	// 提取css为单文件
	new ExtractTextPlugin("../[name].[contenthash].css"),

	new HtmlWebpackPlugin({								//创建html，自动引入js文件
		filename: '../index.html',
		template: path.resolve(__dirname, '../src/index.html'),
		inject: true
	})
]

module.exports = config