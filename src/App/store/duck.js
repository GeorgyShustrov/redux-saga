import { combineReducers } from "redux";
import * as constants from "./constants";

export const logInStorage = () => ({
  type: constants.LOG_IN_STORAGE
});
export const logOutStorage = () => ({
  type: constants.LOG_OUT_STORAGE
});
const isAuth = JSON.parse(localStorage.getItem("isAuth"));
const isLogin = (state = isAuth, action) => {
  switch (action.type) {
    case constants.LOG_IN_STORAGE:
      localStorage.setItem("isAuth", true);
      return JSON.parse(localStorage.getItem("isAuth"));
    case constants.LOG_OUT_STORAGE:
      localStorage.setItem("isAuth", false);
      return JSON.parse(localStorage.getItem("isAuth"));
    default:
      return state;
  }
};
const News = [
  {
    date: `2019-08-06`,
    about: "something",
    info: ["Первый матч футбольной лиги SML;", "Апрельская активность SML;"],
    isImportant: true,
    isChosen: false
  },
  {
    date: `2019-08-07`,
    about: "something-else",
    info: ["Час развития в среду;"],
    isImportant: false,
    isChosen: true
  },
  {
    date: `2019-08-08`,
    about: "something-third",
    info: ["Апрельская активность SML;"],
    isImportant: true,
    isChosen: true
  },
  {
    date: `2019-08-09`,
    about: "something-more",
    info: ["something about weekends;", "A little party never killed nobody;"],
    isImportant: true,
    isChosen: true
  }
];
const currentNews = (state = News) => {
  return state;
};
const storageReducers = combineReducers({
  isLogin,
  currentNews
});

export default storageReducers;
