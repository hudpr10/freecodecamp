/*
Lucky Number

Given a string of a person's first and last name, calculate their lucky number using the following rules:
  - First and last names are separated by a space
  - Find the vowel and consonant count for each name
  - Multiply the smaller vowel and consonant counts by each other and then by the length of the smaller name
  - Do the same for the two larger counts and the larger name
  - Subtract the smaller value from the larger one to get their lucky number
  - If the final value is zero (0), return 13.
*/

const vowels = new Set(["a", "e", "i", "o", "u"]);

function getLuckyNumber(name) {
  const names = name.split(" ");

  const metrics = names.map((n) => ({
    length: n.length,
    ...vowelsAndConsonantsCount(n),
  }));

  const minProduct =
    Math.min(metrics[0].length, metrics[1].length) *
    Math.min(metrics[0].vowels, metrics[1].vowels) *
    Math.min(metrics[0].consonants, metrics[1].consonants);

  const maxProduct =
    Math.max(metrics[0].length, metrics[1].length) *
    Math.max(metrics[0].vowels, metrics[1].vowels) *
    Math.max(metrics[0].consonants, metrics[1].consonants);

  const final = Math.abs(minProduct - maxProduct);
  return final === 0 ? 13 : final;
}

function vowelsAndConsonantsCount(word) {
  let vowelsCount = 0;
  let consonantsCount = 0;

  for (const char of word.toLowerCase()) {
    if (vowels.has(char)) vowelsCount++;
    else if (char >= "a" && char <= "z") consonantsCount++;
  }

  return { vowels: vowelsCount, consonants: consonantsCount };
}

console.log(getLuckyNumber("John Doe"));
// return: 21

console.log(getLuckyNumber("Hudson Reis"));
// return: 32
