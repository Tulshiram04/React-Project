let result =  document.getElementById("result")
let btn = document.getElementById("rock")
let btn2 = document.getElementById("Paper")
let btn3 = document.getElementById("Scissor")
let choice = ["rock","Paper","Scissor"]

function playgame(userchoice){
    let compchoice = choice[Math.floor(Math.random() *3)];
    let message ="";

    if(userchoice === compchoice){
        message = `both choice ${userchoice}. It is a draw`;
    }
    else if(
        (userchoice === "rock" && compchoice === "Scissor")||
        (userchoice === "Paper" && compchoice === "rock")||
        (userchoice === "Scissor" && compchoice === "Paper")

    ){
        message = `you choose${userchoice} computer ${compchoice}.You Win`;
    }
    else{
        message = `you choose ${userchoice} computer ${compchoice}.you lose`;
    }
    result.innerText = message
        
}

btn.addEventListener("click",()=>playgame("rock"))
btn2.addEventListener("click",()=>playgame("Paper"))
btn3.addEventListener("click",()=>playgame("Scissor"))
