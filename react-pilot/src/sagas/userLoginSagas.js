import LocalForage from 'localforage';
import { takeEvery, select, put } from 'redux-saga/effects';

import { SUBMIT_LOGIN, SUBMIT_LOGIN_SUCCESS, SUBMIT_LOGIN_ERROR } from '../actions/userLogin';
import { SET_LOGIN_STATUS } from '../actions/loggedUser';

const attemptLogin = (user) => {
  try {
    return LocalForage.getItem('users').then((users) => {
      if (users) {
        const parsedUsers = JSON.parse(users);

        const userExists =
          parsedUsers.filter(u => u.email === user.email && u.password === user.password).length >
          0;

        if (userExists === true) {
          return { success: 'Login efetuado com sucesso.' };
        }
        return { error: 'E-mail e/ou senha inválidos para login.' };
      }
      return { error: 'E-mail e/ou senha inválidos para login.' };
    });
  } catch (e) {
    return { error: 'Ocorreu um erro na tentativa de login.' };
  }
};

function* login() {
  try {
    const userLoginState = yield select(state => state.userLogin);

    userLoginState.email = userLoginState.email.toLowerCase();

    const result = yield attemptLogin(userLoginState);

    if (result.error) {
      yield put({ type: SUBMIT_LOGIN_ERROR, sagaErrorMessage: result.error });
    } else {
      const user = {
        email: userLoginState.email,
        password: userLoginState.password,
        status: true,
      };
      yield put({ type: SET_LOGIN_STATUS, user });

      yield put({ type: SUBMIT_LOGIN_SUCCESS, sagaSuccessMessage: result.success });
    }
  } catch (e) {
    yield put({ type: SUBMIT_LOGIN_ERROR, sagaErrorMessage: e.message });
  }
}

export const userLoginSagas = [takeEvery(SUBMIT_LOGIN, login)];

export default userLoginSagas;
