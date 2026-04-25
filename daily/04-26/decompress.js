/*
Word Decompressor

Given a compressed string, return the decompressed version using the following rules:
  - The given string is made up of words and numbers separated by spaces.
  - Leave the words unchanged.
  - Replace numbers with the word at that position, where the first word is at position 1.
*/

function decompress(str) {
  const words = str.split(" ");
  const history = [];
  const result = [];
  
  for(let i = 0; i < words.length; i++) {
    const item = words[i];
    const position = parseInt(item);
    
    if (isNaN(position)) {
      result.push(item);
    } else {
      result.push(history[position - 1])
    }
  
    history.push(result[i])
  }
  
  return result.join(" ");
}

decompress("practice makes perfect and 3 1 2 3");
// return: 'practice makes perfect and perfect practice makes perfect'
