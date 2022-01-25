import React from "react";
import "./block.scss";

class Block extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 0,
      text: "",
      bkgndColor: "lightcoral",
    };
  }

  blockClick(e) {
    e.preventDefault();
    console.log("test click");
    if (this.state.bkgndColor === "white") {
      console.log("second click toggled");
      this.setState({
        bkgndColor: "lightcoral",
        status: 0,
      });
    } else {
      this.setState({
        bkgndColor: "white",
        status: 1,
      });
    }
    console.log("this", this);
  }

  render() {
    if (this.state.status === 1) {
      return (
        <div
          id='block'
          style={{ backgroundColor: "white" }}
          className='block'
          onClick={(e) => this.blockClick(e)}
        ></div>
      );
    } else {
      return (
        <div
          id='block'
          style={{ backgroundColor: "lightcoral" }}
          className='block'
          onClick={(e) => this.blockClick(e)}
        ></div>
      );
    }
  }
}

export default Block;
