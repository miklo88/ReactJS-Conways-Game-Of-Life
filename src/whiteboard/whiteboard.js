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
// CREATING 2D ARRAYS
const rows = 3;
const cols = 3;
// declaring array
const oneArray = [];
// nested for loop
for (let i = 0; i < rows; i++) {
  // initiate/declare new sub array
  oneArray[i] = [];
  for (let j = 0; j < cols; j++) {
    oneArray[i][j] = [];
  }
  // console.log(oneArray);
}
console.log(oneArray);

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
