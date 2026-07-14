/*
Tally Counter

Given a string of tally marks, return the total count represented.
  - Each pipe "|" represents one count.
  - Every fifth mark is represented as a forward slash "/", completing a group of five ("||||/").
  - Groups are separated by a space.
*/

const FIVE_TALLY = /\|\|\|\|\//g;
const SIMPLE_TALLY = /\|+/g;

function getTallyCount(str) {
  return str
    .split(" ")
    .map((group) =>
      group.match(FIVE_TALLY) ? 5 : SIMPLE_TALLY.exec(group).input.length,
    )
    .reduce((a, b) => a + b, 0);
}

console.log(getTallyCount("||||/ ||||/ ||||/ ||"));
// return: 17
