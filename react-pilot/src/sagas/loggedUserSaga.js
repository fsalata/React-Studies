import LocalForage from 'localforage';
import { takeEvery, put } from 'redux-saga/effects';

import {
  GET_LOGIN_STATUS,
  SET_LOGIN_STATUS,
  SET_LOGIN_STATUS_SUCCESS,
} from '../actions/loggedUser';

function* getLoginStatus() {
  try {
    yield LocalForage.getItem('loggedUser').then((storedUser) => {
      if (storedUser) {
        const user = JSON.parse(storedUser);

        put({ type: SET_LOGIN_STATUS_SUCCESS, loggedUser: user });
      }
      return null;
    });
  } catch (e) {
    console.log(e);
  }
}

function* setLoginStatus({ user }) {
  try {
    yield LocalForage.setItem('loggedUser', JSON.stringify(user)).then((savedUser) => {
      put({ type: SET_LOGIN_STATUS_SUCCESS, loggedUser: JSON.parse(savedUser) });
    });
  } catch (e) {
    console.log(e);
  }
}

export const loggedUserSaga = [
  takeEvery(GET_LOGIN_STATUS, getLoginStatus),
  takeEvery(SET_LOGIN_STATUS, setLoginStatus),
];

export default loggedUserSaga;
