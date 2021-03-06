function printMat(mat, selector) {

  var elContainer = document.querySelector(selector);

  var strHTML = '<table border="0"><tbody>';
  mat.forEach(function (row, i) {
    strHTML += '<tr>';

    row.forEach(function (cell, j) {
      var className = 'cell cell' + i + '-' + j;

      if (gBoard[i][j] === WALL) {

        var className = 'cell cell' + i + '-' + j + ' wall'
      }
      strHTML += '<td class="' + className + '"> ' + cell + ' </td>'
    });
    strHTML += '</tr>'
  })
  strHTML += '</tbody></table>';

  // console.log('strHTML', strHTML);

  elContainer.innerHTML = strHTML;
}

function renderCell(location, value) {
  var cellSelector = '.cell' + location.i + '-' + location.j;
  var elCell = document.querySelector(cellSelector);
  elCell.innerHTML = value;
}


function getRandomColor() {
  var letters = '0123456789ABCDEF'.split('');
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function saveToStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}
function getFromStorage(key) {
  var str = localStorage.getItem(key);
  return JSON.parse(str);
}

function openModal() {
  document.querySelector('.modal').classList.add('modal-open')
}

function closeModal() {
  document.querySelector('.modal').classList.remove('modal-open')
}

function setGState() {
  var gState={ score: 0, isGameDone: false, SIZE: 10};
  var numOfFood = (gState.SIZE*gState.SIZE) - 44;
  return { score: 0, isGameDone: false, SIZE: 10,numOfFood:numOfFood};
}


