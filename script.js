"use strict";

const score0 = document.getElementById("score--0");
const score1 = document.getElementById("score--1");
const dice = document.querySelector(".dice");
const newGameBtn = document.querySelector(".nw-gm");
const rollDiceBtn = document.querySelector(".rl-dc");
const holdBtn = document.querySelector(".hold");
const currentScore0 = document.querySelector(".current-score-0");
const currentScore1 = document.querySelector(".current-score-1");
const playerSide0 = document.querySelector(".side0");
const playerSide1 = document.querySelector(".side1");

dice.classList.add("hidden");

const scores = [0, 0];
let currentScoreTotal = 0;
let activePlayer = 0;
let playing = true;

rollDiceBtn.addEventListener("click", function () {
  if (playing) {
    const diceNum = Math.trunc(Math.random() * 6) + 1;
    dice.classList.remove("hidden");
    dice.src = `dice-${diceNum}.png`;

    if (diceNum !== 1) {
      currentScoreTotal += diceNum;
      document.querySelector(`.current-score-${activePlayer}`).textContent =
        currentScoreTotal;
      // currentScore0.textContent = currentScoreTotal;
    } else {
      document
        .querySelector(`.side${activePlayer}`)
        .classList.remove("selected");
      document.querySelector(`.current-score-${activePlayer}`).textContent = 0;
      activePlayer = activePlayer === 0 ? 1 : 0;
      currentScoreTotal = 0;
      document.querySelector(`.side${activePlayer}`).classList.add("selected");
    }
  }
});

holdBtn.addEventListener("click", function () {
  if (playing) {
    scores[activePlayer] += currentScoreTotal;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    document.querySelector(`.current-score-${activePlayer}`).textContent = 0;

    if (scores[activePlayer] >= 20) {
      playing = false;
      dice.classList.add("hidden");
      document
        .querySelector(`.side${activePlayer}`)
        .classList.add("player-winner");
      document
        .querySelector(`.side${activePlayer}`)
        .classList.remove("selected");
    } else {
      document
        .querySelector(`.side${activePlayer}`)
        .classList.remove("selected");
      document.querySelector(`.current-score-${activePlayer}`).textContent = 0;
      activePlayer = activePlayer === 0 ? 1 : 0;
      currentScoreTotal = 0;
      document.querySelector(`.side${activePlayer}`).classList.add("selected");
    }
  }
});

newGameBtn.addEventListener("click", function () {
  currentScore0.textContent = 0;
  currentScore1.textContent = 0;
  dice.classList.add("hidden");
  score0.textContent = 0;
  score1.textContent = 0;
  activePlayer === 0;
  playerSide0.classList.remove("player-winner");
  playerSide1.classList.remove("player-winner");
  playerSide0.classList.add("selected");
  playerSide1.classList.remove("selected");
});
