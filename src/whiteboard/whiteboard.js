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
// global variables
let cols = 5;
let rows = 5;
let grid = arrayWork(cols, rows);
console.table(grid);
// console.log(grid);
// console.log("grid coord", grid[2][0]);
// console.log("grid coord", grid[2][2]);

// 2D array matrix.
function arrayWork(cols, rows) {
  // CREATING 2D ARRAYS
  // declaring array as an array. get it?
  const carlsGrid = [];
  // nested for loop. double loopin
  for (let i = 0; i < cols; i++) {
    // initiate/declare new sub array you have to assign another array within an array.
    carlsGrid[i] = [];
    // console.log(carlsGrid[i]);
    // FOOD FOR THOUGHT - PLAY AROUND WITH NESTED OBJECTS IN ARRAYS
    // carlsGrid[i] = {};
    // console.log("outer array", oneArray[i]);
    for (let j = 0; j < rows; j++) {
      carlsGrid[i][j] = Math.floor(Math.random() * 2);
      // carlsGrid[i][j] = []; //default []'s
      // carlsGrid[i][j] = 0; //default 0's
    }
  }
  return carlsGrid;
}
arrayWork();

// neighbors
function neighbors(grid, x, y) {
  // console.log(x, y);
  // console.log(grid.length);
  // let neighbors = grid[x][y];
  for (let i = 0; i < x; i++) {
    for (let j = 0; j < y; j++) {
      let neighbors = [
        // // above
        [i - 1, j - 1],
        [i, j - 1],
        [i + 1, j - 1],
        // // left side
        [i - 1, j],
        // // middle
        // [i, j],
        //right side
        [i + 1, j],
        // // below
        [i - 1, j + 1],
        [i, j + 1],
        [i + 1, j + 1],
      ];
      // for all elements found you must add to a new neighbors list.
      console.log(neighbors);
      // console.log(neighbors[(0, 0)]);
      // console.log(neighbors[(1, 1)]);
      // console.log(neighbors[(2, 2)]);
      // let newNeighbors = [];
      // console.log(neighbors[[0][0]]);
      console.log(grid[i][j]);
    }

    return neighbors;
  }
}
// console.log(neighbors(0, 0));
console.log("grid", grid);
console.log(neighbors(grid, 5, 5));

// console.log(grid);
// console.log("neighbors-log", neighbors);

// being able to tell if a grid cell is dead or alive!
// let dead = false;
// let alive = true;
// for (let i = 0; i < grid.length; i++) {
//   for (let j = 0; j < grid.length; j++) {
//     // console.log(grid[i]);
//     if (grid[i][j] === 1) {
//       console.log(alive);
//       // return alive;
//     } else {
//       console.log(dead);
//       // return dead;
//     }
//   }
// }

// console.log("row 0", grid[0][0]);
// console.log("row 0", grid[0][1]);
// console.log("row 0", grid[0][2]);
// console.log("row 1", grid[1][0]);
// console.log("row 1", grid[1][1]);
// console.log("row 1", grid[1][2]);
// console.log("row 2", grid[2][0]);
// console.log("row 2", grid[2][1]);
// console.log("row 2", grid[2][2]);

// console.log(grid);
// display function
// let gridDimensions = 5;
// function gridDisplay() {
//   for (let i = 0; i < cols; i++) {
//     // console.log("iterator", i);
//     for (let j = 0; j < rows; j++) {
//       // console.log(j);
//       let x = i * gridDimensions;
//       let y = j * gridDimensions;
//       // console.log("x-gridDimensions", x, gridDimensions);
//       // console.log("y-girdDimensions", y, gridDimensions);
//     }
//     return gridDimensions;
//   }
// }
// gridDisplay();
// console.log(gridDimensions);
// console.log(gridDisplay());

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
