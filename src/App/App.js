import React from "react";
import "./App.css";
import { logInStorage, logOutStorage } from "./store/duck";
import { isLoginSelector } from "./store/selectors";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    isLogin: isLoginSelector(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logInStorage: () => dispatch(logInStorage()),
    logOutStorage: () => dispatch(logOutStorage())
  };
};

class App extends React.Component {
  render() {
    return <div>Тест</div>;
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
