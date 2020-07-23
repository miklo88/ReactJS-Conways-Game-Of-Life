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

// need to create rows and columns.
// let cols = 0;
// let rows = 0;
// let rows;
function bigBang() {
  // so lets create a 5x5 Grid
  let newArray = [];
  for (let x = 0; x < 5; x++) {
    newArray[x] = [];
    console.log("x", newArray[x]);
    for (let y = 0; y < 5; y++) {
      newArray[x][y] = [];
      console.log("y", y);
      console.log(newArray[x][y]);
    }
    return newArray;
    // console.log(newArray);
  }
}
console.table(bigBang());
