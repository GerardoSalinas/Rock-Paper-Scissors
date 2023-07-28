//funciones

function singleRound(playerSelection, computerSelection){
    let result;
    if (playerSelection === computerSelection){
        result = "It's a Draw!";
        return result;
        
    }
    switch (playerSelection) {
        case "Rock":
            if (computerSelection === "Paper"){
                result = `You Lose! ${computerSelection} beats ${playerSelection}`;
                computerScore++;
            }else if (computerSelection === "Scissor"){
                result =`You Win! ${playerSelection} beats ${computerSelection}`;
                playerScore++;
            }
            break;
        case "Paper":
            if (computerSelection === "Rock"){
                result =`You Lose! ${computerSelection} beats ${playerSelection}`;
                computerScore++;
            }else if (computerSelection === "Scissor"){
                result =`You Win! ${playerSelection} beats ${computerSelection}`;
                playerScore++;
            }
            break;
        case "Scissor":
            if (computerSelection === "Paper"){
                result =`You Lose! ${computerSelection} beats ${playerSelection}`;
                computerScore++;
            }else if (computerSelection === "Rock"){
                result =`You Win! ${playerSelection} beats ${computerSelection}`;
                playerScore++;
            }
            break;
            default:
            break;
    }
    return result;
}

function game (){
    let result;
    for (let round = 0; round<5; round++){
        let playerChoice = prompt("Enter your choice: ");
        playerChoice = playerChoice.replace(playerChoice.charAt(0),playerChoice.charAt(0).toUpperCase());
        alert(singleRound(playerChoice, getComputerChoice()));
    }
    (playerScore>computerScore) ? (result = `You win! [${playerScore}::${computerScore}]`):(result = `You Lose! [${playerScore}::${computerScore}]`);
    return result;
}

function getComputerChoice (){
    const choices = ["Rock","Paper","Scissor"];
    const randomNumber = Math.floor(Math.random()*(2-0+1)); //generates a random number from 1 to 3
    return choices[randomNumber];
}

/* function updateScore(){
} */



//simulacion
let playerScore = 0;
let computerScore = 0;
// updateScore();

let numbers = document.querySelector('.numbers');
numbers = `${playerScore}  :  ${computerScore}`;

let playerImage = document.querySelector('.playerImageFile');

const btnRock = document.querySelector('.Rock');
btnRock.addEventListener('click', () => {
    playerImage.src = "./sources/roca.png";
});

const btnPaper = document.querySelector('.Paper');
btnPaper.addEventListener('click', () => {
    playerImage.src = "./sources/papel.png";
});

const btnScissors = document.querySelector('.Scissors');
btnScissors.addEventListener('click', () => {
    playerImage.src = "./sources/tijeras.png";
});

// alert(game());

