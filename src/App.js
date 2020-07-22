import React from "react";
import "./App.css";
// getting all the kids in the pool
import Nav from "./nav_footer/nav";
import Router from "./router/router";
import Landing from "./landing/landing";

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Nav />
        <Router />
        <Landing />
      </div>
    );
  }
}

export default App;
