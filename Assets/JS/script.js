// global variables
// choices, computer choice, user choice, wins, losses, ties, play again
let wins = 0;
let losses = 0;
let ties = 0;

//functions
// play game
let playGame = function() {
    alert ("Do you want to play a game?  👿")
    let userChoice = window.prompt("enter the word Rock, Paper , or Scissors");
    console.log(userChoice)
    let computerChoice = ("Paper");
userChoice = userChoice.toUpperCase();
    //Declare the winner
    if (userChoice == computerChoice){
        ties ++;
        window.alert("It's a tie!")
    }
    else if (
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
    ); {
        losses ++;
        window.alert("You Lost!")
    }
}

//calling functions
playGame();
