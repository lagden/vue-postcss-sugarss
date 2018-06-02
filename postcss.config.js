module.exports = ({file, options, env}) => ({
	parser: 'sugarss',
	plugins: {
		'postcss-import': {},
		autoprefixer: {...options.autoprefixer, ...{grid: true}}
	}
})
