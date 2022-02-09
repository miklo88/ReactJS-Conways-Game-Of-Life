import React from "react";
import "./block.scss";

class Block extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: false,
      text: "",
      bkgndColor: "white",
    };
    this.blockClick.bind(this);
  }

  blockClick(e) {
    console.log("cell clicked");
    if (this.state.status === false) {
      this.setState({
        status: true,
        text: "Alive set",
        bkgndColor: "lightcoral",
      });
      this.props.setStateOfCell(true);
      console.log(this);
    } else {
      this.setState({
        status: false,
        text: "Dead set",
        // bkgndColor: "white",
      });
      this.props.setStateOfCell(false);
      console.log(this);
    }
    e.preventDefault();
    return this;
  }

  render() {
    return (
      <div
        id='block'
        // style={{ backgroundColor: "white" }}
        className='block'
        onClick={(e) => this.blockClick(e)}
      ></div>
    );
  }
}

export default Block;

// blockClick(e) {
//   console.log("test click");
//   if (this.state.status === 0 && this.state.bkgndColor === "lightcoral") {
//     console.log("off toggled");
//     this.setState({
//       bkgndColor: "white",
//       status: 0,
//       text: "off toggled",
//     });
//     this.props.setStateOfCell(0);
//   } else {
//     console.log("on toggled");
//     this.setState({
//       bkgndColor: "lightcoral",
//       status: 1,
//       text: "on toggled",
//     });
//     this.props.setStateOfCell(1);
//   }
//   console.log("this", this);
//   e.preventDefault();
//   return this;
// }
// if (this.state.status === 1 && this.state.bkgndColor === "white") {
//   return (
//     <div
//       id='block'
//       style={{ backgroundColor: "white" }}
//       className='block'
//       onClick={(e) => this.blockClick(e)}
//     ></div>
//   );
// } else {
//   return (
//     <div
//       id='block'
//       style={{ backgroundColor: "lightcoral" }}
//       className='block'
//       onClick={(e) => this.blockClick(e)}
//     ></div>
//   );
// }

// if (this.state.status === false && this.state.bkgndColor === "white") {
//   return (
//     <div
//       id='block'
//       style={{ backgroundColor: "white" }}
//       className='block'
//       onClick={(e) => this.blockClick(e)}
//     ></div>
//   );
// } else {
//   return (
//     <div
//       id='block'
//       style={{ backgroundColor: "lightcoral" }}
//       className='block'
//       onClick={(e) => this.blockClick(e)}
//     ></div>
//   );
// }
