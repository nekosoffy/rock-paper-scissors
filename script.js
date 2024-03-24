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