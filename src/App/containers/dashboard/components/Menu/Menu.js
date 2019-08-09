import React from "react";
import styles from "./menu.module.css";
import logo from "../assets/logo.svg";
import cx from "classnames";
import social from "../assets/social.png";
import { NavLink } from "react-router-dom";
const monthsList = [
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Май",
  "Июнь",
  "Июль",
  "Август",
  "Сентябрь",
  "Октябрь",
  " Ноябрь",
  "Декабрь"
];
const IhateThisConst = [
  { id: 0, name: "2019", months: monthsList },
  { id: 1, name: "2018", months: monthsList },
  { id: 2, name: "2017", months: monthsList }
];
class Menu extends React.Component {
  state = { active: false, chosenYear: "", chosenMonth: "" };

  toggleClass = () => {
    this.setState({
      active: !this.state.active,
      chosenYear: "",
      choseMonth: ""
    });
  };
  choseYear = e => {
    this.state.chosenYear !== e
      ? this.setState({ chosenYear: e, chosenMonth: "" })
      : this.setState({ chosenYear: "", chosenMonth: "" });
  };

  choseMonth = (event, monthName) => {
    event.stopPropagation();
    if (!(this.state.chosenMonth && this.state.chosenMonth === monthName)) {
      this.setState({ chosenMonth: monthName });
    } else this.setState({ chosenMonth: "" });
  };
  render() {
    const { active, chosenYear } = this.state;
    return (
      <div className={styles.header__menu}>
        <div
          className={cx(styles.burger, { [styles.active]: active })}
          onClick={this.toggleClass}
        >
          <span className={styles.burger__line} />
        </div>
        {active && (
          <div className={styles.leftFilter__container}>
            <div className={styles.leftFilter__content}>
              <div className={styles.leftFilter__top}>
                <NavLink to="/dashboard/news" className={styles.top__text}>
                  Все новости
                </NavLink>
                <NavLink
                  to="/dashboard/favourites"
                  className={styles.top__text}
                >
                  Избранное
                </NavLink>
                <NavLink
                  to="/dashboard/importants"
                  className={styles.top__text}
                >
                  {" "}
                  Важное
                </NavLink>
              </div>
              <div className={styles.listMenu}>
                {IhateThisConst.map(el => (
                  <ul
                    className={styles.yearsList}
                    onClick={() => this.choseYear(el.name)}
                    key={+el.name}
                  >
                    {this.state.chosenYear === el.name ? (
                      <p className={cx(styles.years, styles.chosen)}>
                        {el.name}
                      </p>
                    ) : (
                      <p className={styles.years}>{el.name}</p>
                    )}
                    <ul className={styles.monthsList}>
                      {chosenYear === el.name &&
                        el.months.map((element, index) => (
                          <li
                            onClick={event => this.choseMonth(event, element)}
                            className={styles.months}
                            key={index + 1}
                          >
                            {this.state.chosenMonth === element ? (
                              <p
                                className={cx(styles.monthsName, styles.chosen)}
                              >
                                {element}
                              </p>
                            ) : (
                              <p className={styles.monthsName}>{element}</p>
                            )}
                          </li>
                        ))}
                    </ul>
                  </ul>
                ))}
              </div>
              <div className={styles.wombat}>Wombat</div>
              <div className={styles.contacts}>
                {" "}
                <p className={styles.contacts__text}>
                  E-mail для отправки идей, инициатив, критики и пожеланий{" "}
                  <a
                    href="whynot@smedialink.com "
                    className={styles.contacts__email}
                  >
                    whynot@smedialink.com{" "}
                  </a>
                  С уважением, S Media Link.
                </p>
              </div>
              <div>
                <img className={styles.social} src={social} />
              </div>
            </div>
          </div>
        )}
        <img className={styles.header__logo} src={logo} alt="log.img" />
        <h3 className={styles.header__daigest}>Еженедельный дайджест</h3>
      </div>
    );
  }
}
export default Menu;
