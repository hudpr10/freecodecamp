// Emoji Translator

// Given a string of emojis, return the phrase using the following table:

const EMOJI_TABLE = {
  "👶": "baby",
  "🐱": "cat",
  "🐕": "dog",
  "🐟": "fish",
  "🥵": "hot",
  "🧊": "ice",
  "🪨": "rock",
  "🦈": "shark",
  "🍲": "soup",
  "⭐": "star",
};

// Return the words separated by spaces.

function getEmojiPhrase(str) {
  return [...str].map((emoji) => EMOJI_TABLE[emoji]).join(" ");
}

console.log(getEmojiPhrase("🪨⭐")); // 'rock star'
console.log(getEmojiPhrase("🥵🐕")); // 'hot dog'
