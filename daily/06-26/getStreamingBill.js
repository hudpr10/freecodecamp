/*
Streaming Cost

Given an array representing movies in the cart of your streaming service, and a string for your subscription tier, return the total cost of the movies.

Each item in the cart is an object with a "format" ("HD" or "4K") and a "type" ("rent" or "buy"). Their costs are:
*/

const movieCosts = {
  rent: { HD: 3.99, "4K": 5.99 },
  buy: { HD: 12.99, "4K": 19.99 },
};

// Apply the following subscription tier discounts:

const subscriptionDiscounts = {
  none: 0,
  basic: 0.1,
  premium: 0.25,
};

/*
Return the total cost rounded to two decimal places in the format "$D.CC".
*/

function getStreamingBill(cart, subscription) {
  let total = cart.reduce(
    (acc, movie) => acc + movieCosts[movie.type][movie.format],
    0,
  );

  total -= total * subscriptionDiscounts[subscription];
  return `$${total.toFixed(2)}`;
}

console.log(
  getStreamingBill(
    [
      { format: "HD", type: "rent" },
      { format: "HD", type: "rent" },
      { format: "HD", type: "buy" },
    ],
    "basic",
  ),
);
// return: '$18.87'
