/*
Due Date

Given a date string, return the date 9 months in the future.
  - The given and return strings have the format "YYYY-MM-DD".
  - If the month nine months into the future doesn't contain the original day number, return the last day of that month.
*/

function getDueDate(dateStr) {
  const [year, month, day] = dateStr.split("-").map(Number);
  
  let targetMonth = month + 9;
  let targetYear = year + Math.floor((targetMonth - 1) / 12);
  targetMonth = ((targetMonth - 1) % 12) + 1;
  
  const maxDay = new Date(targetYear, targetMonth, 0).getDate();
  const targetDay = Math.min(maxDay, day);
  
  const mm = targetMonth.toString().padStart(2, "0");
  const dd = targetDay.toString().padStart(2, "0");
  
  return `${targetYear}-${mm}-${dd}`;
}

getDueDate("2025-03-30");
// return: '2025-12-30'

getDueDate("2025-04-27");
// return: '2026-01-27'

getDueDate("2025-05-29");
// return: '2026-02-28'
