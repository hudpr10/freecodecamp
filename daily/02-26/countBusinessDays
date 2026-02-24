function countBusinessDays(start, end) {
  let newDay = new Date(start);
  let businessDays = 0;
  
  while(newDay.toString() !== new Date(end).toString()) {
    if(isBusinessDay(newDay)) businessDays++;
    newDay.setDate(newDay.getDate() + 1);
  }

  if(isBusinessDay(new Date(end))) businessDays++;

  return businessDays;
}

function isBusinessDay(day) {
  const date = new Date(day);
  return date.getDay() < 5;
}

countBusinessDays("2026-02-24", "2026-02-28");
