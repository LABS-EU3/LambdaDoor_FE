import '@testing-library/jest-dom/extend-expect';
import { reviewsReducer } from '../reviews';
import * as actions from '../../actions/reviews';

const initialState = {
  isFetching: false,
  reviews: {
    company: [],
    salary: [],
    interview: [],
  },
};

describe('reviewsReducer', () => {
  it('should return the correct initial state', () => {
    expect(reviewsReducer(undefined, {})).toEqual(initialState);
  });
  it('should handle GET_COMPANY_REVIEWS', () => {
    const startAction = {
      type: actions.GET_COMPANY_REVIEWS,
    };
    expect(reviewsReducer(initialState, startAction)).toEqual({
      ...initialState,
      isFetching: true,
    });
  });
});
