/* eslint-disable */
const os = require('os');
const path = require('path');
const {spawn} = require('child_process');

const {merge} = require('webpack-merge');

let server = null;

module.exports = merge(require('./dev'), {
	plugins: [
		{
			apply: (compiler) => {
				compiler.hooks.afterEmit.tap('Server', (compilation) => {
					if (!!server) {
						return;
					}

					server = spawn(
						'node',
						[path.resolve(__dirname, '../../server/index.js')],
						{
							cwd: path.resolve(__dirname, '../..'),
							detached: false,
						}
					);

					server.stdout.on('data', data => {
						process.stdout.write(data);
					});

					server.stderr.on('data', data => {
						process.stderr.write(data);
					});
				});
			}
		}
	]
});
