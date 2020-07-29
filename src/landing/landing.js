import React from "react";
import Grid from "../grid/grid";

class Landing extends React.Component {
  render() {
    return (
      <div className='landing-component'>
        <h1>Conways Game of Life</h1>
        <Grid />
      </div>
    );
  }
}
export default Landing;
