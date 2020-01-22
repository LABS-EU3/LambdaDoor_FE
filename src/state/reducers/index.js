import { combineReducers } from 'redux';
import { reviewsReducer, reviewsError } from './reviews';
import { authState } from './auth';
import { interestReducer } from './interests';
import { topRatedReviewsReducer } from './topRatedReviews';
import { jobrolesReducer } from './jobroles';

const rootReducer = combineReducers({
  reviews: reviewsReducer,
  reviewsError: reviewsError,
  authState: authState,
  interests: interestReducer,
  topRatedReviews: topRatedReviewsReducer,
  jobroles: jobrolesReducer,
});

export default rootReducer;
