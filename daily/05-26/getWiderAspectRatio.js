/*
Wider Aspect Ratio

Given two strings for different image dimensions, return the aspect ratio of the image with a greater width-to-height ratio.
  - The given strings will be in the format "WxH", for example, "1920x1080".
  - The aspect ratio is the ratio of width to height, reduced to the lowest whole numbers.   
  - For example, "1920x1080" reduces to "16:9".

Return a string in format "W:H", for example, "16:9".
*/

// Algoritmo de Euclides
const getMDC = (a, b) => b === 0 ? a : getMDC(b, a % b);

function getWiderAspectRatio(resA, resB) {
  const [wA, hA] = resA.split("x").map(Number);
  const [wB, hB] = resB.split("x").map(Number);
  
  if (!hA || !hB) return "0:0";

  const [width, height] = (wA / hA) > (wB / hB) ? [wA, hA] : [wB, hB];
  
  const mdc = getMDC(width, height);
  
  return `${width / mdc}:${height / mdc}`;
}

getWiderAspectRatio("1920x1080", "800x600");
// return '16:9'
