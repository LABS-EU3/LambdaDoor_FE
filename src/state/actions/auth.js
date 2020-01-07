/* eslint-disable camelcase */
/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import jwt from 'jsonwebtoken';
import * as types from '../types';

export const setAuthenticated = id => async dispatch => {
  dispatch({
    type: types.LOG_IN_USER,
  });
  const { data } = await axios.get(
    `https://lambdadoor-staging.herokuapp.com/users/${id}`,
    {
      withCredentials: true,
    }
  );

  dispatch({
    type: types.LOG_IN_USER_SUCCESS,
    payload: data,
  });
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
    const {
      data: { id },
    } = await axios.post(
      'https://lambdadoor-staging.herokuapp.com/users',
      {
        slack_id: userId,
        name,
        email_address: email,
        img_72: profilePicture,
      },
      { withCredentials: true }
    );
    const token = jwt.sign({ id }, process.env.REACT_APP_JWT_SECRET);
    localStorage.setItem('token', token);
    dispatch(setAuthenticated(id));
  } catch (error) {
    dispatch({
      type: types.LOG_IN_USER_FAILURE,
      payload: error.message,
    });
  }
};

export const logoutUser = () => async dispatch => {
  try {
    await axios.get('https://lambdadoor-staging.herokuapp.com/users/logout');
    localStorage.removeItem('token');
    dispatch({
      type: types.LOG_OUT_USER_SUCCESS,
    });
    window.location.reload();
  } catch (error) {
    dispatch({
      type: types.LOG_OUT_USER_FAILURE,
      payload: error.message,
    });
  }
};
