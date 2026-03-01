/*
Flattened

Given an array, determine if it is flat.
- An array is flat if none of its elements are arrays.
*/

function isFlat(arr) {
  const isNotArray = (value) => typeof(value) !== "object";
  return arr.every(isNotArray);
}

isFlat([1, [2, 3], 4]);
// Return: false
