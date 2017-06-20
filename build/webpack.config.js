// nodejs 中的path模块
var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require("extract-text-webpack-plugin")

module.exports = {
	// 入口文件，path.resolve()方法，可以结合我们给定的两个参数最后生成绝对路径，最终指向的就是我们的index.js文件
	entry: {
		index: path.resolve(__dirname, '../src/index.js'),
        vendor: 'vue'           //单独拿出框架利用缓存
	},
	// 输出配置
	output: {
		// 输出路径是 myProject/output/static
		path: path.resolve(__dirname, '../output/static'),
		publicPath: 'static/',
		filename: '[name].[hash].js',
		chunkFilename: '[id].[chunkhash].js'
	},
    resolve: {
        extensions: ['.js', '.vue']
    },
	module: {

        rules: [
			// 使用vue-loader 加载 .vue 结尾的文件
			{
				test: /\.vue$/,
				loader: 'vue-loader',
                options: {
                    loaders: {                  //vue中引入的css
                        css: ExtractTextPlugin.extract({
                            loader: 'css-loader',
                            fallbackLoader: 'vue-style-loader' // <- this is a dep of vue-loader, so no need to explicitly install if using npm3
                        })
                    }
                }
			},
            {
                test: /\.css$/,             //js中引入的css
                use: ExtractTextPlugin.extract({
                    use: 'css-loader'
                })
            }
		]
	},
    plugins: [
        new HtmlWebpackPlugin({								//创建html，自动引入js文件
            filename: '../index.html',
            template: path.resolve(__dirname, '../src/index.html'),
            inject: true
        })
    ]
}