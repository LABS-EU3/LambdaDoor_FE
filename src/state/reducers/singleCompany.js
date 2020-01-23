import * as types from '../types';

const initialState = {
  isFetching: false,
  reviews: {
    companyReview: [],
    // salaryReview: [],
    // interviewProcess: [],
  },
};

const companyReviewsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_SINGLE_COMPANY_REVIEWS:
      return { ...state, isFetching: true };

    case types.GET_SINGLE_COMPANY_REVIEWS_SUCCESS:
      return {
        ...state,
        reviews: {
          ...state.reviews,
          companyReview: action.payload,
        },
      };

    case types.GET_COMPANY_REVIEWS_FAILURE:
      return { ...state, isFetching: false };

    default:
      return state;
  }
};

export default companyReviewsReducer;
