/*
Earth Day Cleanup Crew

Today is Earth Day. Given an array of items you cleaned up, return your total cleanup score based on the rules below.

Given items will be one of:
  Item	    Base Value
 "bottle"	      10
 "can"	        6
 "bag"	        8
 "tire"	        35
 "straw"	      4
 "cardboard"	  3
 "newspaper"	  3
 "shoe"	        12
 "electronics"	25
 "battery"	    18
 "mattress"	    38
 
A Rare item is represented as ["rare", value]. For example, ["rare", 80]. Rare items do not get a streak bonus.

Streak bonus: If the same item appears consecutively, it gets increasing bonus points.
  - First consecutive occurrence: base value
  - Second: base value + 1
  - Third: base value + 2
  - etc.
  
Fifth Item Multiplier: Every fifth item collected gets a multiplier.
  - Fifth item: *2
  - Tenth item: *3
  - etc.
  
Apply the multiplier after calculating any bonuses.
*/

function getCleanupScore(items) {
  let multiply = 1;
  let increment = 1;
  
  const values = items.map((item, index) => {
    if (typeof item === "object") return item[1];
    
    let value = objects[item];
    if (item === items[index - 1]) {
      value += increment;
      increment++;
    } else {
      increment = 1;
    }
    
    if ((index + 1) % 5 === 0 && index !== 0) {
      multiply++;
      return value * multiply;
    } else {
      return value;
    }
  })
  
  
  return values.reduce((acc, x) => acc + x);
}

const objects = {
  "bottle":	10,
  "can": 6,
  "bag": 8,
  "tire":	35,
  "straw":	4,
  "cardboard": 3,
  "newspaper":3,
  "shoe": 12,
  "electronics": 25,
  "battery": 18,
  "mattress": 38,
}

getCleanupScore(["bottle", "can", "can", "shoe", "shoe", ["rare", 56], "bottle", "bottle", "can", "can", "electronics", "bottle", ["rare", 48], "bottle", "can", "can", "can", "can", "can", "can", "can"])
// return: 383
