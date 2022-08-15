function getComputerChoice() {
    var compHand = undefined;
    var num = Math.floor(Math.random()*3) + 1;

    switch (num) {
        case 1:
            compHand = "Rock";
            break;
        case 2:
            compHand = "Paper";
            break;
        case 3:
            compHand = "Scissors"
    }
}

function playRound(playerSelection, ComputerSelection) {
    var roundResult = undefined;

    if (playerSelection.toUpperCase() == "ROCK" && ComputerSelection.toUpperCase() == "ROCK") {
        return roundResult = 0;
    }
    else if (playerSelection.toUpperCase() == "ROCK" && ComputerSelection.toUpperCase() == "PAPER") {
        return roundResult = 1;
    }
    else if (playerSelection.toUpperCase() == "ROCK" && ComputerSelection.toUpperCase() == "SCISSORS") {
        return roundResult = 2;
    }
    else if (playerSelection.toUpperCase() == "PAPER" && ComputerSelection.toUpperCase() == "ROCK") {
        return roundResult = 2;
    }
    else if (playerSelection.toUpperCase() == "PAPER" && ComputerSelection.toUpperCase() == "PAPER") {
        return roundResult = 0;
    }
    else if (playerSelection.toUpperCase() == "PAPER" && ComputerSelection.toUpperCase() == "SCISSORS") {
        return roundResult = 1;
    }
    else if (playerSelection.toUpperCase() == "SCISSORS" && ComputerSelection.toUpperCase() == "ROCK") {
        return roundResult = 1;
    }
    else if (playerSelection.toUpperCase() == "SCISSORS" && ComputerSelection.toUpperCase() == "PAPER") {
        return roundResult = 2;
    }
    else if (playerSelection.toUpperCase() == "SCISSORS" && ComputerSelection.toUpperCase() == "SCISSORS") {
        return roundResult = 0;
    }
    else {
        return roundResult = 3;
    }
}

function game() {   
    var humanScore = 0;
    var computerScore = 0;

    let playerSelection = prompt("Make your selection: Rock, paper, scissors.", "None");
    let ComputerSelection = getComputerChoice();
    
    for (let i=0; i < 5; i++) {
        let roundResult = playRound(playerSelection, ComputerSelection);
        switch (roundResult) {
            case 0:
                break;
            case 1:
                computerScore++;
                break;
            case 2:
                humanScore++;
                break;
            case 3:
                console.log("Hmm, I didn't quite catch that.")
                break;
        }
    }

    if (humanScore > computerScore) {
        console.log("Nice job!");
        return
    }
    else if (humanScore < computerScore) {
        console.log("The machine wins!");
        return
    }
    else {
        console.log("It's a tie game!");
        return
    }
}

game();