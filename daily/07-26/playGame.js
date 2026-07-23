/*
Game Theory

Given two equal length strings representing two players' strategies for a game, return the scores as an array [player1, player2].
The given strings will only contain one of two letters: "C" (cooperate) or "D" (defect).
Each character represents one round, scored as follows:
  - If both players cooperate, each scores 3.
  - If both players defect, each scores 1.
  - If one player defects and the other cooperates, the defector scores 5 and the cooperator scores 0.
*/

function playGame(p1, p2) {
  const points = [0, 0];

  for (let i = 0; i < p1.length; i++) {
    const round = checkPlay(p1[i], p2[i]);
    points[0] += round[0];
    points[1] += round[1];
  }

  return points;
}

const PAYOFFS = {
  CC: [3, 3],
  DD: [1, 1],
  DC: [5, 0],
  CD: [0, 5],
};

const checkPlay = (move1, move2) => PAYOFFS[move1 + move2];

console.log(playGame("CCDC", "CCCC")); // [ 14, 9 ]
console.log(playGame("DDCDCDDC", "CCDCDDCC")); // [ 24, 14 ]
console.log(playGame("DDCDCDDC", "DDDDDDDD")); // [ 5, 20 ]
