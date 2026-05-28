/*
FizzBuzz Count

Given a start and end number, count the number of fizz and buzz appearances in the range (inclusive).
  - Numbers divisible by 3 count as a fizz.
  - Numbers divisible by 5 count as a buzz.
  - Numbers divisible by both 3 and 5 count as both a fizz and a buzz.

Return an object or dictionary with the counts in the format: { fizz, buzz }.
*/

const countDivisiblesUpTo = (limit, divisor) => Math.floor(limit / divisor);

function fizzBuzzCount(start, end) {  
  const totalDivisibleByThree = 
        countDivisiblesUpTo(end, 3) - countDivisiblesUpTo(start - 1, 3);
  
  const totalDivisibleByFive = 
        countDivisiblesUpTo(end, 5) - countDivisiblesUpTo(start - 1, 5);
  
  return { 
    fizz: totalDivisibleByThree,
    buzz: totalDivisibleByFive 
  };
}

fizzBuzzCount(14, 41);
// return: { fizz: 9, buzz: 6 }
