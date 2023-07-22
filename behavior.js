

function singleRound(playerSelection, computerSelection){
    let result;
    if (playerSelection === computerSelection){
        console.log("It's a Draw!");
        return;
    }
    switch (playerSelection) {
        case "Rock":
            if (computerSelection === "Paper"){
                result = `You Lose! ${computerSelection} beats ${playerSelection}`;
            }else if (computerSelection === "Scissor"){
                result =`You Win! ${playerSelection} beats ${computerSelection}`;
            }
            break;
        case "Paper"://corregir
            if (computerSelection === "Rock"){
                result =`You Lose! ${computerSelection} beats ${playerSelection}`;
            }else if (computerSelection === "Scissor"){
                result =`You Win! ${playerSelection} beats ${computerSelection}`;
            }
            break;
        case "Scissor"://corregir
            if (computerSelection === "Paper"){
                result =`You Lose! ${computerSelection} beats ${playerSelection}`;
            }else if (computerSelection === "Rock"){
                result =`You Win! ${playerSelection} beats ${computerSelection}`;
            }
            break;
        default:
            break;
    }
    return result;
}


function getComputerChoice (){
    const choices = ["Rock","Paper","Scissor"];
    const randomNumber = Math.random()*(3-1)+1; //generates a random number from 1 to 3
    return choices[randomNumber];
}

const playerChoice = "rock";
console.log(singleRound(playerChoice, getComputerChoice()));
