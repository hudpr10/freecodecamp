/*
Cell Signal

Given a grid containing three cell tower readings, determine the location of the phone.
  - Each cell in the grid is either 0 (no tower) or a positive integer representing the number of cells to the phone, measured in a straight line: horizontal, vertical, or diagonal.
  - Return the [row, col] of the cell that is the correct number of cells from all three towers.
  - There is always exactly one solution.
*/

function findSignal(grid) {
  const towers = [];

  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[r].length; c++) {
      if (grid[r][c] !== 0) towers.push({ r, c, d: grid[r][c] });
    }
  }

  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[r].length; c++) {
      const worksForA = isValidStep(
        towers[0].r,
        towers[0].c,
        r,
        c,
        towers[0].d,
      );
      const worksForB = isValidStep(
        towers[1].r,
        towers[1].c,
        r,
        c,
        towers[1].d,
      );
      const worksForC = isValidStep(
        towers[2].r,
        towers[2].c,
        r,
        c,
        towers[2].d,
      );

      if (worksForA && worksForB && worksForC) return [r, c];
    }
  }

  return towers;
}

function isValidStep(r1, c1, r2, c2, d) {
  const dRow = Math.abs(r1 - r2);
  const dCol = Math.abs(c1 - c2);

  const isSameRow = dRow === 0 && dCol === d;
  const isSameCol = dCol === 0 && dRow === d;
  const isDiagonal = dRow === d && dCol === d;

  return isSameRow || isSameCol || isDiagonal;
}

console.log(
  findSignal([
    [0, 0, 1],
    [0, 1, 0],
    [0, 0, 1],
  ]),
);
// return: [ 1, 2 ]

console.log(
  findSignal([
    [0, 2, 0],
    [1, 0, 0],
    [0, 0, 1],
  ]),
);
// return: [ 2, 1 ]

console.log(
  findSignal([
    [0, 0, 2, 0],
    [0, 0, 0, 0],
    [2, 0, 0, 0],
    [0, 0, 0, 1],
  ]),
);
// return: [ 2, 2 ]
