import React from "react";
import styles from "./show.module.css";
import { showSelector, actorsSelector } from "../../../store/selectors";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    showList: showSelector(state),
    actors: actorsSelector(state)
  };
};

class Show extends React.Component {
  state = {
    data: {}
  };
  componentDidMount() {
    const { showList, history, actors } = this.props;
    if (!showList.list.length) {
      history.push("/tv-catalog");
      return;
    }
    this.loadInfo();
    this.setState({ data: actors });
  }

  loadInfo = () => {
    setTimeout(() => {
      this.setState({ data: this.props.actors });
    }, 100);
  };

  render() {
    const {
      summary,
      name,
      _embedded,
      image,
      url,
      status,
      genres,
      premiered,
      rating
    } = this.props.actors;
    return (
      <div>
        {this.props.actors && (
          <div className={styles.showContainer}>
            <div className={styles.head}>
              <img
                className={styles.titleImg}
                src={
                  (image && (image.original || image.medium)) ||
                  "https://img2.akspic.com/image/60348-aqua-line-graphics-movie-footage-1366x768.jpg"
                }
                alt={
                  (image && (image.original || image.medium)) ||
                  "https://img2.akspic.com/image/60348-aqua-line-graphics-movie-footage-1366x768.jpg"
                }
              />
              <ul className={styles.topList}>
                <h3 className={styles.topListItem}>Show-name</h3>
                <h3 className={styles.topListItem}> {name}</h3>
                <p className={styles.topListItem}>Genres </p>
                <p className={styles.topListItem}>
                  {genres && genres.join(", ")}
                </p>
                <p className={styles.topListItem}>Premiered </p>
                <p className={styles.topListItem}>{premiered} </p>
                <p className={styles.topListItem}>Status </p>
                <p className={styles.topListItem}>{status} </p>
                <p className={styles.topListItem}>Average Rating </p>
                <p className={styles.topListItem}>
                  {rating && rating.average}{" "}
                </p>
                <p className={styles.topListItem}>Link</p>
                <p className={styles.topListItem}>
                  <a className={styles.topListLink} href={url}>
                    {url}
                  </a>
                </p>
              </ul>
            </div>
            {summary && (
              <div className={styles.text}>
                <div className={styles.textTitle}>Description</div>

                <div
                  className={styles.showDescription}
                  dangerouslySetInnerHTML={{ __html: summary }}
                />
              </div>
            )}
            {_embedded ? (
              <ul className={styles.showActorsList}>
                {_embedded.cast.map((el, index) => (
                  <li className={styles.listItem} key={index}>
                    <p className={styles.actorName}>{el.person.name}</p>
                    <img
                      src={
                        (el.person.image && el.person.image.medium) ||
                        "https://img2.freepng.ru/20180331/fww/kisspng-project-management-professional-business-clip-art-professional-5abf624009cec2.4485858015224919680402.jpg"
                      }
                      alt={el.person.image && el.person.image.medium}
                      className={styles.actorImg}
                    />
                  </li>
                ))}
              </ul>
            ) : (
              <p />
            )}
          </div>
        )}
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  null
)(Show);
