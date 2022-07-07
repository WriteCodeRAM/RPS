const choices = ['rock', 'paper', 'scissors'];

let winningScore = 3;
let playerScore = 0;
let computerScore = 0;
let tieCounter = 0;

let computerSelection = computerPlay();
let playerSelection;

// const PLAYER_WIN = `CONGRATS, you win! you chose ${playerSelection} and the computer chose ${computerSelection}`;
// const COMPUTER_WIN = `You chose ${playerSelection} and the computer chose ${computerSelection}, You LOSE!`;
// const TIE_GAME = ` You both chose ${playerSelection}, it's a TIE!`;

let PLAYER_WON = `You have beat the computer in a 5 round game of Rock, Paper, Scissors!`;
let COMPUTER_WON = `You have lost to the computer in a 5 round game of Rock, Paper, Scissors! `;
let TIE = `You both have a score of ${playerScore}, it's a TIE!`;

function computerPlay() {
  let computerChoice = choices[Math.floor(Math.random() * choices.length)];
  return computerChoice;
}

function playerPlay() {
  //validate input
  let isValid = false;
  let playerChoice;
  while (!isValid) {
    playerChoice = prompt('Enter Rock, Paper, or Scissors').toLowerCase();
    if (
      playerChoice !== 'rock' &&
      playerChoice !== 'paper' &&
      playerChoice !== 'scissors'
    ) {
      playerChoice = prompt(
        'Enter Rock, Paper, or Scissors. Spelling matters but it is not case sensitive'
      );
      playerChoice.toLowerCase();
    } else {
      isValid = true;
    }
  }

  return playerChoice;
}

// Keep it simple, we'll make a similar function getting the players choice
// then calling both in a 'game' function and compare the results

function playRound(playerSelection, computerSelection) {
  computerSelection = computerPlay();

  while (playerScore < 5 && computerScore < 5) {
    if (
      (playerSelection === 'rock' && computerSelection === 'scissors') ||
      (playerSelection === 'paper' && computerSelection === 'rock') ||
      (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
      playerScore++;
      playerScoreboard.innerText = playerScore;
      if (playerScore === 5) {
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
      if (computerScore === 5) {
        resultsDisplay.innerText = COMPUTER_WON;
        disableButtons();
        return;
      }
      return (resultsDisplay.innerText = `${playerSelection} loses to ${computerSelection}. YOU LOSE`); //COMPUTER_WIN;
    }
  }
}

// console.log(playRound(playerPlay(), computerPlay()));

const buttons = document.querySelectorAll('button');

const btnHolder = document.querySelector('.button-holder'); // div holding btns

// add an event listener that selects 'rock' if the player clicks rock and so on..
//learn foreach
//apply logic to all buttons (CHECK)

const rockBtn = document.querySelector('.rock');

// buttons.forEach((button) => {
//   button.addEventListener('click', (e) => {
//     let playerSelect = e.target.innerText.toLowerCase();

//     while (playerScore < 5 && computerScore < 5) {
//       playRound(playerSelect, computerPlay());
//     }
//   });
// });

//HMMMM
//display results outside of the console
const resultsDisplay = document.querySelector('.resultsDisplay');

//display score
const playerScoreboard = document.querySelector('.playerScore');
const computerScoreboard = document.querySelector('.computerScore');
const tieScoreboard = document.querySelector('.tieScore');

//failed
// playerScoreboard.append(playerScore);
// computerScoreboard.append(computerScore);

//game ends when player or cpu reaches score of 5

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    playRound(e.target.innerText.toLowerCase());
  });
});

function disableButtons() {
  buttons.forEach((button) => {
    button.disabled = true;
  });
}
