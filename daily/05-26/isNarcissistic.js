/*
Narcissistic Number

Given a positive integer, determine whether it is a narcissistic number.

  - A number is narcissistic if the sum of each of its digits raised to the power of the total number of digits equals the number itself.
*/

function isNarcissistic(n) {
  const numDigits = Math.floor(Math.log10(n)) + 1;
  
  let sum = 0;
  let aux = n;
  
  while(aux > 0) {
    let digit = aux % 10;
    sum += Math.pow(digit, numDigits);
    aux = Math.floor(aux / 10);
  }

  return sum === n;
}

isNarcissistic(9474);
// return: true

isNarcissistic(9);
// return: true

isNarcissistic(123);
// return: false
