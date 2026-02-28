/*
Add Punctuation

Given a string of sentences with missing periods, add a period (".") in the following places:

- Before each space that comes immediately before an uppercase letter
- And at the end of the string
Return the resulting string.
*/

function addPunctuation(sentences) {
  const array = sentences.split(" ");
  
  for(let i = 0; i < array.length; i++) {
    if(array[i].match(/[A-Z]/) && i !== 0) {
      array[i - 1] += "."
    }
  }
  
  sentences = array.join(" ");
  sentences += ".";
  
  return sentences;
}

addPunctuation("Hello world It's nice today");
// Return: "Hello world. It's nice today."
