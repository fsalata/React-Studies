import LocalForage from 'localforage';
import { takeEvery, put } from 'redux-saga/effects';

import {
  GET_LOGIN_STATUS,
  SET_LOGIN_STATUS,
  SET_LOGIN_STATUS_SUCCESS,
  CLEAR_LOGIN_STATUS,
} from '../actions/loggedUser';

function* getLoginStatus() {
  try {
    let user = yield LocalForage.getItem('loggedUser').then((storedUser) => {
      if (storedUser) {
        return JSON.parse(storedUser);
      }
      return null;
    });

    if (!user) {
      user = {
        email: null,
        password: null,
        status: false,
      };
    }

    yield put({ type: SET_LOGIN_STATUS_SUCCESS, loggedUser: user });
  } catch (e) {
    console.log(e);
  }
}

function* setLoginStatus({ user }) {
  try {
    const storedUser = yield LocalForage.setItem('loggedUser', JSON.stringify(user)).then(savedUser => JSON.parse(savedUser));

    if (user) {
      yield put({ type: SET_LOGIN_STATUS_SUCCESS, loggedUser: storedUser });
    }
  } catch (e) {
    console.log(e);
  }
}

function* clearLoginStatus() {
  try {
    yield LocalForage.removeItem('loggedUser');
  } catch (e) {
    console.log(e);
  }
}

export const loggedUserSaga = [
  takeEvery(GET_LOGIN_STATUS, getLoginStatus),
  takeEvery(SET_LOGIN_STATUS, setLoginStatus),
  takeEvery(CLEAR_LOGIN_STATUS, clearLoginStatus),
];

export default loggedUserSaga;
