import { takeLatest, takeEvery, put, call } from "redux-saga/effects";
import * as constants from "./constants";
import { actions } from "./duck";
import { search } from "../api";

function* searchShowWorker(action) {
  const { payload } = action;
  try {
    const response = yield call(search, payload);
    yield put(actions.searchShowSuccess(response));
  } catch (e) {
    yield put(actions.searchShowFailure(e.message));
  }
}

export default function* showSaga() {
  yield takeLatest(constants.SEARCH_SHOW, searchShowWorker);
}
