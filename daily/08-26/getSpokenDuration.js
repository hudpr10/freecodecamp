/*
Spoken Duration

Given a number of seconds, return the duration in spoken English.
  - Break the duration into hours, minutes, and seconds.
  - Skip any zero values.
  - Use singular or plural as appropriate ("1 hour", "2 hours").
  - If present, join the last two units with "and", and the second and third to last units with a comma ("1 hour, 2 minutes and 3 seconds").
*/

function getSpokenDuration(seconds) {
  const hour = Math.floor(seconds / 3600);
  const min = Math.floor((seconds / 60) % 60);
  const sec = Math.floor(seconds % 60);

  let string = "";

  if (hour !== 0) string += `${hour} hour${formatUnit(hour)}`;

  if (min !== 0) {
    if (string === "") string += min;
    else string += `, ${min}`;

    string += ` minute${formatUnit(min)}`;
  }

  if (sec !== 0) {
    if (string === "") string += sec;
    else string += ` and ${sec}`;

    string += ` second${formatUnit(sec)}`;
  }

  return string;
}

const formatUnit = (num) => (num === 1 ? "" : "s");

console.log(getSpokenDuration(7295)); // 2 hours, 1 minute and 35 seconds

console.log(getSpokenDuration(435)); // 7 minutes and 15 seconds

console.log(getSpokenDuration(14455)); // 4 hours and 55 seconds

console.log(getSpokenDuration(72000)); // 20 hours
