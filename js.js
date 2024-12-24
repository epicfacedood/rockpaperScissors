function getRandomInt() {
    return (Math.floor(Math.random() * 3));
  }

function getComputerChoice() {
    if (getRandomInt() == 0){
        return "rock";
    } else if (getRandomInt() == 1){
        return "paper";
    } 
    else {
        return "scissors";
    }
}

function getHumanChoice() {
    let choice;
    while (choice !== "rock" && choice !== "paper" && choice !== "scissors"){
        choice = (prompt("What is your choice? Rock, Paper, or Scissors")).toLowerCase();
    }
    return choice;
}


function playRound(humanChoice, computerChoice) {
    console.log(`You chose: ${humanChoice}`);
    console.log(`Computer chose: ${computerChoice}`);
    if (humanChoice == "paper" && computerChoice == "rock"){
        console.log("YOU WON");
        return "a";
    } 
    else if (humanChoice == "paper" && computerChoice == "scissors"){
        console.log("YOU LOST");
        return "b"; 
    }
    else if (humanChoice == "rock" && computerChoice == "scissors"){
        console.log("YOU WON");
        return "a";       
    }
    else if (humanChoice == "rock" && computerChoice == "paper"){
        console.log("YOU LOST");
        return "b";
    }
    else if (humanChoice == computerChoice){
        console.log("ITS A DRAW");
        return "draw";
    }
    else if (humanChoice == "scissors" && computerChoice == "rock"){
        console.log("YOU LOST");
        return "b";
    }
    else if (humanChoice == "scissors" && computerChoice == "paper"){
        console.log("YOU WON");
        return "a";
    }
}


function playGame() {

let humanScore = 0;
let computerScore = 0;

for (let i = 0; i < 5; i++){
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    const roundResult = playRound(humanSelection, computerSelection);
    if (roundResult === "a"){
        humanScore++;
    } else if (roundResult == "b"){
        computerScore++;
    }
    
    console.log("Computer Score: " + computerScore + " Your Score: " + humanScore);
}
    if (humanScore > computerScore) {
        console.log("you won!");
    } else if (computerScore > humanScore) {
        console.log("you lost!");
    } else {
        console.log("its a draw");
    }

}

playGame();