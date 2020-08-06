import React from "react";
import "./grid.scss";

class Grid extends React.Component {
  // getting state ready because I will need it.
  constructor() {
    //initial state for cols and rows. aka width and height
    super();
    //the state
    this.state = {
      cols: "",
      rows: "",
      //grid time
      grid: [],
    };
    //binding the onChange from the inputs
    this.columnChange = this.columnChange.bind(this);
    this.rowChange = this.rowChange.bind(this);
    // what needs to be updated in my state?
    // the generations of how many times this function runs aka {count}
    // the grid needs to be updated. when user clicks, when function invoked and running.
    //the grid needs to be set to state then compared to the new state incoming.
  }
  //handleSubmits
  columnChange(e) {
    // console.log(e.target.value);
    e.preventDefault();
    this.setState({
      cols: e.target.value,
    });
  }
  rowChange(e) {
    // console.log(e.target.value);
    e.preventDefault();
    this.setState({
      rows: e.target.value,
    });
  }
  //submit cols and rows
  gridSubmit(e) {
    e.preventDefault();
    this.setState(this.state.value);
    console.log("submit form button", this.state);
    //clearning out the form input fields after submit.
    this.setState({
      cols: "",
      rows: "",
    });
  }

  render() {
    // setTimeout(() => {
    //   this.setState({ display: "initalGrid" });
    // }, 5000);
    // cols and rows i want to create for this grid. to give it width and height
    // let cols; // reading the length of these for da loop
    // let rows; // reading the length of these for da loop
    //creating a 2d array grid to display on reactjs.
    // i want to pass a width and height aka columns and rows to this grid
    function createGrid(cols, rows) {
      //array i want to push info to.
      let initialGrid = [];
      //cols.length and it goes bananas for some reason
      for (let i = 0; i < cols; i++) {
        initialGrid[i] = [];
        //cols.length and it goes bananas for some reason
        for (let j = 0; j < rows; j++) {
          initialGrid[i][j] = 0;
          // console.log("this j rows", j);
        }
      }
      return initialGrid;
    }
    createGrid(this.state.cols, this.state.rows);
    console.log("create grid", createGrid(this.state.cols, this.state.rows));

    return (
      <div className='grid-component'>
        {/* container for inputs and input title */}
        <form className='input-container'>
          {/* inputs to adjust grid size */}
          <label className='input-label'>
            Columns:
            <input
              className='input'
              name='width'
              type='number'
              value={this.state.cols}
              onChange={(e) => this.columnChange(e)}
              placeholder='Columns'
            />
          </label>
          <label className='input-label'>
            Rows:
            <input
              className='input'
              name='height'
              type='number'
              value={this.state.rows}
              onChange={(e) => this.rowChange(e)}
              placeholder='Rows'
            />
            <label className='input-label'>
              <button
                className='btn start'
                type='submit'
                value='submit'
                onClick={(e) => this.gridSubmit(e)}
              >
                Submit
              </button>
            </label>
          </label>
        </form>
        <div className='grid-container'>
          <div
            className='grid'
            //bust out a grid aqui? props?
            // style={{
            //   width: "50px",
            //   height: "50px",
            //   backgroundColor: "lightgray",
            // }}
          >
            {/* {this.state.grid} */}
            {createGrid(this.state.cols, this.state.rows)}
          </div>
        </div>
        <div className='button-container'>
          {/* going to have to have these manipulate the state and the array. */}
          {/* going to invoke the function here to create a grid. */}
          <button
            className='btn start'
            //value to state
            value={this.state.grid}
            //mock onClick with event handler function to start game.
            onClick={(e) => this.startGame(e)}
          >
            Start
          </button>
          <button className='btn stop'>Stop</button>
          <button className='btn clear'>Clear</button>
          <button className='btn increment'>Increment</button>
        </div>
        {/* how many generations have occured. */}
        <div className='generation-container'>
          <p className='generations'>Generations:</p>
        </div>
      </div>
    );
  }
}
export default Grid;

// UPER //
// What do i need to do brainstorm

// A)im going to need to create a nested array and display that array.
// that array is going to have to be stored to state. displayed. updated.
// its going to have to be compatable with a user inputing a height and width. or rows and columns to it
// has to be able to be updated by generating random seeds, the user clicking the grid, clicking already pre-seeded data to populate the grid.
// and be able to increment each generation or function one by one.
//
//B) logic has to be written for the grid to play the rules of the game of life
// when this function is invoked it has to play the game out until no cells are alive or a stagnant map has been created.
// - how will i write this function and why
// - what else will i need to make this function work correctly?
// - how will i implement it?
