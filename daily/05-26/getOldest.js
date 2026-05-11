/*
Oldest Person

Given an array of objects, each with a "name" and "age" property, return an array containing the name of the oldest person.

If multiple people share the oldest age, return all of their names in the order they appear in the input.
*/

function getOldest(people) {
  const oldestAge = Math.max(...people.map(p => p.age));
  
  return people
    .filter(p => p.age === oldestAge)
    .map(p => p.name);
}

getOldest([{ name: "Alice", age: 30 }, { name: "Bob", age: 25 }]);
// return: [ 'Alice' ]

getOldest([{ name: "George", age: 50 }, { name: "Shirley", age: 42 }, { name: "Beth", age: 48 }, { name: "Holly", age: 50 }, { name: "Kevin", age: 44 }, { name: "Frank", age: 47 }, { name: "Zach", age: 50 }, { name: "Jennifer", age: 43 }]);
// return: [ 'George', 'Holly', 'Zach' ]
