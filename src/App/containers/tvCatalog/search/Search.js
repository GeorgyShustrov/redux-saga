import React from "react";
import styles from "./search.module.css";
import { connect } from "react-redux";
import { actions } from "../../../store/duck";
import { showSelector } from "../../../store/selectors";
import { NavLink, Route } from "react-router-dom";
import Show from "../show/Show";
import { from } from "rxjs";
const mapDispatchToProps = dispatch => {
  return {
    searchShow: str => dispatch(actions.searchShow(str))
  };
};
const mapStateToProps = state => {
  return {
    showList: showSelector(state)
  };
};
class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: ""
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
    const { searchShow } = this.props;
    if (this.state.value) {
      searchShow(this.state.value);
    }
  };

  render() {
    const { showList } = this.props;
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
        {showList.length > 0 ? (
          <ul>
            {showList.map(el => (
              <li key={el.id}>
                <NavLink
                  className="t-link"
                  to={`\/shows\/${+el.id}`}
                  onClick={() => this.setState({ value: el.id })}
                >
                  {el.name}
                  <img src={el.image.original} />
                </NavLink>

                <div dangerouslySetInnerHTML={{ __html: el.summary }} />
              </li>
            ))}
          </ul>
        ) : (
          <p>Список пуст</p>
        )}
        <Show showId={this.state.id} />
      </form>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
