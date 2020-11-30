// OLD WAY OF SETTING A DEFAULT PARAMETER
function mutiply(a, b) {
  // previous way of doing it
  b = typeof b !== 'undefined' ? b : 1;
  return a * b;
}
console.log(mutiply(7)); // default value of b is 1

function rollDie(numSides) {
  return Math.floor(Math.random() * numSides) + 1;
} // which ever number we input is the highest,
// the random number will be.

// old default param for roll die
function rollDieOld(numSides) {
  if (numSides === undefined) {
    //setting a default if no value was inputted
    numSides = 6;
  }
  return Math.floor(Math.random() * numSides) + 1;
}

// NEW WAY OF SETTING A DEFAULT PARAMETER

function rollDieNew(a, b = 1) {
  // default params need to come after all non-default params
  //b=1 is setting the default param of 1 for b if not given
  return a * b;
}

function mutiplyNew(a, b = 1) {
  // b now has a defualt value of 1, while a doesn't have a default
  return a * b;
}

function greet(person, msg = 'Hey there', punc = '!') {
  console.log(`${msg}, ${person},${punc}`);
}
