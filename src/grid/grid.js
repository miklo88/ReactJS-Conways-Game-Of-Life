import React from "react";
// block component
import Block from "../block/block";

class Grid extends React.Component {
  render() {
    return (
      <div className='grid-component'>
        Grid
        <Block />
      </div>
    );
  }
}
export default Grid;
