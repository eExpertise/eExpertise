var express = require('express');
var app = express();
var morgan = require('morgan');
var sqlite3 = require('sqlite3').verbose()
var db = new sqlite3.Database('./db.sqlite')
var path = require('path');

var PORT = process.env.PORT || 8080;



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
