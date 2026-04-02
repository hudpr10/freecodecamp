/*
Capitalized Fibonacci

Given a string, return a new string where each letter is capitalized if its index is a Fibonacci number, and lowercased otherwise.

The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones. The first 10 numbers in the sequence are 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.

  - The first character is at index 0.
  - If the index of non-letter characters is a Fibonacci number, leave it unchanged.
*/

function capitalizeFibonacci(str) {
  const fibo = fibonacci(str.length);
  const arr = str.split("").map(char => char.toLowerCase());

  for(let i = 0; i < fibo.length; i++) {
    arr[fibo[i]] = arr[fibo[i]].toUpperCase();
  }

  return arr.join("");
}
function fibonacci(limit) {
  const sequence = [];

  let a = 0;
  let b = 1;
  let aux;

  while(a < limit) {
    sequence.push(a);
    aux = a + b;
    a = b;
    b = aux;
  }

  return sequence;
}

capitalizeFibonacci("Olá, Mundo!");
// return: 'OLÁ, MunDo!'
