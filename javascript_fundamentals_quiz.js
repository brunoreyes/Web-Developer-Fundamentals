// let isHappy = true; is the correct way to write a boolean

// let highScore = 107: follows Javascrible variable naming conventions

//What does the following return?

// let year = "1998";
// year + 1;

//answer: '19981'

// Change the string 'skateboard' to 'beard' and attach it to the variable facialHair
// DON'T TOUCH THIS LINE! (please)
//const word = 'skateboard' //Don't change this line!

// YOUR CODE BELOW THIS LINE:
//let facialHair = word.slice(5).replace('o','e')

// String template literals: Print `You rolled a 2 and a 4. They sum to 6.`
// NO TOUCHING! (please)
const die1 = Math.floor(Math.random() * 6) + 1; //random number from 1-6
const die2 = Math.floor(Math.random() * 6) + 1; //random number from 1-6

// YOUR CODE BELOW THIS LINE:
let roll = `You rolled a ${die1} and a ${die2}. They sum to  ${die1 + die2}.`;

// Make the following code print out You Got It!!!
const mystery = 'Pleas7'; //CHANGE THIS VALUE TO MAKE THE CONDITIONAL BELOW TRUE

// LEAVE THIS CODE ALONE! (pretty please)
if (mystery[0] === 'P' && mystery.length > 5 && mystery.indexOf('7') !== -1) {
  console.log('YOU GOT IT!!!');
}

9 == '9'; //this is truthy and true

//
function isEven(num) {
  //WRITE YOUR CODE BETWEEN THIS LINE: ↓ ↓ ↓ ↓
  if (num % 2 == 0) {
    return 'even';
  } else {
  }
  //AND THIS LINE ↑↑↑↑↑
}

function getColor(phrase) {
  //WRITE YOUR CODE BETWEEN THIS LINE: ↓ ↓ ↓ ↓
  if (phrase === 'stop') {
    console.log('red');
  } else if (phrase === 'slow') {
    console.log('yellow');
  } else if (phrase === 'go') {
    console.log('green');
  } else {
    console.log('purple');
  }
  //AND THIS LINE ↑↑↑↑↑
}

// Change the value of num, so that "YOU GOT ME!" prints out
const num = 102; // THIS IS THE ONLY LINE YOU SHOULD CHANGE :)

// DO NOT TOUCH ANYTHING BELOW (please)
if (num <= 100) {
  if (num >= 50) {
    console.log('HEY!');
  }
} else {
  if (num < 103) {
    if (num % 2 === 0) {
      console.log('YOU GOT ME!');
    }
  }
}

// Define lottoNumbers below:
const lottoNumbers = [1, 2, 3, 4, 5, 6]; //set it equal to an array containing 1-6

const leaderboard = ['Harry', 'Lua', 'Hermoine', 'Bellatrix']; //DON'T TOUCH THIS LINE!

// YOUR CODE BELOW HERE:
leaderboard[1] = 'Luna'; // make Lua Luna
leaderboard[3] = 'Draco'; // replace Bellatrix with Draco

const planets = ['The Moon', 'Venus', 'Earth', 'Mars', 'Jupiter']; //DO NOT TOUCH THIS LINE!

// YOUR CODE GOES BELOW THIS LINE:
planets.shift('The Moon'); //take away The Moon from the beginning of the array using .shift()
planets.unshift('Mercury'); //add Mercury to the beginning of the array using .unshift()
planets.push('Saturn'); //add Saturn at the end of the array using .push()
planets.pop('Saturn'); //now take away Saturn from the end of the array

// concat, includes
const array1 = ['a', 'b', 'c', 'd'];
const array2 = ['e', 'f', 'g', 'h'];
const array3 = array1.concat(array2); // array 3 = ['a', 'b', 'c', 'd','e', 'f', 'g', 'h']

array3.includes('f'); //true

array3.includes('x'); //false

'Blue'.indexOf('l'); //we get 1
'Blue'.indexOf('z'); //we get -1, bc it's not there
