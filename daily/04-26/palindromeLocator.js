/*
Palindrome Characters

Given a string, determine if it's a palindrome and return the middle character (if it's odd length) or middle two characters (if it's even).

  - A palindrome is a string that is the same forward and backward.
  - If it's not a palindrome, return "none".
*/

function palindromeLocator(str) {
  if(!isPalindrome(str)) return "none";

  const middleIndex = Math.floor((str.length - 1) / 2);
  if(str.length % 2 !== 0) return str[middleIndex];
  
  return str[middleIndex] + str[middleIndex + 1];
}

function isPalindrome(str) {
  const reverseStr = str.split("").reverse().join("");
  return str === reverseStr;
}

palindromeLocator("racecar");
// return: 'e'

palindromeLocator("ola mundo");
// return: 'none'

palindromeLocator("noon");
// return: 'oo'
