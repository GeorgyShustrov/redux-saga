import React from "react";

import "./App.css";

import Search from "./containers/tvCatalog/search";
import { Route, Redirect } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Route>
        <Search path="/tv.catalog" />
      </Route>
    );
  }
}

export default App;
