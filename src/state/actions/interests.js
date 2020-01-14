/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import * as types from '../types';

export const removeInterest = id => async dispatch => {
  axios.delete(`${process.env.REACT_APP_BACKEND_URL}/interests/ui/${id}`);

  dispatch({
    type: types.DELETE_INTEREST,
    payload: id,
  });
};

export const addInterest = (userId, interestId) => async dispatch => {
  axios.post(`${process.env.REACT_APP_BACKEND_URL}/interests`, {
    user_id: userId,
    interest_id: interestId,
  });

  dispatch({
    type: types.ADD_INTEREST,
    payload: interestId - 1,
  });
};
