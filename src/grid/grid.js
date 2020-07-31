import React from "react";
// block component
import Block from "../block/block";
// styles
import "./grid.scss";
// Grid Component
class Grid extends React.Component {
  //before component mounts deets
  constructor(props) {
    super(props);

    this.state = {
      columns: "cols",
      rows: "rows",
      display: "grid",
      // deadAlive: "cell",
      generation: 0,
      // gameOn: false,
    };
    //
  }
  render() {
    // //changing grid state
    setTimeout(() => {
      this.setState({ display: grid });
    }, 60000);
    //  grid creation logic
    let cols = 5;
    let rows = 5;
    let grid = initArray(cols, rows);

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
    initArray(cols, rows);
    // being able to tell if a grid cell is dead or alive
    function deadAlive(grid) {
      for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid.length; j++) {
          // console.log(grid[i]);
          if (grid[i][j] === 1) {
            // console.log(alive);
            return 1;
          } else {
            // console.log(dead);
            return 0;
          }
        }
      }
      let newArray = initArray(cols, rows);
      //looping through the grid
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          //renaming the myNeighbors function
          let amigos = myNeighbors(grid, i, j);
          //where the RULES OF LIFE ARE APPLIED
          if (newArray[i][j] === 0 && amigos === 3) {
            return newArray[i][j] === 1;
          } else if (newArray[i][j] === 1 && (amigos < 2 || amigos > 3)) {
            return newArray[i][j];
          } else {
            return newArray[i][j];
          }
        }
      }

      return (
        <div className='new-array'>newArray</div> ===
        <div className='grid'>grid</div>
      );
    }

    deadAlive(grid);
    console.log("deadAlive func", deadAlive(grid));
    let cell = deadAlive(grid);
    console.log(cell);
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
    console.log("Grid Array");
    console.table(grid);
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
          <div className='generation'>Generation: </div>
        </div>
        {/* GRID CONTAINER */}
        <div className='grid'>{this.state.display}</div>
        {/*  Block aka square aka cell component */}
        <Block cell={cell} />

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
        {/* dont forget about the presets */}
      </div>
    );
  }
}

export default Grid;
