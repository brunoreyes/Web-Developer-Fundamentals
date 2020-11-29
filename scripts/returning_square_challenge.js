// return a suqare of a number w/o using the ** suqare operator
function square(number) {
  const squared = number * number;
  //   power = Math.pow(2,3); // 2 powered to the 3rd, ex: 2^3 = 8 or (2 * 2 * 2)
  return squared;
}

square(3);

// a function is a value that can be stored within a variable, that can be passed around

// now if I call greet, the comse says Hi
let greet = function () {
  console.log('Hi!');
};
greet();

// functions can be stored in a variable and also can be passed within an aruguement

// HIGHER ORDER FUNCTIONS - functions that on or with other functions that can:
// - accept other functions as arguments
// - return a function

// the function callTwice, takes in a function within it's parameter,
// we called it func b / c function is a reserved word
function callTwice(func) {
  func(); // Calling the function once
  func(); // Calling the function twice
}

function rollDie() {
  const roll = Math.floor(Math.random() * 6) + 1; // + 1 b/c starts at 0
  console.log(roll);
}

// make sure when passing in a function as a parameter to not include the parenthesis at the end
// so instead of rollDie(), just write rollDie
callTwice(rollDie);

function callTenTimes(f) {
  for (let i = 0; i < 10; i++)
    // running whatever function in the parameter, 10 times using a for loop.
    f();
}
