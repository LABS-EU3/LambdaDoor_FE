import React from 'react';
import * as rtl from '@testing-library/react';
import { Home } from '../Home';

afterEach(rtl.cleanup);
let wrapper;
beforeEach(() => {
  wrapper = rtl.render;
});

it('renders "Intoductory" text of the home page', () => {
  const { findByText } = wrapper(<Home />);
  findByText(/The one-stop portal for Lambda graduates/i);
});

it('Displays a snapshot for the home page', () => {
  const { getAllByText, getAllByRole, asFragment } = wrapper(<Home />);
  const ImageContent = getAllByRole('img');
  expect(wrapper(<Home />).container).toMatchSnapshot();
  expect(getAllByText(/Lambda Door/i)).toBeDefined();
  expect(ImageContent).toBeDefined();
  expect(asFragment()).toMatchSnapshot();
});
