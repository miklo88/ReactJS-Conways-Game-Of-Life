import React from "react";
import Block from "../block/block";
import "./grid.scss";

class Grid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cols: "",
      rows: "",
      grid: [],
      key: 0,
      cellStatus: false,
      // generation: 0,
    };
    this.myRef = React.createRef();
    //binding the onChange from the inputs
    this.columnChange = this.columnChange.bind(this);
    this.rowChange = this.rowChange.bind(this);
    this.grid = this.submitGrid.bind(this); // grid submission. do I really need it? yes
    this.testIteration = this.testIteration.bind(this); //cell iteration testing. rules to the game apply here.

    // this.generation = this.gridGeneration.bind(this); //counts every generation of the grid.
    this.setStateOfCell.bind(this); //
  }

  setStateOfCell = (newCellStatus) => {
    //https://www.geeksforgeeks.org/how-to-set-parent-state-from-children-component-in-reactjs/
    this.setState({ cellStatus: newCellStatus });
    console.log("setStateOfCell called newCellStatus: ", newCellStatus);

    //thought.
    // you find the cell in the current grid and update it.
    // update state on grid call.
    return this.state.grid;
  };

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

  submitGrid(e) {
    //form submit func
    console.log(`start of form submission /////`);
    let cols = parseInt(this.state.cols);
    let rows = parseInt(this.state.rows);
    console.log(`cols int: ${cols}`);
    console.log(`rows int: ${rows}`);
    console.log(`current grid: ${this.state.grid}`);
    console.log(`end of form submission. /////`);
    e.preventDefault();
    return this.state.grid;
  }

  testIteration(e) {
    // let updatedState =
    this.state.grid.map((item) => {
      console.log("index: ", item);
      item.map(
        (i) =>
          // i
          // console.log(i),
          // console.log("i.ref.current.state: ", i.ref.current.state),
          console.log("i.props.text: ", i.props.text)
        // console.log("i.key: ", i.key)
      );
    });
    console.log("test iteration a go!");
    e.preventDefault();
    return this.state.grid;
  }

  render() {
    let cols = 0;
    let rows = 0;
    let colContainer = this.state.grid;

    let numKeyId = this.state.key;

    cols = parseInt(this.state.cols);
    rows = parseInt(this.state.rows);

    for (var c = 0; c < cols; c++) {
      colContainer[c] = [];
      for (var r = 0; r < rows; r++) {
        numKeyId++;
        colContainer[c][r] = (
          //Child component.
          <Block
            key={numKeyId}
            ref={this.myRef}
            setStateOfCell={this.setStateOfCell}
          />
        );
      }
    }

    console.log("Grid-state: ", this.state.grid);
    // console.log("grid length: ", this.state.grid.length);
    // console.log("grid key: ", this.state.key);
    // console.log("Grid-render: ", colContainer);
    return (
      <div className='grid-component'>
        {/* container for inputs and input title */}
        <form className='input-container' onSubmit={(e) => this.submitGrid(e)}>
          {/* inputs to adjust grid size */}
          <label className='input-label'>
            Columns:
            <input
              className='input'
              name='height'
              type='number'
              onChange={(e) => this.rowChange(e)}
              placeholder='Columns'
            />
          </label>
          <label className='input-label'>
            Rows:
            <input
              className='input'
              name='width'
              type='number'
              onChange={(e) => this.columnChange(e)}
              placeholder='Rows'
            />
          </label>
          <label className='input-label'>
            <button className='btn start' type='submit' value='submit'>
              Submit
            </button>
          </label>
        </form>

        <table className='grid'>
          <tbody className='grid-body'>
            {console.log("on grid element render: ", this.state.grid)}
            {this.state.grid.map((row, index) => (
              <tr key={row[0]["key"]}>
                {console.log("row key: ", row[0]["key"])}
                {console.log("row index: ", index)}
                {row.map((cellId) => (
                  <th id={cellId}>
                    {cellId}
                    {console.log("cellId: ", cellId)}
                    {/* {console.log("cellId.key: ", cellId.key)} */}
                    {/* {console.log("cellId.cellStatus: ", cellId.cellStatus)} */}
                  </th>
                ))}
              </tr>
            ))}
          </tbody>
        </table>

        <div className='button-container'>
          <button
            className='btn start'
            //mock onClick with event handler function to start game.
            onClick={(e) => this.testIteration(e)}
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

// testIteration(e) {
// console.log("BEAM ME UP WILL ROBINSON: testIteration");
// // this.myRef.current.focus();
// console.log("Current Value: ", this.myRef.current);
// console.log("Values value: ", this.myRef.current.state.status);
// if ((this.myRef.current.state.status = 1)) {
//   this.myRef.current.state.status = 1;
//   this.myRef.current.state.text = "new value muahaha";
//   console.log("myRef", this.myRef);
//   console.log("If status 1: ", this.myRef.current.state.status);
//   e.preventDefault();
// } else {
//   console.log("If status 0: ", this.myRef.current.state.status);
//   // this.myRef.current.state.status = 1;
//   e.preventDefault();
// }
// // this.myRef.current.state.status = 1;

// this.myRef.current.state.status = 1;

// console.log("Post Current status: ", this.myRef.current.state.status);
// console.log("Post Current Value: ", this.myRef.current);
// console.log("Post Current Value Text: ", this.myRef.current.state.text);
// this.myRef.current.props.state = true;
