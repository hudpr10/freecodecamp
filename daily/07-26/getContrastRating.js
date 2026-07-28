/*
Contrast Rating 1

Given a contrast ratio and a boolean indicating whether the text is large, return the WCAG rating using the following table:

Rating	Normal Text	 Large Text
"AAA"	      7.0+	      4.5+
"AA"	      4.5+	      3.0+
"Fail"	 below 4.5	  below 3.0
*/

const AAA = "AAA";
const AA = "AA";
const FAIL = "Fail";

function getContrastRating(ratio, isLargeText) {
  if (isLargeText) {
    if (Number(ratio) >= 4.5) return AAA;
    if (Number(ratio) >= 3) return AA;
    return FAIL;
  }

  if (Number(ratio) >= 7) return AAA;
  if (Number(ratio) >= 4.5) return AA;
  return FAIL;
}

console.log(getContrastRating("7.5", false)); // 'AAA'
console.log(getContrastRating("7.5", true)); // 'AAA'
console.log(getContrastRating("4.5", false)); // 'AA'
console.log(getContrastRating("3", false)); // 'Fail'
console.log(getContrastRating("1", true)); // 'Fail'
