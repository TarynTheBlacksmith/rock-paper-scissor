const prompt = require('prompt-sync')();

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 100);
    if (randomNumber <= 33) {
        return "rock";
    } else if (randomNumber <= 66) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let choice = prompt("Choose Rock, Paper, or Scissors: ", null);
    if (choice === "rock") {
        return "rock";
    } else if (choice === "paper") {
        return "paper";
    } else if (choice === "scissors") {
        return "scissors";
    } else {
        console.log("Invalid choice");
    }
}

function playRound (humanChoice, computerChoice) {
    let lowercaseHumanChoice = humanChoice.toLowerCase();

    if (lowercaseHumanChoice === "rock" && computerChoice === "scissors") {
        console.log(`You win!  Rock beats ${computerChoice}!`);
        humanScore++;
    } else if (lowercaseHumanChoice === "paper" && computerChoice === "rock") {
        console.log(`You win!  Paper beats ${computerChoice}!`);
        humanScore++;
    } else if (lowercaseHumanChoice === "scissors" && computerChoice === "paper") {
        console.log(`You win!  Scissors beats ${computerChoice}!`);
        humanScore++;
    } else if (lowercaseHumanChoice === computerChoice) {
        console.log("It's a tie! Try again!")
    } else {
        console.log(`You lose!  ${computerChoice} beats ${lowercaseHumanChoice}!`)
        computerScore++;
    }
}

function playGame(){
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    if (humanScore > computerScore) {
        console.log(`You won ${humanScore} out of 5 games!`)
    } else {
        console.log(`You lost!  The computer won ${computerScore} out of 5 games!`)
    }
}

playGame();