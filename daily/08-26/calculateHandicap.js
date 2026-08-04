/*
Golf Handicap Calculator

Given an array of golf scores and a corresponding array of course par values, return the golfer's handicap index using the following method:
  - Calculate the differential for each round by subtracting the par from the score, then return the average of all differentials rounded to one decimal place.

*/

function calculateHandicap(scores, pars) {
  const diff = scores.reduce((acc, score, i) => acc + (score - pars[i]), 0);
  const avgDiff = diff / scores.length;

  return Math.round((avgDiff + Number.EPSILON) * 10) / 10;
}

console.log(calculateHandicap([72, 72, 72], [72, 72, 72])); // 0
console.log(calculateHandicap([80, 76, 78, 78], [72, 72, 72, 72])); // 6
console.log(calculateHandicap([42, 45, 46, 44], [36, 36, 36, 36])); // 8.3
console.log(calculateHandicap([85, 80, 76, 79, 82], [72, 72, 72, 71, 71])); // 8.8
