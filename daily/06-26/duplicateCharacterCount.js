/*
Duplicate Character Count

Given two strings, return a count of characters from the second string that can be found in the first.
  - Duplicate characters in the second string are counted separately.
*/

function duplicateCharacterCount(str1, str2) {
  const uniqueChars = new Set(str1);
  let count = 0;

  for (let i = 0; i < str2.length; i++) {
    if (uniqueChars.has(str2[i])) count++;
  }

  return count;
}

console.log(duplicateCharacterCount("hello", "hola"));
// return: 3
