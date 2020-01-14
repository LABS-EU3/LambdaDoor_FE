import React from 'react';
import * as rtl from '@testing-library/react';
// import configureStore from 'redux-mock-store';
// import axios from 'axios';
// import MockAdapter from 'axios-mock-adapter';
// import thunk from 'redux-thunk';
// import * as types from '../../types/index';
import { SetAuthenticated, LoginUser, LogoutUser } from '../auth';

// const middlewares = [thunk];
// const mockStore = configureStore(middlewares);
// const mock = new MockAdapter(axios);
// const cred = {
//   withCredentials: true,
// };

// const backend = [
//   {
//     id: 1,
//     name: 'Bob Smith',
//     image: <img src="one.jpeg" alt="Bob's pic" />,
//   },
// ];

afterEach(rtl.cleanup);
let wrapper;
beforeEach(() => {
  wrapper = rtl.render;
});

describe('Action/types Auth testing', () => {
  //   it('should execute get review data data', async () => {
  //     const URL = `${backend}/${backend.id}`;
  //     mock.onGet(URL).reply(200, cred);
  //     const store = mockStore({});
  //     const actions = store.getActions();

  //     await store.dispatch(SetAuthenticated());
  //     expect(actions[0]).toEqual({ type: types.LOG_IN_USER });
  //   });

  it('Displays a snapshot for Auth testing', () => {
    const { asFragment } = wrapper(<SetAuthenticated />);
    expect(wrapper(<SetAuthenticated />).container).toMatchSnapshot();
    expect(asFragment()).toMatchSnapshot();
  });

  it('Displays a snapshot for Logout testing', () => {
    const { asFragment } = wrapper(<LogoutUser />);
    expect(wrapper(<LogoutUser />).container).toMatchSnapshot();
    expect(asFragment()).toMatchSnapshot();
  });

  it('Displays a snapshot for Login testing', () => {
    const { asFragment } = wrapper(<LoginUser />);
    expect(wrapper(<LoginUser />).container).toMatchSnapshot();
    expect(asFragment()).toMatchSnapshot();
  });
});
