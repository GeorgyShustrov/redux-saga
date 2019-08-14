import { takeLatest, put, call } from "redux-saga/effects";
import * as constants from "./constants";
import { actions } from "./duck";
import { search, show } from "../api";

function* searchShowWorker(action) {
  const { payload } = action;
  try {
    const response = yield call(search, payload);
    yield put(actions.searchShowSuccess(response));
  } catch (e) {
    yield put(actions.searchShowFailure(e.message));
  }
}
function* actorWorker(action) {
  const { payload } = action;

  try {
    const response = yield call(show, payload);
    yield put(actions.getActorsSuccess(response));
  } catch (e) {
    yield put(actions.getActorsFailure(e.message));
  }
}

export default function* showSaga() {
  yield takeLatest(constants.SEARCH_SHOW, searchShowWorker);
  yield takeLatest(constants.GET_ACTORS, actorWorker);
}
