const express = require('express'); // need to require express
const app = express();
// console.dir(app);

// the terminal command "node index.js" will run this document

app.use(() => { // anytime there's an incomming request, this callback will run
    console.log('We got a new request')  
})

app.listen(3000, () => {
  console.log('Listening on port 3000!');
});




