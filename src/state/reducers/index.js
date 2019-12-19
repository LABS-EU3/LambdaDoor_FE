import { combineReducers } from 'redux';
import {
  companyReviews,
  salaryReviews,
  interviewReviews,
  reviewsError,
} from './reviews';
import { authState } from './auth';

const rootReducer = combineReducers({
  companyReviews,
  salaryReviews,
  interviewReviews,
  reviewsError,
  authState,
});

export default rootReducer;
