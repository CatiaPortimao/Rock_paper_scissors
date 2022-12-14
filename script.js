
var arr=["rock","paper","scissors"];

function randomnr(mn,mx) {
    return Math.random()*(mx-mn) +mn;
    
}
function getComputerChoice() {
    return (arr[Math.floor(randomnr(1,4))-1]);

}
function playRound(playerSelection,ComputerChoice) {
    if (playerSelection=="paper" && ComputerChoice=="paper") {
        console.log("There is no winner");  
    }else if (playerSelection=="scissors" && ComputerChoice=="paper") {
        console.log("Scissors beats paper");  
    }
    else if (playerSelection=="rock" && ComputerChoice=="paper") {
        console.log("Paper beats rock");  
    }

    else if (playerSelection=="paper" && ComputerChoice=="rock") {
        console.log("Paper beats rock");  
    }else if (playerSelection=="scissors" && ComputerChoice=="rock") {
        console.log("Rock beats Scissors");  
    }
    else if (playerSelection=="rock" && ComputerChoice=="rock") {
        console.log("There is no winner");  
    }

    else if (playerSelection=="paper" && ComputerChoice=="scissors") {
        console.log("Scissors beats paper");  
    }else if (playerSelection=="scissors" && ComputerChoice=="scissors") {
        console.log("There is no winner");  
    }
    else if (playerSelection=="rock" && ComputerChoice=="scissors") {
        console.log("Rock beats Scissors");  
    }
}


function  game() {
    const playerSelection=prompt("Insert your choice:");
   
    for (let index = 0; index <5; index++) {
        console.log("player choice: "+playerSelection);
        const ComputerChoice=getComputerChoice();
        console.log("Computer choice: "+ComputerChoice);
        console.log(playRound(playerSelection.toLocaleLowerCase(),ComputerChoice));
    }
    
}
game();