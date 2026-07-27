/*
Pronic Number

Given a number, determine whether it is a pronic number.
A pronic number is the product of two consecutive integers. For example, 6 is pronic because 2 * 3 = 6.
*/

// Minha Solução
function isPronic(n) {
  let a = Math.sqrt(n) | 0;
  let b = a + 1;

  do {
    if (a * b === n) return true;
    a++;
    b++;
  } while (a * b < n);

  return false;
}

// Solução do Claude
function isPronic(n) {
  if (n < 0) return false;
  const k = Math.floor(Math.sqrt(n));
  return k * (k + 1) === n;
}

console.log(isPronic(6)); // true
console.log(isPronic(15)); // false
console.log(isPronic(12)); // true
console.log(isPronic(132)); // true
console.log(isPronic(80)); // false
console.log(isPronic(0)); // true
