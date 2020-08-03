import React from "react";
import "./app.scss";
// getting all the kids in the pool
import Nav from "./nav_footer/nav";
import Router from "./router/router";
import Footer from "./nav_footer/footer";

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        {/* components */}
        <Nav />
        <Router />
        <Footer />
      </div>
    );
  }
}

export default App;
