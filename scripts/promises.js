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

const request = fakeRequestPromise('yelp/com/api/coffee/page3'); // shouln't return anything
request
  .then(() => {
    // .then() runs if the promise is resolved
    console.log('Promised resolved, It worked');
  })
  .catch(() => {
    // .catch() runs if the promise is rejected
    console.log('Promised rejected, It did not work');
  });

// ... still nesting
request
  .then(() => {
    // .then() runs if the promise is resolved
    console.log('Promised resolved, It worked');
    const request = fakeRequestPromise('yelp/com/api/coffee/page2'); // shouln't return anything
    request
      .then(() => {
        // .then() runs if the promise is resolved
        console.log('Promised resolved, It worked');
        const request = fakeRequestPromise('yelp/com/api/coffee/page3'); // shouln't return anything
        request
          .then(() => {
            // .then() runs if the promise is resolved
            console.log('Promised resolved, It worked');
          })
          .catch(() => {
            // .catch() runs if the promise is rejected
            console.log('Promised rejected, It did not work');
          });
      })
      .catch(() => {
        // .catch() runs if the promise is rejected
        console.log('Promised rejected, It did not work');
      });
  })
  .catch(() => {
    // .catch() runs if the promise is rejected
    console.log('Promised rejected, It did not work');
  });
