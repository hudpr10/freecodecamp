/*
Truncate the Text 2

Given a string, return a new string that is truncated so that the total width of the characters does not exceed 50 units.

Each character has a specific width:

  Letters	                    Width
   "ilI"	                      1
   "fjrt"	                      2
   "abcdeghkmnopqrstuvwxyzJL"	  3
   "ABCDEFGHKMNOPQRSTUVWXYZ"	  4

The table above includes all upper and lower case letters. Additionally:
  - Spaces (" ") have a width of 2
  - Periods (".") have a width of 1
  - If the given string is 50 units or less, return the string as-is, otherwise
  - Truncate the string and add three periods at the end ("...") so it's total width,       including the three periods, is as close as possible to 60 units without going over.
*/

function truncateText(str) {
  let width = 0;
  let newStr = "";
  
  const totalWidth = str.split("").reduce((acc, char) => acc + calculateWidth(char), 0);
  if(totalWidth <= 50) return str;
  
  for(let i = 0; i < str.length; i++) {
    const sum = calculateWidth(str[i]);
    
    if(width + sum <= 47) {
      width += sum;
      newStr += str[i];
    } else {
      break;
    }
  }

  return newStr + "...";
}

function calculateWidth(letter) {
  if(("ilI.").includes(letter)) return 1;
  if(("fjrt ").includes(letter)) return 2;
  if(("abcdeghkmnopqrstuvwxyzJL").includes(letter)) return 3;
  if(("ABCDEFGHKMNOPQRSTUVWXYZ").includes(letter)) return 4;
}

truncateText("The silky smooth sloth");
// return: 'The silky smooth s...'
