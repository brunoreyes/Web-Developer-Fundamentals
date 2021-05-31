const express = require('express'); // need to require express
const app = express();
// console.dir(app);

// the terminal command "node index.js" will run this document

// app.use((req, res) => {
//   // anytime there's an incomming request, this callback will run
//   console.log('We got a new request');
//   //   console.dir(req);
//   //   res.send('Hello, we got your request! This is a response'); // res.send() sends and generates an http response
//   res.send('<h1>This is my webpage!</h1>'); // anytime we use res.send the response is done
//   // so in order to test out another response, we need to comment this one out.
// }); // express turns http text into a parsed object that is passed into an object passed in by app.use

// Routing refers to taking incloming request and a path that is requested and
// matching it to some code in some response.

// Paths
// /cats => 'meow' // responds with content that says 'meow'
// /dogs => 'woof'
// '/' // home route

// app.get expects the path we are matching and a callback function
app.get('/cats', (req, res) => {
  //   // req or request is an object created by Express based upon the incoming HTTP request
  //   // res or response is an object created by Express, that includes an array of methods.
  //   // console.log('CAT REQUEST!!!');
  res.send('MEOW!!');
});

app.post('/cats', (req, res) => {
  // req or request is an object created by Express based upon the incoming HTTP request
  // res or response is an object created by Express, that includes an array of methods.
  // console.log('CAT REQUEST!!!');
  res.send('POST REQUEST TO /cats!!! THIS IS DIFFERENT THAN A GET REQUEST');
});

app.listen(8080, () => {
  console.log('Listening on port 8080!');
});

app.get('/dogs', (req, res) => {
  res.send('WOOF!');
});

app.get('/', (req, res) => {
  res.send('This is the home page!');
});

// make sure app.get * is at the bottom of the page, bc routes are matched in order
// app.get (*) gets every path outside of the predefined paths above
// for ex it gets localhost:8080/lgkhlsfkn
app.get('*', (req, res) => {
  res.send(`I don't know that path!`);
});

// sending a request by searching "http://localhost:3000/" in the browser

// Recall when trying to boot up a port, go within the app file and
// not directly in the node modules of that app
