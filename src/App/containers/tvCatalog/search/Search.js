import React from "react";
import { Redirect } from "react-router-dom";
import styles from "./search.module.css";
import { connect } from "react-redux";
import { search, show } from "../../../api";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
  };

  render() {
    return (
      <form className="search__form" onSubmit={this.handelSubmit}>
        <div className={styles.search__container}>
          <input
            className={styles.search__inputs}
            type="text"
            values={this.values}
            ref={this.textInput}
            onChange={this.changeInput}
          />
          <button
            className={styles.search__button}
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
  null,
  null
)(Search);
