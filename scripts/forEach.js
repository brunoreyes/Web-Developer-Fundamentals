// FOR EACH accepts a callback function. Calling the function
// once per element within the array
// used before for of was created

const nums = [9, 8, 7, 6, 5, 4, 3, 2, 1];
nums.forEach(function (n) {
  console.log(n * n);
  // prints: 81, 64, 49, 36, 25, 16,9,4, 1
});

nums.forEach(function (el) {
  if (el % 2 === 0) {
    // checking if when a number/el is divided by 2,
    //   the remainder is 0, basically calling the function once per item in array
    console.log(el);
    // prints: 8,6,4,2
  }
});

// movie example
const movies = [
  {
    title: 'Amadeus',
    score: 99,
  },
  {
    title: 'Stand By Me',
    score: 85,
  },
  {
    title: 'Parasite',
    score: 95,
  },
  {
    title: 'Alien',
    score: 90,
  },
];

// 'Alien - 90/100' create this statement for all functions
movies.forEach(function (movie) {
  console.log(`${movie.title} - ${movie.score}/100`);
});
