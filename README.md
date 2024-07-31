# Rock Paper Scissors Lizard Spock

This project implements the game "Rock Paper Scissors Lizard Spock" with a function to determine the winner between two players based on their choices. For full details you can find the challenge at Codewars page:

 https://www.codewars.com/kata/57d29ccda56edb4187000052/javascript

## Table of Contents

- [Description](#description)
- [Usage](#usage)
- [Functions](#functions)
- [Example](#example)
- [License](#license)

## Description

"Rock Paper Scissors Lizard Spock" is an extended version of the classic game "Rock Paper Scissors". This version includes two additional moves: Lizard and Spock, which reduces the chances of a draw. The rules are as follows:

- Scissors cuts Paper
- Paper covers Rock
- Rock crushes Lizard
- Lizard poisons Spock
- Spock smashes Scissors
- Scissors decapitates Lizard
- Lizard eats Paper
- Paper disproves Spock
- Spock vaporizes Rock
- Rock crushes Scissors

## Usage

The main function `rpsls(pl1, pl2)` takes two inputs: the choices of player 1 and player 2, and returns the result of the game.

### Functions

1. **rpsls(pl1, pl2)**

   This is the main function that determines the winner. It uses the helper functions `getWinner`, `isWinningCombination`, and `isValidEntry`.

2. **getWinner(p1, p2)**

   Determines the winner based on the choices of player 1 and player 2. Returns "Draw!" if both choices are the same, "Player 1 Won!" if player 1's choice wins, and "Player 2 Won!" if player 2's choice wins. Returns an error message if any of the choices are invalid.

3. **isWinningCombination(first, second)**

   Checks if the first choice beats the second choice based on the game rules. Returns `true` if the first choice wins, otherwise returns `false`.



### Example

```javascript
console.log(rpsls("scissors", "paper"));  // Output: "Player 1 Won!"
console.log(rpsls("rock", "spock"));      // Output: "Player 2 Won!"
console.log(rpsls("spock", "spock"));     // Output: "Draw!"
console.log(rpsls("rock", "money"));      // Output: "Error: Invalid entry!"
