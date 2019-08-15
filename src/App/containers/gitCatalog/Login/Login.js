import React from "react";
import styles from "./search.module.css";
import { connect } from "react-redux";
import { actions } from "../../../store/duck";
import { loginSelector } from "../../../store/selectors";
import { NavLink, Route, Redirect } from "react-router-dom";
import Search from "../Search/search";
import cx from "classnames";

const mapDispatchToProps = dispatch => {
  return {
    login: str => dispatch(actions.login(str)),
    getActors: id => dispatch(actions.getActors(id))
  };
};
const mapStateToProps = state => {
  return {
    Auth: loginSelector(state)
  };
};
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      value: ""
    };
    this.textInput = React.createRef();
  }

  componentDidMount() {
    try {
      this.textInput.current.focus();
    } catch {}
  }
  changeInput = event => {
    this.setState({ value: event.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();

    const { login } = this.props;
    if (this.state.value) {
      login(this.state.value);
    }
  };
  saveInfo = el => {
    this.props.getActors(el);
  };
  render() {
    const { ApiKey, isAuth } = this.props.Auth;
    console.log(isAuth);
    if (isAuth) {
      return <Redirect to="/search" component={Search} />;
    }
    return (
      <form className={styles.searchForm} onSubmit={this.handelSubmit}>
        <div className={styles.searchMenu}>
          <input
            className={styles.searcInputs}
            type="text"
            value={this.values}
            ref={this.textInput}
            placeholder="Введите ваш токен GitHub"
            onChange={this.changeInput}
          />
          <button
            className={styles.searchButton}
            type="submit"
            onClick={this.handleSubmit}
          >
            Найти
          </button>
        </div>
      </form>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
