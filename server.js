const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.static('public'));


app.get('/', function(req,res) {
  res.sendFile("index.html", {"root": __dirname});
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});