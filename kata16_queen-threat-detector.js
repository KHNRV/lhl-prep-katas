/**
 *Return a nested array representing the board, containing the location of two
 *queens
 * @param {[number, number]} whiteQueen - Enter [x, y] coordinates of the
 * whiteQueen
 * @param {[number, number]} blackQueen - Enter [x, y] coordinates of the
 * blackQueen
 * @returns {array} Chess board with queens
 */
function generateBoard(whiteQueen, blackQueen) {
  //Create an empty chess board
  let chessBoard = Array(8)
    .fill()
    .map(() => Array(8).fill(0));

  //Place the whiteQueen
  chessBoard[whiteQueen[1]][whiteQueen[0]] = 1;

  //Place the blackQueen
  chessBoard[blackQueen[1]][blackQueen[0]] = 1;

  return chessBoard;
}

/**
 * Indicate whether or not the two queens are positioned so that they attack
 * each other.
 * @param {array} board - It is recommended to use the generateBoard() function to
 * create the board
 * @returns {boolean} Returns true if the queens can attack each other. Returns
 * false if it's not the case
 */
function queenThreat(board) {
  //Get the location of a queen
  let queenLocations = {};
  for (let y = 0; y < board.length; y++) {
    if (board[y].indexOf(1) >= 0 && queenLocations.firstQueen === undefined) {
      queenLocations.firstQueen = [board[y].indexOf(1), y];
    } else if (board[y].indexOf(1) >= 0) {
      queenLocations.secondQueen = [board[y].indexOf(1), y];
      break;
    }
  }

  //Get the horizontal threat
  if (queenLocations.firstQueen[0] === queenLocations.secondQueen[0]) {
    return true;
  }

  //Get the vertical threat
  if (queenLocations.firstQueen[1] === queenLocations.secondQueen[1]) {
    return true;
  }
  //Get the diagonal threat by comparing the difference between (x1 and x2) and
  //(y1 and y2)
  if (
    Math.abs(queenLocations.firstQueen[0] - queenLocations.secondQueen[0]) ===
    Math.abs(queenLocations.firstQueen[1] - queenLocations.secondQueen[1])
  ) {
    
    return true;
  }

  return false
}

//TEST 1
// let whiteQueen = [0, 5];
// let blackQueen = [5, 0];
// let generatedBoard = generateBoard(whiteQueen, blackQueen);
// console.log(generatedBoard);
// console.log(queenThreat(generatedBoard));

//TEST 2
let whiteQueen = [0, 0];
let blackQueen = [5, 7];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));
