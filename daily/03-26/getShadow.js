/*
Equinox Shadows

Today is the equinox, when the sun is directly above the equator and perfectly overhead at noon. Given a time, determine the shadow cast by a 4-foot vertical pole.

  - The time will be a string in "HH:MM" 24-hour format (for example, "15:00" is 3pm).
  - You will only be given a time in 30 minute increments.

Rules:
  - The sun rises at 6am directly "east", and sets at 6pm directly "west".
  - A shadow always points opposite the sun.
  - The shadow's length (in feet) is the number of hours away from noon, cubed.
  - There is no shadow before sunrise (before 6am), after sunset (6pm or later), or at       noon.
*/

function getShadow(time) {
  const [hour, minute] = time.split(":").map(Number); 
  
  if(hour < 6 || hour >= 18 || time === "12:00") return "No shadow";
  
  const hourDiff = 12 - hour - (minute / 60);
  const distance = Math.pow(Math.abs(hourDiff), 3);
  
  return `${distance}ft ${hour > 12 ? "east" : "west"}`;
}

getShadow("10:00");
// return: '8ft west'

getShadow("15:00");
// return: '27ft east'

getShadow("17:30");
// return: '166.375ft east'
