import React from "react";
import styles from "./all.module.css";
import { currentNewsSelector } from "../../../../../store/selectors";
import { connect } from "react-redux";
import moment from "moment";
import cx from "classnames";
const mapStateToProps = state => {
  return {
    currentNewsSelector: currentNewsSelector(state)
  };
};
class All extends React.Component {
  state = { chosenNews: "" };
  choseNews = e => {
    this.state.choseNews !== e
      ? this.setState({ choseNews: e })
      : this.setState({ choseNews: "" });
  };
  render() {
    const { currentNews } = this.props.currentNewsSelector;
    console.log(currentNewsSelector);
    return (
      <div className={styles.newsContainer}>
        <ul className={styles.newsList}>
          <h3 className={styles.newsTitle}>SML Новости</h3>
          {currentNews.map((news, index) => (
            <li key={index} className={styles.newsBox}>
              <h3 className={styles.newsDate}>
                {moment(news.date).format("DD.MM.YY")}
              </h3>
              <h2 className={styles.newsAbout}>{news.about}</h2>
              <ul className={styles.newsInfoList}>
                <p className={styles.newsInfoTitle}>Кадровые новости</p>
                {news.info.map((current, index) => (
                  <li className={styles.newsInfo} key={index}>
                    {this.state.choseNews === current ? (
                      <p className={cx(styles.newsInfoText, styles.chosen)}>
                        {current}
                      </p>
                    ) : (
                      <p className={styles.newsInfoText}>{current}</p>
                    )}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
export default connect(
  mapStateToProps,
  null
)(All);
