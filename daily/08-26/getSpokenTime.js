/*
Spoken Time

Given the angles for the hour and minute hands of an analog clock in degrees (clockwise from 12), return the time in spoken English.
Convert the minute hand angle to minutes (360° = 60 minutes), then use the following rules:

Minutes	                   Spoken
  0	                   "Y o'clock"
  15	                 "quarter past Y"
  1–29 (excluding 15)	 "X minutes past Y"
  30	                 "half past Y"
  45	                 "quarter to Z"
  31–59 (excluding 45) "X minutes to Z" (where X is 60 - minutes)

  Where Y is the current hour and Z is the next hour, both derived from the hour hand angle (360° = 12 hours).

Note: Hand angles may not land exactly on a number, consider rounding them somehow.
*/

function getSpokenTime(hourAngle, minuteAngle) {
  const hour = Math.floor(hourAngle / 30);
  const min = Math.floor((minuteAngle / 30) * 5);

  if (min === 0) return `${hour} o'clock`;
  if (min === 15) return `quarter past ${hour}`;
  if (min >= 1 && min <= 29) return `${min} minutes past ${hour}`;
  if (min === 30) return `half past ${hour}`;
  if (min === 45) return `quarter to ${hour + 1}`;
  if (min >= 31 && min <= 59) return `${60 - min} minutes to ${hour + 1}`;
}

console.log(getSpokenTime(90, 0)); // 3 o'clock

console.log(getSpokenTime(160, 120)); // 20 minutes past 5

console.log(getSpokenTime(255, 180)); // half past 8

console.log(getSpokenTime(67.5, 92)); // quarter past 2

console.log(getSpokenTime(322.5, 273)); // quarter to 11

console.log(getSpokenTime(200, 240)); // 20 minutes to 7
