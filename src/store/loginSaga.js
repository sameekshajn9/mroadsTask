import React from 'react';
import { put, all, takeLatest, call } from 'redux-saga/effects';
import axios from 'axios';
import { Alert } from 'react-native';
import data from '../../public/login.json';
import { NavigationActions } from 'react-navigation';
import { store } from '../store/store';
// const customData = require('../');

const getData = () => {
  // fetch('./login.json')
  //   .then(response => console.log(response.json()))
  //   .then(findresponse => {
  //     this.setState({
  //       data: findresponse
  //     });
  //   });
  return new Promise((resolve, reject) => {
    // axios
    //   .get('./login.json')
    //   .then(function(result) {
    //     resolve(result);
    //     console.log(result, 'result');
    //   })
    //   .catch(reject);
    fetch('login.json')
      .then(response => console.log(response.json()))
      .catch(error => {
        console.log(error);
      });
  });
};

function* userLogginCalled({ payload }) {
  try {
    const { userName, password } = payload;
    const index = data.findIndex(
      f => f.username === userName && f.password === password
    );
    if (index > -1) {
      // debugger;
      store.dispatch(
        NavigationActions.navigate({ routeName: 'RestaurantList' })
      );
    } else {
      Alert.alert('Error', 'Invalid username and password');
    }
    // const result = yield call(getData, null);
  } catch {
    error => console.log(error);
  }
}

export default function* watchuserLogginCalled() {
  yield takeLatest('ON_LOGIN', userLogginCalled);
}
