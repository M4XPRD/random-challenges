// Solution №1:

const firstChessboard = (size) => {
  let board = '';
  for (let x = 0; x < size; x += 1) {
    for (let y = 0; y < size; y += 1) {
      if ((x + y) % 2 === 0) {
        board += ' ';
      } else {
        board += '#';
      }
    }
    board += '\n';
  }
  console.log(board);
};

firstChessboard(8);

/*
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
*/

// A bit different solution:

const secondChessboard = (size) => {
  let board = '';
  for (let x = 0; x < size; x += 1) {
    for (let y = 0; y < size; y += 1) {
      board += ((x + y) % 2 === 0 ? ' ' : '#');
    }
    board += '\n';
  }
  console.log(board);
};

secondChessboard(9);

/*
 # # # # 
# # # # #
 # # # # 
# # # # #
 # # # # 
# # # # #
 # # # # 
# # # # #
 # # # # 
*/
