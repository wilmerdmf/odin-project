let playerCounter = 0;
let computerCounter = 0;

console.clear();
console.log(`Hello! Welcome to rock-paper-scissors.

In this game, the winner will be the best of 5, meaning that by winning 3 rounds against the computer, you will achieve ultimate victory. Are you able to beat it? Give it a try!

The game will start in a few seconds.`);

const choices = [
  {
    choice: "rock",
    id: 0,
  },
  {
    choice: "paper",
    id: 1,
  },
  {
    choice: "scissors",
    id: 2,
  },
];

const getComputerChoice = () => {
  return choices[Math.floor(Math.random() * 3)].id;
};

const playRound = () => {
  let getPlayerChoice = prompt(`Make your choice!
  
  Type "rock", "paper" or "scissors"`);

  switch (getPlayerChoice.toLocaleLowerCase()) {
    case "rock":
      getPlayerChoice = 0;
      break;

    case "paper":
      getPlayerChoice = 1;
      break;

    case "scissors":
      getPlayerChoice = 2;
      break;

    default:
      return "Invalid selection";
      break;
  }

  let playerPlay = getPlayerChoice;
  let computerPlay = getComputerChoice();

  if (playerPlay === computerPlay) return "Draw!";

  if (
    (playerPlay === 0 && computerPlay === 2) ||
    (playerPlay === 1 && computerPlay === 0) ||
    (playerPlay === 2 && computerPlay === 1)
  ) {
    playerCounter++;
    return `Player wins! ${choices[playerPlay].choice} beats ${choices[computerPlay].choice}
    
    Player: ${playerCounter} - Computer: ${computerCounter}
    `;
  } else {
    computerCounter++;
    return `Computer wins! ${choices[computerPlay].choice} beats ${choices[playerPlay].choice}
    
    Player: ${playerCounter} - Computer: ${computerCounter}
    `;
  }
};

const game = () => {
  for (let i = 0; i < 100; i++) {
    console.log(playRound());

    if (playerCounter === 3) {
      return "Player wins the game!";
    }

    if (computerCounter === 3) {
      return "Computer wins the game!";
    }
  }
};

setTimeout(() => {
  console.log(game());
}, 10000);
