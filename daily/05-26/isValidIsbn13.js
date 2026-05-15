/*
ISBN-13 Validator

Given a string, determine if it is a valid ISBN-13 number.

A valid ISBN-13:
  - Contains only digits and hyphens
  - Has exactly 13 digits after removing hyphens
  - Passes the following check:
    1. Multiply each digit by 1 or 3, alternating (multiply the first digit by 1, the second by 3, the third by 1, and so on).
    2. The sum of the results must be divisible by 10.
*/

function isValidIsbn13(str) {
  const clearStr = str.replaceAll("-", "");
  
  if (clearStr.length !== 13) return false;
  
  const sum = clearStr
    .split("")
    .map(Number)
    .reduce((acc, val, index) => calculateISBN(val, index) + acc, 0);
  
  return sum % 10 === 0;
}

function calculateISBN(value, index) {
  if (index === 0 || index % 2 === 0) return value * 1;
  return value * 3;
}

isValidIsbn13("9780306406157");
// return: true

isValidIsbn13("978-0-13-595705-9");
// return: true

isValidIsbn13("97803064061570");
// return: false
