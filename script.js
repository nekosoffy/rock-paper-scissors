let playerTracker = 0;
let computerTracker = 0;
let roundTracker = 1;
let playerSelection;
let computerSelection;

const round_div = document.body.appendChild(document.createElement("div"));
const score_div = document.body.appendChild(document.createElement("div"));
const buttons_div = document.body.appendChild(document.createElement("div"));

function getComputerChoice() {
    let choiceNumber = Math.floor(Math.random() * 3) + 1;
    if (choiceNumber === 1) {
        return "rock";
    } else if (choiceNumber === 2) {
        return "paper";
    } return "scissors";
}

function getPlayerChoice() {
    const rock_btn = buttons_div.appendChild(document.createElement("button"));
    const paper_btn = buttons_div.appendChild(document.createElement("button"));
    const scissors_btn = buttons_div.appendChild(document.createElement("button"));

    rock_btn.textContent = "Rock";
    paper_btn.textContent = "Paper";
    scissors_btn.textContent = "Scissors";

    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            playerSelection = button.textContent.toLowerCase();
            buttons_div.replaceChildren();
            score_div.replaceChildren();
            playRound();
        });
    });
}

function playRound() {
    const roundText = document.createElement("p");
    const playerScore = document.createElement("p");
    const computerScore = document.createElement("p");

    if (playerSelection === computerSelection) {
        roundText.textContent = `Both player and computer picked "${playerSelection}". It's a draw! (${roundTracker}/5)`;
        ++roundTracker;
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors" ) ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper") 
    ) {
        roundText.textContent = `Computer picked "${computerSelection}". You won! (${roundTracker}/5)`;
        ++playerTracker;
        ++roundTracker;
    } else {
        roundText.textContent = `Computer picked "${computerSelection}". You lost! (${roundTracker}/5)`;
        ++computerTracker;
        ++roundTracker;
    }

    playerScore.textContent = `Current player score: ${playerTracker}`
    computerScore.textContent = `Current computer score: ${computerTracker}`;
    round_div.appendChild(roundText);
    score_div.appendChild(playerScore);
    score_div.appendChild(computerScore);

    if (roundTracker <= 5) {
        playGame();
    } else {
        const result = document.createElement("p");
        if (playerTracker > computerTracker && roundTracker === 6) {
            result.textContent = "The game finished! You won!";
        } else if (playerTracker < computerTracker && roundTracker === 6) {
            result.textContent = "The game finished! You lost!";
        };
        score_div.appendChild(result);
    }
}

function playGame() {
        computerSelection = getComputerChoice();
        getPlayerChoice();
    }
    
playGame();
