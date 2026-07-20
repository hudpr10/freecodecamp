/*
Golden Ratio

Given two numbers, determine if their ratio approximates the golden ratio.
  - Use a golden ratio of 1.618
  - Allow a tolerance of 0.01
*/

function isGoldenRatio(a, b) {
  const ratio1 = a / b;
  if (checkTolerance(ratio1)) return true;

  const ratio2 = b / a;
  return checkTolerance(ratio2);
}

const GOLDEN_RATIO = 1.618;
const TOLERANCE = 0.01;

const checkTolerance = (ratio) =>
  ratio <= GOLDEN_RATIO + TOLERANCE && ratio >= GOLDEN_RATIO - TOLERANCE;

console.log(isGoldenRatio(21, 34)); // true
console.log(isGoldenRatio(15, 20)); // false
console.log(isGoldenRatio(88, 55)); // false
