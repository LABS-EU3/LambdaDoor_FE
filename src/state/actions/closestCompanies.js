/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import * as types from '../types';

export const getClosestCompanies = req => async dispatch => {
//   const { id } = req.params;
  dispatch({
    type: types.GET_CLOSEST_COMPANIES,
  });

  try {
    const response = await axios.get(
      //I think this ID should be changed to be dynamic for users rather than be hardcoded to '2'
      `${process.env.REACT_APP_BACKEND_URL}/companies/2/closest`
    );
    dispatch({
      type: types.GET_CLOSEST_COMPANIES_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: types.GET_CLOSEST_COMPANIES_FAILURE,
      payload: error.message || 'Something went wrong.',
    });
  }
};
