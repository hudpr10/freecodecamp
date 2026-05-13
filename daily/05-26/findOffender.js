/*
Offending Element

Given an array of integers that is sorted in ascending order except for one out-of-place element, return the index of that element.

If more than one element could be considered out of place, return the index of the first one.
*/

function findOffender(arr) {
  for(let i = 0; i < arr.length; i++) { 
    if(arr[i] > arr[i + 1]) {
      const curIsTheProblem = i === 0 || arr[i - 1] <= arr[i + 1];
      return curIsTheProblem ? i : i + 1;
    }
  }
}

findOffender([2, 1]);
// return: 0

findOffender([5, 18, 24, 33, 40, 55, 15, 68, 84, 91]);
// return: 6
