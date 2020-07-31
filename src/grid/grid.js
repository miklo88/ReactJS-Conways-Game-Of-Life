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
    //initial state
    const cols = 5;
    const rows = 5;
    const grid = [];

    // const grid = function initArray() {
    //   let carlsGrid = [];
    //   for (let i = 0; i < cols; i++) {
    //     carlsGrid[i] = [];
    //     for (let j = 0; j < rows; j++) {
    //       carlsGrid[i][j] = Math.floor(Math.random() * 2);
    //     }
    //   }
    //   return carlsGrid;
    // };
    //initial grid state
    //should check if each grid item here is true or false right off of the bat
    this.state = {
      columns: cols,
      rows: rows,
      display: grid,
      // deadAlive: cell,
      generation: 0,
      // gameOn: false,
    };
    //this is just here reminding me that i'll be binding soon.
  }
  render() {
    // //changing grid state
    setTimeout(() => {
      this.setState({ display: grid });
    }, 10000);
    //  grid creation logic
    let cols = 5;
    let rows = 5;
    //array for our grid
    let grid = [];
    //initial array creation
    function initArray() {
      let carlsGrid = [];
      for (let i = 0; i < cols; i++) {
        carlsGrid[i] = [];
        for (let j = 0; j < rows; j++) {
          carlsGrid[i][j] = Math.floor(Math.random() * 2);
        }
      }
      return carlsGrid;
      // return carlsGrid.push(<Block cell={cell} display={grid} />);
      // <Block cell={cell} />
    }
    initArray();

    // being able to tell if a grid cell is dead or alive
    function deadAlive(grid) {
      for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid.length; j++) {
          if (grid[i][j] === 1) {
            return 1;
          } else {
            return 0;
          }
        }
      }
      let newArray = initArray();
      //looping through the grid
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          //renaming the myNeighbors function amigos
          let amigos = myNeighbors();
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
      return newArray === grid;
    }
    deadAlive(grid);
    console.log("deadAlive func", deadAlive(grid));
    let cell = deadAlive(grid);
    console.log("cell", cell);

    // neighbors
    function myNeighbors() {
      //loopin back through the array to find neighbors
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
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
    myNeighbors();
    console.log("myNeighbors func", myNeighbors());

    //component render
    return (
      <div className='grid-component'>
        {/* for future cols and rows adjusting */}
        {/* <div className='label-container'>
          <label className='label'>
            Columns:
            <input type='text' className='input' />
          </label>
          <label className='label'>
            Rows:
            <input type='text' className='input' />
          </label>
          </div> */}
        <div className='generation'>Generation: </div>

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
