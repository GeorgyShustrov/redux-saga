import React from "react";
import { Route, withRouter, Switch, Redirect } from "react-router-dom";
import styles from "./dashboard.module.css";
import All from "./components/News/All/All";
import Favourites from "./components/News/Favourites/Favourites";
import Importants from "./components/News/Importants/Importants";

class Dashboard extends React.Component {
  render() {
    return (
      <div className={styles.dashboard}>
        <Switch>
          <Route path="/dashboard/news" component={All} />
          <Route path="/dashboard/favourites" component={Favourites} />
          <Route path="/dashboard/importants" component={Importants} />
          <Redirect path="/dashboard*" to="/dashboard/news" />
        </Switch>
      </div>
    );
  }
}

export default withRouter(Dashboard);
