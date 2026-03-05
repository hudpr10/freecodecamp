/*
Smallest Gap

Given a string, return the substring between the two identical characters that have the smallest number of characters between them (smallest gap).

- There will always be at least one pair of matching characters.
- The returned substring should exclude the matching characters.
- If two or more gaps are the same length, return the characters from the first one.

For example, given "ABCDAC", return "DA".
- Only "A" and "C" repeat in the string.
- The number of characters between the two "A" characters is 3, and between the "C" characters is 2.
- So return the string between the two "C" characters.
*/

function smallestGap(str) {
  let index = getRepeatLetterIndex(str);
  let indexDiff = getSmallGap(index);
  let gapIndex = indexOfSmallValue(indexDiff);
  
  const start = index[gapIndex][0];
  const end = index[gapIndex][1];
  
  console.log(start, end);
  return str.substring(start + 1, end);
}

function indexOfSmallValue(arr) {
  let min = arr[0];
  let index = 0;
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] < min) {
      min = arr[i];
      index = i;
    }
  };
  return index;
}

function getSmallGap(indexes) {
  const diff = [];
  for(let i = 0; i < indexes.length; i++) {
    diff.push(indexes[i][1] - indexes[i][0]);
  }
  return diff;
}

function getRepeatLetterIndex(str) {
  const index = [];
  for(let i = 0; i < str.length; i++) {
    for(let j = i + 1; j < str.length; j++)
    if(str[i] === str[j]) {
      index.push([i, j]);
    }
  }
  if(index.length < 2) return false;
  return index;
}

smallestGap("A{5e^SD*F4i!o#q6e&rkf(po8|we9+kr-2!3}=4")
// Return: '#q6e&rkf(p'
