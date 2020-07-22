import React from "react";
import Grid from "../grid/grid";

class Landing extends React.Component {
  render() {
    return (
      <div className='landing-component'>
        <h1>Conways Game of Life</h1>
        <Grid />
        {/* do i want to put buttons here? */}
        {/* start */}
        <button>Start</button>
        {/* stop */}
        <button>Stop</button>
        {/* clear */}
        <button>Clear</button>
      </div>
    );
  }
}
export default Landing;
