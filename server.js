const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;
// Use static server to serve the Express Yourself Website
app.use(express.static('public'));

// Open a call to `app.get()` below:
app.get('/', function(req,res) {
  res.sendFile("index.html", {"root": __dirname});
});

app.listen(PORT, () => {
  console.log(`The server is listening on port ${PORT}`);
});