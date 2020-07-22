import React from "react";
import { Switch, Route } from "react-router-dom";

import About from "../about";

export default function Router() {
  return (
    <div>
      <Switch>
        {/* to about page */}
        <Route exact path='/about' component={About} />
      </Switch>
    </div>
  );
}
