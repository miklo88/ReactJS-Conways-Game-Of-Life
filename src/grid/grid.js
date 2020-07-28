import React from "react";
// block component
import Block from "../block/block";
// styles
import "./grid.scss";

class Grid extends React.Component {
  render() {
    //  grid creation logic
    // variables cols, rows, grid
    let cols = 5;
    let rows = 5;
    let grid = arrayWork(cols, rows);
    // grid function
    function arrayWork(cols, rows) {
      let carlsGrid = [];
      for (let i = 0; i < cols; i++) {
        //array declaration
        carlsGrid[i] = [];
        for (let j = 0; j < rows; j++) {
          //subarray declaration
          carlsGrid[i][j] = Math.floor(Math.random() * 2);
        }
      }
      return carlsGrid;
    }
    arrayWork();
    console.table(grid);

    // neighbors
    function neighbors(grid, x, y) {
      //loopin back through the array to find neighbors
      for (let i = 0; i < x; i++) {
        for (let j = 0; j < y; j++) {
          // array elements surrouding current element.
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
          console.log(grid[i][j]);

          return neighbors;
        }
      }
    }
    console.log("grid", grid);
    console.log(neighbors(grid, 5, 5));
    //toggling grid cells with either 1 or 0
    console.log("0", grid[0][0]);
    console.log("0", grid[0][1]);
    console.log("0", grid[0][2]);
    console.log("0", grid[0][3]);
    console.log("0", grid[0][4]);
    console.log("2", grid[2][0]);
    console.log("2", grid[2][1]);
    console.log("2", grid[2][2]);
    console.log("2", grid[2][3]);
    console.log("2", grid[2][4]);
    console.log("4", grid[4][0]);
    console.log("4", grid[4][1]);
    console.log("4", grid[4][2]);
    console.log("4", grid[4][3]);
    console.log("4", grid[4][4]);

    ////// if grid cell is dead or alive.
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

    return (
      <div className='grid-component'>
        <Block />
        <div className='grid'>{grid}</div>
        {/* <p className='alive'>{alive}</p>?<p className='dead'>{dead}</p> */}
        {/* <div className='grid'>{gridDimensions}</div> */}
        {/* <p>Square</p> */}
        {/* create a form out of this. */}
        {/* <div className='grid-cols'>{cols}</div> */}
        {/* <div className='grid-rows'>{rows}</div> */}
      </div>
    );
  }
}
export default Grid;
