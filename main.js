let cM = randomMove();
let pM = "";
let wins = 0;
let loss = 0;
let draw = 0;
let games = 0;
let button = document.querySelector("button");
let input = document.querySelector("input");
let output = document.querySelector("#scores");

let nameOutput = document.querySelector("#userName");
let computer = document.querySelector("#computer");
let errorMes = document.querySelector("#dumbass");
let error = "Enter the right thing, dumbass!";





function RPS() {
  if (input.value === "") {
    errorMes.innerText = error;
    return;

  } else {
    errorMes.innerText = "";
  }

  pM = input.value.toLowerCase();
  if (pM === "rock" || pM === "scissors" || pM === "paper") {
    // errorMes.innerText = "";
    cM = randomMove();
    computer.innerText = 'computer chooses: ' + cM;
    getWinner(pM, cM);
    output.innerText = `wins: ${wins},\n losses:${loss},\n draws:${draw},\n games played:${games}`;
    console.log(output.value);
  } else {
    errorMes.innerText = error;
  }

}

button.addEventListener("click", RPS);

function getWinner(pM, cM) {
  if (pM === "rock" && cM === "scissors" || pM === "scissors" && cM === "paper" || pM === "paper" && cM === "rock") {
    wins++;
  } else if (cM === "rock" && pM === "scissors" || cM === "scissors" && pM === "paper" || cM === "paper" && pM === "rock") {
    loss++;
  } else if (cM === "rock" && pM === "rock" || cM === "scissors" && pM === "scissors" || cM === "paper" && pM === "paper") {
    draw++;
  } else {}

  games++;

}
//
function randomMove() {
  let roundNum = Math.round(Math.random() * 2);
  if (roundNum === 0) {
    return 'rock';
  } else if (roundNum === 1) {
    return 'paper';
  } else if (roundNum === 2) {
    return 'scissors';
  }


}

let userName = prompt("What username?");

while (userName.length > 10) {
  userName = prompt("What username?");
}
nameOutput.innerText = userName;