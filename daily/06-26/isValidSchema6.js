/*
Schema Validator Part 6
Given an object (JavaScript) or dictionary (Python), determine if it matches the following schema:

Roles = "user" | "creator" | "moderator" | "staff" | "admin"

UserProfile = {
  username: string,
  posts: number,
  verified: boolean,
  role: Roles,
  supporter?: boolean,
  badges: string[]
}

{
  users: UserProfile[]
}

  - The pipe (|) symbol means "or". role must be one of the listed Roles values.
  - The question mark (?) after supporter means that the field is optional, but is the specified type if it exists.
  - UserProfile[] denotes an array of UserProfile objects. An empty array is valid.
  - Extra keys are allowed
*/

const ROLES = new Set(["user", "creator", "moderator", "staff", "admin"]);

function isValidSchema(obj) {
  if (!Array.isArray(obj.users)) return false;
  
  return obj.users.every(validateUser);
}

function validateUser(user) {
  return (
    !!user 
    && typeof user.username === 'string'
    && typeof user.posts === 'number'
    && typeof user.verified === 'boolean'
    && ROLES.has(user.role)
    && (user.supporter === undefined || typeof user.supporter === 'boolean')
    && (Array.isArray(user.badges) &&  user.badges.every(u => typeof u === 'string'))
  );
}

isValidSchema({ 
  users: [
    { 
      username: "ron", 
      posts: 14, 
      verified: true, 
      role: "creator", 
      badges: [ "helper" ]
    }, 
    { 
      username: "cher", 
      posts: 25, 
      verified: true, 
      role: "moderator", 
      supporter: true, 
      followers: 20, 
      badges: [ "helper" ]
    }
  ]});
// return: true
