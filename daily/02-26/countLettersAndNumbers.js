/*
Letter and Number Count
Given a string, return a message with the count of how many letters and numbers it contains.

 -Letters are A-Z and a-z.
 -Numbers are 0-9.
 -Ignore all other characters.
Return "The string has X letters and Y numbers.", where "X" is the count of letters and "Y" is the count of numbers. If either count is 1, use the singular form for that item. E.g: "1 letter" instead of "1 letters" and "1 number" instead of "1 numbers".
*/

function countLettersAndNumbers(str) {  
  const letters = str.match(/[A-z]/g);
  const numbers = str.match(/\d/g);
  
  const lettersCount = letters !== null ? letters.length : 0;
  const numbersCount = numbers !== null ? numbers.length : 0;
  
  return `The string has ${lettersCount} ${lettersCount === 1 ? "letter" : "letters"} and ${numbersCount} ${numbersCount === 1 ? "number" : "numbers"}.`;
}

countLettersAndNumbers("helloworld123");
// Return: 'The string has 10 letters and 3 numbers.'
