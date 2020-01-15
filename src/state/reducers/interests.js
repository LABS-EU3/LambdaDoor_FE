import * as types from '../types';
import { allInterests } from '../../utils/data';

const initialState = {
  interests: [],
};

// eslint-disable-next-line import/prefer-default-export
export const interestReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_INTERESTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        interests: action.payload,
      };

    case types.DELETE_INTEREST:
      console.log(action.payload);
      return {
        ...state,
        interests: state.interests.filter(
          interest => interest.id !== action.payload
        ),
      };

    case types.ADD_INTEREST:
      return {
        ...state,
        interests: [
          ...state.interests,
          { id: action.payload, interest: allInterests[action.payload] },
        ],
      };
    default:
      return state;
  }
};
