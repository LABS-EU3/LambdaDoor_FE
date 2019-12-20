
import { reviewsReducer, reviewsError } from './reviews';
import { authState } from './auth';

const rootReducer = combineReducers({
  reviews: reviewsReducer,
  reviewsError: reviewsError,
  authState: authState
})

export default rootReducer;
