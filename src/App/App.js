import React from "react";
import "./App.css";
import { connect } from "react-redux";
import Search from "./containers/tvCatalog/search";
import { Switch, Route, Redirect } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/tv-catalog" component={Search} />
        <Redirect path="/*" to="/tv-catalog" />
      </Switch>
    );
  }
}

export default connect(
  null,
  null
)(App);
