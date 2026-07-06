/* 
lowercase words

Given a string, return only the words that are entirely lowercase, 
in their original order and with a space between each word.
*/

function getLowercaseWords(str) {
  return str
    .split(/\s+/)
    .filter((word) => !/\p{Lu}/u.test(word))
    .join(" ");
}

console.log(getLowercaseWords("Bom ótimo dia, que vontade CAFÉ DE beber café"));
// return: 'ótimo dia, que vontade beber café'
