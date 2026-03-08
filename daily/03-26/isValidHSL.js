/*
HSL Validator

Given a string, determine whether it is a valid CSS hsl() color value.
- A valid HSL value must be in the format "hsl(h, s%, l%)", where:
  - h (hue) must be a number between 0 and 360 (inclusive).
  - s (saturation) must be a percentage between 0% and 100%.
  - l (lightness) must be a percentage between 0% and 100%.

Spaces are only allowed:
- After the opening parenthesis
- Before and/or after the commas
- Before and/or after closing parenthesis
- Optionally, the value can end with a semi-colon (";").

For example, "hsl(240, 50%, 50%)" is a valid HSL value.
*/

function isValidHSL(hsl) { 
  if(hsl.match(/hsl\(/g) === null) return false;
  
  let [s, l] = hsl.match(/(\d+)%/g);
  if(s === undefined || l === undefined) return false;
  
  s = Number(s.substring(0, s.length - 1));
  if(s > 100 || s < 0) return false;
  
  l = Number(l.substring(0, l.length - 1));
  if(l > 100 || l < 0) return false;
  
  const [hue] = hsl.match(/(\d+)/g);
  if(Number(hue) > 360 || Number(hue) < 0) return false;
  
  return true;
}

isValidHSL("hsl( 200 , 50% , 75% )");
// Return: true
