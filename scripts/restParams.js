// REST params look like spread but aren't spreads.

// The argument object is available inside every function and is an array-like object that:
// - has a length property
// - doesn't contain array properties like push/po
// - contains all the arguments passed to the function
// - is not available insode of arrow functions

function sumAll() {
  // so sumAll(1,2,3): (1,2,3) is arguments, the array-like function
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
    console.log(arguments); //gets each argument that's iterated over within arguments
  } //arugments is like an array-like object
  return total;
}

// looping through each arugment within the array/arguments and adding them to the total
sumAll(8, 4, 3, 2); //17
sumAll(3, 2); // 5

function sum() {
  // DOESN'T WORK B/C ARGUMENTS ISN'T REALLY AN ARRAY SO CAN'T USE REDUCE ON IT
  return arguments.reduce((total, el) => total + el);
}

function sum(...nums) {
  //here we are setting the default parameter nums which is a really array unlike
  // arugments which are just regular params above on sumAll()
  console.log(nums);
}

function raceResults(gold, silver, ...everyoneElse) {
  //...everyoneElse collect all names after the second input
  console.log(`GOD MEDAL GOES TO:${gold}`);
  console.log(`GOD MEDAL GOES TO:${silver}`);
  console.log(`PARTICIPATION TROPHIES GO TO:${everyoneElse}`); // tina, tevor, travis
}

console.log(raceResults('tammy', 'todd', 'tina', 'trevor', 'travis'));
// rest params collect things to create an array
// tammy is gold parameter
//todd is silver
// while every who comes next goes the ...everyoneElse rest parameter that's an array
