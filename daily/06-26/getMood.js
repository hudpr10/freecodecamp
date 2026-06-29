/*
Song Mood Finder

Given a genre string and a BPM number for a song, determine the mood using the following table:
*/

const moodTable = [
  { mood: "focus", genre: "classical", bpm: { min: 60, max: 109 } },
  { mood: "focus", genre: "electronic", bpm: { min: 60, max: 89 } },
  { mood: "happy", genre: "pop", bpm: { min: 60, max: 180 } },
  { mood: "happy", genre: "classical", bpm: { min: 110, max: 180 } },
  { mood: "happy", genre: "rock", bpm: { min: 60, max: 129 } },
  { mood: "happy", genre: "electronic", bpm: { min: 90, max: 134 } },
  { mood: "hype", genre: "rock", bpm: { min: 130, max: 180 } },
  { mood: "hype", genre: "electronic", bpm: { min: 135, max: 180 } },
];

function getMood(genre, bpm) {
  const match = moodTable.find(
    (item) =>
      item.genre === genre && item.bpm.min <= bpm && item.bpm.max >= bpm,
  );

  return match ? match.mood : null;
}

console.log(getMood("classical", 180));
// return: "happy"
