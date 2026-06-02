/*
Schema Validator Part 2

Given an object (JavaScript) or dictionary (Python), determine if it matches the following schema:

{ 
  username: string,
  posts: number,
  verified: boolean,
}

Extra keys are allowed
*/

function isValidSchema(obj) {
  return (
    !!obj &&
    typeof obj.username === "string" &&
    typeof obj.posts === "number" &&
    typeof obj.verified === "boolean"
  );
}

console.log(isValidSchema({ username: "alice", posts: 10, verified: false }));
// return: true

console.log(isValidSchema({ username: "frank", posts: "21", verified: true }));
// return: false
