


function playGame(){
    let humanScore = 0;
    let computerScore = 0;
   

    for(i=0; i <5;i++){
        let result = playRound(getHumanChoice(),getComputerChoice());
        console.log(`human score: ${humanScore}\n computer score: ${computerScore}\n RESULT: ${result}`);

    }

    function playRound(humanChoice, computerChoice){

        if(humanChoice.toLowerCase() == 'rock' && computerChoice == "paper"){
            computerScore ++;
            return "the computer win, you are loser"
        }else if(humanChoice.toLowerCase() == 'paper' && computerChoice == "rock"){
            humanScore ++;
            return "you win"
        }else if(humanChoice.toLowerCase() == 'scissors' && computerChoice == "paper"){
            humanScore ++;
            return "you win"
        }else if(humanChoice.toLowerCase() == 'paper' && computerChoice == "scissors"){
            computerScore ++;
            return "the computer win, you are loser"
        }else if(humanChoice.toLowerCase() == 'rock' && computerChoice == "scissors"){
            humanScore ++;
            return "you win"
        }else if(humanChoice.toLowerCase() == 'scissors' && computerChoice == "rock"){
            computerScore ++;
            return "the computer win, you are loser"
        }else if(humanChoice.toLowerCase() == computerChoice){
            return 'draw'
        }
    }

}


function getComputerChoice(){
    const choice = Math.floor(Math.random() * 3);
    if (choice == 0){
        return "rock"
    }else if (choice == 1){
        return "paper"
    }else if (choice == 2){
        return "scissors"
    }
}

function getHumanChoice(){
    const input = prompt("ENTER [rock,paper,scissors]: ");
    return input
}

playGame();