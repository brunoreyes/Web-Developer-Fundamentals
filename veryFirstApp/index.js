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

// /r/SOMETHINGHERE
// using : we are not enforcing the name of the sub reddit
// so as long as it starts with /r/:theNameCanBeAnything
// except you cannot add another item, because it is a different pattern
// for ex: you cannot do /r/:theNameCanBeAnything/anotherThing

// So we are defining a pattern, not an exact match
// app.get('/r/:subreddit', (req, res) => {
app.get('/r/:subreddit/:postId', (req, res) => {
  // res.send('THIS IS A SUBREDDIT!');
  // console.log(req.params); // { subreddit: 'cqts' } if I typed in cqts
  const { subreddit, postId } = req.params;
  res.send(
    `<h1>Viewing the postId ${postId} on the ${subreddit} subreddit </h1>`
  );
});

app.get('/dogs', (req, res) => {
  res.send('WOOF!');
});

app.get('/', (req, res) => {
  res.send('Welcome to the home page!');
});

app.get('/search', (req, res) => {
  const { q } = req.query;
  if (!q) {
    console.log('Nothing found if nothing searched');
  }
  res.send(`<h1>Search results for: ${q}</h1>`); // http://localhost:8080/search?q=cat&color=green
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

// nodemon will restart the server when any changes happen
// makes it easier than having to restart the server everytime
