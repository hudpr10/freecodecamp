/*
Database Migration

Given two database objects, return the second object with any missing properties from the first filled in
*/

function migrateRecord(schema, record) {
  for (const [key, val] of Object.entries(record)) schema[key] = val;
  return schema;
}

console.log(migrateRecord({ username: "", posts: 0 }, { verified: true }));
// return: { username: '', posts: 0, verified: true }

console.log(migrateRecord(
  { 
    username: "", 
    email: "", 
    posts: 0, 
    verified: false, 
    role: "user", 
    banned: false 
  }, 
  { 
    username: "camper", 
    email: "camper@freecodecamp.org", 
    role: "admin" 
  }
));
/* return: 
  {
    username: 'camper',
    email: 'camper@freecodecamp.org',
    posts: 0,
    verified: false,
    role: 'admin',
    banned: false
  }
*/
