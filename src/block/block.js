import React from "react";
import "./block.scss";
class Block extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <div className='block-component'></div>;
    // along the lines if props or state is true, then this styles, if false other style.
  }
}

export default Block;
