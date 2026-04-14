/*
Last Letter

Given a string, return the letter from the string that appears last in the alphabet.
  - If two or more letters tie for the last in the alphabet, return the first one.
  - Ignore all non-letter characters.
*/

function getLastLetter(str) {
  const strLowerCase = str.toLowerCase();
  let code = strLowerCase.charCodeAt(0);
  let letter = strLowerCase[0]
  
  for (let i = 0; i < strLowerCase.length; i++) {
    if(strLowerCase.charCodeAt(i) > code) {
      code = strLowerCase.charCodeAt(i);
      letter = str[i]
    };  
  }
  
  return letter;
}

getLastLetter("Hello World");
// return: 'W'

getLastLetter("!#$ er@R asd fT.,> 2t0e9");
// return: 'T'
