import React from "react";
// block component
import Block from "../block/block";
// styles
import "./grid.scss";

class Grid extends React.Component {
  constructor() {
    super();
    this.state = { display: "grid" };
  }
  render() {
    //changing grid state
    setTimeout(() => {
      this.setState({ display: grid });
    }, 20000);

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
    console.log("initial array");
    // being able to tell if a grid cell is dead or alive!
    function onOff(grid) {
      let dead = false;
      let alive = true;
      for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid.length; j++) {
          // console.log(grid[i]);
          if (grid[i][j] === 1) {
            // console.log(alive);
            return alive;
          } else {
            // console.log(dead);
            return dead;
          }
        }
      }

      // renaming the grid creation function
      let newArray = arrayWork(cols, rows);
      //looping through the grid
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          //renaming the myNeighbors function
          let amigos = myNeighbors(grid, i, j);
          //where the RULES OF LIFE ARE APPLIED
          if (newArray[i][j] === dead && amigos === 3) {
            return newArray[i][j] === alive;
          } else if (newArray[i][j] === alive && (amigos < 2 || amigos > 3)) {
            return newArray[i][j];
          } else {
            return newArray[i][j];
          }
          // console.log(newArray[i][j]);
        }
      }
      // console.table(newArray);

      return (newArray = grid);
    }
    onOff(grid);

    // neighbors creation
    function myNeighbors(grid, x, y) {
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
    myNeighbors(grid, 5, 5);
    // console.log("grid", grid);
    // console.log(myNeighbors(grid, 5, 5));

    return (
      <div className='grid-component'>
        <Block />
        {/* <div className='grid'>{grid}</div> */}
        <div className='grid'>{this.state.display}</div>
      </div>
    );
  }
}
export default Grid;
