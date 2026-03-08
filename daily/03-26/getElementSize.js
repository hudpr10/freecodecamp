/*
Element Size

Given a window size, the width of an element in viewport width "vw" units, and the height of an element in viewport height "vh" units, determine the size of the element in pixels.

- The given window size and returned element size are strings in the format "width x height", "1200 x 800" for example.
- "vw" units are the percent of window width. "50vw" for example, is 50% of the width of the window.
- "vh" units are the percent of window height. "50vh" for example, is 50% of the height of the window.
*/

function getElementSize(windowSize, elementVw, elementVh) {
  const [width, heigth] = windowSize.split(" x ")
  const vwPorcentage = Number(elementVw.substring(0, elementVw.length - 2)) / 100;
  const vhPorcentage = Number(elementVh.substring(0, elementVh.length - 2)) / 100;
  
  return `${vwPorcentage * width} x ${vhPorcentage * heigth}`;
}

getElementSize("1200 x 800", "50vw", "50vh")
// Return: '600 x 400'
