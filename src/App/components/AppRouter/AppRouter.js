import React from "react";
import { Route, withRouter, Switch, Redirect } from "react-router-dom";
import gitCatalog from "../../containers/gitCatalog/";

class AppRouter extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/search" exact={true} component={gitCatalog} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(AppRouter);
