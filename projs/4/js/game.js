'use strict';
var WALL = '';
var FOOD = '<img src="img/food.png">';
var EMPTY = '<img src="img/empty.png">';
var SUPERFOOD = '<img src="img/superfood.png">';
var gBoard;
var gState;



function init() {
  if (gIntervalGhosts) clearInterval(gIntervalGhosts)
  gState = setGState()
  updateScore(0);
  gBoard = buildBoard();
  printMat(gBoard, '.boardContainer');


}

function buildBoard() {
  gState.SIZE = 10;
  var board = [];
  for (var i = 0; i < gState.SIZE; i++) {
    board.push([]);
    for (var j = 0; j < gState.SIZE; j++) {
      board[i][j] = FOOD;

      if (i === 0 || i === gState.SIZE - 1 ||
        j === 0 || j === gState.SIZE - 1 ||
        (j == 3 && i > 4 && i < gState.SIZE - 2)) {

        board[i][j] = WALL;

      }

    }
  }
  board[1][1] = SUPERFOOD;
  board[8][1] = SUPERFOOD;
  board[1][8] = SUPERFOOD;
  board[8][8] = SUPERFOOD;

  createPacman(board);
  createGhosts(board);
  return board;
}

// This function is called from both pacman and ghost to check engage
function checkEngage(cell, opponent,i,j, ghostCount) {
  if (cell === opponent) {
    // TODO: basic support for eating power-ball (which is not in the game yet)
    if (gPacman.isSuper) {
      if (ghostCount) {
        
        
      }
      else {
        // console.log('i: '+i);
        // console.log('j: '+j);
        var currGhost = gGhosts[i];
        var previusItem = currGhost.currCellContent
        var strFood='<img src="img/food.png">'
        if (previusItem === strFood) {
          // console.log('EATEN');
          gState.numOfFood--;
          updateScore(1);
        }
      }

    } else {
      clearInterval(gIntervalGhosts);
      gState.isGameDone = true;
      var elH1 = document.querySelector('h1')
      elH1.innerText = 'Game over...You lose !'
      openModal();

      return true;
    }
  }
  return false;
}


// this function updates both the model and the dom for the score
function updateScore(value) {
  gState.score += value;
  document.querySelector('header > h3 > span').innerText = gState.score;
}


function turnSuper() {
  clearInterval(gIntervalGhosts)
  for (var i = 0; i < gState.SIZE; i++) {
    for (var j = 0; j < gState.SIZE; j++) {
      if (gBoard[i][j] === GHOST) {
        var selector = '.cell' + i + '-' + j;
        var elCell = document.querySelector(selector);
        elCell.innerHTML = '<span style="color:rgb(0, 0, 255)" "font:bold"="">ƍ</span>';
        for (var n; n < gGhosts.length; n++) {
          var currGhost = gGhosts[n];
          currGhost.color = 'rgb(0, 0, 255)';
          // console.table(gBoard);
        }

      }
    }
  }
  // console.table(gBoard);
}



