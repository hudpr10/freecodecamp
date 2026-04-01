/*
Prank Number

Given an array of numbers where all but one number follow a pattern, return a new array with the one number that doesn't follow the pattern fixed.

The pattern will be one of:
  - The numbers increase from one to the next by a fixed amount (addition).
  - The numbers decrease from one to the next by a fixed amount (subtraction).

For example, given [2, 4, 7, 8, 10] return [2, 4, 6, 8, 10].
*/

function fixPrankNumber(arr) {
  const gap = findGap(arr);

  let base;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] - arr[i] === gap) {
      base = arr[i] - gap * i;
      break;
    }
  }

  return arr.map((_, i) => base + gap * i);
}

function findGap(arr) {
  const gaps = [];
  for (let i = 0; i < arr.length - 1; i++) {
    gaps.push(arr[i + 1] - arr[i]);
  }

  return gaps.sort(
    (a, b) => gaps.filter(v => v === b).length - gaps.filter(v => v === a).length
  )[0];
}

fixPrankNumber([400, 425, 400, 375, 350, 325, 300]);
// return: [ 450, 425, 400, 375, 350, 325, 300 ]
