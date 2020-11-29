// Reduce executes a reducer function on each element of the array,
// resulting in a single value

// taking some array and reducing it to some value

[3, 5, 7, 9, 11].reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
});

// accumulator or the total is the thing we reduce down to
// holding the total sum

// currentValue represents each individual element

// returning the accumulator with the current Value, and this
// will iterate over again like so, starting with first call:

// Callback     |accumulator    |currentValue   |return value
// first call   |3              |5              |8
// second call  |8              |7              |15
// third call   |15             |9              |24
// forth call   |24             |11             |35

// adding 3 + 5 = 8 + 7 = 15 + 9 = 24 + 11 = 35 ...
// [3, 5, 7, 9, 11]

const prices = [9.99, 1.5, 19.99, 49.99, 30.5];

let total = 0;
for (let price of prices) {
  total += price;
}

// Or
// the total: total & the current value being added: price
prices.reduce((total, price) => {
  return total + price;
});

const grandTotal = prices.reduce((total, price) => total + price);
console.log(grandTotal); //111.97

// here we are getting the lowest value and comparing it with the next value
// whichever is less is returned at the end
const min = prices.reduce((min, price) => {
  if (price < min) {
    return price;
  }
  return min;
});
console.log(min); //1.5

// max is total, price is current value to check
const max = prices.reduce((max, price) => {
  if (price > max) {
    return price;
  }
  return max;
});
console.log(max); //49.99

// const highestRated = movies.reduce((bestMovie, currentMovie) +> {
//     if(currentMovie.score > bestMovie.score){
//         return currentMovie;
//     }
// return bestMovie; //else return bestmovie
// })

const evens = [2, 4, 6, 8];
const addEvensToHundred = evens.reduce((sum, num) => sum + num, 100);
//the 2nd argument we pass is 100 which is the initial starting point
console.log(addEvensToHundred); //120
