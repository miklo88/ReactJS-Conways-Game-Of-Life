import React from "react";
import "./grid.scss";

class Grid extends React.Component {
  // getting state ready because I will need it.
  constructor() {
    super();
    this.state = {};
  }
  render() {
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
