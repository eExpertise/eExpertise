const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');

const { getElementById, getIndexById, updateElement, createElement } = require('./utils');

	const PORT = process.env.PORT || 8080;

app.use(express.static('public'));

app.listen(PORT, () => {
	console.log(`The server is listening on port ${PORT}`);
});

function newFunction() {
	return '/public/index.html';
}
