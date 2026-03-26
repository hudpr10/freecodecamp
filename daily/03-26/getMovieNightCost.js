/*
Movie Night

Given a string for the day of the week, another string for a showtime, and an integer number of tickets, return the total cost of the movie tickets for that showing.
The given day will be one of:
  - "Monday"
  - "Tuesday"
  - "Wednesday"
  - "Thursday"
  - "Friday"
  - "Saturday"
  - "Sunday"

The showtime will be given in the format "H:MMam" or "H:MMpm". For example "10:00am" or "10:00pm".

Return the total cost in the format "$D.CC" using these rules:
  - Weekend (Friday - Sunday): $12.00 per ticket.
  - Weekday (Monday - Thursday): $10.00 per ticket.
  - Matinee (before 5:00pm): subtract $2.00 per ticket (except on Tuesdays).
  - Tuesdays: all tickets are $5.00 each.
*/

function getMovieNightCost(day, showtime, numberOfTickets) {
  const price = getTicketPrice(day, showtime, numberOfTickets);
  
  return `$${price}.00`;
}

function getTicketPrice(day, showtime, numberOfTickets) {
  if(day === "Tuesday") return 5 * numberOfTickets;
  
  let price = 0;
  switch(day) {
    case "Friday": 
    case "Saturday":  
    case "Sunday": 
      price = 12;
      break;
    default: 
      price = 10;
      break;
  }

  if(getHour(showtime) >= 17) return price * numberOfTickets;
  
  return (price - 2) * numberOfTickets;
}

function getHour(showtime) {
  let hour = showtime.substring(0, showtime.length - 2);
  hour = hour.split(":").map(Number);
  
  if(showtime.includes("pm")) {
    return hour[0] + 12;
  } else {
    return hour[0];
  }
}

getMovieNightCost("Wednesday", "5:40pm", 3)
// return '$30.00'
