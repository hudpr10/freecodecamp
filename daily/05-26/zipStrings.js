/*
String Zipper

Given two strings, return a new string that interleaves their characters one at a time. If one string is longer, append the remaining characters at the end.

Begin with the first character of the first string.
*/

function zipStrings(a, b) {
  if (typeof a !== "string" || typeof b !== "string") return null;
  
  const aIsBigger = a.length >= b.length;
  const big = aIsBigger ? a : b;
  const sma = aIsBigger ? b : a;
  
  let str = "";
  
  for(let i = 0; i < sma.length; i++) {
    str += a[i] + b[i];
  }
  
  const rest = big.substring(sma.length)
  return str + rest;
}

zipStrings("abc", "123");
// return: 'a1b2c3'

zipStrings("day", "night");
// return: 'dnaiyght'

zipStrings("night", "day");
// return: 'ndiagyht'
