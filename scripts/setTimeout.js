console.log('Hello?!'); // callback
const reminder = setTimeout(() => {
  // calls a callback once, after our set interval: 3000 or 3 secs
  console.log('...are you still there?'); // callback
}, 3000); // # of milliseconds before the function runs: 3 secs

console.log('Goodbye');

const id = setInterval(() => {
  console.log(Math.random());
  // calls a call back like:  console.log('...are you still there?');
  // every set # of milliseconds
}, 3000); // every 3 seconds a new random # is generated

clearInterval(id); //stops setInterval from running
clearInterval(reminder); // on setIntervals or setTimeouts
