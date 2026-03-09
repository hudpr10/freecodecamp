/*
Array Sum

Given an array of numbers, return the sum of all the numbers.
*/ 

function sumArray(numbers) {
  return numbers.reduce((x, y) => x + y);
}

sumArray([1, 2, 3, 4, 5]);
// Return: 15
