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
      increment: 0,
      startText: "Start",
      stopText: "Stop",
      clearText: "Clear",
      stepText: "Increment",
    };
    //this is just here reminding me that i'll be binding soon.
    this.handleStart = this.handleStart.bind(this);
    this.handleStop = this.handleStop.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleIncrement = this.handleIncrement.bind(this);
  }

  // e.target.value can happen still
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
    // changing grid state
    setTimeout(() => {
      this.setState({ display: "grid" });
    }, 5000);

    let cols = 5;
    let rows = 5;
    //array for our grid

    let grid = initArray(cols, rows);
    //initial array creation
    function initArray(cols, rows) {
      let carlsGrid = [];
      for (let i = 0; i < cols; i++) {
        carlsGrid[i] = [];
        for (let j = 0; j < rows; j++) {
          carlsGrid[i][j] = Math.floor(Math.random() * 2);
        }
      }
      return carlsGrid;
    }
    initArray(cols, rows);
    console.log("initArray", initArray(cols, rows));
    // neighbors
    function myNeighbors(cols, rows) {
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
    myNeighbors(cols, rows);
    console.log("myNeighbors func", myNeighbors(cols, rows));
    // neighbors
    // being able to tell if a grid cell is dead or alive
    function deadAlive(neighbors) {
      for (let i = 0; i < neighbors; i++) {
        for (let j = 0; j < neighbors; j++) {
          if (neighbors[i][j] === 1) {
            return 1;
          } else {
            return 0;
          }
        }
      }
      //padding initial grid func
      let newArray = grid;
      //looping through the grid
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          //renaming the myNeighbors function amigos
          let amigos = myNeighbors(cols, rows);
          //where the RULES OF LIFE ARE APPLIED
          if (newArray[i][j] === 0 && amigos === 3) {
            // console.log("if newArray", newArray[i][j]);
            return newArray[i][j] === 1;
          } else if (newArray[i][j] === 1 && (amigos < 2 || amigos > 3)) {
            // console.log("else if newArray", newArray[i][j]);
            return newArray[i][j] === 0;
          } else {
            console.log("else newArray", newArray[i][j]);
            return newArray[i][j];
          }
        }
      }
      console.log("newArray", newArray);
      return (newArray = grid);
    }
    deadAlive(grid);
    console.log("deadAlive func", deadAlive(grid));

    //CELL DISPLAY
    let cell = deadAlive(grid);
    // console.log("cell", cell);
    const lightUP = [];
    function gridOfCells(cell) {
      for (let i = 0; i < 2; i++) {
        //add key prop to the cell BLOCK
        lightUP.push(<Block cell={cell} key={cell.id} />);
      }
      return lightUP;
    }
    gridOfCells(cell);
    console.log("cells", gridOfCells(cell));
    //CELL DISPLAY
    //component render
    return (
      <div className='grid-component'>
        {/* for future cols and rows adjusting */}
        <div className='label-container'>
          <label className='label'>
            Columns:
            <input
              type='text'
              className='input'
              placeholder='not working yet'
            />
          </label>
          <label className='label'>
            Rows:
            <input
              type='text'
              className='input'
              placeholder='not working yet'
            />
          </label>
          <div className='generation'>Generation: </div>
        </div>
        {/* GRID CONTAINER */}
        <div className='grid'>
          {this.state.display}
          {/* displaying cells */}
          {lightUP}
        </div>
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
