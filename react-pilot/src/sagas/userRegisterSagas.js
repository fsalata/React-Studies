// import { AsyncStorage } from 'react-native';
// import { takeEvery, select, put } from 'redux-saga/effects';

// import {
//   SUBMIT_REGISTER,
//   SUBMIT_REGISTER_SUCCESS,
//   SUBMIT_REGISTER_ERROR,
// } from '../actions/userRegister';

// const attemptRegister = (user) => {
//   try {
//     return AsyncStorage.getItem('users').then((users) => {
//       if (users) {
//         const parsedUsers = JSON.parse(users);

//         const userExistsForEmail = parsedUsers.filter(u => u.email === user.email).length > 0;
//         const userExistsForCpf = parsedUsers.filter(u => u.cpf === user.cpf).length > 0;

//         if (userExistsForEmail === true) {
//           return { error: 'Já existe um usuário cadastrado para o e-mail informado.' };
//         } else if (userExistsForCpf === true) {
//           return { error: 'Já existe um usuário cadastrado para o CPF informado.' };
//         }

//         parsedUsers.push(user);

//         return AsyncStorage.setItem('users', JSON.stringify(parsedUsers)).then(() => ({
//           success: 'Usuário cadastrado com sucesso.',
//         }));
//       }
//       return AsyncStorage.setItem('users', JSON.stringify([user])).then(() => ({
//         success: 'Usuário cadastrado com sucesso.',
//       }));
//     });
//   } catch (e) {
//     return { error: 'Ocorreu um erro na tentativa de cadastro.' };
//   }
// };

// function* register() {
//   try {
//     const userRegisterState = yield select(state => state.userRegister);

//     userRegisterState.email = userRegisterState.email.toLowerCase();

//     const result = yield attemptRegister(userRegisterState);

//     if (result.error) {
//       yield put({ type: SUBMIT_REGISTER_ERROR, sagaErrorMessage: result.error });
//     } else {
//       yield put({ type: SUBMIT_REGISTER_SUCCESS, sagaSuccessMessage: result.success });
//     }
//   } catch (e) {
//     yield put({ type: SUBMIT_REGISTER_ERROR, sagaErrorMessage: e.message });
//   }
// }

// export const userRegisterSagas = [takeEvery(SUBMIT_REGISTER, register)];

// export default userRegisterSagas;
