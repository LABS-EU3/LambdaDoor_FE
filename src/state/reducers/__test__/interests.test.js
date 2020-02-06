import '@testing-library/jest-dom/extend-expect';
import { interestReducer } from '../interests';
import * as actions from '../../types';

const initialState = {
  isLoading: false,
  interests: [],
};

const testInterests = [
  {
    id: 1,
    interest: 'full stack',
  },
  {
    id: 2,
    interest: 'front end',
  },
];

// const error = 'An error has occured. Please try again later.';
// const initialErrorState = null;

describe('interestReducer', () => {
  it('should return the correct initial state', () => {
    expect(interestReducer(undefined, {})).toEqual(initialState);
  });
  it('should handle GET_INTERESTS', () => {
    const startAction = {
      type: actions.GET_INTERESTS,
    };
    expect(interestReducer(initialState, startAction)).toEqual({
      ...initialState,
      isLoading: true,
    });
  });

  it('should handle GET_INTERESTS_SUCCESS', () => {
    const startAction = {
      type: actions.GET_INTERESTS_SUCCESS,
      payload: testInterests,
    };
    expect(interestReducer(initialState, startAction)).toEqual({
      ...initialState,
      interests: testInterests,
    });
  });

  it('should handle GET_INTERESTS_FAILURE', () => {
    const startAction = {
      type: actions.GET_INTERESTS_FAILURE,
    };
    expect(interestReducer(initialState, startAction)).toEqual({
      ...initialState,
      isLoading: false,
    });
  });
});
