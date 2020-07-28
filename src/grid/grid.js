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
