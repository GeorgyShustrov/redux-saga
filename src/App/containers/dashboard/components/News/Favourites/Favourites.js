import React from "react";
import styles from "./favourites.module.css";
import { currentNewsSelector } from "../../../../../store/selectors";
import { connect } from "react-redux";
import moment from "moment";

const mapStateToProps = state => {
  return {
    currentNewsSelector: currentNewsSelector(state)
  };
};
class Favourites extends React.Component {
  render() {
    const { currentNews } = this.props.currentNewsSelector;
    console.log(currentNewsSelector);
    return (
      <div className={styles.newsContainer}>
        <ul className={styles.newsList}>
          <h3 className={styles.newsTitle}>Избранные Новости</h3>
          {currentNews.map((news, index) => {
            if (news.isChosen) {
              return (
                <li key={index} className={styles.newsBox}>
                  <h3 className={styles.newsDate}>
                    {moment(news.date).format("DD.MM.YY")}
                  </h3>
                  <h2 className={styles.newsAbout}>{news.about}</h2>
                  <ul className={styles.newsInfoList}>
                    <p className={styles.newsInfoTitle}>Кадровые новости</p>
                    {news.info.map((current, index) => (
                      <li className={styles.newsInfo} key={index}>
                        {current}
                      </li>
                    ))}
                  </ul>
                </li>
              );
            }
          })}
        </ul>
      </div>
    );
  }
}
export default connect(
  mapStateToProps,
  null
)(Favourites);
