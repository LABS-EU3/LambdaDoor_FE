
import { companyReviews, salaryReviews, interviewReviews, reviewsError } from './reviews';
import { authState } from './auth';
import { combineReducers } from 'redux'


const rootReducer = combineReducers({
  companyReviews,
  salaryReviews,
  interviewReviews,
  reviewsError,
  authState
})

export default rootReducer;
