import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { authState } from '../auth';
import * as actions from '../../actions/auth';

const initialState = {
  isLoading: true,
  isLoggedIn: false,
  credentials: {},
  error: null,
};

describe('authState reducer', () => {
  it('should return the initial state', () => {
    expect(authState(undefined, {})).toEqual(initialState);
  });
  it('should handle EDIT_PROFILE_PICTURE', () => {
    const startAction = {
      type: actions.EDIT_PROFILE_PICTURE,
    };
    expect(authState(initialState, startAction)).toEqual({
      ...initialState,
      isLoading: true,
    });
  });
  it('should handle LOG_IN_USER', () => {
    const startAction = {
      type: actions.LOG_IN_USER,
    };
    expect(authState(initialState, startAction)).toEqual({
      ...initialState,
      isLoading: true,
    });
  });
  // it('should handle EDIT_PROFILE_PICTURE_SUCCESS');
  // it('should handle LOG_IN_USER_SUCCESS');
  // it('should handle LOG_IN_USER_FAILURE');
  // it('should handle LOG_OUT_USER_SUCCESS');
  // it('should handleLOG_OUT_USER_FAILURE');
});
