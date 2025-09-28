/*
- [ ] Create a function getComputerChoice 
- [ ] Create a function getHumanChoice
*/

function getComputerChoice() {
  const elements = ["paper", "rock", "scissors"];
  return elements[Math.floor(Math.random() * 3)];
}

function getHumanChoice() {
  let choice = prompt("Enter the choice: ").toLowerCase();
  if (["paper", "rock", "scissors"].includes(choice)) {
    return choice;
  }
  return getHumanChoice();
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    if (humanChoice === computerChoice) {
      console.log("It's a tie!");
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      console.log(`You win! ${humanChoice} beats ${computerChoice}`);
      humanScore++;
    } else {
      console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
      computerScore++;
    }
  }

  let gameRound = 1;
  while (gameRound <= 5) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    gameRound++;
  }
}

playGame();
