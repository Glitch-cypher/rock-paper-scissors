let cM = randomMove();
let pM = "";



while(confirm('still playing')){
  pM = prompt("Make your move!");
  cM = randomMove();
  console.log(randomMove());
  getWinner(pM, cM);
}


function getWinner (pM,cM){
if(pM === "rock" && cM === "scissors" || pM === "scissors" && cM === "paper" || pM === "paper" && cM === "rock") {
    alert("1");
} else if(cM === "rock" && pM === "scissors" || cM === "scissors" && pM === "paper" || cM === "paper" && pM === "rock") {
    alert ("-1");
} else if(cM === "rock" && pM === "rock" || cM === "scissors" && pM === "scissors" || cM === "paper" && pM === "paper") {
    alert("0");
}
// console.log(cM)


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


