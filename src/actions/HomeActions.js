import {
    SELECT_MENU
} from './types';


export const selectLibrary = (libraryId) => {
  return {
      type: SELECT_MENU,
      payload: libraryId
  };
};
