////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////
var  playerMove = ('');
var  computerMove = ('');
var  winner = ('');
function getPlayerMove(move) {
    var playerMove;
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return move = move || 'getInput()';
}

function getComputerMove(move) {
    var = computerMove;
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return move = move || 'randomPlay()';
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
   if (getPlayerMove = 'rock') {
  
}  if (getComputerMove = 'paper') {

}  winner = 'computerWins';
 
 if (getPlayerMove = 'rock') {

   } if (getComputerMove = 'rock') {

   } else winner = 'tie';
   
   if (getPlayerMove = 'paper') {

   } if (getComputerMove = 'rock') {

   } else winner = 'playerWins';

    if (getPlayerMove = 'paper') {

   } if (getComputerMove = 'paper') {

   } else winner = 'tie';

   return winner }

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
while (playerWins = 5 && computerWins = 5) 
{   
var = playerMove;
var = computerMove;
var = get getWinner;
    if (winner == 'player' playerWins);
        if (winner == 'computer' computerWins);

}

    playToFive 
    return [playerWins, computerWins];

}

