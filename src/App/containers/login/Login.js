import React from "react";
import { Redirect } from "react-router-dom";
import styles from "./login.module.css";
import { logInStorage, logOutStorage } from "../../store/duck";
import { isLoginSelector } from "../../store/selectors";
import { connect } from "react-redux";
import logo from "./assets/logo.svg";

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
const formData = {
  email: {
    value: "user@mail.ru",
    error: "Неверное имя",
    errorEmpty: "Укажите имя  "
  },
  password: {
    value: "007",
    error: "Неверный пароль",
    errorEmpty: "Укажите пароль"
  }
};
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: {},
      isValidate: false,
      values: { email: "", password: "" }
    };
    this.textInput = React.createRef();
  }

  componentDidMount() {
    try {
      this.textInput.current.focus();
    } catch {}
  }
  changeInput = e => {
    const target = e.target;
    this.setState({
      values: { ...this.state.values, ...{ [target.name]: target.value } },
      errors: {}
    });
  };
  handleSubmit = e => {
    const { logInStorage } = this.props;
    e.preventDefault();
    const errors = {};
    Object.keys(formData).forEach(key => {
      if (this.state.values[key] === "") {
        errors[key] = formData[key].errorEmpty;
      } else if (this.state.values[key].toLowerCase() !== formData[key].value) {
        errors[key] = formData[key].error;
      }
    });
    this.setState(
      {
        errors,
        isValidate: Object.keys(errors).length === 0
      },
      () => {
        if (this.state.isValidate) {
          logInStorage();
        }
      }
    );
  };

  render() {
    // const isAuth = JSON.parse(localStorage.getItem("isAuth"));
    const { values, errors } = this.state;
    const { isLogin } = this.props;
    console.log(isLogin);

    if (isLogin) {
      return <Redirect to="/dashboard/news" />;
    } else {
      return (
        <form className="login__form" onSubmit={this.handelSubmit}>
          <div className={styles.login__container}>
            <img src={logo} alt="logo" className={styles.login__logo} />
            <div className={styles.login}>
              <div className={styles.login__content}>
                <h3 className={styles.login__title}>Sign in</h3>
                <ul className={styles.login__dataList}>
                  <li className={styles.login__dataListItem}>
                    <div className={styles.login__userEmail}>
                      {errors["email"] || "Email:"}
                    </div>
                    <input
                      className={styles.login__inputs}
                      name="email"
                      type="email"
                      values={values["email"]}
                      ref={this.textInput}
                      onChange={this.changeInput}
                    />
                  </li>
                  <li className={styles.login__dataListItem}>
                    <div className={styles.login__password}>
                      {errors["password"] || "Password:"}
                    </div>
                    <input
                      className={styles.login__inputs}
                      name="password"
                      value={values["password"]}
                      type="password"
                      onChange={this.changeInput}
                    />
                  </li>
                  <li className={styles.login__dataListItem}>
                    <button
                      className={styles.login__button}
                      type="submit"
                      onClick={this.handleSubmit}
                    >
                      Login
                    </button>
                  </li>
                  <li className={styles.login__options}>
                    <a href="#" className={styles.login__optionsText}>
                      Forgot password
                    </a>
                    <a href="#" className={styles.login__optionsText}>
                      Sign-up
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </form>
      );
    }
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
