import axios from 'axios';
import { getCompanyReviews, getSalaryReviews, getInterviewReviews } from './reviews';

axios.defaults.baseURL = 'https://lambdadoor-staging.herokuapp.com/';

export const actions = {
  getCompanyReviews,
  getSalaryReviews,
  getInterviewReviews
}
