function getComputerChoice() {
    let choiceNumber = Math.floor(Math.random() * 3) + 1;
    if (choiceNumber === 1) {
        return "rock";
    } else if (choiceNumber === 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getPlayerChoice() {
    let choice;
    while (true) {
        choice = prompt("Please, pick rock, paper, or scissors.");
        if (typeof choice === "string") {
            choice = choice.toLowerCase();
            if (choice === "rock" || choice === "paper" || choice === "scissors") {
                return choice;
            } else {
                alert("That's an invalid option.");
            }
        } else {
            alert("That's an invalid option.");
        }
    }
}

let playerTracker = 0;
let computerTracker = 0;
let playerSelection;
let computerSelection;

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        result = `Both player and computer picked ${playerSelection}. It's a draw!`;
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors" ) ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper") 
    ) {
        result = `Computer picked ${computerSelection}. You won!`;
        ++playerTracker;
    } else {
        result = `Computer picked ${computerSelection}. You lost!`;
        ++computerTracker;
    }
    console.log(result);
    console.log(`Current player score: ${playerTracker}`);
    console.log(`Current computer score: ${computerTracker}`);
}

async function playGame() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = getPlayerChoice();
        let computerSelection = getComputerChoice();
        playRound(playerSelection,computerSelection);
        await delay(1000);
    }
    if (playerTracker > computerTracker) {
        console.log("The game finished! You won!");
        } else {
        console.log("The game finished! You lost!");
    }
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

playGame();