import React from "react";
import "./block.scss";

class Block extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log("from block component", this.props);

    if (this.props.cell) {
      return (
        <div className='cell-container'>
          <div className='block-alive'></div>
        </div>
      );
    } else {
      return (
        <div className='cell-container'>
          <div className='block-dead'></div>
        </div>
      );
    }
  }
}

export default Block;
