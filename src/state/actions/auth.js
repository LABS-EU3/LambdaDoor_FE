/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import jwt from 'jsonwebtoken';
import * as types from '../types';

export const setAuthenticated = (userId, name, email, profilePicture) => {
  return {
    type: types.LOG_IN_USER_SUCCESS,
    payload: {
      userId,
      name,
      email,
      profilePicture,
    },
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
    await axios.post('https://lambdadoor-staging.herokuapp.com/users', {
      slack_id: userId,
      name,
      email_address: email,
      img_72: profilePicture,
    });

    const token = jwt.sign(
      { userId, name, email, profilePicture },
      process.env.REACT_APP_JWT_SECRET
    );
    localStorage.setItem('token', token);

    dispatch(setAuthenticated(userId, name, email, profilePicture));
  } catch (error) {
    dispatch({
      type: types.LOG_IN_USER_FAILURE,
      payload: error.message,
    });
  }
};
