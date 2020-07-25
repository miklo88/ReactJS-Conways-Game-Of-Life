import React from "react";
import "./App.scss";
// getting all the kids in the pool
import Nav from "./nav_footer/nav";
import Router from "./router/router";

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Nav />
        <Router />
      </div>
    );
  }
}

export default App;
