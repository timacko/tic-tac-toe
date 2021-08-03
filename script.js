// Winning Combinations
const winningCombinations = [
     [0, 1, 2],
     [3, 4, 5],
     [6, 7, 8],
     [0, 3, 6],
     [1, 4, 7],
     [2, 5, 8],
     [0, 4, 8],
     [2, 4, 6],
];


// value of players and whos turn it is - can use this later for "it is cuyrrently player 1's turn"
const player1 = "Player 1"
const player2 = "Player 2"
let currentTurn = player1;



//All necessary elements to pull from DOM//

//contains all squares on the game
const allSquares = document.getElementsByClassName("gamelayout");
//contains each square on the game to use to input 'X' or 'O'
const eachSquare = document.getElementsByClassName("square");
//displays whos turn it is  
const currentPlayer = document.getElementById("currentplayer");




//function for selecting who's turn it is

const playerSelection = () => {
    if (currentTurn === player1) {
        return "X";
    } else {
        return "O";
    }
}

//function to switch between players and reflect on the innertext/html
const playerSwitch = () => {
 // ?

    }

//function to check winning combo's from the above winningCombination array
const checkForWinningCombo = () => {
    //loop over array for winning combos
    // 
}



//function to begin the game
const beginGame = (event) => {
    if (event.target.classList.contains("square"))
    event.target.innerText = playerSelection();
// check for winning combo function
// playerSwitch Combo
    allSquares.addEventListener('click', beginGame);

}
