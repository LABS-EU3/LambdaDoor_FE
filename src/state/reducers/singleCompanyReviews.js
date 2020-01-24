/* eslint-disable import/prefer-default-export */
import * as types from '../types';

const initialState = {
  isFetching: false,
  reviews: {
    company: [],
    salary: [],
    interview: [],
  },
};

export const singleCompanyReviewsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_SINGLE_COMPANY_INTERVIEW_REVIEWS_SUCCESS:
      return {
        ...state,
        reviews: {
          ...state.reviews,
          interview: action.payload,
        },
      };

    default:
      return state;
  }
};
