const userScore = document.querySelector("#userScoreVal")
const compScore = document.querySelector("#compScoreVal")

let user = document.querySelector("#result-user-stat")
let comp = document.querySelector("#result-comp-stat")
let winner = document.querySelector("#result-final-stat")

const options = ["rock","paper","scissors"];
// let rock = docment.querySelector("#r")
// let paper = docment.querySelector("#p")
// let scissors = docment.querySelector("#s")

const choices = document.querySelectorAll(".choice")
choices.forEach((choice) => {
    //comp.innerText += generateComp()
    choice.addEventListener('click',(e) =>{
        if(e.currentTarget.id == "r"){
            user.innerText += "rock";
            comp.innerText += generateComp()
            //console.log("clicked on rock");
        }
        else if(e.currentTarget.id == "p"){
            user.innerText += "paper";
            comp.innerText += generateComp()
            //console.log("clicked on paper");
        }
        else if(e.currentTarget.id == "s"){
            user.innerText += "scissors";
            comp.innerText += generateComp()
            //console.log("clicked on scissors");
        }
        

         

    })
});


function generateComp(){
   return options[Math.floor(Math.random()*options.length)];
}


function decideWinner(){
    
}