import React from "react";
import "./grid.scss";

class Grid extends React.Component {
  // getting state ready because I will need it.
  constructor() {
    //initial state for cols and rows. aka width and height
    //width
    let cols = [];
    //height
    let rows = [];
    super();
    //the state
    this.state = {
      width: cols,
      height: rows,
    };
    // what needs to be updated in my state?
    // the generations of how many times this function runs aka {count}
    // the grid needs to be updated. when user clicks, when function invoked and running.
    //the grid needs to be set to state then compared to the new state incoming.
    // since i have my columns and rows, those can be stored to help create my grid.
  }

  render() {
    // cols and rows i want to create for this grid. to give it width and height
    let cols = []; // reading the length of these for da loop
    let rows = []; // reading the length of these for da loop
    //creating a 2d array grid to display on reactjs.
    // i want to pass a width and height aka columns and rows to this grid
    function createGrid(num) {
      let initialGrid = [];
      for (let i = 0; i < num; i++) {
        console.log("this i columns", i);
        for (let j = 0; j < num; j++) {
          console.log("this j rows", j);
        }
      }
      return initialGrid;
    }
    console.log(createGrid(3));
    createGrid(3);
    return (
      <div className='grid-component'>
        {/* container for inputs and input title */}
        <div className='input-container'>
          {/* inputs to adjust grid size */}
          <label className='input-label'>
            Columns:
            <input className='input' type='text' placeholder='Columns' />
          </label>
          <label className='input-label'>
            Rows:
            <input className='input' type='text' placeholder='Rows' />
          </label>
        </div>
        <div className='button-container'>
          {/* going to have to have these manipulate the state and the array. */}
          <button className='btn start'>Start</button>
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
