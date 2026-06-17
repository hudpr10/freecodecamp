/*
Spellcaster

Given a string of spell codes you are casting, calculate the total score.
Each character in the string represents a spell:
*/

const spellsTable = {
  f: { spell: "Fire", category: "Destruction", baseScore: 3 },
  l: { spell: "Lightning", category: "Destruction", baseScore: 3 },
  i: { spell: "Ice", category: "Control", baseScore: 2 },
  w: { spell: "Wind", category: "Control", baseScore: 2 },
  h: { spell: "Heal", category: "Restoration", baseScore: 1 },
  s: { spell: "Shield", category: "Restoration", baseScore: 1 },
};

/*
A combo multiplier is applied based on how many spells in a row have been cast from different categories:
  - The first spell always scores at base value.
  - Each consecutive spell from a different category than the previous increases the multiplier by 1.
  - Casting a spell from the same category as the previous resets the multiplier back to 1.
  - The score for each spell is its base score multiplied by the current multiplier.
  - Return the total score from the sequence of spells.
*/

function cast(spells) {
  let multi = 1;
  let totalScore = 0;
  let lastCategory = spellsTable[spells[0]].category;

  for (let i = 0; i < spells.length; i++) {
    const spellKey = spells[i];

    if (lastCategory === spellsTable[spellKey].category) multi = 1;
    else multi++;

    totalScore += spellsTable[spellKey].baseScore * multi;
    lastCategory = spellsTable[spellKey].category;
  }

  return totalScore;
}

console.log(cast("wislhfl"));
// return: 37

console.log(cast("wishlfihwslwifihl"));
// return: 101
