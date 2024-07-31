function rpsls(pl1,pl2){
    validatePlayerInput(pl1, "player 1");
    validatePlayerInput(pl2, "player 2")
    return getWinner(pl1, pl2)
}

function getWinner(p1, p2) {

    if (p1 === p2) {
        return "Draw!";
    }
    return isWinningCombination(p1, p2) ? "Player 1 Won!" : "Player 2 Won!";
 
}

function isWinningCombination(first, second) {
    // first beats the second
    const winningCombo = {
        "scissors-paper": true,
        "paper-rock": true,
        "rock-lizard":  true,
        "lizard-spock": true,
        "spock-scissors": true,
        "scissors-lizard": true,
        "lizard-paper": true,
        "paper-spock": true,
        "spock-rock": true,
        "rock-scissors": true
    };

    const key = `${first.toLowerCase()}-${second.toLowerCase()}`;
    return winningCombo[key] && winningCombo[key] !== "undefined" ? true: false;

}


function validatePlayerInput(playerChoice, player) {
    const choices = ["spock", "lizard", "paper", "scissors", "rock"];
    if (!choices.includes(playerChoice.toLowerCase())) {
        throw new Error(`${player} - The choices must be either [${choices.join(", ")}], not <${playerChoice}>`);
    }
}


// test
console.log(rpsls('rock', 'lizard'))      // Player 1 Won!
console.log(rpsls('paper', 'rock'))       // Player 1 Won!
console.log(rpsls('scissors', 'lizard'))  // Player 1 Won!
console.log(rpsls('lizard', 'paper'))     // Player 1 Won!
console.log(rpsls('spock', 'rock'))       // Player 1 Won!

console.log(rpsls('lizard', 'scissors'))  // Player 2 Won!
console.log(rpsls('spock', 'lizard'))     // Player 2 Won!
console.log(rpsls('paper', 'lizard'))     // Player 2 Won!
console.log(rpsls('scissors', 'spock'))   // Player 2 Won!
console.log(rpsls('rock', 'spock'))       // Player 2 Won!

console.log(rpsls('rock', 'rock'))        // Draw!
console.log(rpsls('paper', 'paper'))      // Draw!
