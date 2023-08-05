//funciones

function singleRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection){
        return ;
        
    }
    switch (playerSelection) {
        case 0:
            if (computerSelection === 1){
                computerScore++;
            }else if (computerSelection === 2){
                playerScore++;
            }
            break;
        case 1:
            if (computerSelection === 0){
                computerScore++;
            }else if (computerSelection === 2){
                playerScore++;
            }
            break;
        case 2:
            if (computerSelection === 2){
                computerScore++;
            }else if (computerSelection === 0){
                playerScore++;
            }
            break;
            default:
            break;
    }
}


function getComputerChoice (){
    let randomNumber = Math.floor(Math.random()*(2-0+1)); //generates a random number from 1 to 2 (inclusive)
    return randomNumber;
}

function updateScore(){
    let numbers = document.querySelector('.numbers');
    numbers.innerHTML = `${playerScore}  :  ${computerScore}`;
}

function initialRotation (){
    let randomPlayerIndex = Math.floor(Math.random()*(2-0+1));
    let randomCpuIndex = Math.floor(Math.random()*(2-0+1));
    playerImage.src = imagesPaths[randomPlayerIndex];
    setTimeout(() => {
        cpuImage.src = imagesPaths[randomCpuIndex];
    },500);

}


function determinePlayerstatus (){
    if (playerScore === 5){
        return true;
    }else if (computerScore === 5){
        return false;
    }
}
function result (playerStatus){
    if (playerStatus !== undefined) {
        playerDiv.style.visibility = "hidden";
        cpuDiv.style.visibility = "hidden";
        if (playerStatus === true){
            //cambiar "vs" a "You Win!"
            vsDiv.innerHTML = "You Win!";
            //cambiar el tamanio de la fuente
            vsDiv.style.cssText = 'color: #09b125;font-size: 38px; font-weight: 600';
            //ocultar los botones de RPS
            btnRock.style.display = "none";
            btnPaper.style.display = "none";
            btnScissors.style.display = "none";
            //mostrar el boton de "PLAY"
            btnplay.style.display = "block";
        }else if(playerStatus === false){
            vsDiv.innerHTML = "You Lose!";
            vsDiv.style.cssText = 'color: #bb2e1c;font-size: 38px; font-weight: 600';
            btnRock.style.display = "none";
            btnPaper.style.display = "none";
            btnScissors.style.display = "none";
            btnplay.style.display = "block";
        }
    }


}
//simulacion
let playerScore = 0;
let computerScore = 0;
let playerChoice = -1;
let playerWins;

const imagesPaths = ["./sources/roca.png","./sources/papel.png","./sources/tijeras.png"];
//divs containing images
let playerDiv = document.querySelector('.player-image');
let cpuDiv = document.querySelector('.CPU-image');
let vsDiv = document.querySelector('.versus');
//images
let playerImage = document.querySelector('.playerImageFile');
let cpuImage = document.querySelector('.cpuImageFile');
//buttons
const btnplay = document.querySelector('.play');
btnplay.style.display = "none";
const btnRock = document.querySelector('.Rock');
const btnPaper = document.querySelector('.Paper');
const btnScissors = document.querySelector('.Scissors');

updateScore();
let imagesAnimation = setInterval(initialRotation,2000);





btnplay.addEventListener('click', () => {
    //cambiar vs div para que no quede remanente de la partida anterior
    vsDiv.style.cssText = 'color: #000000; font-size: 24px; font-weight: 400';
    //hide divs containing images
    playerDiv.style.visibility = "hidden";
    cpuDiv.style.visibility = "hidden";
    //stop setInterval function
    clearInterval(imagesAnimation);
    //enable RPS buttons
    btnRock.style.display = "block";
    btnPaper.style.display = "block";
    btnScissors.style.display = "block";
    //diplay play => none 
    btnplay.style.display = "none";
});

btnRock.addEventListener('click', () => {//arreglada la logica
    playerImage.src = imagesPaths[0];
    playerDiv.style.visibility = "visible";
    let computerChoice = getComputerChoice();
    singleRound(0, computerChoice);
    updateScore();
    cpuImage.src = imagesPaths[computerChoice];
    cpuDiv.style.visibility = "visible";
    //check for winner
    playerWins = determinePlayerstatus();
    result(playerWins);


});

btnPaper.addEventListener('click', () => {
    playerImage.src = imagesPaths[1];
    playerDiv.style.visibility = "visible";
    cpuDiv.style.visibility = "visible";
    playerChoice = 1;
    singleRound(playerChoice, computerSelection);
});

btnScissors.addEventListener('click', () => {
    playerDiv.style.visibility = "visible";
    cpuDiv.style.visibility = "visible";
    playerImage.src = imagesPaths[2];
    playerChoice = 2;
    singleRound(playerChoice, computerSelection);
});

//hidding buttons
btnRock.style.display = "none";
btnplay.style.display = "block";
btnPaper.style.display = "none";
btnScissors.style.display = "none";


// alert(game());

