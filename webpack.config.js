const {join} = require('path')
const {DefinePlugin} = require('webpack')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
	entry: './src/main.js',
	output: {
		path: join(__dirname, 'dist'),
		filename: '[name].js'
	},
	plugins: [
		new VueLoaderPlugin(),
		new HTMLWebpackPlugin({
			inject: true,
			template: join(__dirname, 'index.html')
		}),
		new MiniCssExtractPlugin()
	],
	module: {
		rules: [
			{
				test: /\.(css|sss)$/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: {
							importLoaders: 1,
							modules: true
						}
					},
					{
						loader: 'postcss-loader',
						options: {
							config: {
								path: join(__dirname, 'postcss.config.js')
							}
						}
					}
				]
			}, {
				test: /\.vue$/,
				loader: 'vue-loader',
				options: {
					loaders: {}
				}
			},
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.(png|jpg|gif|svg)$/,
				loader: 'file-loader',
				options: {
					name: '[name].[ext]?[hash]'
				}
			}
		]
	},
	resolve: {
		alias: {
			vue$: 'vue/dist/vue.esm.js'
		},
		extensions: ['*', '.js', '.vue', '.json']
	}
}
