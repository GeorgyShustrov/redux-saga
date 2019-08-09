import React from "react";
import { logOutStorage } from "../../../../store/duck";
import { connect } from "react-redux";
import styles from "./header.module.css";
import Menu from "../Menu";
import Account from "../Account";

const mapDispatchToProps = dispatch => {
  return {
    logOutStorage: () => dispatch(logOutStorage())
  };
};

class Header extends React.Component {
  render() {
    const { logOutStorage } = this.props;
    return (
      <div>
        <div className={styles.header}>
          <Menu />
          <Account logOutStorage={logOutStorage} />
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  mapDispatchToProps
)(Header);
