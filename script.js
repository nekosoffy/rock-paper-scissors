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
    while (showPrompt === true) {
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
}

let playerSelection = getPlayerChoice();
let computerSelection = getComputerChoice();
let playerTracker = 0;
let computerTracker = 0;

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        document.getElementById("Result").innerHTML = `Both player and computer picked ${playerSelection}. It's a draw!`;
    } else if (playerSelection === "Rock") {
        if (computerSelection === "Paper") {
            document.getElementById("Result").innerHTML = "Computer picked Paper. You lost!"
            ++computerTracker;
        } else {
            document.getElementById("Result").innerHTML = "Computer picked Scissors. You won!"
            ++playerTracker;
        }
    } else if (playerSelection === "Paper") {
        if (computerSelection === "Scissors") {
            document.getElementById("Result").innerHTML = "Computer picked Scissors. You lost!"
            ++computerTracker;
        } else {
            document.getElementById("Result").innerHTML = "Computer picked Rock. You won!"
            ++playerTracker;
        }
    } else {
        if (computerSelection === "Rock") {
            document.getElementById("Result").innerHTML = "Computer picked Rock. You lost!"
            ++computerTracker;
        } else {
            document.getElementById("Result").innerHTML = "Computer picked Paper. You won!"
            ++playerTracker;
        }
    }
}

console.log(playRound(playerSelection, computerSelection));
console.log(computerTracker);