import axios from 'axios';
import {
  getCompanyReviews,
  getSalaryReviews,
  getInterviewReviews,
} from './reviews';

axios.defaults.baseURL = 'https://lambdadoor-staging.herokuapp.com/';

// eslint-disable-next-line import/prefer-default-export
export const actions = {
  getCompanyReviews,
  getSalaryReviews,
  getInterviewReviews,
};
