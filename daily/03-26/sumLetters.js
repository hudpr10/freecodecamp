/*
Sum the Letters

Given a string, return the sum of its letters.

- Letters are A-Z in uppercase or lowercase
- Letter values are: "A" = 1, "B" = 2, ..., "Z" = 26
- Uppercase and lowercase letters have the same value.
- Ignore all non-letter characters.
*/

function sumLetters(str) {
  const letterRegex = /[A-z]/g;
  let letters = str.match(letterRegex) ?? [];
  if(letters.length === 0) return 0;
  
  letters = letters.map(convertLetterToNum);
  return letters.reduce((x, y) => x + y);
}

function convertLetterToNum(letter) {
  const letterArray = [
    "A", "B", "C", "D", "E", "F", 
    "G", "H", "I", "J", "K", "L", 
    "M", "N", "O", "P", "Q", "R", 
    "S", "T", "U", "V", "W", "X", 
    "Y", "Z"
  ];
  
  let num = 0;
  
  for(let i = 0; i < letterArray.length; i++) {
    if(letter.toUpperCase() === letterArray[i]) {
      num = i + 1;
      break;
    };
  }
  
  return num;
}

sumLetters("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ex nisl, pretium eu varius blandit, facilisis quis eros. Vestibulum ante ipsum primis in faucibus orci.");
// Return: 1681
