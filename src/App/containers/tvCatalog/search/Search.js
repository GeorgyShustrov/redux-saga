import React from "react";
import styles from "./search.module.css";
import { connect } from "react-redux";
import { actions } from "../../../store/duck";
import { showSelector } from "../../../store/selectors";
import { NavLink, Route } from "react-router-dom";
import Show from "../show/Show";
import cx from "classnames";

const mapDispatchToProps = dispatch => {
  return {
    searchShow: str => dispatch(actions.searchShow(str)),
    getActors: id => dispatch(actions.getActors(id))
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

    const { searchShow } = this.props;
    if (this.state.value) {
      searchShow(this.state.value);
    }
  };
  saveInfo = el => {
    this.props.getActors(el);
  };
  render() {
    const { list, loading } = this.props.showList;

    return (
      <form className={styles.searchForm} onSubmit={this.handelSubmit}>
        <div className={styles.searchMenu}>
          <input
            className={styles.searcInputs}
            type="text"
            values={this.values}
            ref={this.textInput}
            placeholder="Введите название произведения"
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
        {loading ? (
          <div className={styles.cssloadBell}>
            <div className={styles.cssloadCircle}>
              <div className={styles.cssloadInner} />
            </div>
            <div className={styles.cssloadCircle}>
              <div className={styles.cssloadInner} />
            </div>
            <div className={styles.cssloadCircle}>
              <div className={styles.cssloadInner} />
            </div>
            <div className={styles.cssloadCircle}>
              <div className={styles.cssloadInner} />
            </div>
            <div className={styles.cssloadCircle}>
              <div className={styles.cssloadInner} />
            </div>
          </div>
        ) : list.length == 0 ? (
          <h4 className={styles.searchEmpty}>Список пуст</h4>
        ) : (
          <ul className={styles.searchList}>
            {list.map(el => (
              <li key={el.id} className={styles.listItem}>
                <NavLink
                  className={styles.link}
                  to={`/show/${el.id}`}
                  onClick={() => this.saveInfo(el.id)}
                >
                  <p className={styles.searchName}> {el.name}</p>

                  <img
                    className={styles.title}
                    src={
                      (el.image && (el.image.original || el.image.medium)) ||
                      "https://img2.akspic.com/image/60348-aqua-line-graphics-movie-footage-1366x768.jpg"
                    }
                    alt={el.id}
                  />
                </NavLink>
                <Route path={`/show/:${el.id}`} component={Show} />
                <div
                  className={styles.searchDescription}
                  dangerouslySetInnerHTML={{ __html: el.summary }}
                />
              </li>
            ))}
          </ul>
        )}
      </form>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
