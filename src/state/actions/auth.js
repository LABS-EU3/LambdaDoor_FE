/* eslint-disable import/prefer-default-export */
import axios from 'axios';
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

export const loginUser = ({
  userId,
  name,
  email,
  profilePicture,
}) => async dispatch => {
  dispatch({
    type: types.LOG_IN_USER,
  });

  try {
    const { data } = await axios.post('/login', {
      userId,
      name,
      email,
      profilePicture,
    });
    localStorage.setItem('token', data.token);
    dispatch(setAuthenticated());
  } catch (error) {
    dispatch({
      type: types.LOG_IN_USER_FAILURE,
      payload: error.message,
    });
  }
};
