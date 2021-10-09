const path = require('path');
const express = require('express');

const {PATH} = require('../constants');

const app = express();

app.use(express.static(PATH.SOURCE_DIR));

app.use('*', (req, res) => {
	res.sendFile(path.resolve(PATH.SOURCE_DIR, './index.html'));
});

module.exports = {app: app};
