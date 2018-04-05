const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');
const profileRouter = require("./profile.js");
const mainRouter = require("./main.js");

app.use(express.static('public'));
app.use('/profile', profileRouter);
app.use('/main', profileRouter);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
	console.log(`The server is listening on port ${PORT}`);
});

function newFunction() {
	return '/public/index.html';
}
