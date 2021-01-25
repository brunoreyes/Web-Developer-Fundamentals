// setTimeout(() => { // nesting timeouts to have them run simultaneously after each other
//     // without having to do unneccessary math
//     document.body.style.backgroundColor = 'red';
//     setTimeout(() => {
//         document.body.style.backgroundColor = 'orange';
//         setTimeout(() => {
//             document.body.style.backgroundColor = 'yellow';
//           }, 1000);
//     }, 1000);
// }, 1000);

// document.body.style.backgroundColor = 'orange';

const delayedColorChange = (newColor, delay, doNext) => {
  setTimeout(() => {
    document.body.style.backgroundColor = newColor;
    doNext();
  }, delay);
};

delayedColorChange('olive', 1000, () => {
  // console.log('Inside Callback'); // after 1 second this runs
  delayedColorChange('olive', 1000, () => {
    delayedColorChange('red', 1000, () => {
      delayedColorChange('orange', 1000, () => {
        delayedColorChange('green', 1000, () => {});
      });
    });
  });
});

// so first searchMoviesAPI() searches for 'amadeus', then it runs function: saveToMyDB()
searchMoviesAPI('amadeus', () => {
  saveToMyDB(
    movie,
    () => {
      // if it works, run this:
    },
    () => {
      // if it doesn't work, run this
    },
    () => {
      // if API is down, or request failed
    }
  );
});

// this is callback hell, where we end up passing a whole bunch of callbacks,
// where code get's very nested, deep, ugly & confusing

// callbacks provide the mechanism for running code later
