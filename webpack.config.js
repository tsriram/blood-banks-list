var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {

	entry: {
		app: [
			'./index.js'
		]
	},

	output: {
		filename: '[name].js',
		path: path.join(__dirname, 'dist', 'js')
	},

	module: {
		loaders: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loader: 'babel',
				query: {
					presets: ['react', 'es2015']
				}
			},
			{
				test: /\.(css|scss|sass)$/,
				loader: ExtractTextPlugin.extract('style', 'css!sass-loader')
			},
			{ test: /\.(woff|woff2)$/, loader: "url" },
			{ test: /\.(json|ttf|eot|svg)$/, loader: "file" }
		]
	},

	plugins: [
		new webpack.NoErrorsPlugin(),

		new ExtractTextPlugin('../css/bloodbanks.css', { allChunks: false })
	]
}