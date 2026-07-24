/*
Loan Calculator

Given a loan amount, annual interest rate percentage, and fixed monthly payment, return an array of remaining balances after each monthly payment until the loan is paid off.
  - Each month, interest is calculated on the remaining balance using the monthly interest rate: (annual rate / 100) / 12, then the monthly payment is subtracted.
  - Return each remaining balance rounded to the nearest dollar.
  - Include the loan amount in the returned array. The first element in the array will always be the loan amount, and the last element of the array will always be 0.
*/

function getLoanSchedule(loanAmount, annualRate, monthlyPayment) {
  const payment = [loanAmount];

  let currency = loanAmount;
  const interest = annualRate / 100 / 12;
  while (currency > 0) {
    currency = currency * interest + currency - monthlyPayment;

    if (currency <= 0) payment.push(0);
    else payment.push(Math.round(currency));
  }

  return payment;
}

console.log(getLoanSchedule(1000, 12, 200)); // [ 1000, 810, 618, 424, 229,  31, 0 ]
console.log(getLoanSchedule(1000, 12, 400)); // [ 1000, 610, 216, 0 ]
console.log(getLoanSchedule(9000, 12, 600)); // [ 9000, 8490, 7975, 7455, 6929, 6398, 5862, 5321, 4774, 4222, 3664, 3101, 2532, 1957, 1377,  791, 198, 0 ]
