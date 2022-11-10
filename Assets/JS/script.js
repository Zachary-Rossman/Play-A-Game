// global variables
// choices, computer choice, user choice, wins, losses, ties, play again
let wins = 0;
let losses = 0;
let ties = 0;
let choices = ['Rock', 'Paper', 'Scissors'];

//functions

// play game
let playGame = function() {
    alert ("Do you want to play a game?  👿")
    let userChoice = window.prompt("Enter the word Rock, Paper , or Scissors");
    // Generate random choice
    let index = Math.floor(Math.random() * choices.length);
    let computerChoice = choices[index];
    console.log(computerChoice)
    //Declare the winner
    if (userChoice == computerChoice){
        ties ++;
        window.alert("It's a tie!")
    }
    if (
        (userChoice === "Rock" && computerChoice === "Scissors") ||
        (userChoice === "Paper" && computerChoice === "Rock") ||
        (userChoice === "Scissor" && computerChoice === "Paper")
    ) {
        wins ++;
        window.alert("You won!")
    }
    else if (
        (userChoice === "Rock" && computerChoice === "Paper") ||
        (userChoice === "Paper" && computerChoice === "Scissors") ||
        (userChoice === "Scissors" && computerChoice === "Rock")
    ) {
        losses ++;
        window.alert("You Lost!")
    }

    // print the stats
    window.alert(`Stats: \n wins: ${wins}\n losses: ${losses}\n Ties: ${ties}`);

    //ask the user to play again
    let playAgain = window.confirm('Do you want to play a game... again?');
    if (playAgain === true) {
        playGame();
}
}

//calling functions
playGame();
