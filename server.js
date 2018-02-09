const express = require('express');
const app = express();
var path = require('path');

const PORT = process.env.PORT || 8080;

app.use(express.static('public'));


app.get('/', function(req,res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`The server is listening on port ${PORT}`);
});