import React from 'react';
import * as rtl from '@testing-library/react';
import configureStore from 'redux-mock-store';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import thunk from 'redux-thunk';
import * as types from '../../types/index';
import { getTopRatedReviews } from '../topRatedReviews';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const mock = new MockAdapter(axios);
const reviews = [
  {
    id: 5,
    name: 'DoNotPay Inc',
    description:
      'Fight corporations, beat bureaucracy and sue anyone at the press of a button.',
    average_rating: '5.0000000000000000',
  },
  {
    id: 1,
    name: 'Accenture',
    description:
      'We partner with our clients to drive real innovation—the kind that turns an idea into an industry.',
    average_rating: '4.5000000000000000',
  },
  {
    id: 10,
    name: 'Paystack',
    description:
      'Paystack helps businesses in Africa get paid by anyone, anywhere in the world',
    average_rating: '4.0000000000000000',
  },
];

afterEach(rtl.cleanup);
let wrapper;
beforeEach(() => {
  wrapper = rtl.render;
});

describe('Action/types top rated reviews', () => {
  it('should execute get top rated', async () => {
    const store = mockStore({});
    const actions = store.getActions();

    await store.dispatch(getTopRatedReviews());
    expect(actions[0]).toEqual({ type: types.GET_TOP_RATED });
  });

  it('should execute fetch top rated reviews with success', async () => {
    await mock
      .onGet(`${process.env.REACT_APP_BACKEND_URL}/companies/top`)
      .reply(200, reviews);
    const expectedActions = {
      type: types.GET_TOP_RATED_SUCCESS,
      payload: reviews,
    };
    const store = mockStore({});
    const actions = store.getActions();
    await store.dispatch(getTopRatedReviews(1));
    expect(actions[1]).toEqual(expectedActions);
  });

  it('should execute fetch Error data', async () => {
    const code = 404;
    await mock
      .onGet(`${process.env.REACT_APP_BACKEND_URL}/companies/top/1`)
      .reply(code);
    const expectedAction = {
      type: types.GET_TOP_RATED_FAILURE,
      payload: `Request failed with status code ${code}`,
    };
    const store = mockStore({});
    const actions = store.getActions();
    await store.dispatch(getTopRatedReviews(1));
    expect(actions[1]).toEqual(expectedAction);
  });
});

//   it('Displays a snapshot for company review', () => {
//     const { asFragment } = wrapper(<getCompanyReviews />);
//     expect(wrapper(<getCompanyReviews />).container).toMatchSnapshot();
//     expect(asFragment()).toMatchSnapshot();
//   });
// });

// describe('Action/types salary review testing', () => {
//   it('should execute get salary review data', async () => {
//     const store = mockStore({});
//     const actions = store.getActions();
//     await store.dispatch(getSalaryReviews());
//     expect(actions[0]).toEqual({ type: types.GET_SALARY_REVIEWS });
//   });

//   it('should execute fetch salary review data with success', async () => {
//     mock
//       .onGet(`${process.env.REACT_APP_BACKEND_URL}/salaryreviews/user/1`)
//       .reply(200, salaryReview);
//     const expectedActions = {
//       type: types.GET_SALARY_REVIEWS_SUCCESS,
//       payload: salaryReview,
//     };
//     const store = mockStore({});
//     await store.dispatch(getSalaryReviews(1));
//     const actions = store.getActions();

//     expect(actions[1]).toEqual(expectedActions);
//   });

//   it('should execute fetch Error data', async () => {
//     const code2 = 404;
//     mock
//       .onGet(`${process.env.REACT_APP_BACKEND_URL}/salaryreviews/user/1`)
//       .reply(code2, { message: 'Request failed with status code 404' });
//     const expectedAction = {
//       type: types.GET_SALARY_REVIEWS_FAILURE,
//       payload: `Request failed with status code ${code2}`,
//     };
//     const store = mockStore({});
//     const actions = store.getActions();
//     await store.dispatch(getSalaryReviews());
//     expect(actions[1]).toEqual(expectedAction);
//   });

// it('Displays a snapshot fo the home page', () => {
//   const { asFragment } = wrapper(<getSalaryReviews />);
//   expect(wrapper(<getSalaryReviews />).container).toMatchSnapshot();
//   expect(asFragment()).toMatchSnapshot();
// });
// });

// describe('Action/types interview review testing', () => {
//   it('should execute get interview review data data', async () => {
//     const store = mockStore({});
//     const actions = store.getActions();
//     await store.dispatch(getInterviewReviews());
//     expect(actions[0]).toEqual({ type: types.GET_INTERVIEW_REVIEWS });
//   });

//   it('should execute fetch interview review data with success', async () => {
//     mock
//       .onGet(`${process.env.REACT_APP_BACKEND_URL}/interviewreviews/user/1`)
//       .reply(200, interviewReview);
//     const expectedActions = {
//       type: types.GET_INTERVIEW_REVIEWS_SUCCESS,
//       payload: interviewReview,
//     };
//     const store = mockStore({});
//     const actions = store.getActions();
//     await store.dispatch(getInterviewReviews(1));
//     expect(actions[1]).toEqual(expectedActions);
//   });

//   it('should execute fetch Error data', async () => {
//     const code = 401;
//     mock
//       .onGet(`${process.env.REACT_APP_BACKEND_URL}/interviewreviews/user/1`)
//       .reply(code, interviewReview);
//     const expectedAction = {
//       type: types.GET_INTERVIEW_REVIEWS_FAILURE,
//       payload: `Request failed with status code ${code}`,
//     };
//     const store = mockStore({});
//     const actions = store.getActions();
//     await store.dispatch(getInterviewReviews(1));
//     expect(actions[1]).toEqual(expectedAction);
//   });

// it('Displays a snapshot fo the home page', () => {
//   const { asFragment } = wrapper(<getInterviewReviews />);
//   expect(wrapper(<getInterviewReviews />).container).toMatchSnapshot();
//   expect(asFragment()).toMatchSnapshot();
// });
// });
