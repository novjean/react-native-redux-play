import { FIRSTNAME_CHANGED,
  LASTNAME_CHANGED,
  EMAIL_CHANGED,
  PHONE_CHANGED,
  REGISTER_USERNAME_CHANGED
} from '../actions/types';

const INITIAL_STATE = {
  firstname: '',
  lastname: '',
  email: '',
  phone: '',
  username: ''
};

export default (state = INITIAL_STATE, action) => {
  console.log('SignUpReducer:');
  console.log(action);
  switch (action.type) {
    case FIRSTNAME_CHANGED:
      return { ...state, firstname: action.payload };
    case LASTNAME_CHANGED:
      return { ...state, lastname: action.payload };
    case EMAIL_CHANGED:
      return { ...state, email: action.payload };
    case PHONE_CHANGED:
      return { ...state, phone: action.payload };
    case REGISTER_USERNAME_CHANGED:
      return { ...state, username: action.payload };
    default:
      return state;
  }
};
