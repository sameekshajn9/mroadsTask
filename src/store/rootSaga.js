import React from 'react';
import { fork, all } from 'redux-saga/effects';
import watchuserLogginCalled from './loginSaga';

export function* rootSaga() {
  yield all([fork(watchuserLogginCalled)]);
  //   yield fork(watchuserLogginCalled);
}
