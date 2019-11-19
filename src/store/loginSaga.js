import React from 'react';
import {put, all, takeLatest} from 'redux-saga/effects';

function* userLogginCalled({payload}) {
  console.log(payload, 'payload');
}

export default function* watchuserLogginCalled() {
  yield takeLatest('ON_LOGIN', userLogginCalled);
}
