import { all } from "redux-saga/effects";

import { userLoginSagas } from "./userLoginSagas";
import { userRegisterSagas } from "./userRegisterSagas";
import { userProfileSagas } from "./userProfileSagas";
import { loggedUserSaga } from "./loggedUserSaga";
import { apiSagas } from "./apiSagas";

export default function* rootSaga() {
  yield all([
    ...apiSagas,
    ...userLoginSagas,
    ...userRegisterSagas,
    ...userProfileSagas,
    ...loggedUserSaga
  ]);
}
