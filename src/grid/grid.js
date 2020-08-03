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
    const grid = [];
    //initial grid state
    this.state = {
      display: grid,
      generation: 0,
      startText: "Start",
      stopText: "Stop",
      clearText: "Clear",
      stepText: "Increment",
    };
    //this is just here reminding me that i'll be binding soon.
  }
  handleStart(e) {
    e.preventDefault();
    console.log("start game");
    let startText = this.state.startText === "Start";
    this.setState({ startText: startText });
  }

  handleStop(e) {
    e.preventDefault();
    console.log("stop game");
    let stopText = this.state.stopText === "Stop";
    this.setState({ stopText: stopText });
  }

  handleClear(e) {
    e.preventDefault();
    console.log("clear board");
    let clearText = this.state.clearText === "Clear";
    this.setState({ clearText: clearText });
  }

  handleIncrement(e) {
    e.preventDefault();
    console.log("click thru generations");
    let stepText = this.state.stepText === "Increment";
    this.setState({ stepText: stepText });
  }

  render() {
    //changing grid state
    setTimeout(() => {
      this.setState({ display: grid });
    }, 5000);

    let cols = 5;
    let rows = 5;
    //array for our grid
    let grid;
    //initial array creation
    function initArray() {
      let carlsGrid = [];
      for (let i = 0; i < cols; i++) {
        carlsGrid[i] = [];
        for (let j = 0; j < rows; j++) {
          carlsGrid[i][j] = Math.floor(Math.random() * 2);
        }
      }
      // return carlsGrid.push(<Block cell={cell} display={grid} />);
      return carlsGrid;
    }
    initArray();
    console.log("initArray", initArray());
    // being able to tell if a grid cell is dead or alive
    function deadAlive(grid) {
      for (let i = 0; i < grid; i++) {
        for (let j = 0; j < grid; j++) {
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
      newArray = grid;
    }
    deadAlive(grid);
    console.log("deadAlive func", deadAlive(grid));
    let cell = deadAlive(grid);
    // console.log("cell", cell);
    //CELL DISPLAY
    const lightUP = [];
    function gridOfCells(cell) {
      for (let i = 0; i < 5; i++) {
        //add key prop to the cell BLOCK
        lightUP.push(<Block cell={cell} />);
      }
      return lightUP;
    }
    gridOfCells(cell);
    console.log("cells", gridOfCells(cell));
    //CELL DISPLAY
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
        {/* <Block cell={cell} /> */}
        {/* grid isn't displaying the actual cells but i'm getting somewhere */}
        <div>{lightUP}</div>
        <div className='button-container'>
          {/* start */}
          <button
            className='btn start'
            // value={this.props.value}
            onClick={this.handleStart}
          >
            {this.state.startText}
          </button>
          {/* stop */}
          <button className='btn stop' onClick={this.handleStop}>
            {this.state.stopText}
          </button>
          {/* clear */}
          <button className='btn clear' onClick={this.handleClear}>
            {this.state.clearText}
          </button>
          <button className='btn step' onClick={this.handleIncrement}>
            {this.state.stepText}
          </button>
        </div>
        {/* dont forget about the presets */}
      </div>
    );
  }
}

export default Grid;
