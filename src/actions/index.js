//Action creator
import { Actions } from 'react-native-router-flux';
import {
  USERNAME_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER,
  FORGOT_CREDENTIALS,
  SIGNUP_USER
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
    dispatch({ type: LOGIN_USER }); //Starting the spinner
    // let url = 'https://portal.virtualdoorman.com/dev/common/libs/slim/resident_login/' +
    // username + '/' + password;
    fetch(`https://portal.virtualdoorman.com/dev/common/libs/slim/resident_login/${username}/${password}`, { "method": "GET" })
    .then((response) => response.json())
    .then((user) => loginUserSuccess(dispatch, user))
    .catch((error) => {
      console.log('Failed in fetch.');
      console.log(error);
      loginUserFail(dispatch);
    })
    .done();
  };
};

export const forgotCredentials = () => {
  return (dispatch) => {
    console.log('forgot credentials action called.');
    dispatch({ type: FORGOT_CREDENTIALS });
    Actions.forgotCreds();
  };
};

export const signUp = () => {
  return (dispatch) => {
    dispatch({ type: SIGNUP_USER });
    Actions.signUp();
  };
};

//Helper Methods
const loginUserFail = (dispatch) => {
  dispatch({
    type: LOGIN_USER_FAIL
  });
};

const loginUserSuccess = (dispatch, user) => {
  if (user[0].STATUS === 'valid') {
    dispatch({
      type: LOGIN_USER_SUCCESS,
      payload: user.data
    });
    Actions.main();
  } else {
    loginUserFail(dispatch);
  }
};

// const fetchTest = (url) => {
//   console.log('url' + url);
//   fetch(url, {"method": "GET"})
//   .then((response) => response.json())
//   .then((responseData) => {
//     console.log('Start of ResponseData');
//     console.log(responseData);
//     console.log('End of ResponseData');
//   })
//   .done();
// };
