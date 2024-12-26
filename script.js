const rockButton = document.createElement('button');
const paperButton = document.createElement('button');
const scissorsButton = document.createElement('button');
const outcome = document.createElement('h1');
const results = document.createElement('div');

let humanScore = 0;
let computerScore = 0;

rockButton.textContent = "Rock";
paperButton.textContent = "Paper";
scissorsButton.textContent = "Scissors";

const game = document.querySelector('#game');
game.appendChild(rockButton);
game.appendChild(paperButton);
game.appendChild(scissorsButton);
game.appendChild(outcome);

results.textContent = "Results";
const playerScore = document.createElement('p');
results.appendChild(playerScore);
const opponentScore = document.createElement('p');
results.appendChild(opponentScore);
game.appendChild(results);

rockButton.addEventListener("click", () => {
    playRound("Rock");
});
paperButton.addEventListener("click", () => {
    playRound("Paper");
});
scissorsButton.addEventListener("click", () => {
    playRound("Scissors");
});


function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 100);
    if (randomNumber <= 33) {
        return "Rock";
    } else if (randomNumber <= 66) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function playRound (humanChoice) {
    const computerChoice = getComputerChoice();

    if (humanChoice === "Rock" && computerChoice === "Scissors") {
        outcome.textContent = `You win!  Rock beats ${computerChoice}!`;
        humanScore++;
        console.log("H: "+humanScore);
    } else if (humanChoice === "Paper" && computerChoice === "Rock") {
        outcome.textContent = `You win!  Paper beats ${computerChoice}!`;
        humanScore++;
        console.log("H: "+humanScore);
    } else if (humanChoice === "Scissors" && computerChoice === "Paper") {
        outcome.textContent = `You win!  Scissors beats ${computerChoice}!`;
        humanScore++;
        console.log("H: "+humanScore);
    } else if (humanChoice === computerChoice) {
        outcome.textContent = "It's a tie! Try again!";
        console.log("H: "+humanScore);
    } else {
        outcome.textContent = `You lose!  ${computerChoice} beats ${humanChoice}!`;
        computerScore++;
        console.log("C: "+computerScore);
    }
    playerScore.textContent = "Your Score: " + humanScore;
    opponentScore.textContent = "Computer Score: " + computerScore;
    if (humanScore === 5) {
        outcome.textContent = `Player Wins! Game Over!`;
    } else if (computerScore === 5){
        outcome.textContent = `Computer Wins! Game Over!`
    }
}
