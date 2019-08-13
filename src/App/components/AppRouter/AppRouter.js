import React from "react";
import { Route, withRouter, Switch, Redirect } from "react-router-dom";
import tvCatalog from "../../containers/tvCatalog/";
import Show from "../../containers/tvCatalog/show/Show";

class AppRouter extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/search" exact={true} component={tvCatalog} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(AppRouter);
