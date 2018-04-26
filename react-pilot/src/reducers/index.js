import { combineReducers } from 'redux';

import userLogin from './userLogin';
import userRegister from './userRegister';
import userProfile from './userProfile';
import loggedUser from './loggedUser';
import api from './api';

export default combineReducers({
  userLogin,
  userRegister,
  userProfile,
  loggedUser,
  api,
});
