import axios from 'axios';
import {
  getCompanyReviews,
  getSalaryReviews,
  getInterviewReviews,
} from './reviews';

// eslint-disable-next-line import/prefer-default-export
export const actions = {
  getCompanyReviews,
  getSalaryReviews,
  getInterviewReviews,
};
