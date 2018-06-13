var gPacman; 
var PACMAN  = '<img src="img/pacman.png">';

function createPacman(board) {
  gPacman = {
    location: {
      i: 3,
      j: 5
    },
    isSuper: false
  }; 
  board[gPacman.location.i][gPacman.location.j] = PACMAN;
}

function movePacman(eventKeyboard) {
  // console.log('eventKeyboard:', eventKeyboard);
  
  if (gState.isGameDone) return;
  
  var nextLocation = {
    i: gPacman.location.i, 
    j: gPacman.location.j
  };
  
  switch (eventKeyboard.code) {
    
    case 'ArrowUp': 
      //console.log('Arrow Up!');
      nextLocation.i--;
      break;
    case 'ArrowDown': 
      //console.log('Arrow Down!');
      nextLocation.i++;
      break;
    case 'ArrowLeft': 
      //console.log('Arrow Left!');
      nextLocation.j--;
      break; 
    case 'ArrowRight': 
      //console.log('Arrow Right!');
      nextLocation.j++;
      break;           
    
  }
  
  var nextCell = gBoard[nextLocation.i][nextLocation.j];
  // console.log('Heading: row:', newLocation.i , ' col: ', newLocation.j );
  // console.log('Whats there:', gBoard[newLocation.i][newLocation.j]);
  
  // hitting a wall, not moving anywhere
  if (nextCell === WALL) return;
  
  if (nextCell === SUPERFOOD){
    gPacman.isSuper=true;
    turnSuper();
    
    
    
  } 
  // hitting FOOD
  if (nextCell === FOOD) {
    updateScore(1);
    gState.numOfFood--;
    if (gState.score === 60 ||gState.numOfFood === 0) {
      gState.isGameDone = true;
      clearInterval(gIntervalGhosts);
      renderCell(gPacman.location, EMPTY);
      gPacman.location = nextLocation;
      gBoard[gPacman.location.i][gPacman.location.j] = PACMAN;
      renderCell(gPacman.location, PACMAN);
      var elH1 = document.querySelector('h1')
      elH1.innerText = 'You won the game !'
      openModal();
      return;
    }
  }
  
  
  // TODO: add support for power-food
  
  var isGameOver = checkEngage(nextCell,nextLocation.i,nextLocation.j, GHOST);
  if (isGameOver) return;
  
  // update the model to reflect movement
  gBoard[gPacman.location.i][gPacman.location.j] = EMPTY;
  
  // render updated model to the DOM
  renderCell(gPacman.location, EMPTY);
  
  // Update the pacman MODEL to new location  
  gPacman.location = nextLocation;
  gBoard[gPacman.location.i][gPacman.location.j] = PACMAN;
  
  
  // render updated model to the DOM
  renderCell(gPacman.location, PACMAN);
  
}
