import React from "react";
import { Link } from "react-router-dom";
import "./nav.scss";

class Nav extends React.Component {
  render() {
    return (
      <div className='nav-component'>
        <h1 className='title'>Conways Game Of Life</h1>
        <div className='link-container'>
          <Link className='link home' to='/home'>
            Home
          </Link>
          <Link className='link about' to='/about'>
            About
          </Link>
        </div>
      </div>
    );
  }
}
export default Nav;
