import React from "react";
import { Route, withRouter, Switch, Redirect } from "react-router-dom";
import tvCatalog from "../../containers/tvCatalog/";

class AppRouter extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/search" exact={true} component={tvCatalog} />
          <Redirect path="/search*" to="/search" />
        </Switch>
      </div>
    );
  }
}

export default withRouter(AppRouter);
