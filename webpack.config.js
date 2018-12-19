var nodeExternals = require('webpack-node-externals');
module.exports = {
	entry:'./src/index.js',
	output: {
		path: __dirname + '/src/public',
		filename: 'bundle.js' 
	},
	target: 'node',
	externals: [nodeExternals()],
	module: {
		rules:[
			{
				use:'babel-loader',
				test:/\.js$/,
				exclude: /node_modules/
			}
		]
	}
}