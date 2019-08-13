import React from "react";

import "./App.css";

import Show from "./containers/tvCatalog/show/Show";
import Search from "./containers/tvCatalog/search";
import { Route, Redirect, Switch } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/tv-catalog" component={Search} />
        <Route path="/show/:id" component={Show} />
        <Redirect from="/*" to="/tv-catalog" />
      </Switch>
    );
  }
}

export default App;
