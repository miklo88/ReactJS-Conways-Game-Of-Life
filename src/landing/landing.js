import React from "react";
import Grid from "../grid/grid";
//styles
// import "./landing.scss";
//homepage UI page
class Landing extends React.Component {
  render() {
    return (
      // UI for the game
      <div className='landing-component'>
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
        {/* Grid component */}
        <Grid />
        {/* Grid component */}
        <div className='button-group'>
          {/* start */}
          <button className='btn start'>Start</button>
          {/* stop */}
          <button className='stop btn'>Stop</button>
          {/* clear */}
          <button className='clear btn'>Clear</button>
        </div>
      </div>
    );
  }
}
export default Landing;
