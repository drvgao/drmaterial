import { all } from "redux-saga/effects";

import dogSaga from "../apps/dogs/container/sagas/";

export default function* rootSaga() {
  yield all([dogSaga()]);
}
