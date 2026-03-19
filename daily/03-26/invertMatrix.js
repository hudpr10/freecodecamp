/*
Inverted Matrix

Given a matrix (an array of arrays) filled with two distinct values, return a new matrix where all occurrences of one value are swapped with the other.

For example, given:
[
  ["a", "b"],
  ["a", "a"]
]

Return:
[
  ["b", "a"],
  ["b", "b"]
]
*/

function invertMatrix(matrix) {
  const [valueA, valueB] = findValues(matrix);

  return matrix.map((row) => 
    row.map((value) => value === valueA ? valueB : valueA)
  );
}

function findValues(matrix) {
  const valueA = matrix[0][0];
  
  for(let i = 0; i < matrix.length; i++) {
    for(let j = 0; j < matrix[i].length; j++) {
      if(valueA !== matrix[i][j]) return [valueA, matrix[i][j]]
    }
  }
  
  return [valueA, valueA];
}

invertMatrix([[0, 1, 0], [1, 0, 0], [1, 1, 1]]);
// Return:   [[1, 0, 1], [0, 1, 1], [0, 0, 0]]
