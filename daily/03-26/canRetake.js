/*
Cooldown Time

Given two timestamps, the first representing when a user finished an exam, and the second representing the current time, determine whether the user can take an exam again.
  - Both timestamps will be given the format: "YYYY-MM-DDTHH:MM:SS", for example "2026-03-     25T14:00:00". Note that the time is 24-hour clock.
  - A user must wait at least 48 hours before retaking an exam.
*/

function canRetake(finishTime, currentTime) {
  const [currentDay, currentHour] = currentTime.split("T");
  const [finishDay, finishHour] = finishTime.split("T");
  
  const diffMs = new Date(currentDay) - new Date(finishDay); 
  const diff = diffMs / (1000 * 60 * 60 * 24);
  if(diff > 2) return true;
  if(diff < 2) return false;
  
  // diff === 2
  return currentHour >= finishHour;
}

canRetake("2026-03-23T11:50:00", "2026-03-25T11:49:59");
// return: false
