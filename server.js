const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');

const { getElementById, getIndexById, updateElement, createElement } = require('./utils');

	const PORT = process.env.PORT || 8080;



app.use(express.static('public'));

app.get('/', function(req, res, next) {
    res.sendFile(path.join(__dirname, '/public/opt.html'));
	res.sendFile(path.join(__dirname, '/public/personalization1.html'));
	res.sendFile(path.join(__dirname, '/public/personalization2.html'));
	res.sendFile(path.join(__dirname, '/public/thank-you.html'));
	res.sendFile(path.join(__dirname, '/public/sample-preview.html'));
});

app.listen(PORT, () => {
	console.log(`The server is listening on port ${PORT}`);
});

function newFunction() {
	return '/public/index.html';
}
