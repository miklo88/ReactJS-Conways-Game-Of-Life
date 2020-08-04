import React from "react";
import "./grid.scss";

class Grid extends React.Component {
  // getting state ready because I will need it.
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return <div className='grid-component'></div>;
  }
}
export default Grid;

// UPER //
// What do i need to do brainstorm
// A)im going to need to create a nested array and display that array.
// that array is going to have to be stored to state. displayed. updated.
// its going to have to be compatable with a user inputing a height and width. or rows and columns to it
//
