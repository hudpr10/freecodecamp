/*
Business Day Count

Given a start date and an end date, return the number of business days between the two.
 -Given dates are in the format "YYYY-MM-DD".
 -Weekdays are business days (Monday through Friday).
 -Weekends are not business days (Saturday and Sunday).
 -Include both the start and end dates when counting.
*/

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
// Return: 4
