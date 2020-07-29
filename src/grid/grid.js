import React from "react";
// block component
import Block from "../block/block";
// styles
import "./grid.scss";
// Grid Component
class Grid extends React.Component {
  constructor() {
    super();
    this.state = {
      // initial grid state needed
      // display: [],
      display: "grid",
      cols: 5,
      rows: 5,
    };
  }
  render() {
    // //changing grid state3
    setTimeout(() => {
      this.setState({ display: grid });
    }, 60000);
    //  grid creation logic
    let cols = 5;
    let rows = 5;
    let grid = initArray(cols, rows);
    console.log("Grid Array");
    console.table(grid);
    // grid creation function
    function initArray(cols, rows) {
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
    console.log("intitArray func", initArray(cols, rows));
    // being able to tell if a grid cell is dead or alive
    function deadAlive(grid) {
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
      let newArray = initArray(cols, rows);
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
        }
      }
      console.log("newArray", newArray);
      return newArray === grid;
    }
    // console.log(newArray);
    deadAlive(grid);
    console.log("deadAlive func", deadAlive(grid));
    // neighbors
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
          return neighbors;
        }
      }
    }
    myNeighbors(grid, 5, 5);
    console.log("myNeighbors func", myNeighbors(grid, 5, 5));
    //component render
    return (
      <div className='grid-component'>
        <div className='grid'>{this.state.display}</div>

        <Block />
      </div>
    );
  }
}

export default Grid;
