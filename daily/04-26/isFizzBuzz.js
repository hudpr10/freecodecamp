/*
FizzBuzz Validator

Given an array of sequential integers, with multiples of 3 and 5 replaced, determine if it's a valid FizzBuzz sequence.

In a valid FizzBuzz sequence:
  - Multiples of 3 are replaced with "Fizz".
  - Multiples of 5 are replaced with "Buzz".
  - Multiples of both 3 and 5 are replaced with "FizzBuzz".
  - All other numbers remain as integers.
*/

function isFizzBuzz(arr) {
  const firstNumIndex = arr.findIndex(n => typeof n === "number");
  const startValue = arr[firstNumIndex] - firstNumIndex;
  
  for(let i = 0; i < arr.length; i++) {
    const currentNum = startValue + i;
    let expected = currentNum;
    
    if (currentNum % 15 === 0) expected = "FizzBuzz";
    else if (currentNum % 5 === 0) expected = "Buzz";
    else if (currentNum % 3 === 0) expected = "Fizz";
    
    if(arr[i] !== expected) return false;
  }
  
  return true;
}

isFizzBuzz([1, 2, "Fizz", 4, "Buzz"]);
// return: true

isFizzBuzz([1, 2, "Fizz", 4, 5]);
// return: false

isFizzBuzz(["FizzBuzz", 16, 17, "Fizz", 19, "Buzz"]);
// return: true
