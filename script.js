const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");


function validateInput() {
    let input = document.getElementById('userInput').value;
    let inputLower = input.toLowerCase();
    

    if (inputLower !== choices[0] && inputLower !== choices[1] && inputLower !== choices[2])  {
        
        alert("This is not a valid choice.");

    } else {
        let button = document.getElementById("submitButton");
        button.disabled = false;
    }
}




function playGame() {


    let playerChoice = document.getElementById('userInput').value;

    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";
    console.log(playerDisplay);
    console.log(computerDisplay);
    console.log(resultDisplay);
    if(playerChoice === computerChoice){
        result = "Tie!";
    }
    else{
        switch(playerChoice){
                case "rock":
                    result = (computerChoice === "scissors") ? "You Win!" : "You Lose!";
                    break;
                case "scissors":
                    result = (computerChoice === "paper") ? "You Win!" : "You Lose!";
                    break;
                case "paper":
                    result = (computerChoice === "rock") ? "You Win!" : "You Lose!";
                    break;
        }
    }



    playerDisplay.textContent = `PLAYER: ${playerChoice}`;
    computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
    resultDisplay.textContent = result;

    resultDisplay.classList.remove("greenText", "redText");

    switch(result){
        case "You Win!": 
            resultDisplay.classList.add("greenText");
            break;
        case "You Lose!": 
            resultDisplay.classList.add("redText");
            break;
 
    }
}

