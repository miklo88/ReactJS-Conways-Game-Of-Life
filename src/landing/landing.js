import React from "react";
import Grid from "../grid/grid";

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
        <Grid />
        <div className='button-group'>
          <button>Start</button>
          {/* stop */}
          <button>Stop</button>
          {/* clear */}
          <button>Clear</button>
        </div>
      </div>
    );
  }
}
export default Landing;
