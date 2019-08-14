import { combineReducers } from "redux";
import { createAction } from "redux-actions";
import * as constants from "./constants";

export const actions = {
  searchShow: createAction(constants.SEARCH_SHOW),
  searchShowSuccess: createAction(constants.SEARCH_SHOW_SUCCESS),
  searchShowFailure: createAction(constants.SEARCH_SHOW_FAILURE),
  getActors: createAction(constants.GET_ACTORS),
  getActorsSuccess: createAction(constants.GET_ACTORS_SUCCESS),
  getActorsFailure: createAction(constants.GET_ACTORS_FAILURE)
};

const showList = (state = { list: [], loading: false }, action) => {
  switch (action.type) {
    case constants.SEARCH_SHOW:
      return { ...state, loading: true };
    case constants.SEARCH_SHOW_SUCCESS:
      return { list: action.payload, loading: false };

    default:
      return state;
  }
};
const actors = (state = [], action) => {
  switch (action.type) {
    case constants.GET_ACTORS_SUCCESS:
      return action.payload;

    default:
      return state;
  }
};

const showReducer = combineReducers({
  showList,
  actors
});

export default showReducer;
