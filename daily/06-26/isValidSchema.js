/*
Schema Validator Part 1

Given an object (JavaScript) or dictionary (Python), determine if it matches the following schema:

{ username: string }

Extra keys are allowed
*/

function isValidSchema(obj) {
  return !!obj && typeof obj.username === 'string';
}

isValidSchema({ username: "jen", posts: 30 });
// return: true

isValidSchema({ username: 1 });
// return: false
