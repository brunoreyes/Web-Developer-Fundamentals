// JS IS SINGLE-THREADED

// Essentially meaning at any given point in time, JS is running at most only one line of JS code

// Between the time I have requested for an item and the server is sending the response

const newTodo = input.value; // get user input
saveToDatabase(newTodo); // this code take a while!
input.value = ''; // reset form

console.log('Sending a request to the server'); // JS takes care of this

// After 3 seconds, this prints out
// The browser is doing the work (in C++) not the JS

setTimeout(() => {
  // web API function that is passed on to the browser, which is keeping track of the time
  console.log('Here is your data from the server...');
}, 3000); // passing a function in and executing in 3 seconds rather than immediately

// OK, BUT HOW?

// Browsers come with Web APIs that are able to handle certain tasks in the background
// (like making requests or setTimeOut)

// The JS callstack recognizes these Web API functions and passes them off th the browser
// to tahe care of

// Once the browser finishes those tasks, they return and are pushed onto the stack as a callback.

console.log('I AM AT THE END OF THE FILE!'); // Prints after the first JS code, done in JS
