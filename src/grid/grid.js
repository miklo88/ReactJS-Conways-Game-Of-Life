import React from "react";
import Block from "../block/block";
import "./grid.scss";

class Grid extends React.Component {
  // getting state ready because I will need it.
  constructor() {
    super();
    this.state = {
      cols: "",
      rows: "",
      grid: [],
    };
    //binding the onChange from the inputs
    this.columnChange = this.columnChange.bind(this);
    this.rowChange = this.rowChange.bind(this);
    this.testGrid = this.testGrid.bind(this);
  }

  componentDidMount() {
    console.log("mounted");
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("updated");
  }
  //handleSubmits
  columnChange(e) {
    e.preventDefault();
    this.setState({
      cols: e.target.value,
    });
  }
  rowChange(e) {
    e.preventDefault();
    this.setState({
      rows: e.target.value,
    });
  }

  testGrid(e) {
    let cols = parseInt(this.state.cols);
    let rows = parseInt(this.state.rows);
    console.log(`cols int: ${cols}`);
    console.log(`rows int: ${rows}`);

    let num;
    num++;
    num.toString();
    let numKey = num;
    this.state.grid.push(<Block cellValue={true} key={numKey} />);
    e.preventDefault();
    return this.state.grid;
  }

  render() {
    // console.log("rows, cols submitted", this.state.cols, this.state.rows);
    //invoke a function to create the grid.
    // let createdBlock;

    let colContainer = [];
    let cols = 0;
    cols = parseInt(this.state.cols);
    let rows = 0;
    rows = parseInt(this.state.rows);
    console.log(typeof this.state.rows);

    for (var c = 0; c < cols; c++) {
      // colContainer;
      console.log("C: ", cols);
      colContainer[c] = [];
      console.log("colContainer: ", colContainer);
      for (var r = 0; r < rows; r++) {
        console.log("R: ", r);
        // colContainer.push(r);
        // colContainer[c][r] = Math.floor(Math.random() * 2);
        colContainer[c][r] = <Block cellValue={true} cell={true} />;
      }
    }
    // return colContainer;

    // displayGrid(3, 3);
    // console.log();
    console.log("Grid: ", this.state.grid);

    // store grid in an element here, in that element you loop through the data to create the grid elements.(blocks)
    return (
      <div className='grid-component'>
        {/* container for inputs and input title */}
        <form className='input-container' onSubmit={(e) => this.testGrid(e)}>
          {/* inputs to adjust grid size */}
          <label className='input-label'>
            Columns:
            <input
              className='input'
              name='width'
              type='number'
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
              onChange={(e) => this.rowChange(e)}
              placeholder='Rows'
            />
            <label className='input-label'>
              <button
                className='btn start'
                type='submit'
                value='submit'
                // onClick={stateToInt}
              >
                Submit
              </button>
            </label>
          </label>
        </form>
        {}
        <div className='grid-container'>
          <div className='grid' value={this.state.grid}></div>
          {/* {displayGrid()} */}
          {colContainer}
        </div>
        <div className='button-container'>
          <button
            className='btn start'
            //mock onClick with event handler function to start game.
            onClick={(e) => this.startGame(e)}
          >
            Start
          </button>
          <button className='btn stop'>Stop</button>
          <button className='btn clear'>Clear</button>
          <button className='btn seed'>Seed</button>
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
