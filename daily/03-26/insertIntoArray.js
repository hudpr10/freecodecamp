/*
Array Insertion

Given an array, a value to insert into the array, and an index to insert the value at, return a new array with the value inserted at the specified index.
*/

function insertIntoArray(arr, value, index) {
  arr.splice(index, 0, value);
  return arr;
}

insertIntoArray([2, 4, 8, 10], 6, 2);
// Return: [ 2, 4, 6, 8, 10 ]
