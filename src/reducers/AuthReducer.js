import {
  USERNAME_CHANGED,
  PASSWORD_CHANGED
} from '../actions/types';

//defualt initial state
const INITIAL_STATE = {
  username: '',
  password: ''
};

//assign state default value as it cant return undefined
export default (state = INITIAL_STATE, action) => {
  console.log(action);

  switch (action.type) {
    case USERNAME_CHANGED:
      return { ...state, username: action.payload };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    default:
      return state;
  }
};
