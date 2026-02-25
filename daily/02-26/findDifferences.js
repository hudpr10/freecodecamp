/*
Sequential Difference

Given an array of numbers, return a new array containing the value needed to get from each number to the next number.

For the last number, use 0 since there is no next number.
For example, given [1, 2, 4, 7], return [1, 2, 3, 0].
*/

function findDifferences(arr) {
  let newArr = [];
  
  for(let i = 0; i < arr.length; i++) {
    newArr.push(arr[i+1] - arr[i]);
  }
  
  newArr.pop();
  newArr.push(0);
  
  return newArr;
}

findDifferences([10, 15, 19, 22, 24, 25])
// Return: [5, 4, 3, 2, 1, 0]
