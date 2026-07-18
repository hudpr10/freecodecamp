/*
Dice Odds

Given a number of six-sided dice to roll and a target sum, return the odds of rolling that sum as a string in the format "1 in X".
  - The number of dice will be between 1 and 6.
  - The target sum is always achievable with the given number of dice.
  - Round "X" to the nearest whole number.
*/

function getOdds(dice, target) {
  if (target < dice || target > dice * 6) return "0 em 6 (Impossível)";

  const combo = getCombo(dice, target);
  const proba = Math.pow(6, dice);

  const ratio = proba / combo;

  return `1 in ${Math.round(ratio)}`;
}

function nCr(n, r) {
  if (r < 0 || r > n) return 0;
  let upper = 1;
  let lower = 1;
  if (r > n - r) r = n - r;
  for (let i = 1; i <= r; i++) {
    upper *= n - i + 1;
    lower *= i;
  }
  return upper / lower;
}

function getCombo(dice, target) {
  let totalCombos = 0;

  let limit = Math.floor((target - dice) / 6);

  for (let k = 0; k <= limit; k++) {
    // (-1)^k alterna entre somar e subtrair
    let sign = k % 2 === 0 ? 1 : -1;

    let term1 = nCr(dice, k);
    let term2 = nCr(target - 6 * k - 1, dice - 1);

    totalCombos += sign * term1 * term2;
  }

  return totalCombos;
}

console.log(getOdds(1, 5)); // return: 1 in 6
console.log(getOdds(2, 4)); // return: 1 in 12
console.log(getOdds(3, 10)); // return: 1 in 8
console.log(getOdds(6, 35)); // return: 1 in 7776
