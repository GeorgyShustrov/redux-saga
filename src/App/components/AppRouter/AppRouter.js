import React from "react";
import { Route, withRouter, Switch, Redirect } from "react-router-dom";
import Search from "../../containers/tvCatalog/search";
import Show from "../../containers/tvCatalog/show";

class AppRouter extends React.Component {
  render() {
    return (
      <div>
        <Route path="/tv-catalog" component={Search} />
        <Switch>
          <Route path="/tv-catalog" component={Show} />

          <Redirect path="/*" to="/tv-catalog" />
        </Switch>
      </div>
    );
  }
}

export default withRouter(AppRouter);
