// Within browser inspector >> network >> I can view search queries I'm running in real-time

// When I send a requested query I get a response back in the form of data formatted in JSON

// The concept behind AJAX is creating applications using JavaScript, we can load, save, send,
// or save to a database without having to refresh or open up another page,allowing
// multiple request to be sent and used within the same page

// Web API's are web-based interfaces that expose certain endpoints that
// will respond with information (data) for other code or software to consume and use

// Essentialy Web API's are like portals into different applications, database or data sets or niche data.
// Web API's are interfaces that occur over HTTPS to particular URL's called endpoints

// Sending an API request by opening browser and sending request link:

// Request: https://api.cryptonator.com/api/ticker/btc-usd

// Response (data within JSON format): {"ticker":{"base":"BTC","target":"USD","price":"32049.96352855",
//"volume": "57161.45837257", "change": "-328.78579545"}, "timestamp": 1611694742, "success": true, "error": ""}

// API is an interface for an application

// JSON is a format used to frequently send data back from the server via response
// xml is like html but the tags are custom-made: <answer> </answer> <question> </question>

// JSON (JavaScript Object Notation) is a format for sending data that is consistent and predictable

// Within JSON, there are key value pairs, where everykey is a double quoted string.
// The value can be an: object, array, string, number, boolean or null

// for ex "key": value
// for ex: "isOn": false
// for ex: "yearEstablished": 2020
// for ex: "squadName": "super hero squad"

// Easy to turn JSON into JS using JSON.parse() which accepts a string that will be
// parsed into a JS object

const data = `{"ticker":{"base":"BTC","target":"USD","price":"32049.96352855",
"volume": "57161.45837257", "change": "-328.78579545"}, "timestamp": 1611694742, "success": true, "error": ""}`;

// parsing the data and assigning the parsed data to a variable
const parsedData = JSON.parse(data);

// accessing the object and extracting the wanted data
parsedData.ticker.price;

// To go the other direction & take data from a JS object and convert it into JSON format I use JSON.stringify()
// JSON.stringify() is useful for sending info to an API, all instances of undefined are replaced with null.

// http://api.tvmaze.com/lookups/shows?imbd = tt471830&color=purple
// Within Postman in a URL I look for the query: " /shows?imbd..."
// id: "imbd = tt471830" and type of data "&color=purple"

// expecting key most times gives an auto-complete

// XMLHttpRequest was the original and harder way of sending request (POST/GET/PUT/DELETE):

const req = new XMLHttpRequest();

req.onload = function () {
  console.log('ALL DONE WITH THE REQUEST');
  console.log(this);
};

req.onerror = function () {
  console.log('ERROR!!!');
  console.log(this);
};

req.open('GET', 'https://api.cryptonator.com/api/ticker/btc-usd'); // if URL is wrong, error callback runs
req.send();

// now go into brower's inspect tool, go into console, open nested XMLHttpRequest and get data from there.

// The better and more efficient way: Fetch APIs, the newer way of making request via JS that support promises
// so no need to worry about callbacks

// fetch is not ideal, but axios is, fetch is the native version of axios, axios is even easier to use.
// fetch('https://api.cryptonator.com/api/ticker/btc-usd') // fetch resolves the promise as soon as it gets the headers
//     .then(response => {  // basically meaning that there is no gurantee to have the body we want
//         console.log('RESPONSE, WAITING TO PARSE...', response); // this is when we use .json() , returning a promise
//         return response.json() // parsing the data using .json(), returing a promise itself
//         // basically returning a promise when all data is back and has been parsed as JSON, asynchornously waiting for
//         // the body to arrive.
//     })
//     .then(data => {
//         console.log('DATA PARSED...');
//     })
//     .catch(error => {
//     console.log('OH NO! ERROR!', error);
//     })

// const fetchBitcoinPrice = async () => {
//   try {
//     const res = await fetch('https://api.cryptonator.com/api/ticker/btc-usd');
//     // console.log(res);
//     const data = await res.json();
//     console.log(data.ticker.price);
//   } catch (e) {
//     console.log('Something went wrong!', e);
//   }
// };

// AXIOS, an easy to use library for making HTTP rquest
// without AXIOS we have to worry about the 1st promise and parsing data

// using axios: put in head of html: <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
// require axios isn't necessary

// axios is promised-based and built on top of fetch but is a little more condensed
axios
  .get('https://api.cryptonator.com/api/ticker/btc-usd')
  .then((response) => {
    console.log(response.data.ticker.price);
  })
  .catch((error) => {
    console.log('ERROR', error);
  });

const fetchBitcoinPrice = async () => {
  try {
    const res = await axios.get(
      'https://api.cryptonator.com/api/ticker/btc-usd'
    );
    console.log(res.data.ticker.price);
  } catch (error) {
    console.log('Error', error);
  }
};

// Always read the docs for each API, often they vary and have certain configs or are nested differently

const jokes = document.querySelector('#jokes');
const button = document.querySelector('button');

const addNewJoke = async () => {
  // using async keyword to enable await
  const jokeText = await getDadJoke();
  console.log(jokeText);
  const newJokeLine = document.createElement('li'); // creating a new joke in the form of a line
  newJokeLine.append(jokeText);
  jokes.append(newJokeLine);
};

const getDadJoke = async () => {
  // Adding a try and catch just incase the URL is incorrectly typed
  try {
    // This specific API case made us have header and accept api's
    const config = { headers: { Accept: 'application/json' } }; // json parsed to a JS object
    const res = await axios.get('https://icanhazdadjoke.com/', config);
    // console.log(res.data.joke);
    return res.data.joke;
  } catch (error) {
    return 'No jokes avaiable! Sorry :(';
  }
};

button.addEventListener('click', addNewJoke);
