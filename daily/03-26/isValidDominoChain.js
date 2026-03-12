/*
Domino Chain Validator

Given a 2D array representing a sequence of dominoes, determine whether it forms a valid chain.
- Each element in the array represents a domino and will be an array of two numbers from   1 to 6, (inclusive).
- For the chain to be valid, the second number of each domino must match the first         number of the next domino.
- The first number of the first domino and the last number of the last domino don't need   to match anything.
*/

function isValidDominoChain(dominoes) {
  let isValid = true;
  
  let i = 0;
  while(isValid) {
    if(i+1 >= dominoes.length) break;
    if(dominoes[i][1] !== dominoes[i+1][0]) isValid = false;
    
    i++;
  }
  
  return isValid;
}

isValidDominoChain([[2, 3], [3, 3], [3, 6], [6, 1], [1, 4], [4, 5], [5, 5], [5, 4], [4, 2], [2, 2]]);
// Return: true
