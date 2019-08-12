import { all, fork } from "redux-saga/effects";
import showSaga from "../../App/store/saga";

export default function*() {
  yield all([fork(showSaga)]);
}
