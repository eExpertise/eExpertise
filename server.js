const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');

app.use(express.static('public'));

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
	console.log(`The server is listening on port ${PORT}`);
});

function newFunction() {
	return '/public/index.html';
}
