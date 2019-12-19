import * as types from '../types';

const initialState = {
  isLoggingIn: false,
  isLoggedIn: false,
};

export const authState = (state = initialState, action) => {
  switch (action.type) {
    case types.LOG_IN_USER:
      return {
        ...state,
        isLoggingIn: true,
      };
    case types.GET_COMPANY_REVIEWS_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
      };
    case types.GET_COMPANY_REVIEWS_FAILURE:
      return state;
    default:
      return state;
  }
};
