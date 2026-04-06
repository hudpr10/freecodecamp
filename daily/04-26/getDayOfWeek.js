/*
What Day Is It?

Given a Unix timestamp in milliseconds, return the day of the week.

Valid return days are:
  - "Sunday"
  - "Monday"
  - "Tuesday"
  - "Wednesday"
  - "Thursday"
  - "Friday"
  - "Saturday"
  
Be sure to ignore time zones.
*/

function getDayOfWeek(timestamp) {
  const date = new Date(timestamp);
  
  switch (date.getUTCDay()) {
    case 0: return "Sunday";
    case 1: return "Monday";
    case 2: return "Tuesday";
    case 3: return "Wednesday";
    case 4: return "Thursday";
    case 5: return "Friday";
    case 6: return "Saturday";
    default: return "Not found";
  }
}

getDayOfWeek(1766246400000);
// return: 'Saturday'

getDayOfWeek(0);
// return: 'Thursday'
