/*
Binary Crossword

Given a character, determine if its 8-bit binary representation can be found in the following grid, horizontally or vertically in either direction:

0 1 0 0 0 0 0 1
0 1 1 0 1 1 1 1
0 1 0 0 0 1 0 0
0 1 1 0 0 1 0 1
0 1 0 1 0 0 1 0
0 1 0 1 0 1 0 0
0 1 1 0 1 0 0 0
1 0 1 0 1 1 1 0

For example, "A" has the binary representation 01000001, which appears in the first row from left to right.
*/

const matrix = [
    [0, 1, 0, 0, 0, 0, 0, 1],
    [0, 1, 1, 0, 1, 1, 1, 1],
    [0, 1, 0, 0, 0, 1, 0, 0],
    [0, 1, 1, 0, 0, 1, 0, 1],
    [0, 1, 0, 1, 0, 0, 1, 0],
    [0, 1, 0, 1, 0, 1, 0, 0],
    [0, 1, 1, 0, 1, 0, 0, 0],
    [1, 0, 1, 0, 1, 1, 1, 0]
];

const validCodes = new Set();

for(let i = 0; i < matrix.length; i++) {
  let row = 0, col = 0, revRow = 0, revCol = 0;
  
  for(let j = 0; j < matrix[i].length; j++) {
    row = (row << 1) | matrix[i][j];
    revRow = (revRow << 1) | matrix[i][7 - j];
    col = (col << 1) | matrix[j][i];
    revCol = (revCol << 1) | matrix[7 - j][i];
  }
  
  validCodes.add(row);
  validCodes.add(revRow);
  validCodes.add(col);
  validCodes.add(revCol);
}

function isInCrossword(char) {
  return validCodes.has(Number(char.charCodeAt(0)));
}

isInCrossword("p");
// return: false

isInCrossword("C");
// return: true
