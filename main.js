let cM = "rock";
let pM = prompt("Make your move!");

function getWinner (pM,cM){

if(pM === "rock" && cM === "scissors" || pM === "scissors" && cM === "paper" || pM === "paper" && cM === "rock") {
    alert("1");
} else if(cM === "rock" && pM === "scissors" || cM === "scissors" && pM === "paper" || cM === "paper" && pM === "rock") {
    alert ("-1");
} else if(cM === "rock" && pM === "rock" || cM === "scissors" && pM === "scissors" || cM === "paper" && pM === "paper") {
    alert("0");
}
}
let result = getWinner(pM, cM);

//