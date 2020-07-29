import React from "react";
import "./block.scss";
class Block extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.storeCell = this.storeCell.bind(this);
  }
  render() {
    return (
      <div
        className={
          this.props.live ? "block-component-alive" : "block-component-dead"
        }
        onClick={() => this.props.storeCell(this.props.position)}
      ></div>
    );
  }
}

export default Block;
