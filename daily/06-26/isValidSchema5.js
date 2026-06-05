/*
Schema Validator Part 5

Given an object (JavaScript) or dictionary (Python), determine if it matches the following schema:

Roles = "user" | "creator" | "moderator" | "staff" | "admin"

{
  username: string,
  posts: number,
  verified: boolean,
  role: Roles,
  supporter?: boolean,
  badges: string[]
}

  - The pipe (|) symbol means "or". role must be one of the listed Roles values.
  - The question mark (?) after supporter means that the field is optional, but is the specified type if it exists.
  - The brackets [] after string means that badges should be an array of strings (or empty).
  - Extra keys are allowed
*/

const ROLES = new Set(["user", "creator", "moderator", "staff", "admin"]);

function isValidSchema(obj) {  
  return (
    !!obj 
    && typeof obj.username === 'string'
    && typeof obj.posts === 'number'
    && typeof obj.verified === 'boolean'
    && ROLES.has(obj.role)
    && (obj.supporter === undefined || typeof obj.supporter === 'boolean')
    && (Array.isArray(obj.badges) &&  obj.badges.every(b => typeof b === 'string'))
  );
}

isValidSchema({ username: "gill", posts: 12, verified: false, role: "creator", supporter: false, badges: [ "early-adopter", "popular" ] });
// return: true
