/*
I Before E

Given a word or sentence, return a corrected version where every word follows the "I before E except after C" rule.

  - If a word contains "ei" not preceded by "c", replace it with "ie".
  - If a word contains "ie" preceded by "c", replace it with "ei".
  - All other words are left unchanged.
*/

function iBeforeE(sentence) {
  const ei = /(?<!c)ei/g;
  const ie = /(?<=c)ie/g;
  
  return sentence
    .replace(ei, "ie")
    .replace(ie, "ei");
}

iBeforeE("she beleived the friendly niece could percieve the greif")
// return: 'she believed the friendly niece could perceive the grief'
