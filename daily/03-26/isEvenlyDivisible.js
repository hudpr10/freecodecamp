/*
Evenly Divisible

Given two integers, determine if you can evenly divide the first one by the second one.
*/

function isEvenlyDivisible(a, b) {
  return a % b === 0;
}

isEvenlyDivisible(7, 3)
// Return: false
