import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import reducers from '../../../state/reducers/index';
import { renderWithRedux } from '../../../utils/testingHelpers';
import ConnectedHome, { Home } from '../Home';

const state = reducers(undefined, {});
const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OSwiaWF0IjoxNTc4NTY4NTgxfQ.6cR-MJGGZRHgszj1o1IgvyXfhEla3NYNegRT7aafXps';

describe('Home', () => {
  it('render correctly', () => {
    expect(rtl.render(<Home />).baseElement).toMatchSnapshot();
  });

  it('shows the name of the site', () => {
    const siteTitle = rtl.render(<Home />).queryByText(/lambda door/i);
    expect(siteTitle).toBeInTheDocument();
  });

  it('shows the tagline of the site', () => {
    const siteTagline = rtl
      .render(<Home />)
      .queryByText(
        'The one-stop portal for Lambda graduates looking for company information in the quest for a job.'
      );
    expect(siteTagline).toBeInTheDocument();
  });
});

describe('ConnectedHome', () => {
  let useEffect;
  const mockUseEffect = () => {
    useEffect.mockImplementationOnce(f => f());
  };

  beforeEach(() => {});
  useEffect = jest.spyOn(React, 'useEffect');
  mockUseEffect();
  global.localStorage = jest.fn().mockImplementation(() => {
    return {
      getItem: jest.fn().mockReturnValue(token),
    };
  });

  it('renders correctly', () => {
    expect(renderWithRedux(<ConnectedHome />).baseElement).toMatchSnapshot();
  });
  it('has the correct state on load', () => {
    expect(state).toEqual({
      reviews: {
        isFetching: false,
        reviews: { company: [], salary: [], interview: [] },
      },
      reviewsError: null,
      authState: {
        isLoading: true,
        isLoggedIn: false,
        credentials: {},
        error: null,
      },
    });
  });
  // it('decodes the token of a previously authenticated user and passes them to the dashboard', async () => {
  //   if (token) {
  //     await store.dispatch(auth.setAuthenticated(mockLoginData));
  //     expect(state.authState.isLoggedIn).toEqual(true);
  //   }
  // });
});
