/*
Coffee Order Parser

Given a string for a coffee order, identify any menu items and return a formatted order.

Return a string with the matched items joined by " + ", followed by a colon and space (": "), and the total price.

For example, given "I'd like an oat latte with vanilla syrup and an extra shot please.", return "oat latte + vanilla syrup + extra shot: $6.25"

Items should appear in the order they appear in the menu and the total price should always have two decimal places.
*/

const menu = {
  "cold brew": 4.5,
  "oat latte": 5.0,
  "cappuccino": 4.75,
  "espresso": 3.0,
  "vanilla syrup": 0.75,
  "caramel drizzle": 0.6,
  "extra shot": 0.5,
  "oat milk": 0.75,
  "cream": 0.75
}

const coffeesArr = Object.keys(menu);

function formatCoffeeOrder(order) {
  const lowerOrder = order.toLowerCase();
  
  const orderedCoffees = coffeesArr.filter((coffee) => lowerOrder.includes(coffee));
  const price = orderedCoffees.reduce((acc, coffee) => menu[coffee] + acc, 0);
  
  return `${orderedCoffees.join(" + ")}: $${price.toFixed(2)}`;
}

formatCoffeeOrder("Just an espresso please.");
// return: 'espresso: $3.00'

formatCoffeeOrder("I'd like an oat latte with vanilla syrup and an extra shot please.");
// return: 'oat latte + vanilla syrup + extra shot: $6.25'
