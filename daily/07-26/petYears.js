/*
Pet Age Calculator

Given a pet type and age in human years, return the equivalent age in pet years using the following conversion table:
*/

const convertTable = {
  dog: 7,
  cat: 6,
  rabbit: 8,
  hamster: 30,
  "guinea pig": 12,
  goldfish: 6,
  bird: 5,
};

function petYears(pet, age) {
  return convertTable[pet] * age;
}

console.log(petYears("dog", 5));
// return: 25
