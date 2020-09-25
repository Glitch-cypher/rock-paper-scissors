let pM = "";
let cM = "";

function getWinner (pM,cM){

if(pM === "rock" && cM === "scissors" || pM === "scissors" && cM === "paper" || pM === "paper" && cM === "rock") {
return 1;
} else if(cM === "rock" && pM === "scissors" || cM === "scissors" && pM === "paper" || cM === "paper" && pM === "rock") {
return -1;
} else if(cM === "rock" && pM === "rock" || cM === "scissors" && pM === "scissors" || cM === "paper" && pM === "paper") {
  return 0;
}
}
let result = getWinner("paper", "rock");

