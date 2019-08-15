import React from "react";
import styles from "./search.module.css";
import { connect } from "react-redux";
import { actions } from "../../../store/duck";
import {
  userSelector,
  followersSelector,
  loginSelector
} from "../../../store/selectors";
import moment from "moment";

const mapDispatchToProps = dispatch => {
  return {
    getUser: name => dispatch(actions.getUser(name)),
    getUserFollovers: user => dispatch(actions.getFollowers(user))
  };
};
const mapStateToProps = state => {
  return {
    finder: loginSelector(state),
    user: userSelector(state),
    followers: followersSelector(state)
  };
};
class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
    this.textInput = React.createRef();
  }

  changeInput = event => {
    this.setState({ value: event.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    const {
      getUser,

      finder: {
        ApiKey: { Key }
      }
    } = this.props;
    console.log(Key);
    if (this.state.value) {
      const value = this.state.value;
      const args = { Key, value };
      getUser(args);
    }
    this.setState({ value: "" });
  };

  render() {
    const { followers, user } = this.props;

    return (
      <form className={styles.searchForm} onSubmit={this.handelSubmit}>
        <div className={styles.searchMenu}>
          <input
            className={styles.searcInputs}
            type="text"
            value={this.state.value}
            ref={this.textInput}
            placeholder="Введите имя пользователя"
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
        <div>
          {user.Error ? (
            <div className={styles.searchEmpty}>{user.Error}</div>
          ) : (
            user.login && (
              <div className={styles.informContainer}>
                <div className={styles.user}>
                  <img
                    className={styles.titleImg}
                    src={user.avatar_url}
                    alt={user.avatar_url}
                  />
                  <ul className={styles.topList}>
                    <li className={styles.topItemLeft}> Login</li>
                    <li className={styles.topItemRight}> {user.login}</li>

                    <li className={styles.topItemLeft}> Name</li>
                    <li className={styles.topItemRight}>
                      {user.name || "not identified"}
                    </li>

                    <li className={styles.topItemLeft}> Email</li>
                    <li className={styles.topItemRight}>
                      {user.email || "not identified"}
                    </li>

                    <li className={styles.topItemLeft}>Created</li>
                    <li className={styles.topItemRight}>
                      {moment(user.created_at).format("DD.MM.YY - HH:MM")}
                    </li>

                    <li className={styles.topItemLeft}>LastUpdate</li>
                    <li className={styles.topItemRight}>
                      {moment(user.updated_at).format("DD.MM.YY - HH:MM")}
                    </li>
                  </ul>
                </div>
              </div>
            )
          )}
          {followers.list.length > 0 && followers.loading ? (
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
          ) : followers.list.length !== 0 ? (
            <ul className={styles.searchList}>
              {followers.list.map(el => (
                <li
                  key={el.id}
                  className={styles.listItem}
                  onClick={() => {
                    const {
                      getUser,

                      finder: {
                        ApiKey: { Key }
                      }
                    } = this.props;
                    this.setState({ value: el.login });
                    const value = el.login;
                    const args = { Key, value };

                    getUser(args);
                  }}
                >
                  <img
                    className={styles.followerAvatar}
                    src={
                      el.avatar_url ||
                      "https://img2.akspic.com/image/60348-aqua-line-graphics-movie-footage-1366x768.jpg"
                    }
                    alt={el.avatar_url}
                  />

                  <div className={styles.followerName}> {el.login}</div>
                </li>
              ))}
            </ul>
          ) : (
            <div className={styles.searchEmpty}>No followers</div>
          )}
        </div>
      </form>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
