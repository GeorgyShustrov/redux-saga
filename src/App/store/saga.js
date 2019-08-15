import { takeLatest, put, call } from "redux-saga/effects";
import * as constants from "./constants";
import { actions } from "./duck";
import { getFollowersInfo, getUserInfo } from "../api";

function* loginWorker(action) {
  const { payload } = action;
  try {
    const response = yield call(getUserInfo, payload);
    if (!response.message) {
      yield put(actions.loginSuccess({ response, Key: payload }));
    } else {
      yield put(actions.loginFailure(response));
    }
  } catch (e) {}
}
function* usersWorker(action) {
  const { Key, value } = action.payload;

  try {
    let response = yield call(getUserInfo, Key, value);
    if (!response.message) {
      yield put(actions.getUserSuccess(response));
      response = yield call(getFollowersInfo, Key, value);
      yield put(actions.getFollowersSuccess(response));
    } else {
      yield put(actions.getUserFailure(response));
      yield put(actions.getFollowersFailure(response));
    }
  } catch (e) {}
}

export default function* showSaga() {
  yield takeLatest(constants.LOGIN, loginWorker);
  yield takeLatest(constants.GET_USER, usersWorker);
}
