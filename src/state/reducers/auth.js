import * as types from '../types';

const initialState = {
  isLoggingIn: false,
  isLoggedIn: false,
  credentials: {},
  error: null,
};

// eslint-disable-next-line import/prefer-default-export
export const authState = (state = initialState, action) => {
  switch (action.type) {
    case types.LOG_IN_USER:
      return {
        ...state,
        isLoggingIn: true,
      };

    case types.LOG_IN_USER_SUCCESS:
      return {
        ...state,
        credentials: action.payload,
        isLoggingIn: false,
        isLoggedIn: true,
      };

    case types.LOG_IN_USER_FAILURE:
      return {
        ...state,
        isLoggingIn: false,
        isLoggedIn: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
