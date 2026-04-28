/*
Number Words

Given an integer from 0 to 99, return its English word representation.
  - 0 returns "zero".
  - Numbers 1-19 have unique names ("one", "two", ..., "ten", "eleven", ..., "eighteen", "nineteen").
  - Multiples of 10 from 20-90 have their own names ("twenty", "thirty", ..., "eighty", "ninety").
  - Numbers 21-99 that are not multiples of 10 are written as two words joined by a hyphen. For example "forty-two" and "fifty-three".
*/

const nums = {
  1: "one", 2: "two", 3: "three", 4: "four", 5: "five",
  6: "six", 7: "seven", 8: "eight", 9: "nine", 10: "ten",
  11: "eleven", 12: "twelve", 13: "thirteen", 14: "fourteen", 15: "fifteen",
  16: "sixteen", 17: "seventeen", 18: "eighteen", 19: "nineteen", 20: "twenty",
  30: "thirty", 40: "forty", 50: "fifty", 60: "sixty", 70: "seventy", 80: "eighty",
  90: "ninety",
};

function getNumberWords(num) {
  if (num < 0 || typeof num !== "number") return "invalid";
  if (num === 0) return "zero";
  
  const unit = num % 10;
  const decimal = num % 100;

  const parts = [];
  if (nums[decimal] !== undefined) parts.push(nums[decimal]);
  else parts.push(nums[decimal - unit], nums[unit]);
  
  return parts.join("-");
}

getNumberWords(99);
// return: 'ninety-nine'
