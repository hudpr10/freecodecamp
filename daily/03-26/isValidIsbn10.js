/*
ISBN-10 Validator

Given a string, determine if it's a valid ISBN-10.
An ISBN-10 consists of hyphens ("-") and 10 other characters. After removing the hyphens ("-"):
  - The first 9 characters must be digits, and
  - The final character may be a digit or the letter "X", which represents the number 10.

To validate it:
  - Multiply each digit (or value) by its position (multiply the first digit by 1, the second by 2, and so on).
  - Add all the results together.
  - If the total is divisible by 11, it's valid.
*/

function isValidIsbn10(str) {
  const arr = str.split("").filter(num => num !== "-").map(num => {
    if(num === "X") return 10;
    return Number(num);
  });
  
  let sum = 0;
  for(let i = 0; i < arr.length; i++) {
    sum += arr[i] * (i + 1); 
  }
  
  return sum % 11 === 0;
}

isValidIsbn10("0-8044-2957-X");
// return: true
