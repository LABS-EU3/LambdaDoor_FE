
import { reviewsReducer, reviewsError } from './reviews';
import { authState } from './auth';
import { combineReducers } from 'redux'


const rootReducer = combineReducers({
  reviews: reviewsReducer,
  reviewsError: reviewsError,
  authState: authState
})

export default rootReducer;
