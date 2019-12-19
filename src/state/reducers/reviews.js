import * as types from '../types';

const initialState = {
  isFetching: false,
  reviews: [],
};

export const companyReviews = (state = {}, action) => {
  switch (action.type) {
    case types.GET_COMPANY_REVIEWS:
      return {};
    case types.GET_COMPANY_REVIEWS_SUCCESS:
      return {
        ...state,
        message: action.payload.message,
      };
    case types.GET_COMPANY_REVIEWS_FAILURE:
      return {};
    default:
      return state;
  }
};

export const salaryReviews = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_SALARY_REVIEWS:
      return { ...state, isFetching: true };
    case types.GET_SALARY_REVIEWS_SUCCESS:
      return {
        ...state,
        reviews: [...state.reviews, action.payload],
        isFetching: false,
      };
    case types.GET_SALARY_REVIEWS_FAILURE:
      return { ...state, isFetching: false };
    default:
      return state;
  }
};

export const interviewReviews = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_INTERVIEW_REVIEWS:
      return { ...state, isFetching: true };
    case types.GET_INTERVIEW_REVIEWS_SUCCESS:
      return {
        ...state,
        reviews: [...state.reviews, action.payload],
      };
    case types.GET_INTERVIEW_REVIEWS_FAILURE:
      return { ...state, isFetching: false };
    default:
      return state;
  }
};

export const reviewsError = (state = null, action) => {
  switch (action.type) {
    case types.GET_COMPANY_REVIEWS_FAILURE:
    case types.GET_SALARY_REVIEWS_FAILURE:
    case types.GET_INTERVIEW_REVIEWS_FAILURE:
      return action.payload;
    case types.GET_COMPANY_REVIEWS:
    case types.GET_SALARY_REVIEWS:
    case types.GET_INTERVIEW_REVIEWS:
      return null;
    case types.GET_COMPANY_REVIEWS_SUCCESS:
    case types.GET_SALARY_REVIEWS_SUCCESS:
    case types.GET_INTERVIEW_REVIEWS_SUCCESS:
      return null;
    default:
      return state;
  }
};
