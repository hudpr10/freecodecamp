/*
Sleep Debt

Given an array of hours slept each night leading up to today, and a target number of hours per night, return how many hours of sleep you need tonight to eliminate your sleep debt.
  - Include tonight's hours in the total time needed to catch up.
  - If you've slept enough to cover tonight's target or more, return 0.
*/

function sleepDebt(hoursSlept, targetHours) {
  const sleptDebt = hoursSlept.reduce((acc, hour) => acc + hour, 0);
  const targetForWeek = targetHours * 7;
  
  return Math.max(0, targetForWeek - sleptDebt);
}

sleepDebt([6, 7, 8, 4, 8, 6], 7);
// return: 10

sleepDebt([8, 9, 10, 9, 10, 7], 7);
// return: 0
