/*
Matrix Shift

Given a matrix (array of arrays) of numbers and an integer, shift all values in the matrix by the given amount.
- A positive shift moves values to the right.
- A negative shift moves values to the left.

Values should wrap:
- Treat the matrix as one continuous sequence of values.
- When a value moves past the end of a row, it continues at the beginning of the next row.
- When a value moves past the last position in the matrix, it wraps to the first position.
- The same applies in reverse when shifting left.
*/

function shiftMatrix(matrix, shift) {
  let array = transformMatrixInArray(matrix);
  
  array = arrayShift(array, shift);

  // Atualiza a Matrix;
  let counter = 0;
  for(let i = 0; i < matrix.length; i++) {
    for(let j = 0; j < matrix[i].length; j++) {
      matrix[i][j] = array[counter];
      counter++;
    }
  }

  return matrix;
}

function transformMatrixInArray(matrix) {
  let array = [];
  
  for(let i = 0; i < matrix.length; i++) {
    for(let j = 0; j < matrix[i].length; j++) {
      array.push(matrix[i][j]);
    }
  }
  
  return array
}

function arrayShift(array, value) {  
  const firstValue = value;

  // Para valores positivos
  if(value > 0) {
    while(value >= array.length) { // Esse trecho ajuda a optimizar o número de trocas
      value -= array.length;
    }
    
    for(let i = 0; i < value; i++) {
      let last = array.pop();
      array.unshift(last);
    }
  }

  // Para valores negativos
  if(value < 0) {
    while(value <= array.length*-1) { // Esse trecho ajuda a optimizar o número de trocas
      value += array.length;
    }
    console.log(value)
    
    for(let i = 0; i > value; i--) {
      let first = array.splice(0, 1);
      array.push(first[0]);
    }
  }
  
  return array;
}

shiftMatrix([[1, 2, 3], [4, 5, 6]], 1)
// Return: [[ 6, 1, 2 ], [ 3, 4, 5 ]];
