// sagaLogger.js
import { takeEvery, select } from 'redux-saga/effects';

function* logAction(action) {
  const state = yield select();

  console.log({
    Action: action.type,
    Payload: action.payload,
    State: state
  })
}

export function* watchAllActions() {
  yield takeEvery('*', logAction);
}
