import React from "react";
import { Switch, Route } from "react-router-dom";

import About from "../about";
import Grid from "../grid/grid";
class Router extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          {/* landing/dashboard/home page */}
          <Route exact path='/' component={Grid} />
          {/* to about page */}
          <Route exact path='/about' component={About} />
        </Switch>
      </div>
    );
  }
}
export default Router;
