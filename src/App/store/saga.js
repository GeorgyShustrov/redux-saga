import { takeLatest } from "redux-saga/effects";
import * as constants from "./constants";

function* searchShowWorker(action) {
  console.log(action);
}

export default function* showSaga() {
  takeLatest(constants.SEARCH_SHOW, searchShowWorker);
}
