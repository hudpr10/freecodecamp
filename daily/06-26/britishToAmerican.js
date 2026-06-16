/*
British to American

Given a sentence, convert any British English spellings to their American English equivalents using the following lookup table and return the updated sentence:
*/

const convertTable = {
  colour: "color",
  flavour: "flavor",
  honour: "honor",
  neighbour: "neighbor",
  labour: "labor",
  humour: "humor",
  centre: "center",
  fibre: "fiber",
  defence: "defense",
  offence: "offense",
  organise: "organize",
  recognise: "recognize",
  analyse: "analyze",
};

/*
  - Replacements should be case-insensitive. For example, "Colour" should become "Color".
  - The input may contain words that build on the exact spelling of a root in the table that also need to be changed. For example, "colouring" should become "coloring", and "disorganised" should become "disorganized".
*/

function britishToAmerican(sentence) {
  for (const [british, american] of Object.entries(convertTable)) {
    sentence = sentence.replace(new RegExp(british, "gi"), american);
  }

  return sentence;
}
britishToAmerican("I love the colour blue.");
// return: I love the color blue.

britishToAmerican(
  "The unrecognised artist analysed his colour palette at the centre.",
);
// return: The unrecognized artist analyzed his color palette at the center.
