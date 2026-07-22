/*
Piggy Bank
Given an object representing a piggy bank, return the total value as a string formatted as "D.CC".

The object may contain any of the following:
*/

const COINS_VALUES = {
  pennies: 0.01,
  nickels: 0.05,
  dimes: 0.1,
  quarters: 0.25,
};

function piggyBank(coins) {
  let total = 0;

  for (const [key, value] of Object.entries(COINS_VALUES))
    if (coins[key]) total += coins[key] * value;

  return `$${total.toFixed(2)}`;
}

console.log(piggyBank({ pennies: 3, nickels: 5, dimes: 2, quarters: 6 })); // $1.98
console.log(piggyBank({ nickels: 1, dimes: 1, quarters: 1 })); // $0.40
console.log(piggyBank({})); // $0.00
