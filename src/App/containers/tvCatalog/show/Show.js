import React from "react";
import styles from "./show.module.css";
import { showSelector } from "../../../store/selectors";

import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    showList: showSelector(state)
  };
};
class Show extends React.Component {
  render() {
    console.log(this.props);
    return <div />;
  }
}
export default connect(
  mapStateToProps,
  null
)(Show);
