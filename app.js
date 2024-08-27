let userScore =0;
let compScore =0;

const choices = document.querySelectorAll('.choices .choice');
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

//draw game
const drawGame =()=>{
    console.log("game is draw"); 
    msg.innerText ="Game draw, Play again!"; 
    msg.style.backgroundColor = "#756AB6";
}

//comp choice
const genComputerChoice =()=>{
    const options =["Rock", "Paper", "Scissor"];
    const randomIdx = Math.floor(Math.random()*3);
    return options[randomIdx];
}

//play game
const playGame = (userChoice) =>{
    console.log("user choice ",userChoice);
    //Generate comp choice
    const compChoice = genComputerChoice();
    console.log("comp choice ", compChoice);

    if(userChoice === compChoice){
        //draw
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice ==="Rock"){
            userWin= compChoice==="Paper"?false:true ;
        }
        else if(userChoice==="Paper"){
            userWin = compChoice==="Scissor"?false:true;
        }
        else{
            userWin = compChoice==="Rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}

//user choice
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id"); 
        playGame(userChoice);
    });
});

//show winner
const showWinner =(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText =`You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText =`You Lost. ${compChoice} beats your ${userChoice}`; 
        msg.style.backgroundColor = "red";
    }
}