/* eslint-disable */
const webpack = require('webpack');
const {merge} = require('webpack-merge');

module.exports = merge(require('./common'), {
	mode: 'production',
	devtool: 'source-map',
	plugins: [
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('production'),
		}),
	],
});
