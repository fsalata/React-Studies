import {
  GET_LOGIN_STATUS,
  SET_LOGIN_STATUS,
  CLEAR_LOGIN_STATUS,
  SET_LOGIN_STATUS_SUCCESS,
} from '../actions/loggedUser';

const initialState = {
  email: null,
  password: null,
  status: false,
  checking: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LOGIN_STATUS:
      return {
        ...state,
        checking: true,
      };
    case SET_LOGIN_STATUS:
      return {
        ...state,
        checking: true,
      };
    case SET_LOGIN_STATUS_SUCCESS:
      return {
        ...action.loggedUser,
        checking: false,
      };
    case CLEAR_LOGIN_STATUS:
      return {
        ...initialState,
        checking: false,
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
