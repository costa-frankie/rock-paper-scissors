function getComputerChoice () {
    const randomNumber = Math.floor(Math.random() * 3);

    let computerChoice;

    if (randomNumber === 0) {
        computerChoice = "rock";
    } else if (randomNumber === 1) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }
    return computerChoice;
}

function getHumanChoice() {
    const input = prompt("Enter rock, paper or scissors");
    return input ? input.toLowerCase() : "";
}

function playGame () {
    let humanScore = 0;
    let computerScore = 0;

    const playRound = (humanChoice, computerChoice) => {

        if (humanChoice === computerChoice) {
            console.log("It's a tie!")
            return "It's a tie! Try again";
        } 
        
        if ((humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")    

        ) {
            humanScore += 1;
            console.log(`You win! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice}`);
            return "You win!";
        } 
        
        if ((computerChoice === "rock" && humanChoice === "scissors") ||
            (computerChoice === "paper" && humanChoice === "rock") ||
            (computerChoice === "scissors" && humanChoice === "paper") 
        ) {
            computerScore += 1;
            console.log(`You lose! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${humanChoice}`);
            return "You lost!";
        }

        return "Invalid choice. Please enter rock, paper, or scissors.";
    }
    
    let roundsPlayed = 0;
    while (roundsPlayed < 5) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        const result = playRound(humanChoice, computerChoice);
        if (result !== "Invalid choice. Please enter rock, paper, or scissors.") {
            roundsPlayed++;
    }
}

    if (humanScore > computerScore) {
        console.log(`You won the game! ${humanScore} to ${computerScore}`);
    }

    if (computerScore > humanScore) {
        console.log(`You lost the game! ${computerScore} to ${humanScore}`)
    } 

    if (computerScore === humanScore) {
        console.log("The game ended in a tie!");
    }
}

playGame();
