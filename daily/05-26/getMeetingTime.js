function getMeetingTime(availability) {
  let commonSlots = availability[0];

  for (let i = 1; i < availability.length; i++) {
    const nextPerson = availability[i];
    const newCommonSlots = [];

    for (const [start1, end1] of commonSlots) {
      for (const [start2, end2] of nextPerson) {
        const maxStart = Math.max(start1, start2);
        const minEnd = Math.min(end1, end2);

        if (maxStart < minEnd) {
          newCommonSlots.push([maxStart, minEnd]);
        }
      }
    }

    commonSlots = newCommonSlots;

    if (commonSlots.length === 0) return "None";
  }

  return commonSlots.length > 0 ? commonSlots[0][0] : "None";
}

getMeetingTime([
  [[10, 12], [15, 16]], 
  [[11, 14], [15, 16]]
]);
// return: 11
