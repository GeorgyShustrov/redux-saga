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
    if (!showList.length) {
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
    const { summary, name, _embedded, image } = this.props.actors;
    return (
      <div>
        {this.props.actors && (
          <div className={styles.showContainer}>
            <h3 className={styles.showTitle}> {name}</h3>
            {image && (
              <img
                className={styles.titleImg}
                src={image.original}
                alt={image.original}
              />
            )}
            <div
              className={styles.showDescription}
              dangerouslySetInnerHTML={{ __html: summary }}
            />
            {_embedded ? (
              <ul className={styles.showActorsList}>
                {_embedded.cast.map((el, index) => (
                  <li className={styles.listItem} key={index}>
                    <p className={styles.actorName}>{el.person.name}</p>
                    <img
                      src={el.person.image.original}
                      alt={el.person.image.original}
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
