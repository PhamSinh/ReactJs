// sagaLogger.js
import { takeEvery, select } from 'redux-saga/effects';
import { RootState } from '../store';
function* logAction(action: { type: any; payload: any; }) {
  const state: RootState = yield select();

  console.log({
    Action: action.type,
    Payload: action.payload,
    State: state
  })
}

export function* watchAllActions() {
  yield takeEvery('*', logAction);
}
