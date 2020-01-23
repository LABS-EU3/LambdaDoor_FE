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

export const getSalaryReviews = () => async dispatch => {
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

export const getInterviewReviews = () => async dispatch => {
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

// export const addInterviewReview = (review, id) => async dispatch => {
//   dispatch({
//     type: types.ADD_INTEVIEW_REVIEW,
//   });

//   try {
//     const response = await axios.post(
//       `${process.env.REACT_APP_BACKEND_URL}/${id}`,
//       review
//     );
//     dispatch({
//       type: types.ADD_INTERVIEW_REVIEW_SUCCESS,
//       payload: response.data,
//     });
//   } catch (error) {
//     dispatch({
//       type: types.ADD_INTERVIEW_REVIEW_FAILURE,
//       payload: error.message || 'Something went wrong.',
//     });
//   }
// };
