const choices = ['rock', 'paper', 'scissors'];

function computerPlay() {
  let computerChoice = choices[Math.floor(Math.random() * choices.length)];
  return computerChoice;
}

function playerPlay() {
  let playerChoice = prompt('Enter Rock, Paper, or Scissors');
  playerChoice.toLowerCase();
  return playerChoice;
}

// Keep it simple, we'll make a similar function getting the players choice
// then calling both in a 'game' function and compare the results

function playRound(playerSelection, computerSelection) {
  if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    return `You chose ${playerSelection} & the computer chose ${computerSelection}. You win!`;
  } else if (playerSelection === computerSelection) {
    return `you both chose ${playerSelection}, TIE!`;
  } else {
    return `You chose ${playerSelection} & the computer chose ${computerSelection}. Computer wins!`;
  }
}

const playerSelection = playerPlay();
const computerSelection = computerPlay();

console.log(playRound(playerSelection, computerSelection));
