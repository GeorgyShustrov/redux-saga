import { combineReducers } from "redux";
import { createAction } from "redux-action";
import * as constants from "./constants";

export const actions = {
  searchShow: createAction(constants.SEARCH_SHOW),
  searchShowSuccess: createAction(constants.SEARCH_SHOW_SUCCESS),
  searchShowFailure: createAction(constants.SEARCH_SHOW_FAILURE)
};

const showList = (state = [], action) => {
  switch (action.type) {
    case constants.SEARCH_SHOW_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

const showReducer = combineReducers({
  showList
});

export default showReducer;
