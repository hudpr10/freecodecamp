/*
Captured Chess Pieces

Given an array of strings representing chess pieces you still have on the board, calculate the value of the pieces your opponent has captured.

In chess, you start with 16 pieces:

Piece	Abbreviation	Quantity	Value
Pawn	  "P"	          8	        1
Rook	  "R"	          2	        5
Knight	"N"	          2	        3
Bishop	"B"	          2	        3
Queen	  "Q"	          1	        9
King	  "K"	          1	        0
  
  - The given array will only contain the abbreviations above.
  - Any of the 16 pieces not included in the given array have been captured.
  - Return the total value of all captured pieces, unless...
  - If the King has been captured, return "Checkmate".
*/

function getCapturedValue(pieces) {
  if(!pieces.includes("K")) return "Checkmate"
  
  const totalPieces = {
    P: {quantity: 8, value: 1},
    R: {quantity: 2, value: 5},
    N: {quantity: 2, value: 3},
    B: {quantity: 2, value: 3},
    Q: {quantity: 1, value: 9},
    K: {quantity: 1, value: 0}
  };
  
  pieces.forEach(piece => {
    totalPieces[piece].quantity--; 
  });
  
  let sum = 0;
  for (const [key, value] of Object.entries(totalPieces)) {
    sum += value.quantity * value.value;
  }
  
  return sum;
}

getCapturedValue(["P", "P", "P", "P", "P", "P", "R", "R", "N", "B", "Q", "K"]);
// Return: 8
