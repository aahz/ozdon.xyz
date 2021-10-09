const {PORT, PATH} = require('./constants');
const {app} = require('./app');

const server = app.listen(PORT, () => {
	console.log(`Web server started at port ${server.address().port}`);
	console.log(`Serving content from /${PATH.SOURCE_DIR}/`);
});
