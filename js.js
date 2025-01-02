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
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            choice = button.id;
        });
    });
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
    roundNumber++;
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
    if (humanScore === 5) {
        div.textContent = "You won!" + humanScore.toString() + computerScore.toString();
        console.log("you won!");
    } else if (computerScore === 5) {
        div.textContent = "You lost!" + humanScore.toString() + computerScore.toString();
        console.log("you lost!");
    } 
    div.textContent = "Round: " + roundNumber.toString();
    container.appendChild(div);
}
const buttons = document.querySelectorAll("button");
const container = document.querySelector(".container");
let roundNumber = 1;

const div = document.createElement("p");
div.textContent = "Round: " + roundNumber.toString();
container.appendChild(div);




buttons.forEach((button) => {
    button.addEventListener("click", () => {
        alert('You chose ' + button.id);
        choice = button.id;
    });
});

playGame();