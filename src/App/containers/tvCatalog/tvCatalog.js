import React from "react";
import { Route, withRouter, Switch } from "react-router-dom";
import styles from "./dashboard.module.css";
import Show from "./show/Show";
import Search from "./search/Search";

class tvCatalog extends React.Component {
  render() {
    return (
      <div className={styles.dashboard}>
        <Switch>
          <Route path="/serch" component={Search} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(tvCatalog);
