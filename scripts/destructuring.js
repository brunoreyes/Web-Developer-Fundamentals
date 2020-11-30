// DESTRUCTURING - a short, clean syntax to 'unpack'
// - Values from arrays
// - Properties from objects
// into distinct variables

// Destructuring Arrays
const scores = [2020230404, 3204595, 433939, 303044, 294494393, 393944949];
const highScore = scores[0];
const secondhighScore = scores[1];

// same thing in a shorter syntax
const [gold, silver] = scores;
// gold or scores[0] & silver or scores[1]

const [highestScore, ...eveyoneElse] = scores;
highestScore; //2020230404
eveyoneElse; //[3204595, 433939, 303044, 294494393, 393944949]

// Destructuring Objects
const runner = {
  first: 'Eliud',
  last: 'Kipchoge',
  country: 'Kenya',
  title: 'Elder of the older of the golden heart of Kenya',
  runs: true,
};
const { first, last, title: slogan, country, runs = false } = runner;
// I'm able to call out the properties in any order
// and rename the property title to slogan
// and set runner's defualt property value to = false
first; // now this is a global variable
last;
country;
runs;

// Destructuring Params
function fullName({
  first,
  last = 'default last name if one isn;t found when passed in',
}) {
  return `${first} ${last}`;
}

console.log(fullName(runner)); // so here we we accessing the parameter
// {
//   first,
//   last = 'default last name if one isn;t found when passed in',
// } of runner

// movies.filter((movie) => movie.score >= 90) //regular map

// movies.filter(({ score }) => score >= 90); // desctructuring movie
// and only getting out the desctured param: score

// movies.map(({ title, score, year }) => { //destructuring only the neccessary properties
//   return `${title} (${year}) is rated ${score}`;
// });
