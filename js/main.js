let userScore = document.querySelector("#userScoreVal");
let compScore = document.querySelector("#compScoreVal");
let currUserScore = parseInt(userScore.innerText);
let currCompScore = parseInt(compScore.innerText);
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
            let currComp = generateComp()
            comp.innerText += currComp
            decideWinner("rock" , currComp)
            //console.log("clicked on rock");
        }
        else if(e.currentTarget.id == "p"){
            user.innerText += "paper";
            let currComp = generateComp()
            comp.innerText += currComp
            decideWinner("paper" , currComp)
            //console.log("clicked on paper");
        }
        else if(e.currentTarget.id == "s"){
            user.innerText += "scissors";
            let currComp = generateComp()
            comp.innerText += currComp
            decideWinner("scissors" , currComp )
            //console.log("clicked on scissors");
        }
        

         

    })
});


function generateComp(){
   return options[Math.floor(Math.random()*options.length)];
}


function decideWinner(userOption , compOption){
    //console.log(user , comp);
    let currWinner;
    if (userOption == compOption){
        currWinner = "Tie";
        user.innerText = "User:";
        comp.innerText = "Computer:"
    }
    else{
        if (userOption == "rock"){
            if (compOption == "paper"){
                currWinner = "comp"
                console.log(`${user} ${comp} ${currWinner}`);
            }
            else{
                currWinner = "user";
                console.log(`${user} ${comp} ${currWinner}`);
            }
        }
        else if (userOption == "scissors"){
            if (compOption == "rock"){
                currWinner = "comp";
                console.log(`${user} ${comp} ${currWinner}`);
            }
            else{
                currWinner = "user"
                console.log(`${user} ${comp} ${currWinner}`);
            }
        }
        else if (userOption == "paper") {
            if (compOption == "scissors"){
                currWinner = "comp";
                //console.log(`${user} ${comp} ${currWinner}`);
            }
            else{
                currWinner = "user";
                //console.log(`${user} ${comp} ${currWinner}`);
            }
    
        }
    }
    //winner.innerText += currWinner;
    //console.log(userScore);
    //console.log(compScore);
    if (currWinner == "user"){
        currUserScore += 1; 
        userScore.innerHTML = currUserScore;
        
    }
    else if (currWinner == "comp"){
        currCompScore += 1;
        compScore.innerHTML = currCompScore;
        
    }
    setInterval(()=>{
        user.innerText = "User:"
        comp.innerText = "Computer:"
    },1500)
    if (currCompScore === 2 || currUserScore === 2){
        if (currCompScore === 2){
            winner.innerText += "comp"
            
        }
        else{
            winner.innerText += "user";
            
        }
        setInterval(()=>{
           location.reload();
        },3000)
    }
    
    

}