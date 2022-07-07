const choices = ['rock', 'paper', 'scissors'];

let winningScore = 5;
let playerScore = 0;
let computerScore = 0;
let tieCounter = 0;

let PLAYER_WON = `You have beat the computer in a 5 round game of Rock, Paper, Scissors!`;
let COMPUTER_WON = `You have lost to the computer in a 5 round game of Rock, Paper, Scissors! `;
let TIE = `You both have a score of ${playerScore}, it's a TIE!`;

function computerPlay() {
  let computerChoice = choices[Math.floor(Math.random() * choices.length)];
  return computerChoice;
}

function playRound(playerSelection, computerSelection) {
  computerSelection = computerPlay();

  while (playerScore < winningScore && computerScore < winningScore) {
    if (
      (playerSelection === 'rock' && computerSelection === 'scissors') ||
      (playerSelection === 'paper' && computerSelection === 'rock') ||
      (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
      playerScore++;
      playerScoreboard.innerText = playerScore;
      if (playerScore === winningScore) {
        resultsDisplay.innerText = PLAYER_WON;
        disableButtons();
        return;
      }
      return (resultsDisplay.innerText = `${playerSelection} beats ${computerSelection}, YOU WIN!`); //PLAYER_WIN;
    } else if (playerSelection === computerSelection) {
      tieCounter++;
      tieScoreboard.innerText = tieCounter;
      return (resultsDisplay.innerText = `you both chose ${computerSelection}. DRAW!`); //TIE_GAME;
    } else {
      computerScore++;
      computerScoreboard.innerText = computerScore;
      if (computerScore === winningScore) {
        resultsDisplay.innerText = COMPUTER_WON;
        disableButtons();
        return;
      }
      return (resultsDisplay.innerText = `${playerSelection} loses to ${computerSelection}. YOU LOSE`); //COMPUTER_WIN;
    }
  }
}

function disableButtons() {
  buttons.forEach((button) => {
    button.disabled = true;
  });
}

const buttons = document.querySelectorAll('button'); // rock, paper, scissors
const btnHolder = document.querySelector('.button-holder'); // div holding btns

//display results outside of the console
const resultsDisplay = document.querySelector('.resultsDisplay');

//display score
const playerScoreboard = document.querySelector('.playerScore');
const computerScoreboard = document.querySelector('.computerScore');
const tieScoreboard = document.querySelector('.tieScore');

//calls the playround function with the button the user clicks
buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    playRound(e.target.innerText.toLowerCase());
  });
});
