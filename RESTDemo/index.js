// To install express into a specific project folder, cd to the folder then run the command:
// npm i express

// Then create an index.js file by running command: touch index.js

const express = require('express');
const app = express();

app.get('/tacos', (req, res) => {
  res.send('GET /tacos response');
});

app.post('/tacos', (req, res) => {
  res.send('POST /tacos response');
});

// Setting our app to run on port 3000
app.listen(3000, () => {
  console.log('ON PORT 3000!');
});

// using nodemon index.js to automatically restart our server after every new change
