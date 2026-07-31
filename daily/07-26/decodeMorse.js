// Morse Code

// Given a Morse code string, return the decoded message using the following table:

const MORSE_TABLE = {
  ".-": "A",
  "-...": "B",
  "-.-.": "C",
  "-..": "D",
  ".": "E",
  "..-.": "F",
  "--.": "G",
  "....": "H",
  "..": "I",
  ".---": "J",
  "-.-": "K",
  ".-..": "L",
  "--": "M",
  "-.": "N",
  "---": "O",
  ".--.": "P",
  "--.-": "Q",
  ".-.": "R",
  "...": "S",
  "-": "T",
  "..-": "U",
  "...-": "V",
  ".--": "W",
  "-..-": "X",
  "-.--": "Y",
  "--..": "Z",
};

//  - Letters are separated by a single space
//  - Words are separated by three spaces

function decodeMorse(code) {
  return code
    .split("   ")
    .map((word) =>
      word
        .split(" ")
        .map((morse) => MORSE_TABLE[morse])
        .join(""),
    )
    .join(" ");
}

console.log(decodeMorse(".... . .-.. .-.. ---   .-- --- .-. .-.. -..")); // HELLO WORLD
