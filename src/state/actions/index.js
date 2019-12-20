import axios from 'axios';
import {
  getCompanyReviews,
  getSalaryReviews,
  getInterviewReviews,
} from './reviews';

axios.defaults.baseURL = 'https://lambdadoor-staging.herokuapp.com/';
axios.defaults.baseURL = 'http://localhost:5000/';

// eslint-disable-next-line import/prefer-default-export
export const actions = {
  getCompanyReviews,
  getSalaryReviews,
  getInterviewReviews,
};
