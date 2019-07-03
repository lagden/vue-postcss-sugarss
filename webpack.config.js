const {join} = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

// Css Loader Stuff
const miniCssExtractLoader = {
	loader: MiniCssExtractPlugin.loader,
	options: {
		hmr: false
	}
}

const cssLoaderModule = {
	loader: 'css-loader',
	options: {
		import: false,
		importLoaders: 1,
		modules: true,
		onlyLocals: false
	}
}
const cssLoader = {
	...cssLoaderModule,
	options: {
		...cssLoaderModule.options,
		modules: false,
		onlyLocals: false
	}
}

const postcssLoader = {
	loader: 'postcss-loader',
	options: {
		config: {
			path: join(__dirname, 'postcss.config.js')
		}
	}
}

module.exports = {
	cache: false,
	plugins: [
		new MiniCssExtractPlugin(),
		new VueLoaderPlugin(),
		new HTMLWebpackPlugin({
			title: 'Sample',
			inject: true,
			template: join(__dirname, 'index.html')
		})
	],
	entry: join(__dirname, 'src', 'main.js'),
	output: {
		path: join(__dirname, 'public'),
		filename: '[name].[hash:8].bundle.js',
		pathinfo: true
	},
	module: {
		rules: [
			{
				test: /\.(css|sss)$/,
				oneOf: [
					{
						resourceQuery: /module/,
						use: [miniCssExtractLoader, cssLoaderModule, postcssLoader]
					}, {
						use: [miniCssExtractLoader, cssLoader, postcssLoader]
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
			}
		]
	},
	resolve: {
		alias: {
			vue: 'vue/dist/vue.esm.js',
			vue$: 'vue/dist/vue.esm.js',
			'@': join(__dirname, 'src')
		},
		extensions: ['*', '.js', '.vue', '.json']
	}
}
