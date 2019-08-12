import React from "react";
import "./App.css";
import { connect } from "react-redux";
import { actions } from "./store/duck";
import Search from "./containers/tvCatalog/search";
import { Switch, Route, Redirect } from "react-router-dom";

const mapDispatchToProps = dispatch => {
  return {
    searchShow: str => dispatch(actions.searchShow(str))
  };
};

class App extends React.Component {
  render() {
    const { searchShow } = this.props;
    return <button onClick={() => searchShow("hello")}>Найти шоу</button>;
  }
}

export default connect(
  null,
  mapDispatchToProps
)(App);
