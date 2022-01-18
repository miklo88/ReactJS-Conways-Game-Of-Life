import React from "react";
import "./block.scss";

class Block extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      key: 0,
      text: "",
    };
  }
  render() {
    // console.log("from block component", this.props);
    // if (this.props.cell) {
    if (this.props.cell === true) {
      return <div className='block-alive'></div>;
    } else {
      return <div className='block-dead'></div>;
    }
  }
}

export default Block;
