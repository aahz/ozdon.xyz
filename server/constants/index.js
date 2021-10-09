const PATH = require('./path')

module.exports = {
	PORT: (process.env.LISTEN_HTTP || 0),
	PATH: PATH,
};
