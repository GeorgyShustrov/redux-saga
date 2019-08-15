import React from "react";
import "./App.css";
import { connect } from "react-redux";
import { Route, Redirect, Switch } from "react-router-dom";
import Login from "./containers/gitCatalog/Login/Login";

import { loginSelector } from "./store/selectors";
import Search from "./containers/gitCatalog/Search";

const mapStateToProps = state => {
  return {
    login: loginSelector(state)
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
    const { login } = this.props;
    console.log(login.isAuth);
    return (
      <Switch>
        <Route path="/login" component={Login} />
        <PrivateRoute
          path="/search"
          permited={login.isAuth}
          component={Search}
        />
        <Redirect from="/*" to="/login" />
      </Switch>
    );
  }
}

export default connect(
  mapStateToProps,
  null
)(App);
