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
