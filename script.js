let userScore=0;
let compScore=0;

function play(userChoice){

let choices=["rock","paper","scissor"];

let compChoice=choices[Math.floor(Math.random()*3)];

let result="";

if(userChoice===compChoice){
result="Draw!";
}

else if(
(userChoice==="rock" && compChoice==="scissor") ||
(userChoice==="paper" && compChoice==="rock") ||
(userChoice==="scissor" && compChoice==="paper")
){
result="You Win!";
userScore++;
}

else{
result="Computer Wins!";
compScore++;
}

document.getElementById("userScore").innerText=userScore;
document.getElementById("compScore").innerText=compScore;

document.getElementById("result").innerHTML=
"You chose "+userChoice+" | Computer chose "+compChoice+" <br>"+result;

}