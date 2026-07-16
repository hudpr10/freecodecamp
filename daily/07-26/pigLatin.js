/*
Pig Latin Converter

Given a string, convert it to Pig Latin using the following rules:
  - If a word begins with a vowel ("a", "e", "i", "o", or "u"), add "way" to the end. For example, "universe" converts to "universeway".
  - If a word begins with one or more consonants, move them to the end and add "ay". For example, "hello" converts to "ellohay".
  - Preserve the case of the first letter. For example, "Hello" converts to "Ellohay".
*/

const VOWELS = new Set(["a", "e", "i", "o", "u"]);

const isVowel = (letter) =>
  letter !== undefined && VOWELS.has(letter.toLowerCase());

function pigLatinWord(word) {
  const firstLetter = word[0];
  const isCapitalized = firstLetter === firstLetter.toUpperCase();

  if (isVowel(firstLetter)) {
    return `${word}way`;
  }

  let i = 0;
  while (i < word.length && !isVowel(word[i])) {
    i++;
  }

  if (i === word.length) {
    return `${word}ay`;
  }

  const consonants = word.slice(0, i).toLowerCase();
  let rest = word.slice(i);

  if (isCapitalized) {
    rest = rest[0].toUpperCase() + rest.slice(1);
  }

  return `${rest}${consonants}ay`;
}

function pigLatin(str) {
  return str.split(" ").map(pigLatinWord).join(" ");
}

console.log(pigLatin("Hello arara"));
// return: Ellohay araraway
