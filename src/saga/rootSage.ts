// rootSaga.js
import { all, fork } from 'redux-saga/effects';
import { watchAllActions } from './logAction';

export default function* rootSaga() {
  yield all([
    fork(watchAllActions),
  ]);
}
