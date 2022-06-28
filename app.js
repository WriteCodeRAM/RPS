const choices = ['rock', 'paper', 'scissors'];

let winningScore = 3;
let playerScore = 0;
let computerScore = 0;
let tieCounter = 0;

let computerSelection = computerPlay();
let playerSelection;

const PLAYER_WIN = `CONGRATS, you win! you chose ${playerSelection} and the computer chose ${computerSelection}`;
const COMPUTER_WIN = `You chose ${playerSelection} and the computer chose ${computerSelection}, You LOSE!`;
const TIE_GAME = ` You both chose ${playerSelection}, it's a TIE!`;

let PLAYER_WON = `You have beat the computer 5 round game of Rock Paper Scissors!`;
let COMPUTER_WON = `You have lost to the computer in a 5 round game of Rock, Paper, Scissors! `;
let TIE = `You both have a score of ${playerScore}, it's a TIE!`;

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
    playerScore++;
    return ` ${playerSelection} beats ${computerSelection}, YOU WIN!`; //PLAYER_WIN;
  } else if (playerSelection === computerSelection) {
    tieCounter++;
    return `you both ${playerSelection} chose ${computerSelection}. DRAW!`; //TIE_GAME;
  } else {
    computerScore++;
    return ` ${playerSelection} loses to ${computerSelection}. YOU LOSE`; //COMPUTER_WIN;
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    playerSelection = playerPlay();
    computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));

    // make it so that after a single round results are stored'
    console.log(playerScore, computerScore);
  }
  if (playerScore > computerScore) {
    return console.log(
      PLAYER_WON,
      `Player: ${playerScore} to Computer: ${computerScore}, with ${tieCounter} ties`
    );
  } else if (computerScore > playerScore) {
    return console.log(
      COMPUTER_WON,
      `Player: ${playerScore} to Computer: ${computerScore}, with ${tieCounter} ties`
    );
  } else {
    return console.log(TIE);
  }
}

game();
