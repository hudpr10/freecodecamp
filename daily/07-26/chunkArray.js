/*
Array Chunks

Given an array and a chunk size, return the array split into sub-arrays of that size.
The last chunk may be smaller if the array doesn't divide evenly.
*/

function chunkArray(arr, size) {
  if (size <= 0) throw new Error("size deve ser maior que 0");

  const chunks = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
}

console.log(chunkArray([1, "two", 3, "four", 5, "six", 7, "eight"], 2));
// return: [ [ 1, 'two' ], [ 3, 'four' ], [ 5, 'six' ], [ 7, 'eight' ] ]
