export const GET_LOGIN_STATUS = 'GET_LOGIN_STATUS';
export const SET_LOGIN_STATUS = 'SET_LOGIN_STATUS';
export const CLEAR_LOGIN_STATUS = 'CLEAR_LOGIN_STATUS';
export const SET_LOGIN_STATUS_SUCCESS = 'SET_LOGIN_STATUS_SUCCESS';

export const getLoginStatus = () => ({
  type: GET_LOGIN_STATUS,
});

export const setLoginStatus = user => ({
  type: SET_LOGIN_STATUS,
  user,
});

export const clearLoginStatus = () => ({
  type: CLEAR_LOGIN_STATUS,
});
