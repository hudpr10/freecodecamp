/*
Word Length Converter

Given a string of words, return a new string where each word is replaced by its length.
- Words in the given string will be separated by a single space
- Keep the spaces in the returned string.

For example, given "hello world", return "5 5".
*/

function convertWords(str) {
  const strArr = str.split(" ");
  const strLength = strArr.map(x => x.length);
  
  return strLength.join(" ");
}

convertWords("Lorem ipsum dolor sit amet consectetur adipiscing elit donec ut ligula vehicula iaculis orci vel semper nisl");
// Return: '5 5 5 3 4 11 10 4 5 2 6 8 7 4 3 6 4'
