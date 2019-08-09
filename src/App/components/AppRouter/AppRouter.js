import React from "react";
import { Route, withRouter, Switch, Redirect } from "react-router-dom";
import Header from "../../containers/dashboard/components/Header/Header";
import Dashboard from "../../containers/dashboard/Dashboard";

class AppRouter extends React.Component {
  render() {
    return (
      <div>
        <Header />

        <Switch>
          <Route path="/dashboard" component={Dashboard} />
          <Redirect path="/dashboard*" to="/dashboard/news" />
        </Switch>
      </div>
    );
  }
}

export default withRouter(AppRouter);
