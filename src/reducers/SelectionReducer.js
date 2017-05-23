import {
  SELECT_MENU
} from '../actions/types';

const INITIAL_STATE = {
};

export default (state = INITIAL_STATE, action) => {
  console.log(action);

  switch (action.type) {
    case SELECT_MENU:
      return action.payload;
    default:
      return state;
  }
};
