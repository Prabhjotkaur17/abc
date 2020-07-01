var userScore=0;
var computerScore=0;
const userScore_span=document.getElementById("user-score");
const computerScore_span=document.getElementById("computer-score");
const scoreBoard_div= document.querySelector(".score-board");
const result_p=document.querySelector(".result > p");
const rock_div=document.getElementById("r");
const paper_div=document.getElementById("p");
const scissor_div=document.getElementById("s");

function getComputerChoice(){
  const choices=['r','p','s'];
  const randomNumber=(Math.floor(Math.random()*3));
 return choices[randomNumber];
}
 function convert(letter){
 if (letter =="r" )  return "Rock";
 if (letter =="p" ) return "Paper";
 if (letter =="s" ) return "Scissor";
 }
  function win(user,computer){
    userScore++;
    userScore_span.innerHTML=userScore;
    computerScore=computerScore;
   result_p.innerHTML= convert(user)+" beats "+convert(computer)+". YOU WIN!!";
   document.getElementById(user).classList.add("green-glow");
   setTimeout(function(){document.getElementById(user).classList.remove("green-glow")},300);
  }
function lose(user,computer){
  	computerScore++;
  	computerScore_span.innerHTML=computerScore;
  	serScore=userScore;
  	result_p.innerHTML= convert(user)+" loses to "+convert(computer)+". YOU LOSE ~~";
  	document.getElementById(user).classList.add("red-glow");
   setTimeout(function(){document.getElementById(user).classList.remove("red-glow")},300);
  }
 function draw(user,computer){
  	computerScore=computerScore;
  	userScore=userScore;
  	result_p.innerHTML="It's a draw";
  	document.getElementById(user).classList.add("grey-glow");
   setTimeout(function(){document.getElementById(user).classList.remove("grey-glow")},300);
  }
function game(userChoice){
const ComputerChoice=getComputerChoice();
 switch(userChoice+ComputerChoice){
 	case "rs":
 	case "pr":
 	case "sp":
 	//console.log("user wins");
 	win(userChoice,ComputerChoice);
 	break;
 	case "rp":
 	case "ps":
 	case "sr":
 	//console.log("user loses");
     lose(userChoice,ComputerChoice);
 	break;
 	case "pp":
 	case "rr":
 	case "ss":
 	//console.log("draw");
 	draw(userChoice,ComputerChoice);
 	break;
 }
}
function main(){
    rock_div.addEventListener('click',function(){
	  game("r");
     })
    paper_div.addEventListener('click',function(){
	  game("p");
     })
    scissor_div.addEventListener('click',function(){
	   game("s");
     })
}
main();

