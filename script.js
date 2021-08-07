// Pull all DOM elements from the HTML // 
// div for all the squares
const allSquares = document.querySelector('.gamelayout');
// each square .. will use for putting the x's and 0's in later
const eachSquare = document.querySelectorAll('.square');
// will use for button to restart the game
const restartGame = document.querySelector('button');
// displays end of game message (winner or tie)
const displayResults = document.querySelector('.display-results');
// will use to shows who's turn it is at the top of the page
const whosTurn = document.querySelector('#currentplayer');

// VARIABLES //

const player1 = 'Player 1';
const player2 = 'Player 2';
let currentTurn = player1;
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


//FUNCTIONS//

//Function #1
//Main function to start the game and uses all the other functions below.
const beginGame = (event) => {
	if (event.target.classList.contains('square')) {
		event.target.innerText = playerInput();
		const winner = winningCombos();
		if (!winner) {
			playerChange();
		} else {
			startAgain();
		}
	}
}

// Function #2
// function to input 'X' or 'O' depending on who's turn it is
function playerInput() {
	if (currentTurn === player1) {
		return 'X';
	} else {
		return 'O';
	}
};

// Function #3
// function to switch players turn and update display
function playerChange() {
	currentTurn = currentTurn === player1 ? player2 : player1;
	whosTurn.innerText = currentTurn;
};

// Function #4
// function to show the restart-game button and also stops event listener for restart function
function startAgain() {
	restartGame.classList.remove('secretbutton');
	allSquares.removeEventListener('click', beginGame);
};

// Function #5
// function to restart the game: clear all the squares, remove button, clears the winner, adds event listener for starting another game etc.
function restart() {
	currentTurn = player1;
	whosTurn.innerText = player1;
	eachSquare.forEach((square) => {square.innerText = ''});
	restartGame.classList.add('secretbutton');
	displayResults.innerText = '';
	allSquares.addEventListener('click', beginGame);
};

// Function #6
// function to run through winning combinations and see if there is a winning match
function winningCombos() {
	for (let i = 0; i < winningCombinations.length; i++) {
		let box1 = eachSquare[winningCombinations[i][0]];
		let box2 = eachSquare[winningCombinations[i][1]];
		let box3 = eachSquare[winningCombinations[i][2]];

		if (box1.innerText === 'X' && box2.innerText === 'X' && box3.innerText === 'X') {
			displayResults.innerText = 'PLAYER 1 IS THE WINNER!';
			startAgain();
			break;
		} else if (box1.innerText === 'O' && box2.innerText === 'O' && box3.innerText === 'O') {
			displayResults.innerText = 'PLAYER 2 IS THE WINNER!';
			startAgain();
			break;
		}
	}
};

// Event listeners for beginning and restarting game
allSquares.addEventListener('click', beginGame);
restartGame.addEventListener('click', restart);
