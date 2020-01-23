import axios from 'axios';
import * as types from '../types';

export const getCompanyReviews = id => async dispatch => {
  dispatch({
    type: types.GET_COMPANY_REVIEWS,
  });

  try {
    const { data } = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/companyreviews/user/${id}`,
      {
        withCredentials: true,
      }
    );

    dispatch({
      type: types.GET_COMPANY_REVIEWS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: types.GET_COMPANY_REVIEWS_FAILURE,
      payload: error.message || 'Something went wrong.',
    });
  }
};

export const addCompanyReview = (review, id) => async dispatch => {
  dispatch({
    type: types.ADD_COMPANY_REVIEW,
  });

  try {
    const response = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/companyreviews/${id}`,
      review
    );
    dispatch({
      type: types.ADD_COMPANY_REVIEW_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: types.ADD_COMPANY_REVIEW_FAILURE,
      payload: error.message,
    });
  }
};

export const deleteCompanyReview = id => async dispatch => {
  dispatch({
    type: types.DELETE_COMPANY_REVIEWS,
  });

  try {
    await axios.delete(
      `${process.env.REACT_APP_BACKEND_URL}/companyreviews/${id}`,
      {
        withCredentials: true,
      }
    );

    dispatch({
      type: types.DELETE_COMPANY_REVIEWS_SUCCESS,
      payload: id,
    });
  } catch (error) {
    dispatch({
      type: types.DELETE_COMPANY_REVIEWS_FAILURE,
      payload: error.message || 'Something went wrong.',
    });
  }
};

export const updateCompanyReview = update => async dispatch => {
  dispatch({
    type: types.UPDATE_COMPANY_REVIEWS,
  });

  try {
    const { data } = await axios.patch(
      `${process.env.REACT_APP_BACKEND_URL}/companyreviews/${update.id}`,
      update,
      {
        withCredentials: true,
      }
    );

    dispatch({
      type: types.UPDATE_COMPANY_REVIEWS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: types.UPDATE_COMPANY_REVIEWS_FAILURE,
      payload: error.message || 'Something went wrong.',
    });
  }
};

export const getSalaryReviews = id => async dispatch => {
  dispatch({
    type: types.GET_SALARY_REVIEWS,
  });

  try {
    const response = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/salaryreviews/user/${id}`
    );
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

export const addSalaryReview = (review, id) => async dispatch => {
  dispatch({
    type: types.ADD_SALARY_REVIEW,
  });

  try {
    const response = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/salaryreviews/`,
      { ...review, user_id: id }
    );
    dispatch({
      type: types.ADD_SALARY_REVIEW_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: types.ADD_SALARY_REVIEW_FAILURE,
      payload: error.message || 'Something went wrong.',
    });
  }
};
export const deleteSalaryReview = id => async dispatch => {
  dispatch({
    type: types.DELETE_SALARY_REVIEWS,
  });

  try {
    await axios.delete(
      `${process.env.REACT_APP_BACKEND_URL}/salaryreviews/${id}`,
      {
        withCredentials: true,
      }
    );

    dispatch({
      type: types.DELETE_SALARY_REVIEWS_SUCCESS,
      payload: id,
    });
  } catch (error) {
    dispatch({
      type: types.DELETE_SALARY_REVIEWS_FAILURE,
      payload: error.message || 'Something went wrong.',
    });
  }
};

export const updateSalaryReview = update => async dispatch => {
  dispatch({
    type: types.UPDATE_COMPANY_REVIEWS,
  });

  try {
    const { data } = await axios.patch(
      `${process.env.REACT_APP_BACKEND_URL}/salaryreviews/${update.id}`,
      update,
      {
        withCredentials: true,
      }
    );

    dispatch({
      type: types.UPDATE_SALARY_REVIEWS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: types.UPDATE_SALARY_REVIEWS_FAILURE,
      payload: error.message || 'Something went wrong.',
    });
  }
};

export const getInterviewReviews = id => async dispatch => {
  dispatch({
    type: types.GET_INTERVIEW_REVIEWS,
  });

  try {
    const { data } = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/interviewreviews/user/${id}`,
      {
        withCredentials: true,
      }
    );
    dispatch({
      type: types.GET_INTERVIEW_REVIEWS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: types.GET_INTERVIEW_REVIEWS_FAILURE,
      payload: error.message || 'Something went wrong.',
    });
  }
};

export const addInterviewReview = (review, id) => async dispatch => {
  dispatch({
    type: types.ADD_INTERVIEW_REVIEW,
  });

  try {
    const response = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/interviewreviews/`,
      { ...review, user_id: id }
    );
    dispatch({
      type: types.ADD_INTERVIEW_REVIEW_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: types.ADD_INTERVIEW_REVIEW_FAILURE,
      payload: error.message || 'Something went wrong.',
    });
  }
};

export const deleteInterviewReview = id => async dispatch => {
  dispatch({
    type: types.DELETE_INTERVIEW_REVIEW,
  });

  try {
    await axios.delete(
      `${process.env.REACT_APP_BACKEND_URL}/interviewreviews/${id}`,
      {
        withCredentials: true,
      }
    );

    dispatch({
      type: types.DELETE_INTERVIEW_REVIEW_SUCCESS,
      payload: id,
    });
  } catch (error) {
    dispatch({
      type: types.DELETE_INTERVIEW_REVIEW_FAILURE,
      payload: error.message || 'Something went wrong.',
    });
  }
};

export const updateInterviewReview = update => async dispatch => {
  dispatch({
    type: types.UPDATE_INTERVIEW_REVIEW,
  });

  try {
    const { data } = await axios.patch(
      `${process.env.REACT_APP_BACKEND_URL}/interviewreviews/${update.id}`,
      update,
      {
        withCredentials: true,
      }
    );

    dispatch({
      type: types.UPDATE_INTERVIEW_REVIEW_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: types.UPDATE_INTERVIEW_REVIEW_FAILURE,
      payload: error.message || 'Something went wrong.',
    });
  }
};
