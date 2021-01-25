// Targeting each player's buttons and display spans and setting their defualt start to 0
const p1 = {
  score: 0,
  button: document.querySelector('#p1Button'),
  display: document.querySelector('#p1Display'),
};
const p2 = {
  score: 0,
  button: document.querySelector('#p2Button'),
  display: document.querySelector('#p2Display'),
};

// Targetting the reset button and the # of points to reach to win the game
const resetButton = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#playto');

// Setting the defualt # of rounds to 3
let winningScore = 3;
let isGameOver = false; // this in reality = !isGameOver == false

// If the gamie isn't over, the score is displayed
function updateScores(player, opponent) {
  // If the game isn't over, the player (the scoring player's score increments by 1)
  if (!isGameOver) {
    // so !isGameOver == false bc isGameOver == true
    // whoever scores, their score increments by 1
    player.score += 1;

    // if the player's score == the set winning score, then the game is set to over
    if (player.score === winningScore) {
      isGameOver = true;
      // Setting the color of the display spans, win is green (success), lose is red (danger)
      player.display.classList.add('has-text-success');
      opponent.display.classList.add('has-text-danger');
      // Disabling the player & oponent button. Only way to reset game is by pressing rest button
      player.button.disabled = true;
      opponent.button.disabled = true;
    }

    // Making the displayed text = the current player's score
    player.display.textContent = player.score;
  }
}

// When p1 is pressed and reachs the winning score it is set as the player,
// while p2, the other button is set as the opponent within updateScores()
p1.button.addEventListener('click', function () {
  updateScores(p1, p2);
});

// When p2 is pressed and reachs the winning score it is set as the player,
// while p1, the other button is set as the opponent within updateScores()
p2.button.addEventListener('click', function () {
  updateScores(p2, p1);
});

// When the playing to: # is reselected, the game resets
winningScoreSelect.addEventListener('change', function () {
  winningScore = parseInt(this.value);
  reset();
});

// adding a click listener to the reset button
resetButton.addEventListener('click', reset);

// reset():
// - enables the disabled buttons, allowing each player to play again
// - sets the player's scores to the default value: 0 & making the displayed text reflect the changes
// - removes the success & danger classes from the spans (removing the green/red font colors)
function reset() {
  isGameOver = false;
  for (let p of [p1, p2]) {
    p.score = 0;
    p.display.textContent = 0;
    p.display.classList.remove('has-text-success', 'has-text-danger');
    p.button.disabled = false;
  }
}
