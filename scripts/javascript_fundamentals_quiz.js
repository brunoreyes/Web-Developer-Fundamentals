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

// concat, includes, indexOf, reverse
const array1 = ['a', 'b', 'c', 'd'];
const array2 = ['e', 'f', 'g', 'h'];
const array3 = array1.concat(array2); // array 3 = ['a', 'b', 'c', 'd','e', 'f', 'g', 'h']

array3.includes('f'); //true

array3.includes('x'); //false

'Blue'.indexOf('l'); //we get 1
'Blue'.indexOf('z'); //we get -1, bc it's not there

planets.indexOf('Venus'); // output 1

array1.reverse(); //reverses the array to be ['d', 'c', 'b', 'a'];

mimicArray1 = array1.slice(0); // this copies the entire array
shorterArray1 = array1.slice(3); // this copies just starting the 3rd index: 'a'
middleArray1 = array1.slice(1, 2); //here the copy starts at index 1 and ends at index 2

// Splice
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb', 'Feb2'); //adds Feb as the new index 1, between Jan and March
// inserts at index 1
console.log(months);
// expected output: Array ["Jan", "Feb", "Feb2", "March", "April", "June"]

months.splice(4, 1, 'May');
// replaces 1 element at index 4
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "May"]

cows = ['doug', 'jill', 'bill', 'will'];
cows.spice(2, 2, 'kill'); //replaces bill and will with kill

// change null to 'Hugo'

// DO NOT TOUCH!!! (please)
const airplaneSeats = [
  ['Ruth', 'Anthony', 'Stevie'],
  ['Amelia', 'Pedro', 'Maya'],
  ['Xavier', 'Ananya', 'Luis'],
  ['Luke', null, 'Deniz'],
  ['Rin', 'Sakura', 'Francisco'],
];

// YOUR CODE GOES BELOW THIS LINE:
airplaneSeats[3][1] = 'Hugo';

// using an object {}
const fitBitData = {
  totalSteps: 3033030, // key:value
  totalMiles: 2303,
  avgCalorieBurn: 2023,
  workoutsThisWeek: '5 of 7',
  avgGoodSleep: '2:13',
  workouts: ['jumping', 'swimming'], //an array of workouts
  isHealthy: false,
};

// here is an object literal or object
let product = {
  name: 'Gummy Bears',
  inStock: true,
  price: 1.99,
  flavors: ['grape', 'apple', 'cherry'],
};

// Return a full address like 64 Johnson Ave, Brooklyn, NY 11206
//PLEASE DON'T TOUCH THIS LINE!
const restaurant = {
  name: 'Ichiran Ramen',
  address: `${Math.floor(Math.random() * 100) + 1} Johnson Ave`,
  city: 'Brooklyn',
  state: 'NY',
  zipcode: '11206',
};

//YOUR CODE GOES DOWN HERE:
let fullAddress = `${restaurant.address}, ${restaurant.city}, ${restaurant.state} ${restaurant.zipcode}`;

// change state to MN
restaurant.state = 'MN';
restaurant['state'] = 'MN';

// Print out "Da ba dee da ba daa" 6 times, using a for loop
for (let i = 0; i < 6; i++) {
  // for (starting value, ending value, count by)
  console.log('Da ba dee da ba daa');
}

for (let i = 25; i <= 0; i -= 5) {
  //decreasing by 5 each time until reaching 0 printing 25,20,15,10,5,0
  console.log(i);
}

for (let i = 10; i <= 100; i *= 10) {
  // multiplying by 10 until reaching 100 printing 10,20,30,40,50,60,70,80,90,100
  console.log(i);
}

// print everyones name in uppercase
const people = ['Scooby', 'Velma', 'Daphne', 'Shaggy', 'Fred']; //DONT TOUCH THIS LINE!

// WRITE YOUR LOOP BELOW THIS LINE:
for (let i = 0; i < people.length; i++) {
  console.log(people[i].toUpperCase());
}

// print out the square of each number below
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]; //DON'T CHANGE THIS LINE PLEASE!

// WRITE YOUR LOOP BELOW THIS LINE:
for (let num of numbers) {
  console.log(num * num);
}

// call a function that prints out "<3"
// Write your function here:
function printHeart() {
  console.log('<3');
}
printHeart();

// Make a function that uppercases a string and outputs it 3 times
// DEFINE YOUR FUNCTION:
function rant(message) {
  for (let i = 0; i < 3; i++) {
    console.log(message.toUpperCase());
  }
}
rant('I hate beets');

// make a function that if both inputs are 1 Print Snake Eyes!
// define isSnakeEyes below:
function isSnakeEyes(dice1, dice2) {
  if ((dice1 & dice2) === 1) {
    console.log('Snake Eyes!');
  } else {
    console.log('Not Snake Eyes!');
  }
}

function multiply(num1, num2) {
  return num1 * num2;
}

function isShortsWeather(temperature) {
  if (temperature >= 75) {
    return true;
  } else {
    return false;
  }
}

// make the following happen
// lastElement([3,5,7]) return 7
// lastElement([3]) return 3
// lastElement([]) return null
function lastElement(array) {
  if (array == '') {
    return null;
  } else {
    return array[array.length - 1];
  }
}

// capitalize first letter of the string
function capitalize(string) {
  return `${string[0].toUpperCase()}${string.slice(1)}`;
} //so we return the first character captitalized, and the rest of the string starting from the first index

// sumArray([3,5,7]) return 15
function sumArray(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

// DEFINE YOUR FUNCTION BELOW:
function returnDay(number) {
  if (number === 1) {
    return `Monday`;
  } else if (number === 2) {
    return `Tuesday`;
  } else if (number === 3) {
    return `Wednesday`;
  } else if (number === 4) {
    return `Thursday`;
  } else if (number === 5) {
    return `Friday`;
  } else if (number === 6) {
    return `Saturday`;
  } else if (number === 7) {
    return `Sunday`;
  } else {
    return null;
  }
}

// Question 1:
// What is printed to the console when this code runs?

let animal = 'Giant Pacific Octopus';
function observe() {
  let animal = 'Pajama Squid';
  console.log(animal);
}
observe();

// answer: Pajama Squid //recall theses two variables aren't in the same scope

// Question 2:
// What is the result of running the following code:

const creature = 'Common Sea Dragon';

function scubaDive() {
  const creature = 'Spanish Dancer'; //A type of sea slug
  console.log(creature);
}

scubaDive();
// answer Spanish Dancer //recall theses two variables aren't in the same scope
