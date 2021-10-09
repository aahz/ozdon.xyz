/* eslint-disable */
const webpack = require('webpack');
const {merge} = require('webpack-merge');

module.exports = merge(require('./common'), {
	mode: 'development',
	devtool: 'cheap-module-source-map',
	plugins: [
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('development'),
		})
	],
	watchOptions: {
		aggregateTimeout: 1000,
		poll: 3000,
		followSymlinks: true,
	}
});
