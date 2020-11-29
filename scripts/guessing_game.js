let maximum = parseInt(prompt('Enter the maximum number!'));
if (!maximum) {
  maximum = parseInt(prompt('Enter a valid number!'));
}
const targetNum = Math.floor(Math.random() * maximum) + 1; //we are multiplying the max with a random #
console.log(targetNum); //the end result with Nan is Nan

let guess = parseInt(prompt(`Enter your first guess! `));
let attempts = 1;

while (parseInt(guess) !== targetNum) {
  if (guess === 'q') break;
  attempts++; //we add one to attempts everytime you enter the while loop to guess again
  if (guess > targetNum) {
    guess = prompt('Too high! Quit by entering "q" or Enter a new guess:');
  } else {
    guess = prompt('Too low! Quit by entering "q" or Enter a new guess:');
    s;
  }
}
if (guess === 'q') {
  console.log('You have successfully quit the game');
} else {
  console.log(
    `Congrats, you win! It took you ${attempts} ${
      attempts === 1 ? 'guess' : 'guesses'
    }`
  );
}
