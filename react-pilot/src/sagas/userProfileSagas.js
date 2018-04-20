// import { AsyncStorage } from 'react-native';
// import { takeEvery, select, put } from 'redux-saga/effects';

// import {
//   GET_USER_PROFILE,
//   GET_USER_PROFILE_CHANGE_IMAGE,
//   GET_USER_PROFILE_CHANGE_IMAGE_SUCCESS,
//   GET_USER_PROFILE_ERROR,
//   GET_USER_PROFILE_SUCCESS,
// } from '../actions/userProfile';

// function* getUserProfile(action) {
//   try {
//     const result = yield AsyncStorage.getItem('users').then((users) => {
//       if (users) {
//         const parsedUsers = JSON.parse(users);

//         const userFound = parsedUsers.filter(u => u.email === action.email.toLowerCase());

//         if (userFound.length > 0) {
//           return { userProfile: userFound[0] };
//         }
//         return { error: 'Usuário não encontrado.' };
//       }
//       return { error: 'Usuário não encontrado.' };
//     });

//     if (result.error) {
//       yield put({ type: GET_USER_PROFILE_ERROR, errorMessage: result.error });
//     } else {
//       yield put({ type: GET_USER_PROFILE_SUCCESS, userProfile: result.userProfile });
//     }
//   } catch (e) {
//     yield put({ type: GET_USER_PROFILE_ERROR, errorMessage: e.message });
//   }
// }

// function* changeUserProfileImage(action) {
//   try {
//     const userEmail = yield select(state => state.userProfile.email);

//     const result = yield AsyncStorage.getItem('users').then((users) => {
//       if (users) {
//         const parsedUsers = JSON.parse(users);

//         const userFoundIndex = parsedUsers.findIndex(u => u.email === userEmail.toLowerCase());

//         if (userFoundIndex >= 0) {
//           parsedUsers[userFoundIndex].profileImage = action.base64Image;

//           return AsyncStorage.setItem('users', JSON.stringify(parsedUsers)).then(() => ({
//             success: 'Imagem do perfil alterada com sucesso.',
//           }));
//         }
//         return { error: 'Usuário não encontrado.' };
//       }
//       return { error: 'Nenhum usuário não encontrado.' };
//     });

//     if (result.error) {
//       yield put({ type: GET_USER_PROFILE_ERROR, sagaErrorMessage: result.error });
//     } else {
//       yield put({
//         type: GET_USER_PROFILE_CHANGE_IMAGE_SUCCESS,
//         sagaChangeImageSuccessMessage: result.success,
//         base64Image: action.base64Image,
//       });
//     }
//   } catch (e) {
//     yield put({ type: GET_USER_PROFILE_ERROR, sagaErrorMessage: e.message });
//   }
// }

// export const userProfileSagas = [
//   takeEvery(GET_USER_PROFILE, getUserProfile),
//   takeEvery(GET_USER_PROFILE_CHANGE_IMAGE, changeUserProfileImage),
// ];

// export default userProfileSagas;
