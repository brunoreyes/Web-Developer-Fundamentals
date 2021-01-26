// PROMISES
// A Promise is an object representing the eventual completion or failure of
// an asynchronous operation

// imagine this is real
const fakeRequestCallback = (url, success, failure) => {
  const delay = Math.floor(Math.random() * 4500) + 500;
  setTimeout(() => {
    if (delay > 4000) {
      failure('Connection Timeout');
    } else {
      success('Here is your fake data from ${url}');
    }
  }, delay);
};

const fakeRequestPromise = (url) => {
  // only expects a url
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
      if (delay > 4000) {
        reject('Connection Timeout'); // represents failure
      } else {
        resolve('Connection Timeout'); // represents success
      }
    }, delay);
  });
};

fakeRequestCallback(
  'books.com',
  function () {
    console.log('It Worked');
  },
  function () {
    console.log('Error');
  }
);

// did this request work?
makeRequest(
  () => {
    // if so, call this function
  },
  () => {
    // if it didn't work, call this function
  }
);

// promises

const request = fakeRequestPromise('yelp/com/api/coffee/page1'); // shouln't return anything

// No more needing to nest, instead it will run then()'s and catch activates if any then() fails
// this is called a promise chain, where dependent, asynchronous actions happen
// Promises are resolved/rejected with values

request
  .then((data) => {
    console.log('It worked (page 1)');
    console.log(data);
    return fakeRequestPromise('yelp.com/api.coffee.page2');
  })
  .then(() => {
    console.log('It worked (page 2)');
    return fakeRequestPromise('yelp.com/api.coffee.page3');
  })
  .then(() => {
    console.log('It worked (page 3)');
  })
  .catch((error) => {
    // catch() will run if any request fails/ is rejected
    console.log('Oh no, a request failed');
    console.log(error);
  });

// request
//   .then(() => {
//     // .then() runs if the promise is resolved
//     console.log('Promised resolved, It worked');
//   })
//   .catch(() => {
//     // .catch() runs if the promise is rejected
//     console.log('Promised rejected, It did not work');
//   });

// ... still nesting
// request
//   .then(() => {
//     // .then() runs if the promise is resolved
//     console.log('Promised resolved, It worked');
//     const request = fakeRequestPromise('yelp/com/api/coffee/page2'); // shouln't return anything
//     request
//       .then(() => {
//         // .then() runs if the promise is resolved
//         console.log('Promised resolved, It worked');
//         const request = fakeRequestPromise('yelp/com/api/coffee/page3'); // shouln't return anything
//         request
//           .then(() => {
//             // .then() runs if the promise is resolved
//             console.log('Promised resolved, It worked');
//           })
//           .catch(() => {
//             // .catch() runs if the promise is rejected
//             console.log('Promised rejected, It did not work');
//           });
//       })
//       .catch(() => {
//         // .catch() runs if the promise is rejected
//         console.log('Promised rejected, It did not work');
//       });
//   })
//   .catch(() => {
//     // .catch() runs if the promise is rejected
//     console.log('Promised rejected, It did not work');
//   });

// CREATING A NEW PROMISE OF MY OWN
new Promise((resolve, reject) => {
  resolve(); // getting a resolved problem
});

const fakeRequest = (url) => {
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });
};

const delayedColorChange = (color, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.body.style.backgroundColor = color;
    }, delay);
  });
};

// Promises make it easier to clean up code
delayedColorChange('red', 1000)
  .then(() => delayedColorChange('orange', 1000))
  .then(() => delayedColorChange('pink', 1000))
  .then(() => delayedColorChange('yellow', 1000))
  .then(() => delayedColorChange('red', 1000))
  .then(() => delayedColorChange('green', 1000))
  .then(() => delayedColorChange('orange', 1000));
// .catch() runs if the promise is rejected
//         console.log('Promised rejected, It did not work');
