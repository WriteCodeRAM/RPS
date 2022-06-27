const choices = ['Rock', 'Paper', 'Scissors'];

function computerPlay() {
  let computerChoice = choices[Math.floor(Math.random() * choices.length)];
  return computerChoice;
}

function playerPlay() {
  let playerChoice = prompt('Enter Rock, Paper, or Scissors');
  playerChoice.toLowerCase();
  return playerChoice;
}

console.log(computerPlay());
console.log(playerPlay());
// Keep it simple, we'll make a similar function getting the players choice
// then calling both in a 'game' function and compare the results

function playRound() {
  let computerSelection = computerPlay();
  let playerSelection = playerPlay();
}
