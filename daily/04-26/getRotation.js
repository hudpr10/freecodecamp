/*
Digit Rotation Escape

Given a positive integer, determine if it, or any of its rotations, is evenly divisible by its digit count.

A rotation means to move the first digit to the end. For example, after 1 rotation, 123 becomes 231.
  - Check rotation 0 (the given number) first.
  - Given numbers won't contain any zeros.
  - Return the first rotation number if one is found, or "none" if not.
*/

function getRotation(n) {
  const digits = n.toString().length;

  let aux = 0;
  do {
    if(n % digits === 0) return aux;
    n = rotate(n, digits);
    aux++;
  } while(digits !== aux);
  
  return "none"
}

function rotate(n, digits) {
  const firstDigit = Math.floor(n / Math.pow(10, digits - 1));
  return (n % Math.pow(10, digits - 1)) * 10 + firstDigit;
}

getRotation(13579);
// return: 3
