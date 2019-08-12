import { combineReducers } from "redux";
import { createAction } from "redux-action";
import * as constants from "./constants";
import { search } from "../api";

export const search_tv_show = createAction("SEARCH_TV_SHOW");

const foundShows = (state = "", actions) => {
  return search(actions.payload);
};
const storageReducers = combineReducers({
  foundShows
});

export default storageReducers;
