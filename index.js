let humanScore = 0;
let computerScore = 0;

const gameChoices = [
        {
            choice: "rock",
            beats: "scissors"
        },
        {
            choice: "paper",
            beats: "rock"
        },
        {
            choice: "scissors",
            beats: "paper"
        }

    ];

function getComputerChoice () {
    const randomNumber = Math.floor(Math.random() * 3);

    let computerChoice = gameChoices[randomNumber].choice;
    return computerChoice;
}

let humanChoice = "";

let container = document.querySelector(".container"); 

container.addEventListener('click', (event) => {
    if (event.target.className === "game") {
        humanChoice = event.target.id;    
        playRound(humanChoice, getComputerChoice());
    }
    });

let roundResult = document.createElement('p');
roundResult.innerText = "";
container.appendChild(roundResult);

let humanDisplayScore = document.createElement('p');
let computerDisplayScore = document.createElement('p');
let scoreContainer = document.querySelector('.scores');
scoreContainer.appendChild(humanDisplayScore);
scoreContainer.appendChild(computerDisplayScore);


const playRound = (humanChoice, computerChoice) => {
    if (humanScore < 5 && computerScore < 5) {
        if (humanChoice === computerChoice) {
            console.log("It's a tie!");
            roundResult.innerText = "It's a tie!";
        } else {
            const humanObj = gameChoices.find(choice => choice.choice === humanChoice);
            if (humanObj && humanObj.beats === computerChoice) {
                humanScore += 1;
                console.log(`You win! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice}`);
                roundResult.innerText = `You won this round! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice}`;
            } else {
                computerScore += 1;
                console.log(`You lose! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${humanChoice}`);
                roundResult.innerText = `You lost this round! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${humanChoice}`;
            }
        }

        humanDisplayScore.innerText = `Your score: ${humanScore}`;
        computerDisplayScore.innerText = `Computer score: ${computerScore}`;

        if (humanScore === 5) {
            endGame("won");
        }
        if (computerScore === 5) {
            endGame("lost")
        }
    }    
}

let resetButton = document.createElement('button');
    resetButton.innerText = "Restart";

let gameButtons = document.querySelectorAll('.game'); 

function endGame(gameResult) { 
    gameButtons.forEach(btn => btn.style.display = "none");
    container.prepend(resetButton);
    roundResult.innerText = `GAME OVER! You ${gameResult}!`;
}

resetButton.addEventListener('click', () => {
    resetGame();
});

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    roundResult.innerText = "";
    gameButtons.forEach(btn => btn.style.display = "inline-block");
    resetButton.remove();
    humanDisplayScore.innerText = "";
    computerDisplayScore.innerText = "";
}

/*let roundsPlayed = 0;
while (humanScore < 5) {
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
*/
