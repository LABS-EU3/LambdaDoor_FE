import { combineReducers } from 'redux';
import { reviewsReducer, reviewsError } from './reviews';
import { authState } from './auth';
import { interestReducer } from './interests';
import { topRatedReviewsReducer } from './topRatedReviews';
import { closestCompaniesReducer } from './closestCompanies';
import { companiesReducer } from './companies';
import { jobrolesReducer } from './jobroles';
import companyReviewsReducer from './singleCompany';
import singleReviewReducer from './singleReview';

const rootReducer = combineReducers({
  reviews: reviewsReducer,
  reviewsError: reviewsError,
  authState: authState,
  interests: interestReducer,
  topRatedReviews: topRatedReviewsReducer,
  closestCompanies: closestCompaniesReducer,
  companies: companiesReducer,
  jobroles: jobrolesReducer,
  singleCompanyReviews: companyReviewsReducer,
  singleReview: singleReviewReducer,
});

export default rootReducer;
