/*
Wake-Up Alarm

Given a string representing the time you set your alarm and a string representing the time you actually woke up, determine if you woke up early, on time, or late.

Both times will be given in "HH:MM" 24-hour format.

Return:
  - "early" if you woke up before your alarm time.
  - "on time" if you woke up at your alarm time, or within the 10 minute snooze window after the alarm time.
  - "late" if you woke up more than 10 minutes after your alarm time.

Both times are on the same day.
*/

function alarmCheck(alarmTime, wakeTime) {
  const [alarmHour, alarmMin] = alarmTime.split(":").map(Number);
  const [wakeHour, wakeMin] = wakeTime.split(":").map(Number);

  const hourToMin = (hours) => hours * 60;
  const timeDiff = (hourToMin(wakeHour) + wakeMin) - (hourToMin(alarmHour) + alarmMin);
  
  if (timeDiff < -10) return "early"; 
  if (timeDiff > 10) return "late";
  return "on time";
}

alarmCheck("07:00", "06:45")
// return: 'early'

alarmCheck("06:50", "06:55");
// return: 'on time'
