/*
Word Blender

Given two words, return a new word by combining the first half of the first word with the second half of the second word.
  - For odd-length words, the first half is the shorter half.
*/

function blendWords(word1, word2) {
  const start = word1.substring(0, word1.length / 2);
  const end = word2.substring(word2.length / 2);

  return start + end;
}

console.log(blendWords("falcon", "pelican")); // falican
console.log(blendWords("hello", "world")); // herld
console.log(blendWords("turtle", "toucan")); // turcan
