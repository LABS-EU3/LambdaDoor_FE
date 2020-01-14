import React from 'react';
import * as rtl from '@testing-library/react';
import configureStore from 'redux-mock-store';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import thunk from 'redux-thunk';
import * as types from '../../types/index';
import {
  GetCompanyReviews,
  GetSalaryReviews,
  GetInterviewReviews,
} from '../reviews';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const mock = new MockAdapter(axios);
const review = {
  message: 'This is agreat company to be with',
};

const salaryReview = {
  message:
    'The avaerage pay of a new junior fullStack developer is $70,000/year',
};

const interviewReview = {
  message:
    'For me, i had an online test, then a phone interview followed by a person interview at their office',
};

afterEach(rtl.cleanup);
let wrapper;
beforeEach(() => {
  wrapper = rtl.render;
});

describe('Action/types company review testing', () => {
  it('should execute get review data data', async () => {
    const store = mockStore({});
    const actions = store.getActions();

    await store.dispatch(GetCompanyReviews());
    expect(actions[0]).toEqual({ type: types.GET_COMPANY_REVIEWS });
  });

  it('should execute fetch review data with success', async () => {
    mock.onGet('/').reply(200, review);
    const expectedActions = {
      type: types.GET_COMPANY_REVIEWS_SUCCESS,
      payload: review,
    };
    const store = mockStore({});
    const actions = store.getActions();
    await store.dispatch(GetCompanyReviews());
    expect(actions[1]).toEqual(expectedActions);
  });

  it('should execute fetch Error data', async () => {
    const code = 401;
    mock.onGet('/').reply(code);
    const expectedAction = {
      type: types.GET_COMPANY_REVIEWS_FAILURE,
      payload: `Request failed with status code ${code}`,
    };
    const store = mockStore({});
    const actions = store.getActions();
    await store.dispatch(GetCompanyReviews());
    expect(actions[1]).toEqual(expectedAction);
  });

  it('Displays a snapshot for company review', () => {
    const { asFragment } = wrapper(<GetCompanyReviews />);
    expect(wrapper(<GetCompanyReviews />).container).toMatchSnapshot();
    expect(asFragment()).toMatchSnapshot();
  });
});

describe('Action/types salary review testing', () => {
  it('should execute get salary review data', async () => {
    const store = mockStore({});
    const actions = store.getActions();
    await store.dispatch(GetSalaryReviews());
    expect(actions[0]).toEqual({ type: types.GET_SALARY_REVIEWS });
  });

  it('should execute fetch salary review data with success', async () => {
    mock.onGet('/').reply(200, salaryReview);
    const expectedActions = {
      type: types.GET_SALARY_REVIEWS_SUCCESS,
      payload: salaryReview,
    };
    const store = mockStore({});
    const actions = store.getActions();
    await store.dispatch(GetSalaryReviews());
    expect(actions[1]).toEqual(expectedActions);
  });

  it('should execute fetch Error data', async () => {
    const code2 = 402;
    mock.onGet('/').reply(code2);
    const expectedAction = {
      type: types.GET_SALARY_REVIEWS_FAILURE,
      payload: `Request failed with status code ${code2}`,
    };
    const store = mockStore({});
    const actions = store.getActions();
    await store.dispatch(GetSalaryReviews());
    expect(actions[1]).toEqual(expectedAction);
  });

  it('Displays a snapshot fo the home page', () => {
    const { asFragment } = wrapper(<GetSalaryReviews />);
    expect(wrapper(<GetSalaryReviews />).container).toMatchSnapshot();
    expect(asFragment()).toMatchSnapshot();
  });
});

describe('Action/types interview review testing', () => {
  it('should execute get interview review data data', async () => {
    const store = mockStore({});
    const actions = store.getActions();
    await store.dispatch(GetInterviewReviews());
    expect(actions[0]).toEqual({ type: types.GET_INTERVIEW_REVIEWS });
  });

  it('should execute fetch interview review data with success', async () => {
    mock.onGet('/').reply(200, interviewReview);
    const expectedActions = {
      type: types.GET_INTERVIEW_REVIEWS_SUCCESS,
      payload: interviewReview,
    };
    const store = mockStore({});
    const actions = store.getActions();
    await store.dispatch(GetInterviewReviews());
    expect(actions[1]).toEqual(expectedActions);
  });

  it('should execute fetch Error data', async () => {
    const code3 = 401;
    mock.onGet('/').reply(401);
    const expectedAction = {
      type: types.GET_INTERVIEW_REVIEWS_FAILURE,
      payload: `Request failed with status code ${code3}`,
    };
    const store = mockStore({});
    const actions = store.getActions();
    await store.dispatch(GetInterviewReviews());
    expect(actions[1]).toEqual(expectedAction);
  });

  it('Displays a snapshot fo the home page', () => {
    const { asFragment } = wrapper(<GetInterviewReviews />);
    expect(wrapper(<GetInterviewReviews />).container).toMatchSnapshot();
    expect(asFragment()).toMatchSnapshot();
  });
});
