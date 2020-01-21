import { combineReducers } from 'redux';
import { reviewsReducer, reviewsError } from './reviews';
import { authState } from './auth';
import { interestReducer } from './interests';
import { topRatedReviewsReducer } from './topRatedReviews';
import { closestCompaniesReducer } from './closestCompanies'

const rootReducer = combineReducers({
  reviews: reviewsReducer,
  reviewsError: reviewsError,
  authState: authState,
  interests: interestReducer,
  topRatedReviews: topRatedReviewsReducer,
  closestCompanies: closestCompaniesReducer,
});

export default rootReducer;
