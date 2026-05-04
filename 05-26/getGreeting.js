function getGreeting(time) {
  const [hour, min] = time.split(":").map(Number);
  const minutes = (hour * 60) + min;

  if (minutes >= 300 && minutes <= 719) return "Good morning";
  if (minutes >= 720 && minutes <= 1079) return "Good afternoon";
  if (minutes >= 1080 && minutes <= 1319) return "Good evening";
  
  return "Good night";
}

getGreeting("12:00");
// return: "Good afternoon"

getGreeting("00:01");
// return: "Good night"
