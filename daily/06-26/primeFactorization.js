/*
Prime Factorization

Given an integer greater than 1, return its prime factorization as an array of numbers in ascending order.

A prime factorization is the set of prime numbers that multiply together to produce the given integer. 
Each number has exactly one set. For example, the prime factorization of 20 is [2, 2, 5] because 2 * 2 * 5 = 20.

If the given integer is itself prime, return it in a single-element array.
*/

function primeFactorization(n) {
  const primes = [];

  let divisor = 2;
  let aux = n;

  while (aux > 1) {
    if (isPrime(divisor) && aux % divisor === 0) {
      primes.push(divisor);
      aux /= divisor;
    } else {
      divisor++;
    }
  }

  return primes;
}

function isPrime(n) {
  if (n === 1 || n === 2) return true;

  const half = (n / 2) | 0;
  for (let i = 2; i < half; i++) {
    if (n % i === 0) return false;
  }

  return true;
}

console.log(primeFactorization(20));
// return: [ 2, 2, 5 ]
