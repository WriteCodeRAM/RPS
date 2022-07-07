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
  if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    playerScore++;
    return ` ${playerSelection} beats ${computerSelection}, YOU WIN!`; //PLAYER_WIN;
  } else if (playerSelection === computerSelection) {
    tieCounter++;
    return `you both chose ${computerSelection}. DRAW!`; //TIE_GAME;
  } else {
    computerScore++;
    return ` ${playerSelection} loses to ${computerSelection}. YOU LOSE`; //COMPUTER_WIN;
  }
}

// console.log(playRound(playerPlay(), computerPlay()));

const buttons = document.querySelectorAll('button');

const btnHolder = document.querySelector('.button-holder'); // div holding btns

// add an event listener that selects 'rock' if the player clicks rock and so on..

const rockBtn = document.querySelector('.rock');

// rockBtn.addEventListener('click', (e) => {
//   let playerSelect = e.target.innerText;

//   console.log(playRound(playerSelect, computerPlay()));
// });

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    let playerSelect = e.target.innerText.toLowerCase();

    console.log(playRound(playerSelect, computerPlay()));
  });
});

//learn foreach
//apply logic to all buttons
//display results outside of the console

//struggling but i feel like if I could simply make the button inner text or textContent be the playerSelection parameter
//then this wouldnt be so bad after all
//but the eventListener isnt cooperating w/ playRound() so...
//we try tmm
