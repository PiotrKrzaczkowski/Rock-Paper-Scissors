const winner = document.getElementById("winner");
const hands = [...document.querySelectorAll(".select img")];
const roundsSpan = document.querySelector(".rounds span");
const winsSpan = document.querySelector(".wins span");
const drawsSpan = document.querySelector(".draws span");
const loosesSpan = document.querySelector(".losses span");
const popup = document.querySelector(".popup");
const popupContinue = document.getElementById("continue");
const popupReset = document.getElementById("reset");
const popupQuit = document.getElementById("quit");
const endGamePopup = document.getElementById("pupup-quit");
const popupInfoRounds = document.querySelector(".popup .title");

const summary = {
  rounds: 0,
  wins: 0,
  looses: 0,
  draws: 0,
};
let { rounds, wins, looses, draws } = summary;

const game = {
  playerHand: "",
  aiHand: "",
};
let { playerHand, aiHand, playerHandHTML } = game;

function handSelection() {
  aiHand = "";
  playerHand = this.dataset.option;
  hands.forEach((i) => (i.style.boxShadow = ""));
  this.style.boxShadow = "0px 0px 3px cyan";
  document.getElementById("your-choice").innerText = playerHand;
}

function startGame() {
  if (!playerHand) {
    alert("Pick your hand");
    return;
  }
  computerChoice();
  checkResult();

  if (
    rounds === 10 ||
    rounds === 20 ||
    rounds === 30 ||
    rounds === 40 ||
    rounds === 50
  ) {
    gameQuestion();
  }
}

function computerChoice() {
  let index = Math.floor(Math.random() * hands.length);
  aiHand = hands[index].dataset.option;
  console.log(aiHand);
}

function checkResult() {
  document.getElementById("ai-choice").innerText = aiHand;
  rounds++;
  roundsSpan.innerText = rounds;

  if (aiHand === "scissors" && playerHand === "paper") {
    looses++;
    loosesSpan.innerText = looses;
    winner.innerText = "You loose";
  } else if (aiHand === "scissors" && playerHand === "rock") {
    wins++;
    winsSpan.innerText = wins;
    winner.innerText = "You won";
  } else if (aiHand === "scissors" && playerHand === "scissors") {
    draws++;
    drawsSpan.innerText = draws;
    winner.innerText = "DRAW";
  } else if (aiHand === "rock" && playerHand === "scissors") {
    looses++;
    loosesSpan.innerText = looses;
    winner.innerText = "You loose";
  } else if (aiHand === "rock" && playerHand === "paper") {
    wins++;
    winsSpan.innerText = wins;
    winner.innerText = "You won";
  } else if (aiHand === "rock" && playerHand === "rock") {
    draws++;
    drawsSpan.innerText = draws;
    winner.innerText = "DRAW";
  } else if (aiHand === "paper" && playerHand === "rock") {
    looses++;
    loosesSpan.innerText = looses;
    winner.innerText = "You loose";
  } else if (aiHand === "paper" && playerHand === "scissors") {
    wins++;
    winsSpan.innerText = wins;
    winner.innerText = "You won";
  } else if (aiHand === "paper" && playerHand === "paper") {
    draws++;
    drawsSpan.innerText = draws;
    winner.innerText = "DRAW";
  }
}

function gameQuestion() {
  popupInfoRounds.innerText = `You have played ${rounds} rounds, what do you want to do?`;

  // CONTINUE BUTTON

  popup.style.display = "flex";
  popupContinue.addEventListener("click", () => (popup.style.display = "none"));

  // RESET BUTTON

  popupReset.addEventListener("click", () => {
    rounds = 0;
    wins = 0;
    looses = 0;
    draws = 0;
    loosesSpan.innerText = 0;
    roundsSpan.innerText = 0;
    winsSpan.innerText = 0;
    drawsSpan.innerText = 0;
    popup.style.display = "none";
  });

  // QUIT BUTTON
  popupQuit.addEventListener("click", () => {
    endGamePopup.style.display = "block";

    setTimeout(() => {
      endGamePopup.style.display = "none";
      popup.style.display = "none";
    }, 3000);

    rounds = 0;
    wins = 0;
    looses = 0;
    draws = 0;
    loosesSpan.innerText = 0;
    roundsSpan.innerText = 0;
    winsSpan.innerText = 0;
    drawsSpan.innerText = 0;
  });
}

hands.forEach((i) => i.addEventListener("click", handSelection));

document.querySelector(".start").addEventListener("click", startGame);
