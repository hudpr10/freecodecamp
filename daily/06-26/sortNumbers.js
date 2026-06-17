/*
Number Sort

Given a string of numbers separated by commas, return an array of the numbers sorted from smallest to largest.
*/

function sortNumbers(str) {
  return str.split(",").map(Number).sort((a, b) => a - b);
}

sortNumbers("0,6,-19,44,-2,7,0")
// return: [ -19, -2, 0, 0, 6, 7, 44 ]
