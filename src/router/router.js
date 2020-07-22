import React from "react";
import { Switch, Route } from "react-router-dom";

import About from "../about";

class Router extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          {/* to about page */}
          <Route exact path='/about' component={About} />
        </Switch>
      </div>
    );
  }
}
export default Router;
