import React from "react";

import styles from "./account.module.css";
import avatar from "../assets/avatar.png";
import logOut from "../assets/logOut.svg";

class Account extends React.Component {
  state = {
    isOpen: false
  };

  handelClickOutside = () => {
    this.setState({ isOpen: false });
    document.removeEventListener("click", this.handelClickOutside);
  };
  openAccount = () => {
    const currentState = this.state.isOpen;
    this.setState({ isOpen: !currentState });
    document.addEventListener("click", this.handelClickOutside);
  };
  close = () => {
    const { logOutStorage } = this.props;
    setTimeout(() => {
      logOutStorage();
    }, 100);
  };
  render() {
    return (
      <div className={styles.header__account}>
        <img
          className={styles.account__avatar}
          src={avatar}
          alt="avatar.img"
          onClick={this.openAccount}
        />
        {this.state.isOpen && (
          <button
            className={styles.account__logOutButton}
            onClick={() => this.close()}
          >
            <img src={logOut} alt="" className={styles.account__logOut} />{" "}
            <span className={styles.account__logOutText}>Выход из системы</span>
          </button>
        )}
      </div>
    );
  }
}

export default Account;
