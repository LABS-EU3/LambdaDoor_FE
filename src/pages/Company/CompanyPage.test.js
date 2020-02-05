import React from 'react';
import * as rtl from '@testing-library/react';
import { cleanup } from '@testing-library/react';

import CompanyPage from './CompanyPage';

// const historyMock = { push: jest.fn() };

jest.mock('./CompanyPage', () => () => (
  <div id="mockCompanyPage">mockCompanyPage</div>
));

const testCompanies = [
  {
    id: 5,
    name: 'DoNotPay Inc',
    description:
      'Fight corporations, beat bureaucracy and sue anyone at the press of a button.',
    website: 'https://donotpay.com',
    location: 'Portland, OR',
    type: 'Technology',
    logo: '',
    latitude: 31,
    longitude: -80,
    average_rating: '5.0000000000000000',
  },
  {
    id: 4,
    name: 'Bad Rabbit',
    description:
      'At Bad Rabbit, we make the systems you have work better for you.',
    website: 'https://www.badrabbit.com',
    location: 'Portland, OR',
    type: 'Technology',
    logo: '',
    latitude: 31,
    longitude: -80,
    average_rating: '5.0000000000000000',
  },
  {
    id: 10,
    name: 'Paystack',
    description:
      'Paystack helps businesses in Africa get paid by anyone, anywhere in the world',
    website: 'https://paystack.com/',
    location: 'Lagos, NG',
    type: 'FinTech',
    logo: '',
    latitude: 31,
    longitude: -80,
    average_rating: '4.0000000000000000',
  },
];

const testSalaries = {
  avgSalaries: [
    {
      interest_id: 2,
      interest: 'Front End',
      currency: 'USD',
      avg: 95000,
    },
    {
      interest_id: 4,
      interest: 'Full Stack',
      currency: 'USD',
      avg: 67500,
    },
  ],
};

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    id: '5',
  }),
}));

afterEach(cleanup);

describe('CompanyPage', () => {
  it('renders correctly', () => {
    expect(
      rtl.render(
        <CompanyPage companies={testCompanies} avgSalaries={testSalaries} />
      ).baseElement
    ).toMatchSnapshot();
  });
});
