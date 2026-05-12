/*
Character Frequency

Given a string, return an object (JavaScript) or dictionary (Python) mapping each character to the number of times it appears.
*/

function getFrequency(str) {
  const obj = {};
  
  for(const letter of str) 
    obj[letter] = (obj[letter] || 0) + 1;
  
  return obj;
}

getFrequency("test");
// return: { t: 2, e: 1, s: 1 }

getFrequency("hello world");
/*{
  h: 1,
  e: 1,
  l: 3,
  o: 2,
  ' ': 1,
  w: 1,
  r: 1,
  d: 1
}*/
