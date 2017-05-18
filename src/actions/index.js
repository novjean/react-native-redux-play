//Action creator
import firebase from 'firebase';

import {
  USERNAME_CHANGED,
  PASSWORD_CHANGED
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
    firebase.auth().signInWithEmailAndPassword(username, password)
      .then(user => {
        dispatch({ type: 'LOGIN_USER_SUCCESS', payload: user });  
      });
  };
};
