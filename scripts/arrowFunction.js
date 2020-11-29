const square = (x) => {
  // same thing as s regular function just different syntax
  return x * x;
};

const rolldie = () => {
  //since we just call this function, no need for
  // entering parameters
  return Math.floor(Math.random() * 6) + 1;
};

// arrow functions don't work in internet explorer
const greet = (name) => {
  return 'Hey ' + name + '!';
};

const bye = (
  name // using () instead of {}, implicitly  returns whatever is inside of the arrow function,
  //    w / o having to use return
) => 'Bye ' + name + '!';
// implicit returns only work if there's only one statement within the body of a function

console.log(bye('john'));

const add = (a, b) => a + b; //here we can do implicit returns again

const newMovies = movies.map((movie) => `${movie.title} - ${movie.score / 10}`);
