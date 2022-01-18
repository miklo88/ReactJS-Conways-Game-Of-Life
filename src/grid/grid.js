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
    //form submit func
    let cols = parseInt(this.state.cols);
    let rows = parseInt(this.state.rows);
    console.log(`cols int: ${cols}`);
    console.log(`rows int: ${rows}`);
    console.log(`form submitted.`);
    e.preventDefault();
    return this.state.grid;
  }

  render() {
    let num = 0;
    let colContainer = this.state.grid;
    let cols = 0;
    cols = parseInt(this.state.cols);
    let rows = 0;
    rows = parseInt(this.state.rows);
    console.log(typeof this.state.rows);

    for (var c = 0; c < cols; c++) {
      colContainer[c] = [];
      for (var r = 0; r < rows; r++) {
        num++;
        num.toString();
        let numKey = num;
        colContainer[c][r] = <Block cell={true} text={"hola"} key={numKey} />;
      }
    }
    console.log("Grid-state: ", this.state.grid);
    // console.log("Grid-render: ", colContainer);
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
        {/* grid creation/iteration */}
        <div className='grid'>
          {this.state.grid.map((item, i) => {
            console.log("testItem", item);
            console.log("test", i);
            return item;
          })}
        </div>
        {/* <div className='grid'>{colContainer}</div> */}
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
