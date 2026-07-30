/*
Contrast Rating 3

Given two arrays representing RGB values and a boolean indicating whether the text is large, return the WCAG contrast rating using the following method:

First, convert each RGB value to relative luminance:
  - Divide each channel [R, G, B] by 255 to get a value between 0 and 1
  - Apply the gamma correction formula to each channel:
    - If the channel value is less than or equal to 0.04045: channel / 12.92
    - Otherwise: ((channel + 0.055) / 1.055) ^ 2.4
  - Calculate luminance: 0.2126 * R + 0.7152 * G + 0.0722 * B

  Then, calculate the contrast ratio by adding 0.05 to each luminance value, then dividing the lighter one by the darker one. The lighter one will always be the first argument.

Return the rating based on the contrast ratio using the following table:

Rating	Normal Text	 Large Text
"AAA"	      7.0+	      4.5+
"AA"	      4.5+	      3.0+
"Fail"	 below 4.5	  below 3.0
*/

const AAA = "AAA";
const AA = "AA";
const FAIL = "Fail";
function getContrastRating3(rgb1, rgb2, isLargeText) {
  const ratio = calculateRatio(rgb1, rgb2);

  if (isLargeText) {
    if (ratio >= 4.5) return AAA;
    if (ratio >= 3.0) return AA;
    return FAIL;
  }

  if (ratio >= 7.0) return AAA;
  if (ratio >= 4.5) return AA;
  return FAIL;
}

const gammaCorretion = (num) => {
  if (num <= 0.04045) return num / 12.92;
  return Math.pow((num + 0.055) / 1.055, 2.4);
};

const calculateLuminance = (R, G, B) => 0.2126 * R + 0.7152 * G + 0.0722 * B;

const calculateRatio = (rgb1, rgb2) => {
  const gamma1 = rgb1.map((num) => gammaCorretion(num / 255));
  const gamma2 = rgb2.map((num) => gammaCorretion(num / 255));

  const luminance1 = calculateLuminance(...gamma1);
  const luminance2 = calculateLuminance(...gamma2);

  return (luminance1 + 0.05) / (luminance2 + 0.05);
};

console.log(getContrastRating3([255, 255, 255], [0, 0, 0], false)); // 'AAA'
console.log(getContrastRating3([143, 144, 210], [46, 47, 61], false)); // 'Fail'
console.log(getContrastRating3([135, 147, 155], [60, 70, 90], true)); // 'AA'
