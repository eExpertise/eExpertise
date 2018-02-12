const express = require('express');
const app = express();
var path = require('path');

const PORT = process.env.PORT || 8080;



app.use(express.static('public'));

app.get('/', function(req,res) {
	res.sendFile(path.join(__dirname, '/public/index.html'));
    res.sendFile(path.join(__dirname, '/public/opt.html'));
	res.sendFile(path.join(__dirname, '/public/personalization1.html'));
	res.sendFile(path.join(__dirname, '/public/personalization2.html'));
	res.sendFile(path.join(__dirname, '/public/thank-you.html'));
	res.sendFile(path.join(__dirname, '/public/sample-preview.html'));
});

app.listen(PORT, () => {
	console.log(`The server is listening on port ${PORT}`);
});