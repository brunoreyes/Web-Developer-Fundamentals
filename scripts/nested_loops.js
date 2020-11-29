for (let i = 1; i <= 10; i++) {
  console.log(`i is:${i}`); //here i will run 10 times from 1 to 10
  for (let j = 1; j < 4; j++) {
    //j will run up to but not including 4, so 3 times within each run of i
    console.log(`j is:${j}`);
  }
}
// 1 i
//  1 j
//  2 j
//  3 j
// 2 i
//  1 j
//  2 j
//  3 j
// 3 i
//  1
//  2
//  3
// 4... so on and so forth until we reach 10

const seatingChart = [
  ['Kristen', 'Erik', 'Namita'],
  ['Geoffrey', 'Juanita', 'Antonio', 'Kevin'],
  ['Yuma', 'Sakura', 'Jack', 'Erika'],
];
for (let i = 0; i <= seatingChart.length; i++) {
  const row = seatingChart[i];
  console.log(`Row #${i + 1}`); // printing out row number, added 1 to account for index start at 0
  for (let j = 1; j < row.length; j++) {
    //j will run up to but not including 4, so 3 times within each run of i
    console.log(row[j]);
  }
}

let targetNum = Math.floor(Math.random() * 10); //math.floor chops off the decimal, 
let guess = Math.floor(Math.random() * 10); //math.random gives us a random decimal and we * by 10

while (true) {
  guess = Math.floor(Math.random() * 10);
  if (guess === targetNum) {
    console.log(`Correct! Guessed: ${guess} & target was: ${targetNum}`);
    break; //to end the while loop
  } else {
    console.log(`Guess: ${guess} was incorrect, try again.`);
  }
}

let input = prompt('Hey, say something!');

while (true) {
  input = prompt(input);
  if (input.toLowerCase() === 'stop copying me') {
    break; //to end the while loop
  }
}
