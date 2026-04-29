

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const number = Math.floor(Math.random() * 3)

    if (number === 0) {
        return 'rock'
    } else if (number === 1) {
        return 'paper'
    } else {
        return 'scissors'
    }
}

function getHumanChoice() {
   const escolha = prompt('Escolhe: rock, paper ou scissors');
   return escolha.toLowerCase();
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log('Empate! Ambos escolheram ' + humanChoice);
    }
    else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        humanScore++;
        console.log('Ganhaste! ' + humanChoice + 'vence' + computerChoice);
    } else {
        computerScore++;
        console.log('Perdeste! ' + computerChoice + 'vence' + humanChoice);
    }
}

const humanSelection = getHumanChoice()
const computerSelection = getComputerChoice()
playRound(humanSelection, computerSelection)