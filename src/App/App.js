import React from "react";
import "./App.css";
import { Route, Redirect, Switch } from "react-router-dom";
import { logInStorage, logOutStorage } from "./store/duck";
import { isLoginSelector } from "./store/selectors";
import { connect } from "react-redux";
import Login from "./containers/login";
import AppRouter from "./components/AppRouter/AppRouter";

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

const PrivateRoute = ({ component: Component, permited, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      permited ? <Component {...props} /> : <Redirect to="/login" />
    }
  />
);

class App extends React.Component {
  render() {
    const { isLogin } = this.props;
    return (
      <Switch>
        <Route exact path="/login" component={Login} />
        <PrivateRoute
          path="/dashboard"
          permited={isLogin}
          component={AppRouter}
        />
        <Redirect path="/*" to="/login" />
      </Switch>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
