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
    // // displaying grid
    // let gridDimensions = 5;
    // function gridDisplay() {
    //   for (let i = 0; i < cols; i++) {
    //     // console.log("iterator", i);
    //     for (let j = 0; j < rows; j++) {
    //       // console.log(j);
    //       let x = i * gridDimensions;
    //       let y = j * gridDimensions;
    //       console.log("x-gridDimensions", x, gridDimensions);
    //       console.log("y-girdDimensions", y, gridDimensions);
    //     }
    //     return gridDimensions;
    //   }
    // }
    // gridDisplay();
    // // console.log(gridDimensions);
    // console.log(gridDisplay(grid));

    return (
      <div className='grid-component'>
        <Block />
        <div className='grid'>{grid}</div>
        {/* <div className='grid'>{gridDimensions}</div> */}

        {/* create a form out of this. */}
        {/* <div className='grid-cols'>{cols}</div> */}
        {/* <div className='grid-rows'>{rows}</div> */}
      </div>
    );
  }
}
export default Grid;
