/*
Playing Card Values

Given an array of playing cards, return a new array with the numeric value of each card.

Card Values:
- An Ace ("A") has a value of 1.
- Numbered cards ("2" - "10") have their face value: 2 - 10, respectively.
- Face cards: Jack ("J"), Queen ("Q"), and King ("K") are each worth 10.

Suits:
- Each card has a suit: Spades ("S"), Clubs ("C"), Diamonds ("D"), or Hearts ("H").

Card Format:
- Each card is represented as a string: "valueSuit". For Example: "AS" is the Ace of Spades, "10H" is the Ten of Hearts, and "QC" is the Queen of Clubs.
*/

function cardValues(cards) {
  let values = cards.map(getCardValue);  
  values = values.map(convertToNum);
  
  return values;
}

const getCardValue = (card) => card.substring(0, card.length - 1);

const convertToNum = (card) => {
  switch(card) {
    case "A": return 1;
    case "J": return 10;
    case "Q": return 10;
    case "K": return 10;
    default: return Number(card);
  }
}

cardValues(["AS", "10S", "10H", "6D", "7D", "JS"]);
// Return: [1, 10, 10, 6, 7, 10]
