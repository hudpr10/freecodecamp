/*
Nearest Multiple

Given two integers, round the first to the nearest multiple of the second.
*/

function roundToNearestMultiple(num, multiple) {
  if (typeof num !== "number" || typeof multiple !== "number" || multiple === 0)
    return 0;
  return multiple * Math.round(num / multiple);
}

console.log(roundToNearestMultiple(17, 4));
// return: 16

console.log(roundToNearestMultiple(43, 5));
// return: 45

console.log(roundToNearestMultiple(93, 12));
// return: 96
