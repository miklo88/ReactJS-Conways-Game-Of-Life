// game of life thought board
/*
Any live cell with fewer than two live neighbors dies, as if caused by under-population.
Any live cell with two or three live neighbors lives on to the next generation.
Any live cell with more than three live neighbors dies, as if by over-population..
Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
*/
/*
    Our Initial Data for Testing a 5 x 5 grid
    0 0 1 0 0
    0 1 0 1 0
    0 1 1 1 0
    0 0 0 1 0
    0 1 0 0 1
*/

let arr = [1, 2, 5];
let i;
let j;
function bigBang() {
  // so lets create a 9x9 Grid
  for (i = 0; i < arr.length; i++) {
    console.log(i);
    for (j = 0; j < arr.length; j++) {
      console.log("this is j", j);
    }
  }

  //   return;
}
console.log(bigBang());
