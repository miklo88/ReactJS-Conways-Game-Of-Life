import React from "react";
// block component
import Block from "../block/block";

// styles
import "./grid.scss";
import Logic from "../utils/logic";
// Grid Component
class Grid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // display: "grid",
      logic: new Logic(),
      // change to => default grid size 25,25
      size: [25, 25],
      gameOn: false,
      generation: 0,
    };
    //binding state to handleChanges
    this.handleColChange = this.handleColChange.bind(this);
    this.handleRowChange = this.handleRowChange.bind(this);
    this.startGame = this.startGame.bind(this);
    this.stopGame = this.stopGame.bind(this);
    // this.clearGame = this.clearGame.bind(this);
    this.renderGame = this.renderGame.bind(this);
  }
  // event handler crew
  // input column change
  handleColChange(e) {
    if (!this.state.gameOn) {
      let actualSize = this.state.size;
      if (e.target.value < 25) {
        actualSize[0] = e.target.value;
      } else {
        actualSize[0] = 25;
      }
      this.setState({
        size: actualSize,
      });
      this.renderGame();
    }
  }
  //input row change
  handleRowChange(e) {
    if (!this.state.gameOn) {
      let actualSize = this.state.size;
      if (e.target.value < 25) {
        actualSize[1] = e.target.value;
      } else {
        actualSize[1] = 25;
      }
      this.setState({
        size: actualSize,
      });
      this.renderGame();
    }
  }
  // starting the game of life BUTTONS
  startGame() {
    if (!this.state.gameOn) {
      this.setState({ gameOn: true }, () => {
        this.generationRef = setInterval(
          () => this.runGame(),
          this.state.generation
        );
      });
    }
  }
  stopGame() {
    this.setState(
      {
        gameOn: false,
      },
      () => {
        if (this.generationRef) {
          clearInterval(this.generationRef);
        }
      }
    );
  }
  // clearGame() {}
  runGame() {
    this.setState({
      logic: this.state.logic.addGeneration(),
    });
  }

  renderGame() {
    let newGame = [];
    let gridRow = [];
    for (let i = 0; i < this.state.size[0]; i++) {
      for (let j = 0; j < this.state.size[1]; j++) {
        gridRow.push(<Block key={[i, j]} />);
      }
      newGame.push(
        <div className='grid=row' key={i}>
          {gridRow}
        </div>
      );
      gridRow = [];
    }
    return newGame;
  }

  changeGeneration = (e) => {
    if (!this.state.gameOn) {
      this.setState({
        generation: e.target.value,
      });
    }
  };

  render() {
    //component render
    return (
      //   <Block />
      // UI for the game
      <div className='grid-component'>
        <h1>Conways Game of Life</h1>

        <label className='label'>
          Rows
          <input
            className='input'
            type='text'
            value={this.state.size[1]}
            onChange={this.handleRowChange}
          />
        </label>
        <label className='label'>
          Columns
          <input
            className='input'
            type='text'
            value={this.state.size[0]}
            onChange={this.handleColCHange}
          />
        </label>
        <div className='generation'>
          {/* get state for generation aka count {this.state.logic.getGeneration()}*/}
          Generation:
        </div>
        {/* GRID COMPONENT */}
        {/* <div className='grid'>{this.state.display}</div> */}
        {this.renderGame()}
        {/* GRID COMPONENT */}
        {/* BUTTONS */}
        <div className='button-group'>
          {/* START */}
          <button className='btn start' onClick={this.startGame}>
            Start
          </button>
          {/* STOP */}
          <button className='stop btn' onClick={this.stopGame}>
            Stop
          </button>
          {/* CLEAR */}
          <button
            className='clear btn'
            // onClick={this.clearGame}
          >
            Clear
          </button>
          <div>Speed:</div>
        </div>
      </div>
    );
  }
}

export default Grid;
