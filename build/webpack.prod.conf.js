var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var path = require('path')
var webpack = require('webpack')
// 引入基本配置
var config = require('./webpack.config')

config.plugins = [
	// 提取css为单文件
	new ExtractTextPlugin("../css/[name].[contenthash].css"),

	new HtmlWebpackPlugin({								//创建html，自动引入js文件
		filename: '../index.html',
		template: path.resolve(__dirname, '../src/index.html'),
		inject: true
	}),

    new webpack.optimize.CommonsChunkPlugin({
        name: ['vendor', 'manifest'],		// 指定公共 bundle 的名字。
        minChunks: function (module) {
            // 该配置假定你引入的 vendor 存在于 node_modules 目录中
            return module.context && module.context.indexOf('node_modules') !== -1;
        }
    })
]

module.exports = config