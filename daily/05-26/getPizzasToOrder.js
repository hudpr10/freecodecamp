/*
Pizza Party

Given an array of hours worked today per person, return the number of pizzas to order for a pizza party.
  - Divide each person's hours worked by 3 to get their slice count.
  - You can't eat a partial slice, so round each person's slice count up to the nearest whole number.
  - Each person gets a minimum of two slices.
  - Each pizza has 8 slices. Round the total number of pizzas up to the nearest whole pizza.
*/

function getPizzasToOrder(hoursWorked) {
  const slices = hoursWorked.reduce((acc, hour) => {
    let slice = Math.ceil(hour / 3);
    if (slice < 2) slice = 2;
    
    return acc + slice;
  }, 0);
            
  return Math.ceil(slices / 8);
}

getPizzasToOrder([8, 8, 8]);
// return: 2

getPizzasToOrder([10, 12, 16, 9, 8, 11, 15, 8, 0]);
// return: 5
