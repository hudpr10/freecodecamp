/*
Schema Validator Part 3

Given an object (JavaScript) or dictionary (Python), determine if it matches the following schema:
Roles = "user" | "creator" | "moderator" | "staff" | "admin"

{
  username: string,
  posts: number,
  verified: boolean,
  role: Roles
}

The pipe (|) symbol means "or". role must be one of the listed Roles values.
Extra keys are allowed
*/

const VALID_ROLES = new Set(["user", "creator", "moderator", "staff", "admin"]);

function isValidSchema(obj) {  
  return (
    !!obj 
    && typeof obj.username === 'string'
    && typeof obj.posts === 'number'
    && typeof obj.verified === 'boolean'
    && VALID_ROLES.has(obj.role)
  );
}

isValidSchema({ username: "henry", posts: 0, verified: true, role: "staff" });
// return: true
