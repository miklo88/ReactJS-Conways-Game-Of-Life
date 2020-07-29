import React from "react";
// block component
// import Block from "../block/block";
// styles
import "./grid.scss";
// Grid Component
class Grid extends React.Component {
  constructor() {
    super();
    this.state = { display: "grid" };
    // this.handleChange = this.handleChange.bind(this);
  }
  // // //start button setState
  // startButton(grid) {
  //   this.setState({ display: grid });
  // }
  // // //handleevents `buttons`
  // handleChange(e) {
  //   e.preventDefault();
  //   const { grid } = e.target.value;
  //   this.props.startButton(grid);
  // }
  render() {
    // //changing grid state

    setTimeout(() => {
      this.setState({ display: grid });
    }, 60000);
    //  grid creation logic
    let cols = 5;
    let rows = 5;
    let grid = initArray(cols, rows);
    console.log("Grid Array");
    console.table(grid);
    // grid function
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
      // console.log("newArray", newArray);
      return (newArray = grid);
    }
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
        {/* start */}
        <button
        // value={this.props.value}
        // onChange={this.handleChange.bind(this)}
        >
          Start
        </button>
        {/* stop */}
        <button>Stop</button>
        {/* clear */}
        <button>Clear</button>
      </div>
    );
  }
}

export default Grid;
