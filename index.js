let humanScore = 0;
let computerScore = 0;

const gameChoices = [
    { choice: "rock", beats: "scissors" },
    { choice: "paper", beats: "rock" },
    { choice: "scissors", beats: "paper" }
];

function getComputerChoice () {
    const randomNumber = Math.floor(Math.random() * gameChoices.length);
    return gameChoices[randomNumber].choice;
}

const human = {
    score: 0,
    display: document.createElement('p')
};

const computer = {
    score: 0,
    display: document.createElement('p')
};

let gameButtonContainer = document.querySelector(".game-btn-container"); 
let scoreContainer = document.querySelector('.scores');
human.display.classList.add('score');
computer.display.classList.add('score');
scoreContainer.appendChild(human.display);
scoreContainer.appendChild(computer.display);

let roundResult = document.createElement('p');
roundResult.innerText = "";
roundResult.classList.add('result');
gameButtonContainer.appendChild(roundResult);

let resetButton = document.createElement('button');
resetButton.classList.add('reset');
resetButton.innerText = "Restart";

let gameButtons = document.querySelectorAll('.game'); 

function updateDisplayScores() {
    human.display.innerText = `Your score: ${human.score}`;
    computer.display.innerText = `Computer score: ${computer.score}`;
}

function checkGameEnd() {
    if (human.score === 5) {
        endGame("won");
        return true;
    }
    if (computer.score === 5) {
        endGame("lost");
        return true;
    }
    return false;
}

function playRound(humanChoice, computerChoice) {
    if (human.score < 5 && computer.score < 5) {
        if (humanChoice === computerChoice) {
            roundResult.innerText = "It's a tie!";
        } else {
            const humanObj = gameChoices.find(choice => choice.choice === humanChoice);
            if (humanObj && humanObj.beats === computerChoice) {
                human.score += 1;
                roundResult.innerText = `You won this round! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice}`;
            } else {
                computer.score += 1;
                roundResult.innerText = `You lost this round! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${humanChoice}`;
            }
        }
        updateDisplayScores();
        checkGameEnd();
    }    
}

function endGame(gameResult) { 
    gameButtons.forEach(btn => btn.style.display = "none");
    gameButtonContainer.prepend(resetButton);
    roundResult.innerText = `GAME OVER! You ${gameResult}!`;
}

function resetGame() {
    human.score = 0;
    computer.score = 0;
    roundResult.innerText = "";
    gameButtons.forEach(btn => btn.style.display = "inline-block");
    resetButton.remove();
    human.display.innerText = "";
    computer.display.innerText = "";
}

resetButton.addEventListener('click', resetGame);

gameButtonContainer.addEventListener('click', (event) => {
    if (event.target.className === "game") { 
        playRound(event.target.id, getComputerChoice());
    }
});

