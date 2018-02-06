const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;
// Use static server to serve the Express Yourself Website
app.use(express.static('public'));

// Open a call to `app.get()` below:
app.get('/index-script', (req, res, next) => {
  
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});