/*
Roommates

Given an array of people and their roommate group, return the room assignments for a hotel stay using the following rules:

Each person has a name and a group property:
[
  { "name": "Alice", "group": "A" },
  { "name": "Bob", "group": "B" },
  { "name": "Carol", "group": "A" }
]
  - People can only share a room with someone from the same group and are paired in the order they are given.

Return an array of strings with names separated by " and " for a shared room, and just the name for a solo room. Names must appear in the order they were paired. For the example above, return ["Alice and Carol", "Bob"].
*/

function getRoommates(people) {
  const MAX = 2;
  let roomCounters = {};
  
  let groups = {};
  
  for (let i = 0; i < people.length; i++) {
    const personGroup = people[i].group;
    const name = people[i].name;

    if (roomCounters[personGroup] === undefined) {
      roomCounters[personGroup] = 0;
    }

    let currentRoomKey = `${personGroup}-${roomCounters[personGroup]}`;

    if (!groups[currentRoomKey]) {
      groups[currentRoomKey] = [name];
      continue;
    }

    if (groups[currentRoomKey].length === MAX) {
      roomCounters[personGroup]++;
      currentRoomKey = `${personGroup}-${roomCounters[personGroup]}`;
      
      groups[currentRoomKey] = [name];
      continue;
    }

    groups[currentRoomKey].push(name);
  }

  let roommates = [];
  for (const [_, namesArray] of Object.entries(groups)) {
    roommates.push(namesArray.join(" and "));
  }

  return roommates;
}

getRoommates([
  { "name": "Kevin", "group": "A" }, 
  { "name": "Yuri", "group": "A" }, 
  { "name": "Hugo", "group": "B" }, 
  { "name": "Violet", "group": "A" }, 
  { "name": "Brett", "group": "A" }, 
  { "name": "Wayne", "group": "B" }
]);
// return: [ 'Kevin and Yuri', 'Hugo and Wayne', 'Violet and Brett' ]
