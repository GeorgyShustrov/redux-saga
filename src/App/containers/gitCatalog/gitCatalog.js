import React from "react";
import { Route, withRouter, Switch } from "react-router-dom";

import Login from "./Login/Login";

class tvCatalog extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(tvCatalog);
