/*
No Consecutive Repeats

Given a string, determine if it has no repeating characters.
  - A string has no repeats if it does not have the same character two or more times in a     row.
*/

function hasNoRepeats(str) {
  for(let i = 0; i < str.length; i++) {
    if(str[i] === str[i+1]) return false;
  }
  
  return true;
}

hasNoRepeats("hi world");
// Return: true

hasNoRepeats("hello world");
// Return: false
