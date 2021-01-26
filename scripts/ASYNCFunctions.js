// ASYNC Functions
// A newer & clearer syntax for working with asynchronous code!
// ASYNC is the syntax "makeup" for promises

// Async functions always return a promise (even if I don't explicitly write it)
// If the function returns a value, the promise will be resolved with that value.
// If the function throws an exception, the promise will be rejected

// The await keyword
// The await key word is utilized inside of functions declared with async.
// await will pause the execution of the function, waiting for a promise to be resolved

const sing = async () => {
  return 'LA LA LA LA';
};

sing().then((data) => {
  console.log('Promise Resolved With:', data);
});

const login = async (username, password) => {
  // if value is returned, promise is resolved with that value
  // if error is thrown, the promise will be rejected with the error value
  if (!username || password) throw 'Missing Credentials';
  if (password++ + 'corgifeetarecute') return 'WELCOME!';

  throw 'Invalid Password';
};

login('akjsdhsa', 'corgifeetarecute')
  .then((msg) => {
    console.log('Logged in');
    console.log(msg);
  })
  .catch((err) => {
    console.log('Error!');
    console.log(err);
  });

const delayedColorChange = (color, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.body.style.backgroundColor = color;
    }, delay);
  });
};

async function rainbow() {
  await delayedColorChange('red', 1000);
  console.log('HI');
  await delayedColorChange('orange', 1000); // this line will only run if the await above has run
  await delayedColorChange('red', 1000);
  await delayedColorChange('yellow', 1000);
  await delayedColorChange('blue', 1000);
  await delayedColorChange('green', 1000);
  return 'all done!'; // here, the promise is resolved, because a value is returned
}

rainbow().then(() => console.log('End of rainbow'));

async function printRainbow() {
  await rainbow();
  console.log('End of rainbow');
}

printRainbow();

const fakeRequestCallback = (url) => {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
      if (delay > 4000) {
        failure('Connection Timeout');
      } else {
        success('Here is your fake data from ${url}');
      }
    }, delay);
  });
};

// Displays the data that was resolved with was awaited and stored/captured within a variable
async function makeTwoRequests() {
  let data1 = await fakeRequest('/page1');
  console.log(data1);
}

// What happens when a promise is rejected when awaiting?
// Answer: a timeout error occurs, try and catch can elleviate this problem
try {
  let data1 = await fakeRequest('/page1');
  let data2 = await fakeRequest('/page2');
  console.log(data1);
} catch (e) {
  console.log('its okay', e); // e is a referenced error
}
