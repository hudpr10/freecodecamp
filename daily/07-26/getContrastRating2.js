/*
Contrast Rating 2

Given two relative luminance values and a boolean indicating whether the text is large, return the WCAG contrast rating using the following method:
Calculate the contrast ratio by adding 0.05 to each luminance value, then dividing the lighter one by the darker one. The lighter one will always be the first argument.
Return the rating based on the contrast ratio using the following table:

Rating	Normal Text	 Large Text
"AAA"	      7.0+	      4.5+
"AA"	      4.5+	      3.0+
"Fail"	 below 4.5	  below 3.0
*/

const AAA = "AAA";
const AA = "AA";
const FAIL = "Fail";

function getContrastRating2(l1, l2, isLargeText) {
  const ratio = (l1 + 0.05) / (l2 + 0.05);

  if (isLargeText) {
    if (Number(ratio) >= 4.5) return AAA;
    if (Number(ratio) >= 3) return AA;
    return FAIL;
  }

  if (Number(ratio) >= 7) return AAA;
  if (Number(ratio) >= 4.5) return AA;
  return FAIL;
}

console.log(getContrastRating2(1.0, 0.0, false)); // 'AAA'
console.log(getContrastRating2(0.9015, 0.1364, false)); // 'AA'
console.log(getContrastRating2(0.6571, 0.1974, true)); // 'FAIL'
