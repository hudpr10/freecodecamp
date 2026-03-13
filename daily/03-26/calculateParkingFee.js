/*
Parking Fee Calculator

Given two strings representing the time you parked your car and the time you picked it up, calculate the parking fee.
  - The given strings will be in the format "HH:MM" using a 24-hour clock. So "14:00" is   2pm for example.
  - The first string will be the time you parked your car, and the second will be the -   time you picked it up.
  - If the pickup time is earlier than the entry time, it means the parking spanned past   midnight into the next day.

Fee rules:
  - Each hour parked costs $3.
  - Partial hours are rounded up to the next full hour.
  - If the parking spans overnight (past midnight), an additional $10 overnight fee is       applied.
  - There is a minimum fee of $5 (only used if the total would be less than $5).
  
Return the total cost in the format "$cost", "$5" for example.
*/

function calculateParkingFee(parkTime, pickupTime) {
  const [parkHour, parkMin] = parkTime.split(":");
  const [pickupHour, pickupMin] = pickupTime.split(":");
  
  let hourDiff = Number(pickupHour) - Number(parkHour);
  let minDiff = Number(pickupMin) - Number(parkMin);
  let cost = 0;
  
  if((hourDiff < 0) || (hourDiff === 0 && minDiff < 0)) {
    cost = (hourDiff + 24) * 3 + 10;
  } else {
    cost = hourDiff * 3;
  }
  
  if(minDiff > 0) cost += 3;
  if(cost < 5) cost = 5;
  
  return `$${cost}`;
}

calculateParkingFee("18:15", "01:30");
// Return: '$34'
