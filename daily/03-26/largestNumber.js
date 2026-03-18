/*
Largest Number
Given a string of numbers separated by various punctuation, return the largest number.

  - The given string will only contain numbers and separators.
  - Separators can be commas (","), exclamation points ("!"), question marks ("?"), colons   (":"), or semi-colons (";").
*/

function largestNumber(str) {
  const numArr = str
    .replace(/[!,;:?]/g, " ")
    .split(" ")
    .map(Number)

  return Math.max(...numArr);
}

largestNumber("-402,-1032!-569:-947;-633?-800!-1012;-402,-723?-8102!-3011");
// return: -402
