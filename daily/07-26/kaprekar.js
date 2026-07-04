/*
Kaprekar's Routine

Given a 4-digit number, return the number of times you need to apply Kaprekar's routine until reaching 6174.

Kaprekar's routine works as follows:
  - Arrange the digits in descending order to form the largest number
  - Arrange the digits in ascending order to form the smallest number (pad with leading zeros if necessary)
  - Subtract the smaller from the larger
  - Repeat with the new number
*/

function kaprekar(n) {
  if (n === 6174) return 0;

  let count = 1;
  let desc = descendingOrder(n);
  let asce = ascendingOrder(n);
  let sub = Math.abs(asce - desc);

  while (n !== 6174) {
    if (sub === 6174) return count;

    desc = descendingOrder(sub);
    asce = ascendingOrder(sub);
    sub = Math.abs(asce - desc);
    count++;
  }
}

const descendingOrder = (n) =>
  Number(
    n
      .toString()
      .split("")
      .sort((a, b) => a - b)
      .join(""),
  );

const ascendingOrder = (n) =>
  Number(
    n
      .toString()
      .split("")
      .sort((a, b) => b - a)
      .join(""),
  );

console.log(kaprekar(1234));
// return: 3

console.log(kaprekar(2025));
// return: 4
