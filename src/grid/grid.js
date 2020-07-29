import React from "react";
// block component
// import Block from "../block/block";
// styles
import "./grid.scss";
import Logic from "../utils/logic";
// Grid Component
class Grid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "grid",
      // logic: new Rules()
      // change to => default grid size
      size: [25, 25],
      gameOn: false,
      // generation: 0
    };
    //binding state to handleChanges
    // this.handleColChange = this.handleColChange.bind(this);
    // this.handleRowChange = this.handleRowChange.bind(this);
    this.startGame = this.startGame.bind(this);
    this.stopGame = this.stopGame.bind(this);
    // this.clearGame = this.clearGame.bind(this);
    this.renderGame = this.renderGame.bind(this);
  }
  // event handler crew
  //input column change
  handleColChange(e) {
    if (!this.state.gameOn) {
      let actualSize = this.state.size;
      if (e.target.value < 25) {
        actualSize[0] = e.target.value;
      } else {
        actualSize[0] = 25;
      }
      this.setState({
        size: actualSize,
      });
      this.renderGame();
    }
  }
  //input row change
  handleRowChange(e) {
    if (!this.state.gameOn) {
      let actualSize = this.state.size;
      if (e.target.value < 25) {
        actualSize[1] = e.target.value;
      } else {
        actualSize[1] = 25;
      }
      this.setState({
        size: actualSize,
      });
      this.renderGame();
    }
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
      //   <Block />
      // UI for the game
      <div className='grid-component'>
        <h1>Conways Game of Life</h1>

        <label className='label'>
          Rows
          <input
            className='input'
            type='text'
            // value={}
            // onChange={}
          />
        </label>
        <label className='label'>
          Columns
          <input
            className='input'
            type='text'
            // value={}
            // onChange={}
          />
        </label>
        <div className='generation'>
          {/* get state for generation aka count {this.state.logic.getGeneration()}*/}
          Generation:
        </div>
        {/* Grid component */}
        <div className='grid'>{this.state.display}</div>
        {/* Grid component */}
        <div className='button-group'>
          {/* start */}
          <button className='btn start' onClick={this.startGame}>
            Start
          </button>
          {/* stop */}
          <button className='stop btn' onClick={this.stopGame}>
            Stop
          </button>
          {/* clear */}
          <button className='clear btn' onClick={this.clearGame}>
            Clear
          </button>
          <div>Speed:</div>
        </div>
      </div>
    );
  }
}

export default Grid;
