import React from "react";
import { Link } from "react-router-dom";

class Nav extends React.Component {
  render() {
    return (
      <div className='nav-component'>
        <Link className='homeward-link' to='/'>
          Home
        </Link>
        <Link className='about-link' to='/about'>
          About
        </Link>
      </div>
    );
  }
}
export default Nav;