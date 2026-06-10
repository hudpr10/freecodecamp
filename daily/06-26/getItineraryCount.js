/*
Itinerary Arrangements

Given an array of at least two optional stops for a day trip, return the number of valid itinerary arrangements.

The itinerary always includes "breakfast", "lunch", and "dinner", these will not be passed in as arguments. The optional stops can be placed anywhere in the itinerary, subject to the following rules:

"breakfast" is always first, with at least one stop before "lunch".
"lunch" must appear before "dinner", with at least one stop in between.
At most, one optional stop may appear after "dinner".
Return the number of valid arrangements.
*/

function getItineraryCount(stops) {
  const n = stops.length;
  
  return (2 * n - 3) * factorial(n);
}

const factorial = (a) => {  
  if (a <= 1) return 1;
  return a * factorial(a - 1);
}

getItineraryCount(["library", "park"]);
// return: 2

getItineraryCount(["library", "park", "shopping"]);
// return: 18
