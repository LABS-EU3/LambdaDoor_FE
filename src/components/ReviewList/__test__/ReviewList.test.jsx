import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ReviewList from '../ReviewList';

let wrapper;
beforeEach(() => {
  rtl.cleanup();
  wrapper = rtl.render(<ReviewList />);
});

describe('ReviewList', () => {
  it('renders correctly', () => {
    expect(wrapper.baseElement).toMatchSnapshot();
  });
});
