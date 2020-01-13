import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ReviewCard from '../ReviewCard';

let wrapper;
beforeEach(() => {
  rtl.cleanup();
  wrapper = rtl.render(
    <ReviewCard text="this is a test company" name="test company" />
  );
});

describe('ReviewCard', () => {
  it('renders correctly', () => {
    expect(wrapper.baseElement).toMatchSnapshot();
  });
  it('renders the company name', () => {
    const CompanyName = wrapper.queryByText('Company Name: test company');
    expect(CompanyName).toBeInTheDocument();
  });
  it('renders the company text', () => {
    const CompanyText = wrapper.queryByText('this is a test company');
    expect(CompanyText).toBeInTheDocument();
  });
});
