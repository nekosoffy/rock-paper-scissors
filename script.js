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