const express = require('express'); // need to require express
const app = express();
// console.dir(app);

// the terminal command "node index.js" will run this document

app.use((req, res) => {
  // anytime there's an incomming request, this callback will run
  console.log('We got a new request');
  //   console.dir(req);
  //   res.send('Hello, we got your request! This is a response'); // res.send() sends and generates an http response
  res.send('<h1>This is my webpage!</h1>');
}); // express turns http text into a parsed object that is passed into an object passed in by app.use

app.listen(8080, () => {
  console.log('Listening on port 8080!');
});

// sending a request by searching "http://localhost:3000/" in the browser
