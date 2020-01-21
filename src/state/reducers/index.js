import { combineReducers } from 'redux';
import { reviewsReducer, reviewsError } from './reviews';
import { authState } from './auth';
import { interestReducer } from './interests';
<<<<<<< HEAD
import { topRatedReviewsReducer } from './topRatedReviews';
import { closestCompaniesReducer } from './closestCompanies'
=======
import { companiesReducer } from './companies';
import { jobrolesReducer } from './jobroles';
>>>>>>> 04d95cfcf58043664a06a2f8e3a6cc924d926bc8

const rootReducer = combineReducers({
  reviews: reviewsReducer,
  reviewsError: reviewsError,
  authState: authState,
  interests: interestReducer,
<<<<<<< HEAD
  topRatedReviews: topRatedReviewsReducer,
  closestCompanies: closestCompaniesReducer,
=======
  companies: companiesReducer,
  jobroles: jobrolesReducer,
>>>>>>> 04d95cfcf58043664a06a2f8e3a6cc924d926bc8
});

export default rootReducer;
