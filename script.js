

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
        console.log('Ganhaste! ' + humanChoice + ' vence ' + computerChoice);
    } else {
        computerScore++;
        console.log('Perdeste! ' + computerChoice + ' vence ' + humanChoice);
    }
}

function playGame() {
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);

    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice()
    playRound(humanSelection, computerSelection)
    
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice()
    playRound(humanSelection, computerSelection)
    
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice()
    playRound(humanSelection, computerSelection)

    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice()
    playRound(humanSelection, computerSelection)

    console.log('Fim de Jogo');
    console.log('Pontuacao final Jogador: ' + humanScore + ' | computador: ' + computerScore );

    if (humanScore > computerScore) {
        console.log('🏆 Parabéns! Voce Venceuuuu...!');
    } else if (humanScore < computerScore) {
        console.log('Opa... Voce Perdeu!, nao foi desta vez. Tenta novamente!');
    } else {
        console.log('🤝Grande jogo, mas tivemos um Empate técnico');
    }
}