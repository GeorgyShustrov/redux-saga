import { combineReducers } from "redux";
import { createAction } from "redux-actions";
import * as constants from "./constants";

export const actions = {
  login: createAction(constants.LOGIN),
  loginSuccess: createAction(constants.LOGIN_SUCCESS),
  loginFailure: createAction(constants.LOGIN_FAILURE),
  getUser: createAction(constants.GET_USER),
  getUserSuccess: createAction(constants.GET_USER_SUCCESS),
  getUserFailure: createAction(constants.GET_USER_FAILURE),
  getFollowers: createAction(constants.GET_FOLLOWERS),
  getFollowersSuccess: createAction(constants.GET_FOLLOWERS_SUCCESS),
  getFollowersFailure: createAction(constants.GET_FOLLOWERS_FAILURE)
};

const login = (state = { ApiKey: {}, isAuth: false }, action) => {
  switch (action.type) {
    case constants.LOGIN:
      return { ...state };
    case constants.LOGIN_SUCCESS:
      return { ApiKey: action.payload, isAuth: true };
    case constants.LOGIN_FAILURE:
      return { ...state, isAuth: false };

    default:
      return state;
  }
};
const user = (state = { inform: [], Error: "" }, action) => {
  switch (action.type) {
    case constants.GET_USER:
      return { ...state, Error: "" };
    case constants.GET_USER_SUCCESS:
      return action.payload;
    case constants.GET_USER_FAILURE:
      return { Error: action.payload.message };
    default:
      return state;
  }
};
const followers = (state = { list: [], loading: false }, action) => {
  switch (action.type) {
    case constants.GET_FOLLOWERS:
      return { ...state, loading: true };

    case constants.GET_FOLLOWERS_SUCCESS:
      return { list: action.payload, loading: false };
    case constants.GET_FOLLOWERS_FAILURE:
      return { list: [], loading: false };
    default:
      return state;
  }
};

const showReducer = combineReducers({
  login,
  user,
  followers
});

export default showReducer;
