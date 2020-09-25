let cM = randomMove();
let pM = "";
let wins = 0;
let loss = 0;
let draw = 0;
let games = 0;
let button = document.querySelector("button");
let input = document.querySelector("input");
let output = document.querySelector("output");


function RPS() {
  if(input.value === "" ) {
    return;
  }
  pM = input.value.toLowerCase();
  if(pM === "rock" || pM === "scissors" || pM === "paper") {
    cM = randomMove();
  console.log(pM);
  getWinner(pM, cM);
  output.value = `wins: ${wins},\n losses:${loss},\n draws:${draw},\n games played:${games}`;
    
  }
  
}

  button.addEventListener("click", RPS);

function getWinner (pM,cM){
if(pM === "rock" && cM === "scissors" || pM === "scissors" && cM === "paper" || pM === "paper" && cM === "rock") {
    wins ++;
} else if(cM === "rock" && pM === "scissors" || cM === "scissors" && pM === "paper" || cM === "paper" && pM === "rock") {
    loss ++;
} else if(cM === "rock" && pM === "rock" || cM === "scissors" && pM === "scissors" || cM === "paper" && pM === "paper") {
    draw ++;
}else{
}

games++;

}
//
function randomMove() {
let roundNum = Math.round(Math.random()*2);
if(roundNum === 0) {
  return 'rock';
} else if(roundNum === 1) {
  return 'paper';
} else if(roundNum === 2) {
  return 'scissors';
}


}


