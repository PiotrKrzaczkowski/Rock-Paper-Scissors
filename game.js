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

const winner = document.getElementById("winner");
const hands = [...document.querySelectorAll(".select img")];
const roundsSpan = document.querySelector(".rounds span");
const winsSpan = document.querySelector(".wins span");
const drawsSpan = document.querySelector(".draws span");
const loosesSpan = document.querySelector(".losses span");

function handSelection() {
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

hands.forEach((i) => i.addEventListener("click", handSelection));

document.querySelector(".start").addEventListener("click", startGame);
