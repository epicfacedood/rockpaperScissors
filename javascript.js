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

function playRound(humanChoice, computerChoice) {
    alert(`You chose: ${humanChoice}`);
    alert(`Computer chose: ${computerChoice}`);
    roundNumber++;
    roundCounter.textContent = "Round Number: " + roundNumber.toString();
    if (humanChoice == "paper" && computerChoice == "rock"){
        alert("YOU WON");
        humanScore++;
        scoreCounter.textContent = "Your Score: " + humanScore.toString() + "\n Computer's Score: " + computerScore.toString();
        return "a";
    } 
    else if (humanChoice == "rock" && computerChoice == "scissors"){
        alert("YOU WON");
        humanScore++;
        scoreCounter.textContent = "Your Score: " + humanScore.toString() + "\n Computer's Score: " + computerScore.toString();
        return "a";       
    }
    else if (humanChoice == computerChoice){
        alert("ITS A DRAW");
        scoreCounter.textContent = "Your Score: " + humanScore.toString() + "\n Computer's Score: " + computerScore.toString();
        return "draw";
    }
    else if (humanChoice == "scissors" && computerChoice == "paper"){
        alert("YOU WON");
        humanScore++;
        scoreCounter.textContent = "Your Score: " + humanScore.toString() + "\n Computer's Score: " + computerScore.toString();
        return "a";
    }
    else {
        alert("YOU LOST");
        computerScore++;
        scoreCounter.textContent = "Your Score: " + humanScore.toString() + "\n Computer's Score: " + computerScore.toString();
        return "b";
    }
    
}

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        alert("You have chosen " + button.id);
        playRound(button.id, getComputerChoice());
        content.textContent = "You have chosen " + button.id;
    });
});

if (computerScore == 5 || humanScore == 5){
    alert("The game has concluded since one of you has reached 5 points.");
}

var roundNumber = 1;
var humanScore = 0;
var computerScore = 0;
const container = document.querySelector(".container");
const content = document.createElement("p");
const roundCounter = document.createElement("h2");
const scoreCounter = document.createElement("h1");
content.textContent = "";
roundCounter.textContent = "Round Number: 1";
scoreCounter.textContent = "Your Score: 0" + "\n Computer's Score: 0";
container.appendChild(content);
container.appendChild(roundCounter);
container.appendChild(scoreCounter);