//Action creator
import axios from 'axios';

import {
  USERNAME_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL
 } from './types';

//onUsernameChange Action
export const usernameChanged = (text) => {
  return {
    type: USERNAME_CHANGED,
    payload: text
  };
};

//onPasswordChange Action
export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};

//Asynchronous actions
export const loginUser = ({ username, password }) => {
  return (dispatch) => {
    axios.get('https://portal.virtualdoorman.com/dev/common/libs/slim/resident_login/' +
    username + '/' + password)
      .then(user => loginUserSuccess(dispatch, user))
      .catch((error) => {
        console.log(error);
        loginUserFail(dispatch);
      });
  };
};

//Helper Methods
const loginUserFail = (dispatch) => {
  dispatch({
    type: LOGIN_USER_FAIL
  });
};

const loginUserSuccess = (dispatch, user) => {
  const status = user.data[0].STATUS;
  if (status === 'valid') {
    dispatch({
      type: LOGIN_USER_SUCCESS,
      payload: user.data
    });
  } else {
    loginUserFail(dispatch);
  }
};
