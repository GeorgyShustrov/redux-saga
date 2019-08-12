import React from "react";
import styles from "./show.module.css";

import { connect } from "react-redux";

class Show extends React.Component {
  render() {
    return <div className={styles.showContainer} />;
  }
}
export default connect(
  mapStateToProps,
  null
)(Favourites);
