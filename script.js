

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const number = Math.floor(Math.random() * 3)

    if (number === 0) {
        return "rock"
    } else if (number === 1) {
        return "paper"
    } else {
        return "scissors"
    }
}

function getHumanChoice() {
   const escolha = prompt("Escolhe: rock, paper ou scissors");
   return escolha.toLowerCase();
}
