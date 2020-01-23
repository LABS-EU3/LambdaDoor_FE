import * as types from '../types';

const initialState = {
  isfetching: false,
  salaries: [],
};

// eslint-disable-next-line import/prefer-default-export
export const avgSalariesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_AVG_SALARIES:
      return { ...state, isFetching: true };

    case types.GET_AVG_SALARIES_SUCCESS:
      return {
        isfetching: false,
        avgSalaries: action.payload,
      };

    case types.GET_AVG_SALARIES_FAILURE:
      return { ...state, isFetching: false };

    default:
      return state;
  }
};
