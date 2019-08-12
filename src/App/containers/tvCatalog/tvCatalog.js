import React from "react";
import { Route, withRouter, Switch, Redirect } from "react-router-dom";
import styles from "./dashboard.module.css";
import All from "./components/News/All/All";
import Show from "./show/Show";
import Search from "./search/Search";

class tvCatalog extends React.Component {
  render() {
    return (
      <div className={styles.dashboard}>
        <Switch>
          <Route path="/serch" component={Search} />
          <Route path="/show:id" component={Show} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(tvCatalog);
