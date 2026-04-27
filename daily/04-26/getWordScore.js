/*
Word Score

Given a word, return its score using a standard letter-value table:

Letter	Value
  A	      1
  B	      2
 ...	   ...
  Z	      26

  - Upper and lowercase letters have the same value.
*/

function getWordScore(word) {
  return word
    .toUpperCase()
    .replace(/[^A-Z]/g, "")
    .split("")
    .reduce((acc, num) => acc + num.charCodeAt(0) - 64, 0);
}

getWordScore("hi");
// return: 17
