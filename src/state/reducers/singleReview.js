import * as types from '../types';

const initialState = {
  isFetching: false,
  reviews: {
    companyReview: [],
  },
};

const singleReviewsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_SINGLE_REVIEWS:
      return { ...state, isFetching: true };

    case types.GET_SINGLE_REVIEWS_SUCCESS:
      return {
        ...state,
        reviews: {
          ...state.reviews,
          companyReview: action.payload,
        },
      };

    case types.GET_SINGLE_REVIEWS_FAILURE:
      return { ...state, isFetching: false };

    default:
      return state;
  }
};

export default singleReviewsReducer;
