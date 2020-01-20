import { combineReducers } from 'redux';
import { reviewsReducer, reviewsError } from './reviews';
import { authState } from './auth';
import { interestReducer } from './interests';
import { companiesReducer } from './companies';

const rootReducer = combineReducers({
  reviews: reviewsReducer,
  reviewsError: reviewsError,
  authState: authState,
  interests: interestReducer,
  companies: companiesReducer,
});

export default rootReducer;
