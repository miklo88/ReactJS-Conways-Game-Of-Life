// game of life thought board
/*
1.Any live cell with fewer than two live neighbors dies, as if caused by under-population.
2.Any live cell with two or three live neighbors lives on to the next generation.
3.Any live cell with more than three live neighbors dies, as if by over-population..
4.Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
*/
/*
    Our Initial Data for Testing a 5 x 5 grid
    0 0 1 0 0
    0 1 0 1 0
    0 1 1 1 0
    0 0 0 1 0
    0 1 0 0 1
*/
// sprinkling in a function
function arrayWork() {
  // CREATING 2D ARRAYS
  // only inputs how many rows you will have
  const rows = 10;
  // only inputs how many columns you will have
  const cols = 10;
  // declaring array as an array. get it?
  const oneArray = [];
  // nested for loop. double loopin
  for (let i = 0; i < rows; i++) {
    // initiate/declare new sub array you have to assign another array within an array.
    oneArray[i] = [];
    // console.log("outer array", oneArray[i]);
    for (let j = 0; j < cols; j++) {
      // now declare the sub array elements
      oneArray[i][j] = [];
      // console.log("subarray", oneArray[i][j]);
    }
  }
  return oneArray;
}
console.log(arrayWork());

// // highspeed
// const twoArray = new Array(rows);
// for (let i = 0; i < twoArray.length; i++) {
//   twoArray[i] = new Array(cols);
// }
// console.log(twoArray);
//what i need to see.
// const carlsArrays = [
//   [0, 1, 2, 3, 4],
//   [5, 6, 7, 8, 9],
//   [10, 11, 12, 13, 14],
//   [15, 16, 17, 18, 19],
//   [20, 21, 22, 23, 24],
// ];
// console.log(carlsArrays);
// console.log(carlsArrays.length);
// console.log(carlsArrays.length);
// console.log(carlsArrays[3][2]);
