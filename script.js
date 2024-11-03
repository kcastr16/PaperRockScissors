const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");

// ^ Array containing choices, and choosing element by ID

function validateInput() {
    let input = document.getElementById('userInput').value;
    let inputLower = input.toLowerCase();
    

    if (inputLower !== choices[0] && inputLower !== choices[1] && inputLower !== choices[2])  {
        
        alert("This is not a valid choice."); // Alerts user that the input they typed is not valid

    } else {
        let button = document.getElementById("submitButton"); // disables button if nothing is typed
        button.disabled = false;
    }
}




function playGame() {


    let playerChoice = document.getElementById('userInput').value;

    const computerChoice = choices[Math.floor(Math.random() * 3)]; //randomizes choice for the computer's choice.
    let result = ""; // Result is empty for time being. Will be assigned value once the player and computer's choice is compared.
    console.log(playerDisplay);
    console.log(computerDisplay);
    console.log(resultDisplay);
    if(playerChoice === computerChoice){
        result = "Tie!"; //If both have the same choice the result is a tie.
    }
    else{
        switch(playerChoice){
                case "rock":
                    result = (computerChoice === "scissors") ? "You Win!" : "You Lose!"; // if user input is rock and computer is scissors, prints win. Print lose if otherwise.
                    break;
                case "scissors":
                    result = (computerChoice === "paper") ? "You Win!" : "You Lose!"; // if user input is scissors and computer is paper, prints win. Print lose if otherwise.
                    break;
                case "paper":
                    result = (computerChoice === "rock") ? "You Win!" : "You Lose!"; // if user input is paper and computer is rock, prints win. Print lose if otherwise.
                    break;
        }
    }



    playerDisplay.textContent = `PLAYER: ${playerChoice}`; // Prints player choice next to "PLAYER:" on the page.
    computerDisplay.textContent = `COMPUTER: ${computerChoice}`; // Prints computer choice next to "COMPUTER:" on the page.
    resultDisplay.textContent = result; // Prints win, lose, or tie based on result.

    resultDisplay.classList.remove("greenText", "redText"); // removes styling after each game.

    switch(result){
        case "You Win!": 
            resultDisplay.classList.add("greenText"); // Adds classlit "greentext" to result if it is a loss.
            break;
        case "You Lose!": 
            resultDisplay.classList.add("redText"); // Adds classlist "redtext" to result if it is a loss.
            break;
 
    }
}

