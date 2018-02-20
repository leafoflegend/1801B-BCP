// I am going to use a strategy called writing a JS Framework. And what that means is that I want Javascript to control entirely what is or is not on the page. I do not want anything pre-rendered onto the page. The reason there is a single DIV on the page is because we need a 'node' to latch onto. I named that node 'app'.

// The 'document'

/*
  Environments
  window: Something available to your JS in a browser environment. 'window' refers to the entire browser.
  document: document refers to the current document the user is looking at.
  document, like many things in JS (arrays, objects, strings) comes pre-loaded with many, many, many methods. We often only need a few of them.
*/

// getElementById() -> it takes a string that refers to a node on the DOM and returns it as a javascript object.

var ourApp = document.getElementById('app');

// createElemt() -> takes a string representing an elements name and creates an element of that kind.

var ourBoard = document.createElement('div');

ourBoard.style = "border: solid 1px black; width: 500px; height: 500px;";

// We've created an element, and given it some attributes. But we havent actually attached it to the dom. Whos child is it? Now we need to choose.

// appendChild() -> Can be called on any ELEMENT and passed another ELEMENT which will become the callee's child.

ourApp.appendChild(ourBoard);

// FlexBox: Flexbox is meant to solve the problem of centering and aligning boxes. This might not sound hard, but it is extremely hard. Flexbox works in a simpleish system. It is made of parents and children. Parents can have a direction defined. There are two: row, column. You can then specify given that direction how the children should render in regards to that direction.

ourApp.style.display = 'flex';
ourApp.style['flex-direction'] = 'column';
ourApp.style['justify-content'] = 'flex-start'; // justify content refers to the main axis - here - X. I am saying center it on the x axis.
ourApp.style['align-items'] = 'center'; // align items refers to the off axis - here - Y. I am saying center it on the y axis.

// Tic Tac Toe
// We will need 9 boxes within that box.
// We will need those boxes to be clickable.
// We will need to track what the 'state' of the game is.
// And we will need to insert X or O based on whos turn it is when the click occurs.

var gameState = {
  turn: 0,
  player: 0,
  board: [
    [],
    [],
    [],
  ],
  over: false,
  winner: '',
};

function createGrid(box) {
  // made up of 3 rows, with 3 cells.
  for (var i = 0; i < 3; ++i) {
    // We need to make a row container.
    var currentRow = createRow();
    for (var j = 0; j < 3; ++j) {
      // We need to make a cell.
      currentRow.appendChild(createCell(j, i));
    }
    box.appendChild(currentRow);
  }
}

function createRow() {
  var newRow = document.createElement('div');
  newRow.style.width = '100%'; // % is relative to our container. I am saying fill the width of your parent (the full box).
  newRow.style.height = '33%'; // Each row will take up a third of the container.
  newRow.style.border = 'solid 1px black';
  newRow.style.display = 'flex';
  newRow.style['flex-direction'] = 'row';
  newRow.style['justify-content'] = 'flex-start';

  return newRow;
}

// How do I let each cell know its own x, y position?
function createCell(x, y) {
  var newCell = document.createElement('div');
  newCell.style.width = '33%';
  newCell.style.height = '100%';
  newCell.style.border = 'solid 1px black';
  newCell.style['background-color'] = '#cecece';
  newCell.style.display = 'flex';
  newCell.style['flex-direction'] = 'column';
  newCell.style['justify-content'] = 'center';
  newCell.style['align-items'] = 'center';
  newCell.style['font-size'] = '100px';

  newCell.onclick = function() {
    if (!gameState.over) {
      if (gameState.board[y][x]) {
        console.log(`${x}, ${y} has already been selected by another player!`)
      } else {
        ++gameState.turn;
        gameState.player = gameState.turn % 2;
        var nextPiece = gameState.turn % 2 ? 'O' : 'X';
        gameState.board[y][x] = nextPiece;
        var nodePiece = document.createTextNode(nextPiece);
        // We need to append it to 'this' node.
        newCell.appendChild(nodePiece);
        newCell.style.color = nextPiece === 'X' ? 'red' : 'green';

        // Here - The determining event.

        isWinner();
      }
    }
  }

  return newCell;
}

function isWinner() {
  var columns = {
    0: {
      X: 0,
      O: 0,
    },
    1: {
      X: 0,
      O: 0,
    },
    2: {
      X: 0,
      O: 0,
    },
  };

  for (var i = 0; i < 3; ++i) {
    var row = gameState.board[i];

    var dictCount = row.reduce(function(dict, cell, i) {
      if (cell === 'X') columns[i].X += 1;
      if (cell === 'O') columns[i].O += 1;

      return {
        ...dict,
        [cell]: dict[cell] ? dict[cell] + 1 : 1,
      }
    }, {});

    if (dictCount.X === 3 || columns[0].X === 3 || columns[1].X === 3 || columns[2].X === 3 || detectDiaganol('X')) {
      console.log('X won!');
      gameState.over = true;
      gameState.winner = 'X';
      addWinningText('X');
    }

    if (dictCount.O === 3 || columns[0].O === 3 || columns[1].O === 3 || columns[2].O === 3 || detectDiaganol('O')) {
      console.log('O won!');
      gameState.over = true;
      gameState.winner = 'O';
      addWinningText('O');
    }
  }
}

function detectDiaganol(aChar) {
  return (
    gameState.board[0][0] === aChar
    && gameState.board[1][1] === aChar
    && gameState.board[2][2] === aChar
  ) || (
    gameState.board[0][2] === aChar
    && gameState.board[1][1] === aChar
    && gameState.board[2][0] === aChar
  );
}

function addWinningText(aChar) {
  var winningText = document.createElement('div');
  winningText.style = "display: flex; flex-direction: row; justify-content: center; align-items: center; width: 100%; height: 250px; font-weight: 600; color: gold; font-size: 200px;";
  var actualText = document.createTextNode(`${aChar} has won!`);
  winningText.appendChild(actualText);
  ourApp.appendChild(winningText);
}

createGrid(ourBoard);
