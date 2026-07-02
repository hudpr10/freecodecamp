/*
Max Profit
Given an array of daily stock prices and a budget (in dollars), calculate the maximum profit you could make by buying and selling the stock over the given period.

  - You may only sell after you buy.
  - You can only buy whole shares.
  - Return the maximum possible profit as a string, rounded down to the nearest cent and formatted to two decimal places.
*/

function getMaxProfit(prices, budget) {
  let maxProfit = 0;

  for (let i = 0; i < prices.length - 1; i++) {
    const buyPrice = prices[i];

    for (let j = i + 1; j < prices.length; j++) {
      const sellPrice = prices[j];

      if (sellPrice > buyPrice) {
        const stocks = Math.floor(budget / buyPrice);
        const profit = stocks * sellPrice + (budget % buyPrice) - budget;

        if (profit > maxProfit) maxProfit = profit;
      }
    }
  }

  return maxProfit.toFixed(2);
}

console.log(getMaxProfit([5, 6], 50));
// return: '10.00'

console.log(getMaxProfit([4, 5, 3, 6], 20));
// return: '18.00'

console.log(getMaxProfit([54.4, 51.22, 53.99, 50.28, 53.01, 52.84], 200));
// return: '8.31'
