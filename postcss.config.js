'use strict'

module.exports = props => {
	const {file, options, env} = props
	return {
		parser: 'sugarss',
		plugins: {
			'postcss-nested': {},
			autoprefixer: {}
		}
	}
}

// module.exports = ({file}) => ({
// 	parser: file.extname === '.sss' ? 'sugarss' : false,
// 	plugins: {
// 		'postcss-easy-import': {},
// 		'postcss-mixins': {},
// 		'postcss-conditionals': {},
// 		'postcss-simple-vars': {},
// 		'postcss-nested': {},
// 		autoprefixer: {}
// 	}
// })
