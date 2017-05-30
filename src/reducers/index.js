//Combine reducers here

import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import HomeMenuMaker from './HomeMenuMaker';
import SelectionReducer from './SelectionReducer';
import SignUpReducer from './SignUpReducer';

export default combineReducers({
  auth: AuthReducer,
  menuItems: HomeMenuMaker,
  selectedMenuItem: SelectionReducer,
  register: SignUpReducer
});
