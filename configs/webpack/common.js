/* eslint-disable */
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const pkg = require('../../package.json');
const context = path.resolve(__dirname, '../../source');

const cssModulesConfiguration = {
	mode: (resourcePath) => {
		const externalRegExp = new RegExp(`node_modules\\${path.sep}`, 'i');

		if (externalRegExp.test(resourcePath)) {
			return 'global';
		}

		return 'local';
	},
	localIdentName: 'oz__[local]__[hash:base64:5]',
	localIdentContext: context,
	localIdentHashSalt: 'ozdon.xyz',
	exportLocalsConvention: 'asIs',
};

module.exports = {
	context: context,
	entry: './index.tsx',
	output: {
		filename: `js/${pkg.name}__[name].v${pkg.version}.[contenthash].js`,
		chunkFilename: `js/${pkg.name}__[name].[id].v${pkg.version}.[contenthash].js`,
		path: path.resolve(__dirname, '../../dist'),
		publicPath: '/',
		charset: true,
	},
	module: {
		rules: [
			{
				test: /\.(j|t)sx?$/,
				use: [
					{
						loader: 'babel-loader',
					},
					{
						loader: 'ts-loader',
						options: {
							configFile: path.resolve(__dirname, '../../tsconfig.json'),
						}
					},
				],
				exclude: /node_modules/,
			},
			{
				test: /\.css$/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							sourceMap: true,
							modules: cssModulesConfiguration,
							importLoaders: 1,
						}
					}
				],
			},
			{
				test: /\.less$/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							sourceMap: true,
							modules: cssModulesConfiguration,
							importLoaders: 1,
						}
					},
					'less-loader'
				],
			},
			{
				test: /\.(jpe?g|png|gif|svg)$/i,
				use: [
					'file-loader?hash=sha512&digest=hex&name=image/[contenthash].[ext]',
				],
			}
		],
	},
	resolve: {
		alias: {
			source: path.resolve(__dirname, '../../source'),
		},
		extensions: ['.js', '.jsx', '.ts', '.tsx'],
		plugins: [
			new TsconfigPathsPlugin({
				configFile: path.resolve(__dirname, '../../tsconfig.json'),
			}),
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: `${pkg.title} v.${pkg.version}`,
			description: pkg.description,
			template: path.resolve(__dirname, '../../templates/index.html'),
			scriptLoading: 'defer',
			xhtml: true,
		}),
		new FaviconsWebpackPlugin({
			logo: path.resolve(__dirname, '../../logo.png'),
			mode: 'webapp',
			devMode: 'light',
			publicPath: '/assets',
			outputPath:  path.resolve(__dirname, '../../dist/assets'),
			prefix: '',
			inject: true,
			favicons: {
				appName: pkg.title,
				appDescription: pkg.description,
				version: pkg.version,
				orientation: 'portrait',
				background: '#ffffff',
				theme_color: '#512bb3',
				scope: "/",
				start_url: '/',
				display: 'standalone',
				loadManifestWithCredentials: false,
			}
		}),
	],
	optimization: {
		splitChunks: {
			chunks: 'async',
			maxSize: 200000,
			cacheGroups: {
				commons: {
					minChunks: 2,
				},
				application: {
					test: /[\\/]source[\\/]application[\\/]/,
					chunks: 'all',
					priority: 20,
				},
				libs: {
					test: /[\\/]source[\\/]libs[\\/]/,
					chunks: 'all',
					priority: 20,
				},
				style: {
					test: /[\\/]source[\\/]style[\\/]/,
					chunks: 'all',
					priority: 20,
				},
				vendors: {
					test: /[\\/]node_modules[\\/]/,
					chunks: 'all',
					priority: -10,
					reuseExistingChunk: true,
				},
			},
		},
		runtimeChunk: 'single',
	},
	performance: {
		hints: false,
	},
};
