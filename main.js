let cM = randomMove();
let pM = "";
let wins = 0;
let loss = 0;
let draw = 0;
let games = 0;


while(confirm('Ready for rock, paper, scissors?')){
  pM = prompt("Make your move!");
  cM = randomMove();
  console.log(cM);
  getWinner(pM, cM);
  alert(`wins: ${wins},\n losses:${loss},\n draws:${draw},\n games played:${games}`);
}


function getWinner (pM,cM){
if(pM === "rock" && cM === "scissors" || pM === "scissors" && cM === "paper" || pM === "paper" && cM === "rock") {
    wins ++;
    alert("1");
} else if(cM === "rock" && pM === "scissors" || cM === "scissors" && pM === "paper" || cM === "paper" && pM === "rock") {
    loss ++;
    alert ("-1");
} else if(cM === "rock" && pM === "rock" || cM === "scissors" && pM === "scissors" || cM === "paper" && pM === "paper") {
    draw ++;
    alert("0");
}else{
    alert('Dumbass, enter the right thing!');
}
// console.log(cM)
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


