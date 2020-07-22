import React from "react";
import { Switch, Route } from "react-router-dom";

import About from "../about";
import Landing from "../landing/landing";
class Router extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={Landing} />
          {/* to about page */}
          <Route exact path='/about' component={About} />
        </Switch>
      </div>
    );
  }
}
export default Router;
