// Pull all DOM elements from the HTML // 
// div for all the squares
const allSquares = document.querySelector('.gamelayout');
// each square .. will use for putting the x's and 0's in later
const eachSquare = document.querySelectorAll('.square');
// will use for button to restart the game
const restartGame = document.querySelector('button');
// displays end of game message (winner or tie)
const status = document.querySelector('#status');
const results = document.querySelector('#results');
// will use to shows who's turn it is at the top of the page
const whosTurn = document.querySelector('#currentplayer');

const restartButton = document.querySelector('#restart');

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
	if (!event.target.innerText && event.target.classList.contains('square')) {
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
const playerInput = () => currentTurn === player1 ? 'X' : 'O';

// Function #3
// function to switch players turn and update display
function playerChange() {
	currentTurn = currentTurn === player1 ? player2 : player1;
	whosTurn.innerText = currentTurn;
};

// Function #4
// function to show the restart-game button and also stops event listener for restart function
function startAgain() {
	allSquares.removeEventListener('click', beginGame);
};

// Function #5
// function to restart the game: clear all the squares, remove button, clears the winner, adds event listener for starting another game etc.
function restart() {
	currentTurn = player1;
	whosTurn.innerText = player1;
	restartButton.style.visibility = 'hidden';
	eachSquare.forEach((square) => {square.innerText = ''});
	status.innerText = 'Current Turn: ';
	allSquares.addEventListener('click', beginGame);
};

// Function #6
// function to run through winning combinations and see if there is a winning match
const winningCombos = () => {
	let winner = false;
	winningCombinations.forEach((combo) => {
		const comboSet = combo.map((i) => eachSquare[i].innerText).join('');
		if (['XXX', 'OOO'].includes(comboSet)) {
			status.innerText = 'Winner: ';
			restartButton.style.visibility = 'visible';
			startAgain();
			winner = true;
		}
	});
	return winner;
};

// Event listeners for beginning and restarting game
allSquares.addEventListener('click', beginGame);
restartGame.addEventListener('click', restart);
