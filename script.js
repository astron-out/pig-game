"use strict";

const score0 = document.getElementById("score--0");
const score1 = document.getElementById("score--1");
const dice = document.querySelector(".dice");
const newGameBtn = document.querySelector(".nw-gm");
const rollDiceBtn = document.querySelector(".rl-dc");
const holdBtn = document.querySelector(".hold");
const currentScore0 = document.querySelector(".current-score-0");
const currentScore1 = document.querySelector(".current-score-1");
const playerSide0 = document.querySelector("side0");
const playerSide1 = document.querySelector("side1");

dice.classList.add("hidden");

let currentScoreTotal = 0;

rollDiceBtn.addEventListener("click", function () {
  const diceNum = Math.trunc(Math.random() * 6) + 1;
  dice.classList.remove("hidden");
  dice.src = `dice-${diceNum}.png`;

  if (diceNum !== 1) {
    currentScoreTotal += diceNum;
    currentScore0.textContent = currentScoreTotal;
  } else {
    playerSide0.classList.remove("selected");
    // playerSide1.classList.add("selected");
  }
});
