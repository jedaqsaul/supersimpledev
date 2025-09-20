let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  ties: 0,
};

scoreCount();

let isAutoPlaying = false;
let intervalId;

// const autoPlay=()=>{
// if (!isAutoPlaying) {
//     intervalId = setInterval(() => {
//       const playerMove = pickComputerMove();
//       playGame(playerMove);
//     }, 1000);
//     isAutoPlaying = true;
//   } else {
//     clearInterval(intervalId);
//     isAutoPlaying = false;
//   }
// }

function autoPlay() {
  if (!isAutoPlaying) {
    intervalId = setInterval(() => {
      const playerMove = pickComputerMove();
      playGame(playerMove);
    }, 1000);
    document.querySelector(".js-autoplay-button").innerHTML = " Stop Playing";
    isAutoPlaying = true;
  } else {
    document.querySelector(".js-autoplay-button").innerHTML = " Auto Play";
    clearInterval(intervalId);
    isAutoPlaying = false;
  }
}

document.querySelector(".js-rock-button").addEventListener("click", () => {
  playGame("rock");
});

document.body.addEventListener("keydown", (event) => {
  if (event.key === "p") {
    playGame("paper");
  } else if (event.key === "s") {
    playGame("scissors");
  } else if (event.key === "r") {
    playGame("rock");
  } else if (event.key === "a") {
    autoPlay();
  } else if (event.key === "Backspace") {
    resetScore();
  }
});

document.querySelector(".js-paper-button").addEventListener("click", () => {
  playGame("paper");
});
document.querySelector(".js-scissors-button").addEventListener("click", () => {
  playGame("scissors");
});
document.querySelector(".js-reset-button").addEventListener("click", () => {
  resetScore();
});
document.querySelector(".js-autoplay-button").addEventListener("click", () => {
  autoPlay();
});

function resetScore() {
  const displayMessage = document.querySelector(".js-confirm-reset");

  displayMessage.innerHTML = `Are you sure you want to reset the score <button class="js-yes-button">Yes</button> <button class="js-no-button"> No</button> `;

  document.querySelector(".js-yes-button").addEventListener("click", () => {
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
    localStorage.removeItem("score");

    scoreCount();
    displayMessage.innerHTML = "";
  });

  document.querySelector(".js-no-button").addEventListener("click", () => {
    scoreCount();
    displayMessage.innerHTML = "";
  });
}

function playGame(playerMove) {
  const computerMove = pickComputerMove();

  let result = "";
  if (playerMove === "scissors") {
    if (computerMove === "rock") {
      result = "You lose.";
    } else if (computerMove === "paper") {
      result = "You win.";
    } else if (computerMove === "scissors") {
      result = "Tie.";
    }
  } else if (playerMove === "paper") {
    if (computerMove === "rock") {
      result = "You win.";
    } else if (computerMove === "paper") {
      result = "Tie.";
    } else if (computerMove === "scissors") {
      result = "You lose.";
    }
  } else if (playerMove === "rock") {
    if (computerMove === "rock") {
      result = "Tie.";
    } else if (computerMove === "paper") {
      result = "You lose.";
    } else if (computerMove === "scissors") {
      result = "You win.";
    }
  }

  if (result === "You win.") {
    score.wins += 1;
  } else if (result === "You lose.") {
    score.losses += 1;
  } else if (result === "Tie.") {
    score.ties += 1;
  }

  localStorage.setItem("score", JSON.stringify(score));

  document.querySelector(".js-result").innerHTML = result;
  document.querySelector(".js-moves").innerHTML = `You
      <img src="images/${playerMove}-emoji.png" class="move-icon" />
      <img src="images/${computerMove}-emoji.png" class="move-icon" />
      Computer`;

  scoreCount();
}

function pickComputerMove() {
  const randomNumber = Math.random();
  let computerMove = "";

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "paper";
  } else {
    computerMove = "scissors";
  }
  return computerMove;
}

function scoreCount() {
  document.querySelector(
    ".js-score"
  ).innerHTML = ` Wins: ${score.wins}, Losses: ${score.losses}, Ties ${score.ties}`;
}
