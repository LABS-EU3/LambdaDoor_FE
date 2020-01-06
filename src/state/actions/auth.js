/* eslint-disable camelcase */
/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import jwt from 'jsonwebtoken';
import * as types from '../types';

export const setAuthenticated = data => {
  return {
    type: types.LOG_IN_USER_SUCCESS,
    payload: data,
  };
};

export const loginUser = (
  userId,
  name,
  email,
  profilePicture
) => async dispatch => {
  dispatch({
    type: types.LOG_IN_USER,
  });
  try {
    const { data } = await axios.post(
      'https://lambdadoor-staging.herokuapp.com/users',
      {
        slack_id: userId,
        name,
        email_address: email,
        img_72: profilePicture,
      }
    );
    const token = jwt.sign(data, process.env.REACT_APP_JWT_SECRET);
    localStorage.setItem('token', token);
    dispatch(setAuthenticated(data));
  } catch (error) {
    dispatch({
      type: types.LOG_IN_USER_FAILURE,
      payload: error.message,
    });
  }
};
