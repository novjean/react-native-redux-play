import {
  USERNAME_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL
} from '../actions/types';

//defualt initial state
const INITIAL_STATE = {
  username: '',
  password: '',
  user: null,
  error: ''
};

//assign state default value as it cant return undefined
export default (state = INITIAL_STATE, action) => {
  console.log(action);

  switch (action.type) {
    case USERNAME_CHANGED:
      return { ...state, username: action.payload };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    case LOGIN_USER_SUCCESS:
      return { ...state, user: action.payload, error: '' };
    case LOGIN_USER_FAIL:
      return { ...state, error: 'Authentication Failed.', password: '' };
    default:
      return state;
  }
};
