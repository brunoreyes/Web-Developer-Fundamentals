function makeMysteryFunc() {
  const rand = Math.random();
  if (rand > 0.5) {
    return function () {
      console.log("CONGRATS, I'M A GOOD FUNCTION!");
      console.log('YOU WIN A MILLION DOLLARS!');
    };
  } else {
    return function () {
      alert("YOU'VE BEEN INFECTED BY A COMPUTER VIRUS");
      alert('STOP TRYING TO CLOSE THIS WINDOW');
      alert('STOP TRYING TO CLOSE THIS WINDOW');
      alert('STOP TRYING TO CLOSE THIS WINDOW');
      alert('STOP TRYING TO CLOSE THIS WINDOW');
      alert('STOP TRYING TO CLOSE THIS WINDOW');
    };
  }
}

const mystery = makeMysteryFunc(); // captured the value of the function and
// mystery()

function isBetween(num) {
  return num >= 50 && num <= 100; // returning a boolean
}
console.log('isBetween(30):', isBetween(30));

// higher order function that carries another function
function makeBetweenFunc(min, max) {
  return function (num) {
    return num >= min && num <= max;
  };
}

const isChild = makeBetweenFunc(0, 18);

isChild(40); // now that isChild = the function makeBetweenFunc(0, 18)

// it activates the returned function:
// function (num) {
// return num >= min && num <= max;
// };

// and inputs 40 for the parameter of num and keeps the min and mac from the higher order function:
// return function (40) {
//     return 40 >= 0 && 40 <= 18;
//   };

// in this case since the input of 40 is greater than the set maximum, we return false

isChild(8); // here we should return true b/c the min/max parameters are set from 0 - 18

const isAdult = makeBetweenFunc(19, 65);
isAdult(20); //true
