/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import * as types from '../types';

export const getInterviewReviews = id => async dispatch => {
  dispatch({
    type: types.GET_SINGLE_COMPANY_INTERVIEW_REVIEWS,
  });

  try {
    const { data } = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/interviewreviews/reviews/${id}`,
      {
        withCredentials: true,
      }
    );

    dispatch({
      type: types.GET_SINGLE_COMPANY_INTERVIEW_REVIEWS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: types.GET_SINGLE_COMPANY_INTERVIEW_REVIEWS_FAILURE,
      payload: error.message || 'Something went wrong.',
    });
  }
};
