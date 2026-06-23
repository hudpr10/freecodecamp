/*
BMI Calculator

Given a weight in pounds and a height in inches, return the BMI (Body Mass Index) rounded to one decimal place.
To get BMI: divide the weight by the height squared, then multiply the result by 703.
*/

function calculateBmi(weight, height) {
  const bmi = (weight / Math.pow(height, 2)) * 703;
  return bmi.toFixed(1);
}

console.log(calculateBmi(180, 70));
// return: 25.8

console.log(calculateBmi(200, 60));
// return: 39.1
