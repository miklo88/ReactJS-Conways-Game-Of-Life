import React from "react";
// block component
import Block from "../block/block";
// styles
import "./grid.scss";
// Grid Component
class Grid extends React.Component {
  constructor() {
    super();
    this.state = { display: "grid" };
  }
  render() {
    // //changing grid state
    setTimeout(() => {
      this.setState({ display: grid });
    }, 60000);
    //  grid creation logic
    // let newArray = []
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
        {/* for future cols and rows adjusting */}
        <div className='label-container'>
          <label className='label'>
            Columns:
            <input type='text' className='input' />
          </label>
          <label className='label'>
            Rows:
            <input type='text' className='input' />
          </label>
        </div>
        {/* GRID CONTAINER */}
        <div className='grid'>{this.state.display}</div>
        <div className='button-container'>
          {/* start */}
          <button
            className='btn start'
            // value={this.props.value}
            // onClick={this.handleChange.bind(this)}
          >
            Start
          </button>
          {/* stop */}
          <button
            className='btn stop'
            // onClick={this.handlechange}
          >
            Stop
          </button>
          {/* clear */}
          <button
            className='btn clear'
            //onClick={this.handleChange}
          >
            Clear
          </button>
          <button
            className='btn step'
            //onClick={this.handleChange}
          >
            Step
          </button>
        </div>
        <Block />
      </div>
    );
  }
}

export default Grid;
