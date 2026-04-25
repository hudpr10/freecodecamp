/*
Word Compressor

Given a string, return a compressed version of the string using the following rules:
  - The first occurrence of a word remains unchanged.
  - Subsequent occurrences are replaced with the position of the first occurrence, where the first word is at position 1.
  - Words are separated by a single space.
*/

function compress(str) {
  const words = str.split(" ");
  const seenwords = {};
  const result = [];
  
  let currentPosition = 1;
  for(let i = 0; i < words.length; i++) {
    const word = words[i];
    
    if (seenwords[word] === undefined) {
      seenwords[word] = currentPosition;
      result.push(word);
    } else {
      result.push(seenwords[word]);
    }
    currentPosition++;
  }
  
  return result.join(" ");
}

compress("the more you know the more you realize you don't know");
// return: "the more you know 1 2 3 realize 3 don't 4";
