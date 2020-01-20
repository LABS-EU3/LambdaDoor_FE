import * as types from '../types';

const initialState = {
  isFetching: false,
  reviews: {
    company: [],
    salary: [],
    interview: [],
  },
};

export const reviewsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_COMPANY_REVIEWS:
    case types.GET_SALARY_REVIEWS:
    case types.GET_INTERVIEW_REVIEWS:
      return { ...state, isFetching: true };

    case types.GET_COMPANY_REVIEWS_SUCCESS:
      return {
        ...state,
        reviews: {
          ...state.reviews,
          company: [...state.reviews.company, action.payload],
        },
      };

    case types.GET_SALARY_REVIEWS_SUCCESS:
      return {
        ...state,
        reviews: {
          ...state.reviews,
          salary: [...state.reviews.salary, action.payload],
        },
      };

    case types.GET_INTERVIEW_REVIEWS_SUCCESS:
      return {
        ...state,
        reviews: {
          ...state.reviews,
          interview: [...state.reviews.interview, action.payload],
        },
      };

    case types.GET_COMPANY_REVIEWS_FAILURE:
    case types.GET_SALARY_REVIEWS_FAILURE:
    case types.GET_INTERVIEW_REVIEWS_FAILURE:
      return { ...state, isFetching: false };

    case types.ADD_COMPANY_REVIEW_SUCCESS:
      return {
        ...state,
        reviews: {
          ...state.reviews,
          companies: [...state.reviews.companies, action.payload],
        },
      };

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
