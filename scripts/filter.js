// Filter: creates a new array with all elements that
// passed the test implemented by the provided function.

const nums = [9, 8, 7, 6, 5, 4, 3, 2, 1];
const odds = nums.filter((num) => {
  return num % 2 === 1;
});
// with this callback we return true/false depending if n is added to the filtered array

const smallNums = nums.filter((n) => n < 5);

console.log(odds); // new array of [9, 7, 5, 3, 1]
console.log(smallNums); //new array of [4,3,2,1]

// const recentMovies = movies.filter(m => m.year > 2000)

const names = ['030330404404040', '4093843048955085', '49494944'];
const validUserNames = names.filter((name) => name.length < 10);

console.log(validUserNames);
