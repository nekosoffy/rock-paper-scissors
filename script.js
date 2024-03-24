function getComputerChoice() {
    let choiceNumber = Math.floor(Math.random() * 3) + 1;
    if (choiceNumber === 1) {
        return "Rock";
    } else if (choiceNumber === 2) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function getPlayerChoice() {
    let showPrompt = true;
    do {
        let choice = prompt("Please, pick rock, paper or scissors.")
        if (typeof choice === "string") {
            if (choice.toLowerCase() === "rock" ) {
                showPrompt = false;
                return "Rock";
            } else if (choice.toLowerCase() === "paper") {
                showPrompt = false;
                return "Paper";
            } else if (choice.toLowerCase() === "scissors") {
                showPrompt = false;
                return "Scissors";
            } else {
            alert("That's an invalid option.");
            }
        } else {
            alert("That's an invalid option.");
        }
    }
    while (showPrompt === true);
}

let playerTracker = 0;
let computerTracker = 0;

function playRound() {
    let playerSelection = getPlayerChoice();
    let computerSelection = getComputerChoice();
    if (playerSelection === computerSelection) {
        console.log(`Both player and computer picked ${playerSelection}. It's a draw!`);
    } else if (playerSelection === "Rock") {
        if (computerSelection === "Paper") {
            console.log("Computer picked Paper. You lost!");
            ++computerTracker;
        } else {
            console.log("Computer picked Scissors. You won!");
            ++playerTracker;
        }
    } else if (playerSelection === "Paper") {
        if (computerSelection === "Scissors") {
            console.log("Computer picked Scissors. You lost!");
            ++computerTracker;
        } else {
            console.log("Computer picked Rock. You won!");
            ++playerTracker;
        }
    } else {
        if (computerSelection === "Rock") {
            console.log("Computer picked Rock. You lost!");
            ++computerTracker;
        } else {
            console.log("Computer picked Paper. You won!");
            ++playerTracker;
        }
    }
}

function playGame() {
    let i = 0;
    do {
        playRound();
        console.log(`Current player score: ${playerTracker}`);
        console.log(`Current computer score: ${computerTracker}`);
        ++i;
    }
    while (i < 5);
    if (playerTracker > computerTracker) {
        console.log("The game finished! You won!");
    } else {
        console.log("The game finished! You lost!");
    }
}

console.log(playGame())