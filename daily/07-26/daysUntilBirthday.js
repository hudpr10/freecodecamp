/*
Birthday Countdown

Given today's date and a birthday, return the number of days until the person's next birthday.
  - Today's date is given as a string in "YYYY-MM-DD" format, with leading zeros, for example: "2026-07-16".
  - The birthday is given as a string in "M/D" format, without leading zeros, for example: "9/7".
  - If today is their birthday, return the number of days until their next birthday (not 0).
  - Leap years should be accounted for.
*/

function isLeapYear(y) {
  return (y % 4 === 0 && y % 100 !== 0) || y % 400 === 0;
}

function nextLeapYear(year) {
  while (!isLeapYear(year)) year++;
  return year;
}

function buildBirthDate(year, dMonth, dDay) {
  // Se o aniversário for 29/02, garante que o ano usado seja bissexto
  const isFeb29 = dMonth === 2 && dDay === 29;
  const finalYear = isFeb29 && !isLeapYear(year) ? nextLeapYear(year) : year;
  return new Date(finalYear, dMonth - 1, dDay); // horário local, consistente com todayDate
}

function daysUntilBirthday(today, birthday) {
  const [tYear, tMonth, tDay] = today.split("-").map(Number);
  const [dMonth, dDay] = birthday.split("/").map(Number);

  const todayDate = new Date(tYear, tMonth - 1, tDay);
  let birthDate = buildBirthDate(tYear, dMonth, dDay);

  // Se a data já passou este ano, vai para o próximo ano (respeitando 29/02)
  if (birthDate < todayDate) {
    birthDate = buildBirthDate(tYear + 1, dMonth, dDay);
  }

  let daysDiff = calculateDaysDiff(birthDate, todayDate);

  if (daysDiff === 0) {
    const nextBirthDate = buildBirthDate(tYear + 1, dMonth, dDay);
    daysDiff = calculateDaysDiff(nextBirthDate, todayDate);
  }

  return daysDiff;
}

const calculateDaysDiff = (date1, date2) => {
  const MS_IN_DAY = 1000 * 60 * 60 * 24;
  const diffInMs = Math.abs(date2 - date1);
  return Math.round(diffInMs / MS_IN_DAY);
};

console.log(daysUntilBirthday("2026-07-16", "9/7"));
// return: 53

console.log(daysUntilBirthday("2024-02-28", "3/1"));
// return: 2

console.log(daysUntilBirthday("2024-03-01", "2/29"));
// return: 1460
