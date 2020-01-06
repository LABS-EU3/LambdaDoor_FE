/* eslint-disable camelcase */
/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import * as types from '../types';

export const editProfile = (value, id) => async dispatch => {
  console.log('This is edit profile action');
  dispatch({
    type: types.EDIT_PROFILE_PICTURE,
  });
  try {
    const { data } = await axios.patch(
      `https://lambdadoor-staging.herokuapp.com/users/${id}`,
      value
    );
    dispatch({
      type: types.EDIT_PROFILE_PICTURE_SUCCESS,
      payload: data[0],
    });
  } catch (error) {
    dispatch({
      type: types.EDIT_PROFILE_PICTURE_FAILURE,
      payload: error.message,
    });
  }
};
