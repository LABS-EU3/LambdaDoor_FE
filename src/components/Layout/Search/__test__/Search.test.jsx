import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SearchForm from '../Search';
import { fireEvent } from '@testing-library/react';

let wrapper;
beforeEach(() => {
  rtl.cleanup();
  wrapper = rtl.render(<SearchForm />);
});

describe('SearchForm', () => {
  it('renders correctly', () => {
    expect(wrapper.baseElement).toMatchSnapshot();
  });
});
