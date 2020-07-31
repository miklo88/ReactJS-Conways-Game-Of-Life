import React from "react";
import "./block.scss";
class Block extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log(this.props);
    if (this.props.cell) {
      return <div className='block-alive'></div>;
    } else {
      return <div className='block-dead'></div>;
    }
  }
}

export default Block;
