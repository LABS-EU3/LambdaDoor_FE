import axios from 'axios';
import * as types from '../types';

export const GetCompanyReviews = () => async dispatch => {
  dispatch({
    type: types.GET_COMPANY_REVIEWS,
  });

  try {
    const response = await axios.get('/');
    dispatch({
      type: types.GET_COMPANY_REVIEWS_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: types.GET_COMPANY_REVIEWS_FAILURE,
      payload: error.message || 'Something went wrong.',
    });
  }
};

export const GetSalaryReviews = () => async dispatch => {
  dispatch({
    type: types.GET_SALARY_REVIEWS,
  });

  try {
    const response = await axios.get('/');
    dispatch({
      type: types.GET_SALARY_REVIEWS_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: types.GET_SALARY_REVIEWS_FAILURE,
      payload: error.message || 'Something went wrong.',
    });
  }
};

export const GetInterviewReviews = () => async dispatch => {
  dispatch({
    type: types.GET_INTERVIEW_REVIEWS,
  });

  try {
    const response = await axios.get('/');
    dispatch({
      type: types.GET_INTERVIEW_REVIEWS_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: types.GET_INTERVIEW_REVIEWS_FAILURE,
      payload: error.message || 'Something went wrong.',
    });
  }
};
