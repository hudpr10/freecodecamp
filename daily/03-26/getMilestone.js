/*
Anniversary Milestones

Given an integer representing the number of years a couple has been married, return their most recent anniversary milestone according to this chart:

Years   Married	Milestone
  1	       "Paper"
  5	       "Wood"
  10	     "Tin"
  25	     "Silver"
  40	     "Ruby"
  50	     "Gold"
  60	     "Diamond"
  70	     "Platinum"

If they haven't reached the first milestone, return "Newlyweds".
*/

function getMilestone(years) {
  const table = [
    {y: 70, v: "Platinum"},
    {y: 60, v: "Diamond"},
    {y: 50, v: "Gold"},
    {y: 40, v: "Ruby"},
    {y: 25, v: "Silver"},
    {y: 10, v: "Tin"},
    {y: 5, v: "Wood"},
    {y: 1, v: "Paper"}
  ]

  for(const m of table) {
    if(years >= m.y) return m.v;  
  }
  
  return "Newlyweds";
}

getMilestone(50);
// Return: "Gold"
