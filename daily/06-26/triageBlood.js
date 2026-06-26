/*
Blood Bank

Given an array of the inventory at a blood bank and an array of patient blood type requests, return a string in the format "X of Y patients served". Where X is the maximum number of patients that can receive blood from the bank's inventory, and Y is the total number of patients.

Each entry in both arrays is one of the following blood types: "AB", "A", "B", or "O".

Compatibility rules:
*/
const compatibilityTable = {
  AB: ["AB", "A", "B", "O"],
  A: ["A", "O"],
  B: ["B", "O"],
  O: ["O"],
};

// Duplicate entries in the given arrays represent quantity.

function triageBlood(bank, patients) {
  let patientsServerd = 0;

  for (let i = 0; i < patients.length; i++) {
    const donators = compatibilityTable[patients[i]];

    for (let j = 0; j < donators.length; j++) {
      if (bank.includes(donators[j])) {
        patientsServerd++;
        const index = bank.indexOf(donators[j]);
        bank.splice(index, 1);
        break;
      }
    }
  }

  return `${patientsServerd} of ${patients.length} patients served`;
}

console.log(
  triageBlood(
    ["A", "O", "B", "AB", "B", "AB", "O", "A", "A"],
    ["O", "A", "B", "AB", "A", "B", "A", "A", "B", "A", "B"],
  ),
);
// return: '8 of 11 patients served'
