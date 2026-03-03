/*
Perfect Cube Count

Given two integers, determine how many perfect cubes exist in the range between and including the two numbers.

- The lower number is not garanteed to be the first argument.
- A number is a perfect cube if there exists an integer (n) where n * n * n = number. For example, 27 is a perfect cube because 3 * 3 * 3 = 27.
*/

function countPerfectCubes(a, b) {
  const max = a > b ? a : b;
  const min = a < b ? a : b;

  const minCbrt = Math.ceil(Math.cbrt(min));
  const maxCbrt = Math.floor(Math.cbrt(max));
  
  if(minCbrt > maxCbrt) return 0;

  return maxCbrt - minCbrt + 1;
}

countPerfectCubes(1, 50)
// Return: 3
