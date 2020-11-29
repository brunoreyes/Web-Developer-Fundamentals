const words = ['dog', 'dig', 'log', 'bag'];
words.every((word) => {
  return word.length === 3;
}); // returns a boolean to see if all items in an array
// pass the test of a provided function

words.some((word) => word[0] === 'd');
// returns a boolean if one of the items in a list pass a test

const moreNumbers = [9, 8, 7, 6, 5, 4, 3, 2, 1];
allEvens = moreNumbers.every((num) => num % 2 === 0);
console.log(allEvens);
