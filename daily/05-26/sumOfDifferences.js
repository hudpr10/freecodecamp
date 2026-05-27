/*
Sum of Differences

Given an array of numbers, return the sum of the differences between each number and the one that follows it.
*/

function sumOfDifferences(arr) {
  return arr.reduce((acc, num, i) => {
    const nex = arr[i + 1] ?? null;
    if (nex !== null) return acc + (nex - num);
    
    return acc;
  }, 0);
}

sumOfDifferences([1, 3, 4]);
// return: 3

sumOfDifferences([9, 6, 15, -20, 33, 14, 25, 16, -7]);
// return: -16
