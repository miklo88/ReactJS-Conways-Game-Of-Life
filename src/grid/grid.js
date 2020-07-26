import React from "react";
// block component
import Block from "../block/block";
// styles
import "./grid.scss";

// logic
let cols = 5;
let rows = 5;
let grid = arrayWork(cols, rows);

function arrayWork(cols, rows) {
  const carlsGrid = [];
  for (let i = 0; i < cols; i++) {
    carlsGrid[i] = [];
    console.log(carlsGrid[i]);
    for (let j = 0; j < rows; j++) {
      carlsGrid[i][j] = Math.floor(Math.random() * 2);
    }
  }
  return carlsGrid;
}
arrayWork();

class Grid extends React.Component {
  render() {
    return (
      <div className='grid-component'>
        <Block />
        <div className='grid'>{grid}</div>
        {/* <table>
          <tbody>{grid}</tbody>
        </table> */}
        {/* <div className='grid-cols'>{cols}</div> */}
        {/* <div className='grid-rows'>{rows}</div> */}
      </div>
    );
  }
}
export default Grid;
